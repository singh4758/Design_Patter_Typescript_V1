import { Post } from './4. post';
import { IPostService } from './4. ipost-service';
import { IExportInterface } from './4. iexport-post-service';


export class MockPostService implements IPostService {
  posts: Post[] = [];

  constructor() {
    this.posts = [
      { id: 1, title: 'Test Post 1', body: 'Test Post 1', postedBy: 'me' },
      { id: 1, title: 'Test Post 2', body: 'Test Post 2', postedBy: 'me' },
      { id: 1, title: 'Test Post 3', body: 'Test Post 3', postedBy: 'me' },
      { id: 1, title: 'Test Post 4', body: 'Test Post 4', postedBy: 'me' }
    ];
  }
  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.posts);
    });
  }
  save(post: Post): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }
  export(service: IExportInterface): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}
