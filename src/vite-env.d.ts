/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
  readonly NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}