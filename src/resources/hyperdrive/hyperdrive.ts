// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigsAPI from './configs';
import { BaseConfigs, Configs } from './configs';

export class BaseHyperdrive extends APIResource {
  static override readonly _key: readonly ['hyperdrive'] = Object.freeze(['hyperdrive'] as const);
}
export class Hyperdrive extends BaseHyperdrive {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

Hyperdrive.Configs = Configs;
Hyperdrive.BaseConfigs = BaseConfigs;

export declare namespace Hyperdrive {
  export { Configs as Configs, BaseConfigs as BaseConfigs };
}
