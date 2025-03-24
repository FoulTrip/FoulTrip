import { Project } from "@/types/infoCV";

export const Experiences: Project[] = [
    {
        "id": "1",
        "name": "BlockScrum",
        "slug": "Enfocado en el seguimiento de proyectos Scrum",
        "description": "BlockScrum es una aplicación diseñada para la gestión ágil de proyectos mediante la metodología Scrum. Implementa un sistema de tableros interactivos con seguimiento en tiempo real de sprints, tareas y avances del equipo. Utiliza una arquitectura escalable con integración de APIs para la automatización de procesos, gestión de roles y análisis de métricas de rendimiento. Su diseño modular permite una fácil personalización y adaptación a distintos flujos de trabajo en entornos de desarrollo ágil",
        largeDescription: "TripChain es una blockchain descentralizada diseñada para que los negocios gestionen transacciones, emitan su propia criptomoneda y registren procesos críticos de forma segura e inmutable. Su arquitectura basada en una red P2P (Peer-to-Peer) permite que múltiples nodos (computadoras o servidores) almacenen y validen la información sin depender de un servidor central, asegurando que la red siga operativa incluso si algún nodo falla.\nCada nodo en TripChain tiene una copia completa de la blockchain y participa en la validación de transacciones a través de un mecanismo de consenso eficiente que combina Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT). Esto garantiza que las transacciones se procesen en segundos sin el alto consumo energético de otras blockchains tradicionales.\nLos negocios en TripChain operan a través de cuentas empresariales, que interactúan con smart contracts para gestionar pagos, emitir su propia criptomoneda y registrar procesos clave como auditorías o control de inventario. Gracias a su estructura descentralizada, cada transacción es transparente, auditable e inmutable, brindando confianza tanto a las empresas como a sus clientes.",
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
                "name": "Full Stack App",
                "isPrivate": true,
                "description": "BlockScrum es una aplicación diseñada para la gestión ágil de proyectos mediante la metodología Scrum.",
                "status": "En desarrollo",
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"

            }
        ]
    },
    {
        "id": "2",
        "name": "TripCode Chain",
        "slug": "Enfocado en el seguimiento de proyectos Scrum",
        "description": "TripChain es una blockchain descentralizada diseñada para que los negocios gestionen transacciones, emitan su propia criptomoneda y registren procesos clave con seguridad e inmutabilidad. A través de una red P2P y smart contracts, permite automatizar pagos, controlar inventarios y validar procesos críticos sin intermediarios. Su algoritmo de consenso combina Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT), garantizando transacciones rápidas, seguras y eficientes.",
        largeDescription: "TripChain es una blockchain descentralizada diseñada para que los negocios gestionen transacciones, emitan su propia criptomoneda y registren procesos críticos de forma segura e inmutable. Su arquitectura basada en una red P2P (Peer-to-Peer) permite que múltiples nodos (computadoras o servidores) almacenen y validen la información sin depender de un servidor central, asegurando que la red siga operativa incluso si algún nodo falla.\n Cada nodo en TripChain tiene una copia completa de la blockchain y participa en la validación de transacciones a través de un mecanismo de consenso eficiente que combina Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT). Esto garantiza que las transacciones se procesen en segundos sin el alto consumo energético de otras blockchains tradicionales.\nLos negocios en TripChain operan a través de cuentas empresariales, que interactúan con smart contracts para gestionar pagos, emitir su propia criptomoneda y registrar procesos clave como auditorías o control de inventario. Gracias a su estructura descentralizada, cada transacción es transparente, auditable e inmutable, brindando confianza tanto a las empresas como a sus clientes.",
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
                "description": "Los Nodos Semilla actúan como puntos de entrada para nuevos nodos en la red blockchain, facilitando el descubrimiento y conexión inicial. No validan transacciones ni almacenan bloques completos, sino que mantienen una lista actualizada de nodos activos y la comparten con los recién llegados, asegurando la continuidad y descentralización de la red.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "2",
                "name": "Nodo Validador",
                "description": "El Nodo Validador es responsable de validar transacciones, generar bloques y mantener el consenso en la red blockchain. Utiliza un mecanismo híbrido de Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT) para garantizar transacciones rápidas y seguras. Además, coordina la verificación de bloques, gestiona la comunicación entre nodos y asegura la integridad del sistema mediante criptografía avanzada.",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "3",
                "name": "Nodo Completo",
                "description": "",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "4",
                "name": "Nodo API",
                "description": "",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "5",
                "name": "TripChain Explorer",
                "description": "",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "5",
                "name": "Web Documentation",
                "description": "",
                "status": "Funcionando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            }
        ]
    },
    {
        "id": "3",
        "name": "ParfumCol",
        "slug": "Enfocado en el seguimiento de proyectos Scrum",
        "description": "BlockScrum es una aplicación diseñada para la gestión ágil de proyectos mediante la metodología Scrum. Implementa un sistema de tableros interactivos con seguimiento en tiempo real de sprints, tareas y avances del equipo. Utiliza una arquitectura escalable con integración de APIs para la automatización de procesos, gestión de roles y análisis de métricas de rendimiento. Su diseño modular permite una fácil personalización y adaptación a distintos flujos de trabajo en entornos de desarrollo ágil",
        largeDescription: "TripChain es una blockchain descentralizada diseñada para que los negocios gestionen transacciones, emitan su propia criptomoneda y registren procesos críticos de forma segura e inmutable. Su arquitectura basada en una red P2P (Peer-to-Peer) permite que múltiples nodos (computadoras o servidores) almacenen y validen la información sin depender de un servidor central, asegurando que la red siga operativa incluso si algún nodo falla.\nCada nodo en TripChain tiene una copia completa de la blockchain y participa en la validación de transacciones a través de un mecanismo de consenso eficiente que combina Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT). Esto garantiza que las transacciones se procesen en segundos sin el alto consumo energético de otras blockchains tradicionales.\nLos negocios en TripChain operan a través de cuentas empresariales, que interactúan con smart contracts para gestionar pagos, emitir su propia criptomoneda y registrar procesos clave como auditorías o control de inventario. Gracias a su estructura descentralizada, cada transacción es transparente, auditable e inmutable, brindando confianza tanto a las empresas como a sus clientes.",
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
                "name": "Backend api",
                "description": "",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "2",
                "name": "Frontend api",
                "description": "",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            }
        ]
    },
    {
        "id": "4",
        "name": "Inventory Management SaaS Descentralizado",
        "slug": "Enfocado en el seguimiento de proyectos Scrum",
        "description": "BlockScrum es una aplicación diseñada para la gestión ágil de proyectos mediante la metodología Scrum. Implementa un sistema de tableros interactivos con seguimiento en tiempo real de sprints, tareas y avances del equipo. Utiliza una arquitectura escalable con integración de APIs para la automatización de procesos, gestión de roles y análisis de métricas de rendimiento. Su diseño modular permite una fácil personalización y adaptación a distintos flujos de trabajo en entornos de desarrollo ágil",
        largeDescription: "TripChain es una blockchain descentralizada diseñada para que los negocios gestionen transacciones, emitan su propia criptomoneda y registren procesos críticos de forma segura e inmutable. Su arquitectura basada en una red P2P (Peer-to-Peer) permite que múltiples nodos (computadoras o servidores) almacenen y validen la información sin depender de un servidor central, asegurando que la red siga operativa incluso si algún nodo falla.\nCada nodo en TripChain tiene una copia completa de la blockchain y participa en la validación de transacciones a través de un mecanismo de consenso eficiente que combina Delegated Proof of Stake (DPoS) y Practical Byzantine Fault Tolerance (PBFT). Esto garantiza que las transacciones se procesen en segundos sin el alto consumo energético de otras blockchains tradicionales.\nLos negocios en TripChain operan a través de cuentas empresariales, que interactúan con smart contracts para gestionar pagos, emitir su propia criptomoneda y registrar procesos clave como auditorías o control de inventario. Gracias a su estructura descentralizada, cada transacción es transparente, auditable e inmutable, brindando confianza tanto a las empresas como a sus clientes.",
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
                "name": "Backend api",
                "description": "",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            },
            {
                "id": "2",
                "name": "Frontend api",
                "description": "",
                "status": "Planeando",
                "isPrivate": false,
                "uri": "https://github.com/teamTripCode/tc-scrum-app",
                "web": "https://blockscrum.vercel.app/"
            }
        ]
    }
]