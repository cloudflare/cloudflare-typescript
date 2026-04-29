// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigsAPI from './configs';
import { BaseConfigs, Configs } from './configs';

export class BaseHistory extends APIResource {
  static override readonly _key: readonly ['zaraz', 'history'] = Object.freeze(['zaraz', 'history'] as const);
}
export class History extends BaseHistory {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

History.Configs = Configs;
History.BaseConfigs = BaseConfigs;

export declare namespace History {
  export { Configs as Configs, BaseConfigs as BaseConfigs };
}
