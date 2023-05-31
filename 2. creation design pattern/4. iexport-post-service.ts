import { Post } from "./4. post";

export interface IExportInterface {
  export(posts: Post[]): string;
}