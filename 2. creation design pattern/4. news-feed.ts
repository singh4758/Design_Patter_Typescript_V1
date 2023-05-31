import { IPostService } from './4. ipost-service';


export class NewsFeed {
  constructor(private _service: IPostService) { }

  show() {
    this._service.getAll().then((posts) => {
      posts.forEach((post) => {
        console.log(`${post.title}-${post.body}`);
      });
    });
  }
}
