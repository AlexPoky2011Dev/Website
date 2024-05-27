export interface Repository {
    svn_url: string | undefined;
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
}