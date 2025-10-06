import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de tratamiento de datos',
  description: 'Política de privacidad y tratamiento de datos personales.',
  alternates: {
    canonical: '/politica-de-privacidad'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
          <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Política de tratamiento de datos personales
          </h1>
          
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p><strong>Decorarte</strong></p>

            <h3>1. Responsable del tratamiento de datos</h3>
            <p>
              <strong>Razón Social:</strong> Decorarte<br />
              <strong>NIT:</strong> 1107.103.275-0<br />
              <strong>Domicilio legal:</strong> Calle 11 #9-69, Segundo Piso<br />
              <strong>Teléfono de contacto:</strong> 317 512 7548<br />
              <strong>Correo electrónico:</strong>{' '}
              <a href="mailto:decorarte2000.oficial.com@gmail.com">decorarte2000.oficial.com@gmail.com</a>
            </p>

            <h3>2. Finalidades del tratamiento</h3>
            <p>
              Los datos personales suministrados por clientes, usuarios y visitantes serán recolectados, almacenados, usados,
              circulados y suprimidos, de acuerdo con las siguientes finalidades:
            </p>
            <ul>
              <li>Gestionar pedidos, pagos, envíos y devoluciones.</li>
              <li>Contactar a los clientes para confirmar compras y coordinar entregas.</li>
              <li>
                Enviar información comercial, promocional y publicitaria sobre productos, servicios y eventos de <strong>Decorarte</strong>{' '}
                a través de <strong>correo electrónico, mensajes de texto, WhatsApp, llamadas, Facebook, Instagram y otras plataformas digitales</strong>.
              </li>
              <li>Realizar segmentación, análisis de comportamiento de compra y personalización de ofertas y anuncios.</li>
              <li>Atender solicitudes, consultas, quejas, reclamos y ejercer garantías.</li>
              <li>Cumplir obligaciones legales y contractuales.</li>
            </ul>

            <h3>3. Derechos de los titulares de datos</h3>
            <p>De acuerdo con la Ley 1581 de 2012, los titulares de los datos tienen derecho a:</p>
            <ul>
              <li>Conocer, actualizar y rectificar sus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
              <li>Ser informados sobre el uso que se ha dado a sus datos.</li>
              <li>
                Presentar quejas ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong> por infracciones.
              </li>
              <li>
                Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y
                garantías constitucionales.
              </li>
            </ul>

            <h3>4. Autorización</h3>
            <p>
              El titular autoriza de manera previa, expresa e informada a <strong>Decorarte</strong> para recolectar, almacenar y tratar sus
              datos personales conforme a las finalidades descritas. Esta autorización se entiende otorgada al aceptar los
              presentes términos en la página web, redes sociales, formularios físicos o electrónicos.
            </p>

            <h3>5. Medidas de seguridad</h3>
            <p>
              <strong>Decorarte</strong> implementa medidas técnicas, humanas y administrativas razonables para proteger la información
              personal contra acceso no autorizado, pérdida, alteración o divulgación indebida.
            </p>

            <h3>6. Transferencia y transmisión de datos</h3>
            <p>
              Los datos personales podrán ser compartidos con aliados estratégicos y proveedores de servicios tecnológicos (como
              plataformas de pago, transporte, logística, publicidad y marketing digital), dentro y fuera del país, únicamente
              para el cumplimiento de las finalidades aquí descritas.
            </p>

            <h3>7. Procedimiento para ejercer derechos</h3>
            <p>
              El titular podrá ejercer sus derechos de acceso, corrección, supresión, revocatoria o consulta enviando una
              solicitud a:
            </p>
            <ul>
              <li>
                Correo: <a href="mailto:decorarte2000.oficial.com@gmail.com">decorarte2000.oficial.com@gmail.com</a>
              </li>
              <li>Teléfono: 317 512 7548</li>
            </ul>
            <p>Las solicitudes serán atendidas en los términos y plazos establecidos por la Ley 1581 de 2012.</p>

            <h3>8. Vigencia de la política</h3>
            <p>
              La presente política entra en vigencia a partir de su publicación y permanecerá vigente hasta tanto se modifique
              expresamente.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}