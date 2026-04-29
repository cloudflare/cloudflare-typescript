// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthorsAPI from './authors';
import { Authors, BaseAuthors } from './authors';
import * as TasksAPI from './tasks';
import { BaseTasks, Tasks } from './tasks';
import * as ToMarkdownAPI from './to-markdown';
import { BaseToMarkdown, ToMarkdown } from './to-markdown';
import * as FinetunesAPI from './finetunes/finetunes';
import { BaseFinetunes, Finetunes } from './finetunes/finetunes';
import * as ModelsAPI from './models/models';
import { BaseModels, Models } from './models/models';

export class BaseAI extends APIResource {
  static override readonly _key: readonly ['ai'] = Object.freeze(['ai'] as const);
}
export class AI extends BaseAI {
  finetunes: FinetunesAPI.Finetunes = new FinetunesAPI.Finetunes(this._client);
  authors: AuthorsAPI.Authors = new AuthorsAPI.Authors(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  toMarkdown: ToMarkdownAPI.ToMarkdown = new ToMarkdownAPI.ToMarkdown(this._client);
}

AI.Finetunes = Finetunes;
AI.BaseFinetunes = BaseFinetunes;
AI.Authors = Authors;
AI.BaseAuthors = BaseAuthors;
AI.Tasks = Tasks;
AI.BaseTasks = BaseTasks;
AI.Models = Models;
AI.BaseModels = BaseModels;
AI.ToMarkdown = ToMarkdown;
AI.BaseToMarkdown = BaseToMarkdown;

export declare namespace AI {
  export { Finetunes as Finetunes, BaseFinetunes as BaseFinetunes };

  export { Authors as Authors, BaseAuthors as BaseAuthors };

  export { Tasks as Tasks, BaseTasks as BaseTasks };

  export { Models as Models, BaseModels as BaseModels };

  export { ToMarkdown as ToMarkdown, BaseToMarkdown as BaseToMarkdown };
}
