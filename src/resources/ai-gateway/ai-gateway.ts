// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatasetsAPI from './datasets';
import { Datasets } from './datasets';
import * as DynamicRoutingAPI from './dynamic-routing';
import { DynamicRouting } from './dynamic-routing';
import * as EvaluationTypesAPI from './evaluation-types';
import { EvaluationTypes } from './evaluation-types';
import * as EvaluationsAPI from './evaluations';
import { Evaluations } from './evaluations';
import * as LogsAPI from './logs';
import { Logs } from './logs';
import * as ProviderConfigsAPI from './provider-configs';
import { ProviderConfigs } from './provider-configs';
import * as URLsAPI from './urls';
import { URLs } from './urls';

export class AIGateway extends APIResource {
  evaluationTypes: EvaluationTypesAPI.EvaluationTypes = new EvaluationTypesAPI.EvaluationTypes(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  evaluations: EvaluationsAPI.Evaluations = new EvaluationsAPI.Evaluations(this._client);
  dynamicRouting: DynamicRoutingAPI.DynamicRouting = new DynamicRoutingAPI.DynamicRouting(this._client);
  providerConfigs: ProviderConfigsAPI.ProviderConfigs = new ProviderConfigsAPI.ProviderConfigs(this._client);
  urls: URLsAPI.URLs = new URLsAPI.URLs(this._client);
}

AIGateway.EvaluationTypes = EvaluationTypes;
AIGateway.Logs = Logs;
AIGateway.Datasets = Datasets;
AIGateway.Evaluations = Evaluations;
AIGateway.DynamicRouting = DynamicRouting;
AIGateway.ProviderConfigs = ProviderConfigs;
AIGateway.URLs = URLs;

export declare namespace AIGateway {
  export { EvaluationTypes as EvaluationTypes };

  export { Logs as Logs };

  export { Datasets as Datasets };

  export { Evaluations as Evaluations };

  export { DynamicRouting as DynamicRouting };

  export { ProviderConfigs as ProviderConfigs };

  export { URLs as URLs };
}
