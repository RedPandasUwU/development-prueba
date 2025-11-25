import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TerminosYCondiciones() {
    return (
        <div className="min-h-screen bg-[#1A1A1A] text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-8 text-[#00E676] hover:text-[#00E676]/80 hover:bg-white/5">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </Button>

                <h1 className="text-4xl font-bold mb-4 text-[#00E676]">Términos y Condiciones</h1>
                <p className="text-white/60 mb-8">Última revisión: 06/07/2024</p>

                <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                        Bienvenido a Appsmartt. Estos Términos y Condiciones (los "Términos") rigen su acceso y uso de nuestro sitio web, https://appsmartt.com (el "Sitio"), y de todos los servicios y productos ofrecidos por Appsmartt, LLC ("Compañía", "nosotros", "nuestro" o "nos").
                    </p>

                    <p>
                        Al acceder o usar el Sitio, usted acepta cumplir con estos Términos y nuestras Políticas de Privacidad. Si no está de acuerdo con estos Términos, no utilice el Sitio.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Cuentas</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">1.1 Creación de Cuenta</h3>
                        <p className="mb-4">
                            Para utilizar ciertas características del Sitio, debe registrarse para una cuenta ("Cuenta") y proporcionar información precisa y completa. Usted es responsable de mantener la confidencialidad de su información de inicio de sesión y de todas las actividades que ocurran en su Cuenta.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3">1.2 Responsabilidades de la Cuenta</h3>
                        <p>
                            Usted acepta notificar inmediatamente a Appsmartt sobre cualquier uso no autorizado de su Cuenta. Appsmartt no será responsable por ninguna pérdida o daño que resulte del uso no autorizado de su Cuenta.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Uso del Sitio</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">2.1 Licencia</h3>
                        <p className="mb-4">
                            Appsmartt le otorga una licencia limitada, no exclusiva, no transferible y revocable para acceder y utilizar el Sitio únicamente para su uso personal y no comercial.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3">2.2 Restricciones</h3>
                        <p className="mb-2">Usted no debe:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>(a) copiar, modificar o distribuir el Sitio o su contenido;</li>
                            <li>(b) utilizar el Sitio para cualquier propósito ilegal;</li>
                            <li>(c) intentar descompilar o realizar ingeniería inversa del software del Sitio;</li>
                            <li>(d) eliminar cualquier aviso de derechos de autor o propiedad del Sitio.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Propiedad Intelectual</h2>
                        <p>
                            Todo el contenido del Sitio, incluidos textos, gráficos, logotipos, imágenes y software, es propiedad de Appsmartt o de sus licenciantes y está protegido por leyes de propiedad intelectual. Usted no debe utilizar ningún contenido del Sitio sin el permiso previo por escrito de Appsmartt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Exoneración de Responsabilidad</h2>
                        <p>
                            El Sitio se proporciona "tal cual" y "según disponibilidad". Appsmartt no ofrece garantías de ningún tipo, expresas o implícitas, sobre la operación del Sitio o la información, contenido, materiales o productos incluidos en el Sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Limitación de Responsabilidad</h2>
                        <p>
                            En la medida máxima permitida por la ley, Appsmartt no será responsable por ningún daño indirecto, incidental, especial o consecuente que surja del uso del Sitio o de la imposibilidad de usarlo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Modificaciones</h2>
                        <p>
                            Appsmartt se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en el Sitio. Es su responsabilidad revisar los Términos periódicamente para estar al tanto de cualquier cambio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Ley Aplicable y Jurisdicción</h2>
                        <p>
                            Estos Términos se regirán e interpretarán de acuerdo con las leyes del estado de Delaware, EE. UU., sin dar efecto a ningún principio de conflicto de leyes. Usted acepta someterse a la jurisdicción exclusiva de los tribunales del estado de Delaware para resolver cualquier disputa que surja del uso del Sitio o de estos Términos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Términos de la Tienda de Plantillas de Software</h2>

                        <h3 className="text-xl font-semibold text-white mb-3">8.1 Compra de Plantillas</h3>
                        <p className="mb-4">
                            Al realizar una compra en la tienda de plantillas de software de Appsmartt, usted acepta pagar todas las tarifas asociadas con su compra. Las plantillas de software son servicios descargables y virtuales.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3">8.2 Política de No Reembolso</h3>
                        <p>
                            Debido a la naturaleza de los servicios descargables y virtuales, todas las ventas de plantillas de software son finales. No se realizarán reembolsos una vez que la compra haya sido completada.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Contacto</h2>
                        <p className="mb-2">
                            Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en:
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
