export default () => ({
  port: parseInt(process.env.PORT,10) || 8000,
  database: {
    mongouri: process.env.MONGODB_URL,
  },
  cognito: {
    COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
    COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
    COGNITO_REGION: process.env.COGNITO_REGION,
  },
  sns: {
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  },
  provider: {
    SECRET: process.env.PROVIDER_DETAILS_SECRET,
  },
  sqs: {
    SEND_EMAIL_PRODUCER_URL: process.env.SEND_EMAIL_PRODUCER_URL,
  },
  nse: {
    NSE_SECRET_KEY: process.env.NSE_SECRET_KEY,
  },
  providers: {
    SENDGRID_ID: process.env.SENDGRID_ID,
    MANDRILL_ID: process.env.MANDRILL_ID,
    MAILSLURP_ID: process.env.MAILSLURP_ID,
    SOCKETLABS_ID: process.env.SOCKETLABS_ID,
    OFFICE365_ID: process.env.OFFICE365_ID,
    MAILGUN_ID: process.env.MAILGUN_ID,
    SENDINBLUE_ID: process.env.SENDINBLUE_ID,
  },
});
