// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DatasetsAPI from './datasets';
import { BaseDatasets, Datasets } from './datasets';
import * as DynamicRoutingAPI from './dynamic-routing';
import { BaseDynamicRouting, DynamicRouting } from './dynamic-routing';
import * as EvaluationTypesAPI from './evaluation-types';
import { BaseEvaluationTypes, EvaluationTypes } from './evaluation-types';
import * as EvaluationsAPI from './evaluations';
import { BaseEvaluations, Evaluations } from './evaluations';
import * as LogsAPI from './logs';
import { BaseLogs, Logs } from './logs';
import * as ProviderConfigsAPI from './provider-configs';
import { BaseProviderConfigs, ProviderConfigs } from './provider-configs';
import * as URLsAPI from './urls';
import { BaseURLs, URLs } from './urls';

export class BaseAIGateway extends APIResource {
  static override readonly _key: readonly ['aiGateway'] = Object.freeze(['aiGateway'] as const);
}
export class AIGateway extends BaseAIGateway {
  evaluationTypes: EvaluationTypesAPI.EvaluationTypes = new EvaluationTypesAPI.EvaluationTypes(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  evaluations: EvaluationsAPI.Evaluations = new EvaluationsAPI.Evaluations(this._client);
  dynamicRouting: DynamicRoutingAPI.DynamicRouting = new DynamicRoutingAPI.DynamicRouting(this._client);
  providerConfigs: ProviderConfigsAPI.ProviderConfigs = new ProviderConfigsAPI.ProviderConfigs(this._client);
  urls: URLsAPI.URLs = new URLsAPI.URLs(this._client);
}

AIGateway.EvaluationTypes = EvaluationTypes;
AIGateway.BaseEvaluationTypes = BaseEvaluationTypes;
AIGateway.Logs = Logs;
AIGateway.BaseLogs = BaseLogs;
AIGateway.Datasets = Datasets;
AIGateway.BaseDatasets = BaseDatasets;
AIGateway.Evaluations = Evaluations;
AIGateway.BaseEvaluations = BaseEvaluations;
AIGateway.DynamicRouting = DynamicRouting;
AIGateway.BaseDynamicRouting = BaseDynamicRouting;
AIGateway.ProviderConfigs = ProviderConfigs;
AIGateway.BaseProviderConfigs = BaseProviderConfigs;
AIGateway.URLs = URLs;
AIGateway.BaseURLs = BaseURLs;

export declare namespace AIGateway {
  export { EvaluationTypes as EvaluationTypes, BaseEvaluationTypes as BaseEvaluationTypes };

  export { Logs as Logs, BaseLogs as BaseLogs };

  export { Datasets as Datasets, BaseDatasets as BaseDatasets };

  export { Evaluations as Evaluations, BaseEvaluations as BaseEvaluations };

  export { DynamicRouting as DynamicRouting, BaseDynamicRouting as BaseDynamicRouting };

  export { ProviderConfigs as ProviderConfigs, BaseProviderConfigs as BaseProviderConfigs };

  export { URLs as URLs, BaseURLs as BaseURLs };
}
