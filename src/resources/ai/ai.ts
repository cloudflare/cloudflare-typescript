// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuthorsAPI from './authors';
import { Authors } from './authors';
import * as TasksAPI from './tasks';
import { Tasks } from './tasks';
import * as ToMarkdownAPI from './to-markdown';
import { ToMarkdown } from './to-markdown';
import * as FinetunesAPI from './finetunes/finetunes';
import { Finetunes } from './finetunes/finetunes';
import * as ModelsAPI from './models/models';
import { Models } from './models/models';

export class AI extends APIResource {
  finetunes: FinetunesAPI.Finetunes = new FinetunesAPI.Finetunes(this._client);
  authors: AuthorsAPI.Authors = new AuthorsAPI.Authors(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  toMarkdown: ToMarkdownAPI.ToMarkdown = new ToMarkdownAPI.ToMarkdown(this._client);
}

AI.Finetunes = Finetunes;
AI.Authors = Authors;
AI.Tasks = Tasks;
AI.Models = Models;
AI.ToMarkdown = ToMarkdown;

export declare namespace AI {
  export { Finetunes as Finetunes };

  export { Authors as Authors };

  export { Tasks as Tasks };

  export { Models as Models };

  export { ToMarkdown as ToMarkdown };
}
