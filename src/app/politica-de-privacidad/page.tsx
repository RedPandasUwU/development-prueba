import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PoliticaDePrivacidad() {
    return (
        <div className="min-h-screen bg-[#1A1A1A] text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-8 text-[#00E676] hover:text-[#00E676]/80 hover:bg-white/5">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </Button>

                <h1 className="text-4xl font-bold mb-4 text-[#00E676]">Política de Privacidad</h1>
                <p className="text-white/60 mb-8">Última revisión: 06/07/2024</p>

                <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                        En Appsmartt, LLC ("nosotros", "nuestro" o "nos"), respetamos su privacidad y estamos comprometidos a protegerla mediante el cumplimiento de esta política de privacidad (la "Política"). Esta Política describe los tipos de información que podemos recopilar de usted o que usted puede proporcionar cuando visita nuestro sitio web, https://appsmartt.com (nuestro "Sitio"), y nuestras prácticas para recopilar, usar, mantener, proteger y divulgar esa información.
                    </p>

                    <p>
                        Al acceder o usar el Sitio, usted acepta esta Política de Privacidad. Si no está de acuerdo con esta Política, no utilice el Sitio.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Información que Recopilamos</h2>
                        <p className="mb-4">
                            Podemos recopilar varios tipos de información de y sobre los usuarios de nuestro Sitio, incluyendo:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Información de Identificación Personal (IIP):</strong> información por la cual usted puede ser identificado personalmente, como nombre, dirección postal, dirección de correo electrónico, número de teléfono u otra información de contacto.</li>
                            <li><strong>Información No Personal:</strong> información sobre su conexión a internet, el equipo que utiliza para acceder a nuestro Sitio y detalles de uso.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Cómo Recopilamos Información</h2>
                        <p className="mb-4">
                            Recopilamos información de las siguientes maneras:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Directamente de usted:</strong> cuando nos la proporciona al registrarse en nuestro Sitio, realizar una compra, suscribirse a nuestro boletín, llenar formularios o comunicarse con nosotros.</li>
                            <li><strong>Automáticamente:</strong> a medida que navega por el Sitio. La información recopilada automáticamente puede incluir detalles de uso, direcciones IP e información recopilada a través de cookies y otras tecnologías de seguimiento.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Uso de Su Información</h2>
                        <p className="mb-4">
                            Utilizamos la información que recopilamos sobre usted o que nos proporciona, incluyendo cualquier IIP, para los siguientes propósitos:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Presentar nuestro Sitio y su contenido de manera adecuada.</li>
                            <li>Proporcionarle información, productos o servicios que nos solicite.</li>
                            <li>Cumplir con cualquier otro propósito para el cual nos la proporcione.</li>
                            <li>Cumplir con nuestras obligaciones y hacer valer nuestros derechos derivados de cualquier contrato entre usted y nosotros.</li>
                            <li>Notificarle sobre cambios en nuestro Sitio o cualquier producto o servicio que ofrecemos o proporcionamos a través de él.</li>
                            <li>De cualquier otra forma que describamos cuando nos proporcione la información.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Divulgación de Su Información</h2>
                        <p className="mb-4">
                            Podemos divulgar información personal que recopilamos o que usted nos proporciona según se describe en esta política:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>A nuestras subsidiarias y afiliadas.</li>
                            <li>A contratistas, proveedores de servicios y otros terceros que utilizamos para respaldar nuestro negocio.</li>
                            <li>Para cumplir con el propósito para el cual usted la proporciona.</li>
                            <li>Para cualquier otro propósito divulgado por nosotros cuando usted proporciona la información.</li>
                            <li>Con su consentimiento.</li>
                        </ul>
                        <p className="mt-4 mb-4">
                            También podemos divulgar su información personal:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Para cumplir con cualquier orden judicial, ley o proceso legal, incluyendo responder a cualquier solicitud gubernamental o regulatoria.</li>
                            <li>Para hacer cumplir o aplicar nuestros términos de uso y otros acuerdos, incluyendo para fines de facturación y cobranza.</li>
                            <li>Si creemos que la divulgación es necesaria o apropiada para proteger los derechos, propiedad o seguridad de Appsmartt, nuestros clientes u otros.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Elecciones sobre Cómo Usamos y Divulgamos Su Información</h2>
                        <p className="mb-4">
                            Nos esforzamos por proporcionarle opciones con respecto a la información personal que nos proporciona. Hemos creado mecanismos para proporcionarle el siguiente control sobre su información:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Tecnologías de Seguimiento y Publicidad:</strong> Puede configurar su navegador para rechazar todas o algunas cookies del navegador, o para que le avise cuando se envían cookies. Si desactiva o rechaza las cookies, tenga en cuenta que algunas partes de este Sitio pueden no ser accesibles o no funcionar correctamente.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Seguridad de los Datos</h2>
                        <p>
                            Hemos implementado medidas diseñadas para proteger su información personal contra pérdida accidental y contra acceso, uso, alteración y divulgación no autorizados. La seguridad de su información también depende de usted. Donde le hayamos dado (o donde usted haya elegido) una contraseña para acceder a ciertas partes de nuestro Sitio, usted es responsable de mantener la confidencialidad de esta contraseña. Le pedimos que no comparta su contraseña con nadie.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Cambios a Nuestra Política de Privacidad</h2>
                        <p>
                            Es nuestra política publicar cualquier cambio que hagamos a nuestra política de privacidad en esta página. Si realizamos cambios sustanciales en la forma en que tratamos la información personal de nuestros usuarios, le notificaremos a través de un aviso en la página de inicio del Sitio. La fecha de la última revisión de la política de privacidad se identifica en la parte superior de la página. Usted es responsable de asegurarse de que tengamos una dirección de correo electrónico activa y entregable actualizada para usted, y de visitar periódicamente nuestro Sitio y esta política de privacidad para verificar cualquier cambio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Información de Contacto</h2>
                        <p className="mb-2">
                            Para hacer preguntas o comentarios sobre esta política de privacidad y nuestras prácticas de privacidad, contáctenos en:
                        </p>
                        <div className="ml-4">
                            <p className="font-semibold text-white">Appsmartt, LLC</p>
                            <p>Correo electrónico: <a href="mailto:hola@appsmartt.com" className="text-[#00E676] hover:underline">hola@appsmartt.com</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
