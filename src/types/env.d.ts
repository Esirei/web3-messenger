declare module 'process' {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_APP_ID: string;
      NEXT_PUBLIC_SERVER_URL: string;
    }
  }
}
