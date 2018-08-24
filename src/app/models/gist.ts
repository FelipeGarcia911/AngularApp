import { Owner } from "./owner";
import { File } from "./file";

export interface Gist {
    id: String,
    isPublic: Boolean,
    created_at: String,
    updated_at: String,
    description: String,
    comments: Number,
    user: String,
    owner: Owner,
    files: File[]
}