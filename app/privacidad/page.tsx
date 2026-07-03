import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Alma Media',
  description: 'Política de privacidad de Alma Media. Conoce cómo protegemos y tratamos tus datos personales según la Ley 19.628 de Chile.',
  robots: 'noindex, follow',
};

export default function PrivacidadPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Política de Privacidad</span>
        </div>

        <article className="relative z-10 py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Política de Privacidad
          </h1>

          <p className="text-lg text-[var(--color-muted)] mb-8">
            Última actualización: 3 de julio de 2026
          </p>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">1. Información General</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Alma Media (en adelante "nosotros", "nuestro" o "la empresa") se compromete a proteger la privacidad de los usuarios de nuestro sitio web almamedia.cl (en adelante "el sitio"). Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal de acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">2. Responsable del Tratamiento de Datos</h2>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-6 not-prose">
              <p className="mb-2"><strong>Razón Social:</strong> Alma Media</p>
              <p className="mb-2"><strong>Domicilio:</strong> Concepción, Región del Biobío, Chile</p>
              <p className="mb-2"><strong>Email de contacto:</strong> contacto@almamedia.cl</p>
              <p><strong>Sitio web:</strong> almamedia.cl</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">3. Información que Recopilamos</h2>

            <h3 className="text-xl font-bold mb-3 mt-6">3.1 Información Proporcionada Directamente</h3>
            <p className="text-lg leading-[1.8] text-justify mb-4">
              Recopilamos información que nos proporcionas voluntariamente cuando:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li>Completas formularios de contacto o cotización</li>
              <li>Te suscribes a nuestro newsletter</li>
              <li>Solicitas información sobre nuestros servicios</li>
              <li>Nos contactas por email, teléfono o WhatsApp</li>
            </ul>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Esta información puede incluir: nombre completo, correo electrónico, número de teléfono, nombre de la empresa, tipo de servicio requerido, y cualquier otra información que decidas compartir en tus comunicaciones con nosotros.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">3.2 Información Recopilada Automáticamente</h3>
            <p className="text-lg leading-[1.8] text-justify mb-4">
              Cuando visitas nuestro sitio, recopilamos automáticamente cierta información técnica:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li>Dirección IP</li>
              <li>Tipo de navegador y sistema operativo</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Fuente de referencia (cómo llegaste a nuestro sitio)</li>
              <li>Dispositivo utilizado (desktop, móvil, tablet)</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">3.3 Cookies y Tecnologías Similares</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">4. Cómo Utilizamos tu Información</h2>

            <p className="text-lg leading-[1.8] text-justify mb-4">
              Utilizamos la información recopilada para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li>Responder a tus consultas y solicitudes de cotización</li>
              <li>Proporcionarte información sobre nuestros servicios</li>
              <li>Enviarte comunicaciones de marketing (solo si has dado tu consentimiento)</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Analizar el uso del sitio mediante herramientas analíticas (Google Analytics)</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Prevenir fraudes y garantizar la seguridad del sitio</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">5. Base Legal para el Tratamiento</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              El tratamiento de tus datos personales se basa en las siguientes bases legales según la legislación chilena:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li><strong>Consentimiento:</strong> Al proporcionar tus datos a través de nuestros formularios, consientes expresamente su tratamiento</li>
              <li><strong>Ejecución de contrato:</strong> Para gestionar y ejecutar los servicios contratados</li>
              <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicaciones comerciales</li>
              <li><strong>Cumplimiento legal:</strong> Para cumplir con obligaciones legales aplicables</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">6. Compartir Información con Terceros</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales. Podemos compartir tu información únicamente en las siguientes circunstancias:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro sitio (hosting, email marketing, analytics). Estos proveedores están obligados contractualmente a proteger tu información</li>
              <li><strong>Obligaciones legales:</strong> Cuando sea requerido por ley, orden judicial o autoridad competente</li>
              <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad, o los de nuestros usuarios</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">7. Seguridad de la Información</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li>Encriptación SSL/HTTPS en todas las comunicaciones</li>
              <li>Acceso restringido a datos personales solo al personal autorizado</li>
              <li>Servidores seguros con copias de seguridad regulares</li>
              <li>Monitoreo continuo de vulnerabilidades de seguridad</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">8. Tus Derechos</h2>

            <p className="text-lg leading-[1.8] text-justify mb-4">
              De acuerdo con la Ley N° 19.628, tienes los siguientes derechos sobre tus datos personales:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre ti</li>
              <li><strong>Derecho de rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
              <li><strong>Derecho de cancelación:</strong> Solicitar la eliminación de tus datos personales</li>
              <li><strong>Derecho de oposición:</strong> Oponerte al tratamiento de tus datos para fines específicos</li>
              <li><strong>Derecho de portabilidad:</strong> Recibir una copia de tus datos en formato estructurado</li>
            </ul>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Para ejercer cualquiera de estos derechos, contáctanos en <strong>contacto@almamedia.cl</strong>. Responderemos a tu solicitud dentro de los 30 días hábiles establecidos por ley.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">9. Retención de Datos</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Conservamos tu información personal durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Los criterios para determinar el período de retención incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li>La duración de nuestra relación comercial contigo</li>
              <li>Obligaciones legales de conservación de registros</li>
              <li>Plazos de prescripción aplicables</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">10. Marketing por Email</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Solo te enviaremos comunicaciones de marketing si has dado tu consentimiento explícito. Puedes darte de baja de nuestras comunicaciones en cualquier momento haciendo clic en el enlace "Cancelar suscripción" incluido en todos nuestros emails, o contactándonos directamente.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">11. Enlaces a Sitios de Terceros</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Te recomendamos leer las políticas de privacidad de cada sitio que visites.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">12. Menores de Edad</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado información de un menor sin el consentimiento de los padres, eliminaremos esa información de inmediato.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">13. Cambios a esta Política</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o por motivos legales. Te notificaremos sobre cambios significativos publicando la nueva política en esta página con una fecha de "última actualización" revisada. Te recomendamos revisar esta política periódicamente.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 text-[var(--color-accent)]">14. Contacto</h2>

            <p className="text-lg leading-[1.8] text-justify mb-4">
              Si tienes preguntas, comentarios o inquietudes sobre esta Política de Privacidad o sobre cómo tratamos tu información personal, puedes contactarnos:
            </p>

            <div className="bg-[var(--color-card)] border border-[var(--color-accent)] rounded-xl p-6 mb-8 not-prose">
              <p className="mb-2"><strong>Email:</strong> contacto@almamedia.cl</p>
              <p className="mb-2"><strong>Dirección:</strong> Concepción, Región del Biobío, Chile</p>
              <p><strong>Sitio web:</strong> <Link href="/" className="text-[var(--color-accent)] hover:underline">almamedia.cl</Link></p>
            </div>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mt-12 not-prose">
              <p className="text-sm text-[var(--color-muted)]">
                Esta Política de Privacidad se rige por las leyes de Chile, específicamente la Ley N° 19.628 sobre Protección de la Vida Privada y sus modificaciones. Al utilizar nuestro sitio web, aceptas los términos descritos en esta política.
              </p>
            </div>

          </div>

        </article>
      </div>
    </>
  );
}
