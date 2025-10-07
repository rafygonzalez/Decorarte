import Link from 'next/link';

import { ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import FooterMenu from 'components/layout/footer-menu';
import Logo from 'components/logo';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <Logo size="sm" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-medium text-black dark:text-white relative pb-1 after:content-[''] after:block after:mt-1 after:h-0.5 after:w-8 after:bg-[var(--color-primary)]">Información de Contacto</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <MapPinIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-neutral-600 dark:text-neutral-400" />
              <div className="text-sm">
                <p>Calle 11 #9-69. 2do Piso</p>
                <p>al frente de la iglesia Santa Rosa</p>
                <p>Cali, Colombia</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
              <a 
                href="https://wa.me/573175127548" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                WhatsApp: 317-5127548
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                <span className="text-lg">📷</span>
              </div>
              <div className="text-sm">
                <a 
                  href="https://instagram.com/decogluefoil.oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-tertiary transition-colors block"
                >
                  @decogluefoil.oficial
                </a>
                <a 
                  href="https://instagram.com/decorarte2000.oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-tertiary transition-colors block"
                >
                  @decorarte2000.oficial
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-medium text-black dark:text-white relative pb-1 after:content-[''] after:block after:mt-1 after:h-0.5 after:w-8 after:bg-[var(--color-primary)]">Términos Legales</h3>
          <div className="flex flex-col gap-2">
            <Link 
              href="/terminos-y-condiciones"
              className="text-sm hover:text-black dark:hover:text-white transition-colors"
            >
              Términos y Condiciones
            </Link>
            <Link 
              href="/politica-de-privacidad"
              className="text-sm hover:text-black dark:hover:text-white transition-colors"
            >
              Política de tratamiento de datos
            </Link>
            <Link 
              href="/politicas-de-envio"
              className="text-sm hover:text-black dark:hover:text-white transition-colors"
            >
              Políticas de Envío
            </Link>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
