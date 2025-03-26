// types/infoCV.ts
export interface Project {
    id: string;
    name: string;
    slug: string;
    description: string;
    largeDescription: string;
    cover: string;
    uriDocs: string;
    stack: stackType[];
    repositories: Repository[];
}

export interface Repository {
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
    status: string;
    uri: string;
    web: string;
}

export type stackType =
    | "React.js"
    | "typescript"
    | "Nextjs"
    | "Nest.js"
    | "Docker"
    | "Kubernetes"
    | "Google Cloud Plattform"
    | "Vercel"
    | "MongoDB"
    | "Prisma"
    | "Blockchain";


export interface Experience {
    position: string
    company: string
    logo: string
    type: string
    initialDate: string
    endDate: string
    Description: string
}

export interface ArticleDto {
    id: string;
    name?: string;       // Nombre corto o identificador del artículo
    type: typeBlog;
    cover: string;
    title: string;      // Título completo del artículo
    date: string;       // Fecha en formato ISO (ej. "2025-03-26")
    description?: string;// Breve descripción del artículo
    content: string;    // Contenido en formato MDX o Markdown
}

export type typeBlog = "web3" | "development" | "biz-tech" | "trends";