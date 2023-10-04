import { ConfigService } from '@nestjs/config';
import { extractEmail } from 'src/utils/helper';
export const webhookProvidersAdaptor = (
  body: any,
  configService: ConfigService,
  provider: string,
  {
    isDelivered,
    isBounced,
    isDropped,
    isFailed,
    isDeferred,
    isSpammed,
  }: Record<string, boolean>,
) => {
  const eventTypes = [];

  // added sendgrid, socketlabs, sendinble, mailgun, mandrill *partially
  isDelivered && eventTypes.push('Delivered', 'delivered');
  isBounced && eventTypes.push('bounce', 'soft_bounce', 'hard_bounce');
  isDropped && eventTypes.push('dropped');
  isFailed && eventTypes.push('Failed', 'failed', 'reject');
  isDeferred && eventTypes.push('Deferred', 'deferred', 'deferral');
  isSpammed && eventTypes.push('Complaint', 'spamreport', 'spam', 'complained');

  if (eventTypes.length < 1) {
    return { events: [], isValid: false };
  }

  if (provider === configService.get('providers.SENDGRID_ID')) {
    try {
      const SGevents = body
        .filter((evt) => eventTypes.includes(evt.event))
        .map((evt) => {
          const [id] = evt.sg_message_id.split('.filter');

          return {
            recipient: extractEmail(evt.email),
            status: evt.event === 'spamreport' ? 'SPAM' : evt.event,
            bounceDetailLong: evt.event === 'bounce' ? evt.reason : '',
            referenceId: id,
            emailProvider: configService.get('providers.SENDGRID_ID'),
            error:
              (evt.event === 'bounce' ||
                evt.event === 'dropped' ||
                evt.event === 'deferred') &&
              `${evt?.reason ? evt.reason + ', ' : ''}${
                evt?.response ? evt.response : ''
              }`,
          };
        });
      return { events: SGevents, isValid: body[0]?.sg_event_id ? true : false };
    } catch (error) {
      return { events: [], isValid: false };
    }
  } else if (provider === configService.get('providers.SOCKETLABS_ID')) {
    if (!eventTypes.includes(body.Type)) return { events: [], isValid: false };
    try {
      const events = [
        {
          sender: body?.FromAddress || '',
          recipient: body?.Address || '',
          subject: body?.Subject || '',
          status: body.Type === 'Complaint' ? 'SPAM' : body.Type,
          emailProvider: configService.get('providers.SOCKETLABS_ID'),
          referenceId: body?.MessageId || '',
          bounceDetailLong: body.Type === 'Deferred' && body.Reason,
          error: body.Type === 'Failed' && body.Reason,
        },
      ];
      return { events, isValid: true };
    } catch (error) {
      return { events: [], isValid: false };
    }
  } else if (provider === configService.get('providers.MANDRILL_ID')) {
    try {
      const data = JSON.parse(body.mandrill_events);
      const extractToggledEvents = data.filter((events) =>
        eventTypes.includes(events.event),
      );
      const mandrillEventType = extractToggledEvents?.[0]?.event || '';
      if (!eventTypes.includes(mandrillEventType))
        return { events: [], isValid: false };
      const events = extractToggledEvents.map((event) => {
        const formattedEvent = {
          sender: event?.msg?.sender || event?.entry?.email || '',
          recipient: event?.msg?.email || '',
          subject: event?.msg?.subject || '',
          status: ['soft_bounce', 'hard_bounce'].includes(event.event)
            ? 'bounce'
            : event.event === 'reject'
            ? 'FAILED'
            : event?.event || event?.type || '',
          referenceId: event?._id || '',
          bounceDetailShort:
            (['soft_bounce', 'hard_bounce'].includes(event.event) &&
              event?.msg?.bounce_description) ||
            '',
          bounceDetailLong:
            (['soft_bounce', 'hard_bounce'].includes(event.event) &&
              event?.msg?.diag) ||
            '',
          error: ['reject', 'deferral'].includes(event.event)
            ? event?.msg?.diag || event?.msg?.smtp_events?.[0]?.diag || ''
            : '',
          emailProvider: configService.get('providers.MANDRILL_ID'),
        };
        return formattedEvent;
      });
      return { events, isValid: extractToggledEvents[0]?._id ? true : false };
    } catch (error) {
      return { events: [], isValid: false };
    }
  } else if (provider === configService.get('providers.MAILGUN_ID')) {
    try {
      const data = body['event-data'];
      if (!eventTypes.includes(data.event))
        return { events: [], isValid: false };
      const events = [
        {
          sender: extractEmail(data?.message?.headers?.from) || '',
          recipient: extractEmail(data?.message?.headers?.to) || '',
          subject: data?.message?.headers?.subject || '',
          status: data?.event === 'complained' ? 'SPAM' : data?.event || '',
          referenceId: data?.message?.headers['message-id'] || '',
          error: data?.reason || '',
          emailProvider: configService.get('providers.MAILGUN_ID'),
        },
      ];
      return { events, isValid: data.id ? true : false };
    } catch (error) {
      return { events: [], isValid: false };
    }
  } else if (provider === configService.get('providers.SENDINBLUE_ID')) {
    if (!eventTypes.includes(body?.event))
      return { events: [], isValid: false };
    try {
      const events = [
        {
          sender: '',
          recipient: body?.email || '',
          subject: body?.subject || '',
          status: ['soft_bounce', 'hard_bounce'].includes(body?.event)
            ? 'bounce'
            : body?.event || '',
          referenceId: body['message-id'] || '',
          emailProvider: configService.get('providers.SENDINBLUE_ID'),
          bounceDetailLong: ['soft_bounce', 'hard_bounce'].includes(body?.event)
            ? body?.event
            : '',
        },
      ];
      return { events, isValid: body?.id ? true : false };
    } catch (error) {
      return { events: [], isValid: false };
    }
  }
};
