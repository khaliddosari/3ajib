import { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice?: { url: string };
          assistant?: { stylesheet?: string };
        }) => void;
        open: () => void;
        close: () => void;
      };
    };
  }
}

const VoiceflowChat = () => {
  useEffect(() => {
    // Load Voiceflow widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: import.meta.env.VITE_VOICEFLOW_PROJECT_ID },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: 'https://runtime-api.voiceflow.com'
          },
          assistant: {
            stylesheet: `
              .vfrc-launcher { background-color: #0cc889 !important; }
              .vfrc-chat--button { background-color: #0cc889 !important; }
              .vfrc-message--primary { background-color: #0cc889 !important; }
            `
          }
        });
      }
    };

    // Find first script tag and insert before it
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup
      script.remove();
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default VoiceflowChat;
