// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigAPI from './config';
import { BaseConfig, Config } from './config';
import * as ResultsAPI from './results';
import { BaseResults, Results } from './results';

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
  export { Results as Results, BaseResults as BaseResults };

  export { Config as Config, BaseConfig as BaseConfig };
}
