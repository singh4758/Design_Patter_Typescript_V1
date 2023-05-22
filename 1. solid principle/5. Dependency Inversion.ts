/*
Que:- What is Dependency Inversion ?
Ans:- Your classess and module should depend on abstraction instead of concreate implementation.

                                    Abstraction == Interfaces
*/

/* 
  Real World Example
  1. Wired
  2. Wireless
  3. Touchpad
  4. Laser
  5. Optical
  6. Trackball

    Port for wired mouse.
    Port for wireless mouse.
    Port for touchpad.
    Port for Laser.
    Port for Optical.
    Port for Trackball.

  Common Interface:-
    USB
    An entity with two buttons and one pointer.

  Does not Depend:-
    Implementation doesn't matter

  Loose Coupling:-

*/

import * as fs from 'fs';

export interface Post {
  id: number;
  title: string;
  body: string;
  postedBy: string;
}

export interface IPostService {
  getAll(): Promise<Post[]>;
  save(post: Post): Promise<void>;
}

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
      })
    })
  }
  save(post: Post): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then((posts) => {
        posts.push(post);
        fs.writeFile(this._filename, JSON.stringify(posts), err => {
          if(err) {
            reject(err);
          } else {
            resolve();
          }
        });
      })
    })
  }
}

export class MockPostService implements IPostService {
  posts: Post[] = [];

  constructor() {
    this.posts = [
      { id: 1, title: 'Test Post 1', body: 'Test Post 1', postedBy: 'me'},
      { id: 1, title: 'Test Post 2', body: 'Test Post 2', postedBy: 'me'},
      { id: 1, title: 'Test Post 3', body: 'Test Post 3', postedBy: 'me'},
      { id: 1, title: 'Test Post 4', body: 'Test Post 4', postedBy: 'me'}
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
}

export class NewsFeed {
  constructor(private _service: IPostService) {}

  show() {
    this._service.getAll().then((posts) => {
      posts.forEach((post) => {
        console.log(`${post.title}-${post.body}`);
      })
    })
  }
}

const newsFeed = new NewsFeed(new PostService());