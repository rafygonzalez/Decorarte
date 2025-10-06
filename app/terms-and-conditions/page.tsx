import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso para nuestra tienda online.',
  alternates: {
    canonical: '/terminos-y-condiciones'
  }
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
          <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p><strong>Decorarte</strong></p>

            <h3>1. Identificación de la empresa</h3>
            <p>
              <strong>Razón Social:</strong> Decorarte<br />
              <strong>NIT:</strong> 1107.103.275-0<br />
              <strong>Domicilio legal:</strong> Calle 11 #9-69, Segundo Piso<br />
              <strong>Teléfono de contacto:</strong> 317 512 7548<br />
              <strong>Correo electrónico:</strong>{' '}
              <a href="mailto:decorarte2000.oficial.com@gmail.com">decorarte2000.oficial.com@gmail.com</a>
            </p>

            <h3>2. Aceptación de los términos</h3>
            <p>
              Al acceder, navegar y/o realizar una compra en la tienda virtual de <strong>Decorarte</strong>, el
              usuario reconoce haber leído, entendido y aceptado los presentes Términos y Condiciones.
            </p>

            <h3>3. Productos y precios</h3>
            <ul>
              <li>Todos los precios incluyen impuestos aplicables según la legislación vigente.</li>
              <li>Los precios pueden estar sujetos a cambios sin previo aviso, pero los pedidos ya confirmados mantendrán el valor pactado.</li>
            </ul>

            <h3>4. Envíos y entregas</h3>
            <ul>
              <li>Los envíos se realizan a través de la transportadora <strong>Coordinadora</strong>.</li>
              <li>El tiempo de entrega puede variar según la ciudad o municipio de destino.</li>
              <li>Las entregas se realizan bajo la modalidad <strong>contraentrega</strong>, es decir, el pago se efectúa al momento de recibir el pedido.</li>
            </ul>

            <h3>5. Intentos de entrega y devoluciones</h3>
            <ul>
              <li>La transportadora realizará hasta <strong>tres (3) intentos de entrega</strong>.</li>
              <li>En caso de que el pedido no pueda ser entregado después de dichos intentos, será devuelto a <strong>Decorarte</strong>.</li>
              <li>Los <strong>costos de devolución</strong> serán asumidos directamente por <strong>Decorarte</strong>.</li>
            </ul>

            <h3>6. Garantía de los productos</h3>
            <ul>
              <li><strong>Decorarte</strong> ofrece una <strong>garantía ilimitada</strong> sobre todos sus productos, siempre que se haga un uso adecuado de los mismos y no exista manipulación indebida, desgaste natural por uso inadecuado o daño intencional.</li>
              <li>Para hacer efectiva la garantía, el cliente deberá comunicarse a los datos de contacto oficiales y presentar la factura o comprobante de compra.</li>
            </ul>

            <h3>7. Derecho de retracto</h3>
            <p>
              De acuerdo con la normativa de comercio electrónico en Colombia, el cliente podrá ejercer su <strong>derecho de retracto</strong> dentro de los cinco (5) días hábiles siguientes a la entrega del producto, siempre que el mismo no haya sido usado y se encuentre en las mismas condiciones en que fue recibido.
            </p>

            <h3>8. Propiedad intelectual</h3>
            <ul>
              <li>Todo el contenido de este sitio web, incluyendo imágenes, textos, diseños y logotipos, es propiedad exclusiva de <strong>Decorarte</strong>.</li>
              <li>Se <strong>prohíbe la reproducción, distribución o uso no autorizado</strong> de dicho material para fines comerciales o personales sin consentimiento expreso y por escrito de <strong>Decorarte</strong>.</li>
            </ul>

            <h3>9. Responsabilidad</h3>
            <ul>
              <li><strong>Decorarte</strong> no se hace responsable por demoras atribuibles a causas de fuerza mayor o situaciones ajenas a su control, como problemas logísticos de la transportadora, fenómenos naturales o disposiciones gubernamentales.</li>
            </ul>

            <h3>10. Modificación de los términos</h3>
            <p>
              <strong>Decorarte</strong> se reserva el derecho de modificar en cualquier momento estos Términos y Condiciones. Las modificaciones entrarán en vigor desde su publicación en este sitio web.
            </p>

            <h3>11. Ley aplicable y jurisdicción</h3>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta ante los jueces y tribunales competentes del domicilio legal de <strong>Decorarte</strong>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}