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
