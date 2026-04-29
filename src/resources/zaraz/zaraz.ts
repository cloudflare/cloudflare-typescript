// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import { BaseConfig, Config } from './config';
import * as DefaultAPI from './default';
import { BaseDefault, Default } from './default';
import * as ExportAPI from './export';
import { BaseExport, Export } from './export';
import * as PublishAPI from './publish';
import { BasePublish, Publish } from './publish';
import * as WorkflowAPI from './workflow';
import { BaseWorkflow, Workflow } from './workflow';
import * as HistoryAPI from './history/history';
import { BaseHistory, History } from './history/history';

export class BaseZaraz extends APIResource {
  static override readonly _key: readonly ['zaraz'] = Object.freeze(['zaraz'] as const);
}
export class Zaraz extends BaseZaraz {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  publish: PublishAPI.Publish = new PublishAPI.Publish(this._client);
  workflow: WorkflowAPI.Workflow = new WorkflowAPI.Workflow(this._client);
}

Zaraz.Config = Config;
Zaraz.BaseConfig = BaseConfig;
Zaraz.Default = Default;
Zaraz.BaseDefault = BaseDefault;
Zaraz.Export = Export;
Zaraz.BaseExport = BaseExport;
Zaraz.History = History;
Zaraz.BaseHistory = BaseHistory;
Zaraz.Publish = Publish;
Zaraz.BasePublish = BasePublish;
Zaraz.Workflow = Workflow;
Zaraz.BaseWorkflow = BaseWorkflow;

export declare namespace Zaraz {
  export { Config as Config, BaseConfig as BaseConfig };

  export { Default as Default, BaseDefault as BaseDefault };

  export { Export as Export, BaseExport as BaseExport };

  export { History as History, BaseHistory as BaseHistory };

  export { Publish as Publish, BasePublish as BasePublish };

  export { Workflow as Workflow, BaseWorkflow as BaseWorkflow };
}
