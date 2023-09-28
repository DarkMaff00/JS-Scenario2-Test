declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URL: string;
      SALESFORCE_USERNAME: string;
      SALESFORCE_PASSWORD: string;
    }
  }
}
export {};
