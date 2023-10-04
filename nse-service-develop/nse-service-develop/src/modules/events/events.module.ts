import { Module } from '@nestjs/common';
import MongoPaging from 'mongoose-paginate-v2';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Events, EventsSchema } from './entities/event.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Events.name,
        useFactory: () => {
          const schema = EventsSchema;
          schema.plugin(MongoPaging);
          return schema;
        },
      },
    ]),
    ConfigModule,
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
