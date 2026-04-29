// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigAPI from './config';
import { Config } from './config';
import * as DefaultAPI from './default';
import { Default } from './default';
import * as ExportAPI from './export';
import { Export } from './export';
import * as PublishAPI from './publish';
import { Publish } from './publish';
import * as WorkflowAPI from './workflow';
import { Workflow } from './workflow';
import * as HistoryAPI from './history/history';
import { History } from './history/history';

export class Zaraz extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  publish: PublishAPI.Publish = new PublishAPI.Publish(this._client);
  workflow: WorkflowAPI.Workflow = new WorkflowAPI.Workflow(this._client);
}

Zaraz.Config = Config;
Zaraz.Default = Default;
Zaraz.Export = Export;
Zaraz.History = History;
Zaraz.Publish = Publish;
Zaraz.Workflow = Workflow;

export declare namespace Zaraz {
  export { Config as Config };

  export { Default as Default };

  export { Export as Export };

  export { History as History };

  export { Publish as Publish };

  export { Workflow as Workflow };
}
