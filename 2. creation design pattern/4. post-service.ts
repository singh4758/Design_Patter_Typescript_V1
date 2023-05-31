import * as fs from 'fs';
import { Post } from './4. post';
import { IPostService } from './4. ipost-service';
import { IExportInterface } from './4. iexport-post-service';


export class PostService implements IPostService {

  private _filename: string = "";

  constructor(filename: string = "posts.json") {
    this._filename = filename;
  }

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this._filename, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }
  save(post: Post): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then((posts) => {
        posts.push(post);
        fs.writeFile(this._filename, JSON.stringify(posts), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
  }
  export(service: IExportInterface): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}
