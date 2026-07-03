import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Alma Media',
  description: 'Términos y condiciones de uso del sitio web almamedia.cl y contratación de servicios de marketing digital.',
  robots: 'noindex, follow',
};

export default function TerminosPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Términos y Condiciones</span>
        </div>

        <article className="relative z-10 py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Términos y Condiciones
          </h1>

          <p className="text-lg text-[var(--color-muted)] mb-8">
            Última actualización: 3 de julio de 2026
          </p>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">1. Aceptación de los Términos</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Bienvenido a Alma Media. Al acceder y utilizar este sitio web (almamedia.cl), aceptas estar sujeto a estos Términos y Condiciones de Uso, todas las leyes y regulaciones aplicables en Chile, y aceptas que eres responsable del cumplimiento de las leyes locales aplicables. Si no estás de acuerdo con alguno de estos términos, te prohibimos utilizar o acceder a este sitio.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">2. Definiciones</h2>

            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li><strong>"Nosotros", "nuestro", "la empresa":</strong> Se refiere a Alma Media</li>
              <li><strong>"Tú", "usuario", "cliente":</strong> Se refiere a la persona o entidad que accede o utiliza nuestros servicios</li>
              <li><strong>"Sitio":</strong> Se refiere al sitio web almamedia.cl y todos sus subdominios</li>
              <li><strong>"Servicios":</strong> Se refiere a todos los servicios de marketing digital ofrecidos por Alma Media</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">3. Uso del Sitio Web</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">3.1 Licencia de Uso</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Se te concede una licencia limitada, no exclusiva, no transferible y revocable para acceder y hacer uso personal del sitio web. Esta licencia no incluye: (a) ningún derecho de reventa o uso comercial del sitio o su contenido; (b) la recopilación y uso de listados de productos, descripciones o precios; (c) cualquier uso derivado del sitio o su contenido; (d) cualquier descarga o copia de información de cuenta para el beneficio de otra entidad; o (e) cualquier uso de herramientas de minería de datos, robots o herramientas similares de recopilación y extracción de datos.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">3.2 Restricciones de Uso</h3>
            <p className="text-lg leading-[1.8] text-justify mb-4">
              Al utilizar este sitio, te comprometes a NO:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li>Utilizar el sitio para cualquier propósito ilegal o no autorizado</li>
              <li>Intentar obtener acceso no autorizado a cualquier parte del sitio</li>
              <li>Interferir o interrumpir el funcionamiento del sitio</li>
              <li>Transmitir virus, malware o cualquier código malicioso</li>
              <li>Copiar, reproducir o distribuir contenido del sitio sin autorización expresa</li>
              <li>Hacerse pasar por otra persona o entidad</li>
              <li>Recopilar información de otros usuarios sin su consentimiento</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">4. Servicios Ofrecidos</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">4.1 Descripción de Servicios</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Alma Media ofrece servicios de marketing digital que pueden incluir, pero no se limitan a: diseño y desarrollo web, posicionamiento SEO, gestión de redes sociales, fotografía y video de producto, campañas publicitarias digitales, y consultoría de marketing digital. Las especificaciones exactas de cada servicio se detallan en la propuesta comercial o contrato específico.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">4.2 Cotizaciones y Propuestas</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Todas las cotizaciones y propuestas comerciales tienen una validez de 30 días desde su emisión, salvo que se indique lo contrario. Los precios están expresados en pesos chilenos (CLP) y no incluyen IVA a menos que se especifique lo contrario. Nos reservamos el derecho de modificar nuestros precios en cualquier momento, aunque los precios acordados en contratos vigentes se mantendrán según lo pactado.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">4.3 Contratación de Servicios</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              La contratación de servicios se formaliza mediante la firma de una propuesta comercial o contrato específico. Al contratar nuestros servicios, el cliente acepta los términos específicos del servicio, incluyendo alcance, plazos, entregables y condiciones de pago. Cualquier modificación al alcance acordado podrá generar costos adicionales y/o extensión de plazos.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">5. Condiciones Comerciales</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">5.1 Formas de Pago</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Aceptamos pagos mediante transferencia bancaria, depósito bancario y otros medios de pago acordados. Salvo acuerdo específico, los servicios requieren un pago inicial del 50% al momento de la contratación y el 50% restante contra entrega. Los servicios mensuales recurrentes (SEO, gestión de redes sociales, etc.) se facturan mensualmente por adelantado.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">5.2 Plazos de Pago</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Las facturas deben ser pagadas dentro de los plazos acordados en el contrato. El incumplimiento en los pagos puede resultar en la suspensión de los servicios hasta que se regularice la situación. Los pagos atrasados pueden generar intereses moratorios según la tasa máxima convencional permitida por ley en Chile.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">5.3 Política de Reembolsos</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Los pagos iniciales no son reembolsables una vez que el trabajo ha comenzado. En caso de cancelación del servicio por parte del cliente, se cobrará el trabajo realizado hasta la fecha de cancelación más los costos no recuperables incurridos. Para servicios mensuales, las cancelaciones deben notificarse con al menos 30 días de anticipación.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">6. Obligaciones del Cliente</h2>

            <p className="text-lg leading-[1.8] text-justify mb-4">
              El cliente se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li>Proporcionar información precisa, completa y actualizada</li>
              <li>Suministrar materiales necesarios (contenido, imágenes, accesos) en tiempo y forma</li>
              <li>Revisar y aprobar entregables dentro de los plazos acordados</li>
              <li>Realizar los pagos según lo pactado</li>
              <li>Notificar cambios o modificaciones por escrito</li>
              <li>Respetar los derechos de propiedad intelectual de terceros</li>
            </ul>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Los retrasos en la entrega de información o materiales por parte del cliente pueden resultar en la extensión proporcional de los plazos de entrega acordados.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">7. Propiedad Intelectual</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">7.1 Contenido del Sitio</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Todo el contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Alma Media o de sus proveedores de contenido y está protegido por las leyes chilenas e internacionales de derechos de autor y propiedad intelectual.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">7.2 Trabajos Realizados</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Una vez completado el pago total del proyecto, el cliente adquiere los derechos de uso del trabajo final entregado para los fines acordados. Alma Media retiene el derecho de utilizar el trabajo realizado en su portafolio, casos de estudio y materiales de marketing, salvo acuerdo de confidencialidad específico. Los archivos fuente, códigos y materiales de trabajo pueden ser entregados contra pago adicional según lo acordado.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">8. Garantías y Limitación de Responsabilidad</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">8.1 Garantías</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Garantizamos que nuestros servicios se prestarán con el nivel de habilidad, cuidado y diligencia razonablemente esperado de profesionales competentes en la industria del marketing digital. Sin embargo, no garantizamos resultados específicos de marketing o ventas, ya que estos dependen de múltiples factores fuera de nuestro control.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">8.2 Limitación de Responsabilidad</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              En ningún caso Alma Media será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, ingresos, datos o uso, ya sea en una acción contractual, agravio u otra teoría legal, que surjan de o estén relacionados con el uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por el cliente por los servicios específicos que dieron origen al reclamo.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">8.3 Exclusiones</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              No somos responsables por: (a) errores o retrasos causados por información incompleta o incorrecta proporcionada por el cliente; (b) cambios en algoritmos, políticas o términos de servicio de plataformas terceras (Google, Facebook, etc.); (c) acciones de terceros, incluyendo competidores o hackers; (d) fallas técnicas o interrupciones de servicios de proveedores externos.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">9. Confidencialidad</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Alma Media se compromete a mantener la confidencialidad de toda información comercial, técnica y estratégica del cliente a la que tenga acceso durante la prestación de servicios. Esta obligación permanecerá vigente durante la relación comercial y por un período de 2 años después de su terminación, salvo que la información sea de dominio público o deba ser revelada por orden judicial o requerimiento legal.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">10. Terminación del Servicio</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">10.1 Terminación por el Cliente</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              El cliente puede terminar los servicios mensuales recurrentes notificando por escrito con 30 días de anticipación. Para proyectos específicos, la terminación anticipada está sujeta al pago del trabajo realizado más los costos no recuperables incurridos y una penalización del 30% del saldo pendiente del proyecto.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">10.2 Terminación por Alma Media</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Nos reservamos el derecho de terminar o suspender servicios inmediatamente si: (a) el cliente incumple con los pagos acordados; (b) el cliente viola estos términos y condiciones; (c) el cliente proporciona información falsa o engañosa; (d) detectamos actividades fraudulentas o ilegales. En caso de terminación justificada, no habrá reembolso de pagos realizados.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">11. Modificaciones</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web. El uso continuado del sitio después de la publicación de cambios constituye tu aceptación de dichos cambios. Te recomendamos revisar estos términos periódicamente.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">12. Ley Aplicable y Jurisdicción</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Estos Términos y Condiciones se rigen por las leyes de la República de Chile. Cualquier disputa relacionada con estos términos o con los servicios prestados será sometida a la jurisdicción exclusiva de los tribunales ordinarios de justicia de la ciudad de Concepción, Chile, renunciando las partes a cualquier otro fuero que pudiere corresponderles.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">13. Resolución de Disputas</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              En caso de surgir cualquier controversia o desacuerdo relacionado con estos términos o los servicios prestados, las partes se comprometen a intentar resolver la disputa de manera amistosa mediante negociación directa durante un período de 30 días antes de iniciar cualquier acción legal. Si la disputa no puede resolverse amistosamente, se someterá a los tribunales competentes según lo establecido en la cláusula anterior.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">14. Disposiciones Generales</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">14.1 Separabilidad</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Si alguna disposición de estos Términos y Condiciones se considera inválida o inaplicable, dicha disposición se modificará e interpretará para lograr los objetivos de dicha disposición en la mayor medida posible según la ley aplicable, y las disposiciones restantes continuarán en pleno vigor y efecto.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">14.2 Acuerdo Completo</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Estos Términos y Condiciones, junto con nuestra Política de Privacidad y cualquier contrato específico de servicios, constituyen el acuerdo completo entre tú y Alma Media con respecto al uso del sitio web y la contratación de servicios, y reemplazan todos los acuerdos anteriores y contemporáneos, comunicaciones y propuestas, ya sean orales o escritas.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">14.3 Renuncia</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              La falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos y Condiciones no constituirá una renuncia a dicho derecho o disposición.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">15. Contacto</h2>

            <p className="text-lg leading-[1.8] text-justify mb-4">
              Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos:
            </p>

            <div className="bg-[var(--color-card)] border border-[var(--color-accent)] rounded-xl p-6 mb-8 not-prose">
              <p className="mb-2"><strong>Alma Media</strong></p>
              <p className="mb-2"><strong>Email:</strong> contacto@almamedia.cl</p>
              <p className="mb-2"><strong>Dirección:</strong> Concepción, Región del Biobío, Chile</p>
              <p><strong>Sitio web:</strong> <Link href="/" className="text-[var(--color-accent)] hover:underline">almamedia.cl</Link></p>
            </div>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mt-12 not-prose">
              <p className="text-sm text-[var(--color-muted)]">
                Al utilizar este sitio web y/o contratar nuestros servicios, confirmas que has leído, entendido y aceptado estos Términos y Condiciones en su totalidad.
              </p>
            </div>

          </div>

        </article>
      </div>
    </>
  );
}
