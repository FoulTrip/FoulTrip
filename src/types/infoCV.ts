export interface Project {
    id: string
    name: string
    slug: string
    description: string
    cover: string
    uriDocs: string
    stack: [x: stackType],
    github: {
        uri: string
        isPrivate: boolean
    }
    repositories: Repository[]
}

export interface Repository {
    id: string
    name: string
    description: string
    isPrivate: boolean
    status: string
}

export type stackType =
    "React.js" |
    "typescript" |
    "Nextjs" |
    "Nest.js" |
    "Docker" |
    "Kubernetes" |
    "Google Cloud Plattform" |
    "Vercel" |
    "MongoDB" |
    "Prisma" |
    "Blockchain"
