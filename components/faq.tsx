// New FAQ component implementing accordion grouped by categories
'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqs: FAQCategory[] = [
  {
    title: 'Sobre DecoGlue',
    items: [
      {
        question: '¿Cuál es la duración del DecoGlue Foil?',
        answer: (
          <p>
            DecoGlue Foil es un producto altamente rendidor. Siguiendo nuestras recomendaciones de uso y cuidado, un solo frasco
            puede rendirte hasta para 6 estructuras de globos de aproximadamente 1&nbsp;m² cada una. ¡Economía y eficiencia en un
            solo producto!
          </p>
        )
      },
      {
        question: '¿Cuál es la cantidad del DecoGlue Foil?',
        answer: <p>Cada frasco contiene 15&nbsp;ml de producto.</p>
      },
      {
        question: '¿Existe una presentación más grande del DecoGlue Foil?',
        answer: (
          <p>
            Por su alta efectividad y rápida acción, DecoGlue se maneja únicamente en presentación pequeña. Esto evita que el
            producto se seque con el tiempo. ¡Pero no te preocupes! Cuantas más unidades compres, mejores precios obtendrás, y
            podrás mantener tu stock fresco y listo para usar.
          </p>
        )
      },
      {
        question: '¿Puedo aplicar DecoGlue en globos metalizados?',
        answer: (
          <p>
            ¡Claro que sí! DecoGlue fue especialmente formulado para globos metalizados. Sin embargo, su fórmula es tan potente
            que también funciona en globos de látex y una gran variedad de superficies y materiales.
          </p>
        )
      },
      {
        question: '¿Puedo usar DecoGlue en decoraciones al aire libre?',
        answer: (
          <p>
            Sí, el producto mantiene su rendimiento tanto en interiores como en exteriores, sin verse afectado por el clima o las
            condiciones del entorno. DecoGlue está diseñado para ofrecer resistencia y durabilidad en cualquier espacio.
          </p>
        )
      },
      {
        question: '¿Qué temperatura es adecuada para conservar el pegamento?',
        answer: (
          <p>
            La temperatura no afecta el rendimiento del producto. Lo más importante es no dejar el frasco destapado por más de
            2&nbsp;minutos y mantenerlo limpio y cerrado correctamente.
          </p>
        )
      }
    ]
  },
  {
    title: 'Uso y Aplicación',
    items: [
      {
        question: '¿Cuánto tiempo debo esperar para que seque?',
        answer: (
          <div className="space-y-2">
            <p>¡No necesitas esperar a que se seque! El secreto del DecoGlue está en su aplicación:</p>
            <ol className="list-decimal pl-4">
              <li>Aplica una capa uniforme en la zona a pegar, asegurándote de que el adhesivo esté húmedo.</li>
              <li>
                Esparce con la brocha hasta sentir que empieza a ofrecer un poco de resistencia (ligeramente "pegajosa") y que se
                ve semi-seco.
              </li>
              <li>Ese es el momento ideal para unir las piezas. El resultado es instantáneo y firme.</li>
            </ol>
          </div>
        )
      },
      {
        question: 'El pegamento se seca muy rápido, ¿qué puedo hacer?',
        answer: (
          <div className="space-y-2">
            <p>
              DecoGlue es de secado rápido por diseño. Para evitar que se seque antes de tiempo trabaja en zonas pequeñas y aplica
              el adhesivo inmediatamente.
            </p>
            <p>
              Para proyectos grandes, recomendamos aplicarlo por partes o trabajar con rapidez para obtener los mejores
              resultados.
            </p>
            <p className="font-semibold">Cuidados esenciales:</p>
            <ol className="list-decimal pl-4 space-y-1">
              <li>
                <span className="font-semibold">Limpieza adecuada después de cada uso:</span> aplica diluyente (Barsol) en una
                toallita y limpia boquilla y brocha.
              </li>
              <li>
                <span className="font-semibold">Cierra bien el frasco:</span> evita dejarlo destapado más de 2&nbsp;minutos para que
                el aire no espese el producto.
              </li>
            </ol>
          </div>
        )
      }
    ]
  },
  {
    title: 'Compras y Envíos',
    items: [
      {
        question: '¿Puedo comprar DecoGlue al por mayor?',
        answer: (
          <p>
            Sí, contamos con ventas al por mayor y distribución. Para más información, comunícate directamente con nuestra línea
            de atención de fábrica: <strong>📞 310&nbsp;696&nbsp;4159</strong>.
          </p>
        )
      },
      {
        question: '¿Hacen envíos internacionales?',
        answer: <p>¡Sí! Realizamos envíos a todas partes del mundo. Donde estés, DecoGlue puede llegar hasta ti.</p>
      },
      {
        question: 'Vivo fuera del país, ¿puedo adquirir el producto?',
        answer: <p>¡Claro! Enviamos a cualquier país. Haz tu pedido desde el extranjero y recibe nuestros productos en tu domicilio.</p>
      }
    ]
  },
  {
    title: 'Materiales compatibles',
    items: [
      {
        question: '¿Funciona en otros materiales como acrílico?',
        answer: (
          <p>
            Absolutamente. DecoGlue es tan potente que puede adherirse a materiales como acrílico, plástico, cartón, tela y más.
            Ideal para trabajos creativos y decorativos de todo tipo.
          </p>
        )
      }
    ]
  }
];

function FAQCategory({ title, items }: FAQCategory) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{title}</h2>
      <div className="space-y-2">
        {items.map((faq) => (
          <Disclosure key={faq.question}>
            {({ open }) => (
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-700">
                <Disclosure.Button className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-neutral-900 hover:bg-neutral-50 dark:text-neutral-100 dark:hover:bg-neutral-800">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={clsx('h-5 w-5 transform transition-transform text-[var(--color-primary)]', open ? 'rotate-180' : '')}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pb-4 pt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {faq.answer}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}

export default function FAQ() {
  return (
    <div className="mx-auto my-16 max-w-4xl px-4">
      <h1 className="mb-6 text-3xl font-extrabold text-center text-[var(--color-primary)]">
        Preguntas Frecuentes
      </h1>
      {faqs.map((cat) => (
        <FAQCategory key={cat.title} {...cat} />
      ))}
    </div>
  );
}
