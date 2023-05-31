import { IExportInterface } from "./4. iexport-post-service";
import { Post } from "./4. post";

export class JSONExportService implements IExportInterface {
  export(posts: Post[]): string {
      return JSON.stringify(posts);
  }
}