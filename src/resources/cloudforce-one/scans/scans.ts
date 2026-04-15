// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigAPI from './config';
import {
  BaseConfig,
  Config,
  ConfigCreateParams,
  ConfigCreateResponse,
  ConfigDeleteParams,
  ConfigDeleteResponse,
  ConfigEditParams,
  ConfigEditResponse,
  ConfigListParams,
  ConfigListResponse,
  ConfigListResponsesSinglePage,
} from './config';
import * as ResultsAPI from './results';
import { BaseResults, ResultGetParams, ResultGetResponse, Results, ScanResult } from './results';

export class BaseScans extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'scans'] = Object.freeze([
    'cloudforceOne',
    'scans',
  ] as const);
}
export class Scans extends BaseScans {
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

Scans.Results = Results;
Scans.BaseResults = BaseResults;
Scans.Config = Config;
Scans.BaseConfig = BaseConfig;

export declare namespace Scans {
  export {
    Results as Results,
    BaseResults as BaseResults,
    type ScanResult as ScanResult,
    type ResultGetResponse as ResultGetResponse,
    type ResultGetParams as ResultGetParams,
  };

  export {
    Config as Config,
    BaseConfig as BaseConfig,
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigEditResponse as ConfigEditResponse,
    type ConfigListResponsesSinglePage as ConfigListResponsesSinglePage,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
  };
}
