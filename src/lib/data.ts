export interface Company {
    name: string;
    slug: string;
    logo: string;
    description: string;
}

export const companies: Company[] = [
    {
        name: "FlutterFlow",
        slug: "flutterflow",
        logo: "/Iconos/flutterflow.webp",
        description: "Plataforma líder en desarrollo visual que permite crear aplicaciones nativas de alta calidad en tiempo récord. FlutterFlow acelera el proceso de desarrollo sin sacrificar rendimiento ni escalabilidad."
    },
    {
        name: "S&P Solutions",
        slug: "sp-solutions",
        logo: "/Iconos/sypsolucion.webp",
        description: "Empresa dedicada a brindar soluciones tecnológicas integrales, especializándose en la optimización de procesos empresariales y transformación digital."
    },
    {
        name: "beezion",
        slug: "beezion",
        logo: "/Iconos/beezion.webp",
        description: "Innovación tecnológica al servicio del crecimiento empresarial. Beezion se destaca por desarrollar soluciones creativas y eficientes para desafíos modernos."
    },
    {
        name: "SEINHSA",
        slug: "seinhsa",
        logo: "/Iconos/seinshas.webp",
        description: "Expertos en servicios de ingeniería y consultoría técnica, ofreciendo soluciones robustas y confiables para el sector industrial."
    },
    {
        name: "nexcay",
        slug: "nexcay",
        logo: "/Iconos/nexcay.webp",
        description: "Desarrollo de software a medida y soluciones digitales enfocadas en la experiencia de usuario y la eficiencia operativa."
    },
    {
        name: "Sergy Car",
        slug: "sergy-car",
        logo: "/Iconos/sergycar.webp",
        description: "Soluciones especializadas para el sector automotriz, integrando tecnología para mejorar la gestión y el servicio al cliente."
    },
    {
        name: "Copper App",
        slug: "copper-app",
        logo: "/Iconos/copperapp.webp",
        description: "Aplicación innovadora diseñada para simplificar la gestión y el control de procesos, brindando herramientas poderosas en una interfaz intuitiva."
    }
];
