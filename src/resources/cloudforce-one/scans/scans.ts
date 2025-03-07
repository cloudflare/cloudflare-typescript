// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ConfigAPI from './config';
import {
  Config,
  ConfigCreateParams,
  ConfigCreateResponse,
  ConfigDeleteParams,
  ConfigDeleteResponse,
  ConfigListParams,
  ConfigListResponse,
} from './config';
import * as ResultsAPI from './results';
import { ResultListParams, ResultListResponse, Results } from './results';

export class Scans extends APIResource {
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

Scans.Results = Results;
Scans.Config = Config;

export declare namespace Scans {
  export {
    Results as Results,
    type ResultListResponse as ResultListResponse,
    type ResultListParams as ResultListParams,
  };

  export {
    Config as Config,
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
  };
}
