/*
  What is loose coupling ?
    Softwares part that communicate with each other have little to no knowledge
    of each other's actual implementation.

  What to use ?
    Single Responsibilty principle
    Sepration of concerns
    Factory pattern/object pool
    Dependency Injection
  Advantages
    Easier to work with large project
    Swap Implementation
    Testability
    Components grow independently

*/


import { PostService } from './4. post-service';
import { NewsFeed } from './4. news-feed';
import { MockPostService } from './4. mock-post-service';
import { JSONExportService } from './4 .json-export-service';

let mockService = new MockPostService();
mockService.export(new JSONExportService());