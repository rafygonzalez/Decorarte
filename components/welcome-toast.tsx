'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🎈 ¡Bienvenido a Decorarte!', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            Sin complicaciones, navega, elige y nosotros nos encargamos del envío hasta tu hogar. 
            ¡Comienza a transformar tus espacios! ✨
          </>
        )
      });
    }
  }, []);

  return null;
}
