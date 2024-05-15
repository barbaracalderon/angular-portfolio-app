// Data consumed by our project cards
import { Tag } from "./tags";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}