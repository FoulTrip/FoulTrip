import { Project } from "@/types/infoCV";

export const Projects: Project[] = [
    {
        "id": "1",
        "name": "BlockScrum",
        "slug": "SaaS enfocado en el seguimiento de proyectos Scrum",
        "description": "Plataforma de gestión ágil de proyectos basada en Scrum, que permite la planificación, monitoreo y optimización de tareas en equipos de desarrollo. Incorpora tecnología blockchain para registrar eventos críticos del proyecto de manera inmutable, asegurando transparencia y trazabilidad en cada sprint, tarea y asignación de equipo.",
        "largeDescription": "Aplicación diseñada para la gestión de proyectos bajo la metodología Scrum, proporcionando tableros interactivos para la planificación y seguimiento de sprints en tiempo real. Además de sus herramientas tradicionales de organización de tareas y roles, BlockScrum utiliza la blockchain de TripChain para registrar eventos clave dentro del proyecto, como asignaciones de tareas, cambios en sprints y entregas finales. Esto permite que los equipos cuenten con un historial inmutable de su progreso, garantizando la transparencia y facilitando auditorías de cumplimiento.\n\nGracias a su arquitectura modular y escalable, BlockScrum permite la automatización de flujos de trabajo mediante integración con APIs externas, gestión de permisos basada en roles y análisis de rendimiento de los equipos. Su integración con blockchain proporciona seguridad adicional en la validación de datos críticos del proyecto, asegurando que las decisiones tomadas en el desarrollo sean confiables y verificables.",
        "cover": "/backgrounds-projects/scrum_mosaic.jpg",
        "uriDocs": "",
        "stack": [
            "React.js",
            "typescript",
            "Nextjs",
            "MongoDB",
            "Prisma",
            "Vercel",
            "Blockchain"
        ],
        "repositories": [
            {
                "id": "1",
                "name": "Blockscrum-core",
                "isPrivate": true,
                "description": "BlockScrum es una plataforma integral para la gestión ágil de proyectos basada en la metodología Scrum. Permite la planificación, seguimiento y control de tareas en equipos de desarrollo.",
                "status": "En desarrollo",
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "2",
                "name": "Documentación Web",
                "isPrivate": true,
                "description": "Repositorio destinado a la documentación oficial de BlockScrum, donde se detallan funcionalidades, guías de uso y mejores prácticas para optimizar la gestión de proyectos ágiles.",
                "status": "Planeando",
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            }
        ]

    },
    {
        "id": "2",
        "name": "TripCode Chain",
        "slug": "Blockchain para la gestión empresarial y transacciones seguras",
        "description": "Blockchain descentralizada diseñada para que las empresas gestionen transacciones, emitan su propia criptomoneda y registren procesos críticos con seguridad e inmutabilidad. Utiliza una red P2P y smart contracts para automatizar pagos, controlar inventarios y validar operaciones sin intermediarios. Su algoritmo de consenso híbrido combina Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT), garantizando transacciones rápidas, seguras y eficientes.",
        "largeDescription": "Blockchain descentralizada enfocada en la gestión empresarial, permitiendo a las compañías registrar transacciones, emitir criptomonedas propias y garantizar la integridad de sus procesos críticos. Su arquitectura basada en una red P2P (Peer-to-Peer) permite que múltiples nodos almacenen y validen información sin depender de un servidor central, asegurando alta disponibilidad y resistencia ante fallos.\nCada nodo en TripChain mantiene una copia completa de la blockchain y participa en la validación de transacciones a través de un mecanismo de consenso híbrido que combina Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT). Esto permite procesar transacciones en segundos sin el alto consumo energético de otras blockchains tradicionales.\nLas empresas operan en TripChain mediante cuentas empresariales que interactúan con smart contracts para gestionar pagos, emitir criptomonedas y registrar procesos clave como auditorías y control de inventario. Gracias a su estructura descentralizada, cada transacción es transparente, auditable e inmutable, proporcionando confianza tanto a los negocios como a sus clientes.",
        "cover": "/backgrounds-projects/blocks_mosaic.jpg",
        "uriDocs": "https://tripchaindocs.fly.dev/es/",
        "stack": [
            "React.js",
            "typescript",
            "Nextjs",
            "Nest.js",
            "Docker",
            "Kubernetes",
            "Google Cloud Plattform",
            "Vercel"
        ],
        "repositories": [
            {
                "id": "1",
                "name": "Nodo Semilla",
                "description": "Facilita la conexión inicial de nuevos nodos en la red blockchain. No valida transacciones ni almacena bloques completos, sino que mantiene una lista de nodos activos y la comparte para garantizar la descentralización y continuidad de la red.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-seed-node",
                "web": "https://tripchain.vercel.app/"
            },
            {
                "id": "2",
                "name": "Nodo Validador",
                "description": "Responsable de validar transacciones, generar bloques y mantener el consenso en la red. Implementa un mecanismo híbrido de DPoS y PBFT para garantizar seguridad y velocidad en las transacciones, coordinando la verificación y comunicación entre nodos.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-validator-node",
                "web": "https://tripchain.vercel.app/"
            },
            {
                "id": "3",
                "name": "Nodo Completo",
                "description": "Nodo que replica y almacena el historial completo de la blockchain, asegurando que todos los bloques y transacciones sean accesibles en cualquier momento. Actúa como un respaldo descentralizado, permitiendo la validación independiente de datos y la ejecución de consultas avanzadas sin depender de terceros. Su implementación optimiza la indexación de datos y soporta sincronización eficiente con otros nodos de la red.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-full-node",
                "web": "https://tripchain.vercel.app/"
            },
            {
                "id": "4",
                "name": "Nodo API",
                "description": "Módulo de servicio que expone una API REST y WebSocket para interactuar con la blockchain. Facilita la consulta de datos en tiempo real, la gestión de cuentas, la ejecución de smart contracts y el procesamiento de transacciones. Implementa mecanismos de autenticación y control de acceso, garantizando operaciones seguras y escalables para integraciones empresariales y clientes externos.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-api-node",
                "web": "https://tripchain.vercel.app/"
            },
            {
                "id": "5",
                "name": "TripChain Explorer",
                "description": "Plataforma web para visualizar bloques, transacciones y la actividad de la red en tiempo real. Proporciona herramientas avanzadas de búsqueda y análisis, permitiendo auditar el historial de la blockchain, verificar el estado de cuentas y contratos inteligentes. Incluye gráficos de métricas de red, estados de validadores y estadísticas de uso, optimizando la transparencia y el monitoreo del sistema.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-explorer",
                "web": "https://tripchain.vercel.app/"
            },
            {
                "id": "6",
                "name": "Web Documentation",
                "description": "Repositorio central de documentación técnica de TripChain. Contiene guías detalladas sobre la configuración de nodos, interacción con la API, desarrollo de smart contracts y mejores prácticas de seguridad. Incluye ejemplos prácticos, especificaciones de endpoints y documentación en múltiples formatos para facilitar la integración con sistemas externos.",
                "status": "Funcionando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-docs",
                "web": "https://tripchain.vercel.app/docs"
            }
        ]
    },
    {
        "id": "3",
        "name": "ParfumCol",
        "slug": "DApp para el comercio de perfumes y recompensas",
        "description": "Plataforma de comercio electrónico especializada en perfumes, integrando tecnología blockchain para garantizar autenticidad, trazabilidad y seguridad en las transacciones. Implementa un sistema de recompensas basado en criptomonedas, permitiendo a los clientes obtener beneficios por sus compras.",
        "largeDescription": "Aplicación de comercio electrónico enfocada en la venta de perfumes, utilizando la blockchain de TripChain para registrar transacciones de manera inmutable y proporcionar transparencia en los procesos de compra y distribución. Su integración con smart contracts permite la emisión de criptomonedas como incentivos para los clientes, generando un ecosistema de recompensas dentro de la plataforma.\nLa arquitectura de ParfumCol está compuesta por un backend en Nest.js que gestiona usuarios, pedidos y transacciones sobre la blockchain, y un frontend en Next.js optimizado para velocidad y experiencia de usuario. Utiliza Prisma como ORM para manejar datos en MongoDB, Docker para despliegue escalable y Google Cloud Platform para hosting y almacenamiento seguro.",
        "cover": "/backgrounds-projects/blocks_mosaic.jpg",
        "uriDocs": "https://parfumcol-docs.vercel.app/",
        "stack": [
            "React.js",
            "typescript",
            "Nextjs",
            "Nest.js",
            "MongoDB",
            "Prisma",
            "Docker",
            "Google Cloud Plattform",
            "Vercel",
            "Blockchain"
        ],
        "repositories": [
            {
                "id": "1",
                "name": "Backend API",
                "description": "Microservicio backend desarrollado en Nest.js con TypeScript, encargado de la autenticación de usuarios, gestión de pedidos y procesamiento de pagos. Utiliza Prisma como ORM para la manipulación de datos en MongoDB e integra la blockchain de TripChain para registrar todos los procesos críticos de la aplicación. Implementa smart contracts personalizados que gestionan la criptomoneda nativa de la plataforma, permitiendo la emisión y distribución de recompensas para los usuarios que realizan compras o pagan suscripciones. Expone una API RESTful segura con validación JWT, control de acceso basado en roles y protección contra ataques mediante rate limiting.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/parfumcol-backend",
                "web": "https://parfumcol.vercel.app/"
            },
            {
                "id": "2",
                "name": "Frontend Web",
                "description": "Aplicación frontend desarrollada en Next.js con TypeScript y React, optimizada para rendimiento y SEO mediante Server-Side Rendering (SSR) y Static Site Generation (SSG). Proporciona una interfaz interactiva para la compra de perfumes y la gestión de recompensas en criptomonedas. Se comunica con la API backend para procesar pagos y registrar transacciones en la blockchain de TripChain. Implementa autenticación con JWT, manejo de estado con Zustand o Redux y diseño modular basado en componentes reutilizables.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/parfumcol-frontend",
                "web": "https://parfumcol.vercel.app/"
            }

        ]
    },
    {
        "id": "4",
        "name": "Inventario Descentralizado",
        "slug": "DApp para la gestión de inventarios y recompensas empresariales",
        "description": "Plataforma diseñada para la gestión eficiente de inventarios en negocios de cualquier tamaño. Permite administrar productos, registrar transacciones y automatizar recompensas en criptomonedas para los clientes según sus compras. Cada negocio (tenant) puede generar y gestionar su propia criptomoneda dentro del ecosistema, asegurando transparencia y trazabilidad en todas las operaciones.",
        "largeDescription": "Aplicación SaaS basada en blockchain que permite a las empresas gestionar su inventario y recompensar a sus clientes con criptomonedas propias. Su arquitectura descentralizada basada en una red P2P garantiza la seguridad e inmutabilidad de los datos.\nCada negocio puede crear su propia criptomoneda dentro de la plataforma, establecer reglas de recompensa y realizar un seguimiento detallado de a qué clientes se les ha otorgado criptomonedas por sus compras. Además, la integración con smart contracts asegura que cada transacción sea transparente y auditable.\nLa plataforma proporciona herramientas avanzadas de gestión de inventario, permitiendo a los negocios registrar entradas, salidas y movimientos de stock en tiempo real, con reportes detallados y automatización de procesos clave. Gracias a su infraestructura escalable, puede adaptarse tanto a pequeñas tiendas como a grandes corporaciones con múltiples sucursales.",
        "cover": "/backgrounds-projects/blocks_mosaic.jpg",
        "uriDocs": "dwdwd",
        "stack": [
            "React.js",
            "typescript",
            "Nextjs",
            "Nest.js",
            "MongoDB",
            "Prisma",
            "Docker",
            "Google Cloud Plattform",
            "Vercel",
            "Blockchain"
        ],
        "repositories": [
            {
                "id": "1",
                "name": "Frontend App",
                "description": "Aplicación web desarrollada en Next.js con React y TypeScript. Implementa un sistema de gestión de inventarios en tiempo real con autenticación basada en JWT, interfaces dinámicas con Zustand para manejo de estado global y comunicación eficiente con la API backend mediante Axios. Optimizado para SSR y SSG, asegurando una carga rápida y una experiencia fluida.",
                "status": "En desarrollo",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-inventory-frontend",
                "web": "https://decentralized-inventory.vercel.app/"
            },
            {
                "id": "2",
                "name": "Backend App",
                "description": "API REST desarrollada en NestJS con una arquitectura modular basada en principios de DDD (Domain-Driven Design). Implementa autenticación con JWT, gestión de usuarios multi-tenant, integración con MongoDB a través de Prisma y un motor de smart contracts para la emisión y gestión de criptomonedas de cada negocio. Desplegado en Google Cloud con contenedores Docker.",
                "status": "En desarrollo",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-inventory-backend",
                "web": "https://decentralized-inventory-api.vercel.app/"
            },
            {
                "id": "3",
                "name": "Documentation Web",
                "description": "Sitio web de documentación técnica construido con Docusaurus y alojado en Vercel. Contiene guías de integración para desarrolladores, documentación de la API REST y ejemplos de implementación de los smart contracts utilizados en la plataforma. Diseñado para facilitar la adopción del sistema por parte de empresas y desarrolladores.",
                "status": "En desarrollo",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-inventory-docs",
                "web": "https://decentralized-inventory-docs.vercel.app/"
            }
        ]
    }

]