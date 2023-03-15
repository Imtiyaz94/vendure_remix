export {};

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: string;
      COOKIE_SECRET: string;
      SUPERADMIN_USERNAME: string;
      SUPERADMIN_PASSWORD: string;
      DB_HOST: string;
      DB_PORT: number;
      DB_NAME: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_WEBHOOK_KEY: string;
      GMAIL_HOST: string;
      GMAIL_PORT: number;
      GMAIL_USER: string;
      GMAIL_PASS: string;
      GMAIL_FROM_ADDRESS: string;
    }
  }
}
