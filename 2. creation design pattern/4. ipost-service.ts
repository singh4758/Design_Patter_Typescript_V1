import { IExportInterface } from './4. iexport-post-service';
import { Post } from './4. post';


export interface IPostService {
  getAll(): Promise<Post[]>;
  save(post: Post): Promise<void>;
  export(service: IExportInterface): Promise<string>;
}
