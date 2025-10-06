import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Políticas de Envío',
  description: 'Información sobre nuestras políticas de envío y entrega.',
  alternates: {
    canonical: '/politicas-de-envio'
  }
};

export default function ShippingPoliciesPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
          <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Políticas de Envío
          </h1>
          
          <div className="prose prose-neutral max-w-none dark:prose-invert">

            <h3>1. Empresa transportadora aliada</h3>
            <p>
              <strong>Decorarte</strong> realiza todos sus envíos en Colombia a través de la empresa transportadora
              <strong> Coordinadora Mercantil S.A.</strong>, en virtud de un acuerdo comercial.
            </p>

            <h3>2. Cobertura</h3>
            <p>
              Las entregas se realizan a nivel nacional en las zonas habilitadas por <strong>Coordinadora</strong>. En caso de que la
              dirección indicada por el cliente no cuente con cobertura, <strong>Decorarte</strong> informará oportunamente y coordinará
              una alternativa.
            </p>

            <h3>3. Tiempos de entrega</h3>
            <ul>
              <li>El tiempo estimado de entrega es de <strong>[2-3 Días Hábiles]</strong>, dependiendo de la ciudad de destino.</li>
              <li>Los tiempos pueden variar por causas de fuerza mayor, situaciones logísticas o de orden público ajenas a <strong>Decorarte</strong>.</li>
            </ul>

            <h3>4. Modalidad de pago contra entrega</h3>
            <ul>
              <li>Todas las compras se envían bajo la modalidad <strong>contra entrega</strong>.</li>
              <li>El cliente deberá cancelar el valor total de la compra al recibir el pedido, directamente al personal autorizado de <strong>Coordinadora</strong>.</li>
            </ul>

            <h3>5. Costos de envío</h3>
            <ul>
              <li>El costo del envío será informado al cliente al momento de la compra.</li>
              <li>En promociones o campañas específicas, <strong>Decorarte</strong> podrá asumir el costo total o parcial del envío.</li>
            </ul>

            <h3>6. Intentos de entrega y devoluciones</h3>
            <ul>
              <li><strong>Coordinadora</strong> realizará hasta <strong>tres (3) intentos de entrega</strong> en la dirección indicada.</li>
              <li>Si después de estos intentos no es posible entregar el pedido, este será devuelto a <strong>Decorarte</strong>.</li>
              <li>Los <strong>costos de devolución</strong> serán asumidos por <strong>Decorarte</strong>.</li>
            </ul>

            <h3>7. Seguimiento del pedido</h3>
            <p>
              Una vez despachado el pedido, el cliente recibirá un número de guía para hacer el seguimiento directamente en la
              página oficial de <strong>Coordinadora</strong>.
            </p>

            <h3>8. Responsabilidad sobre el transporte</h3>
            <ul>
              <li>La responsabilidad de <strong>Decorarte</strong> se limita al adecuado embalaje, entrega oportuna del pedido a la transportadora y la gestión de reclamaciones.</li>
              <li>Una vez entregado el pedido a <strong>Coordinadora</strong>, la responsabilidad del transporte, estado y tiempos de entrega corresponde a la transportadora.</li>
              <li>Sin embargo, <strong>Decorarte</strong> brindará acompañamiento al cliente en caso de retrasos, pérdidas o daños durante el transporte.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}