// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigAPI from './config';
import {
  Config,
  ConfigCreateParams,
  ConfigCreateResponse,
  ConfigDeleteParams,
  ConfigDeleteResponse,
  ConfigGetParams,
  ConfigGetResponse,
} from './config';
import * as ResultsAPI from './results';
import { ResultListParams, ResultListResponse, Results } from './results';

export class PortScans extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);
}

PortScans.Config = Config;
PortScans.Results = Results;

export declare namespace PortScans {
  export {
    Config as Config,
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigGetParams as ConfigGetParams,
  };

  export {
    Results as Results,
    type ResultListResponse as ResultListResponse,
    type ResultListParams as ResultListParams,
  };
}
