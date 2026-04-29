// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ConfigAPI from './config';
import { BaseConfig, Config } from './config';

export class BaseCmb extends APIResource {
  static override readonly _key: readonly ['logs', 'control', 'cmb'] = Object.freeze([
    'logs',
    'control',
    'cmb',
  ] as const);
}
export class Cmb extends BaseCmb {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

Cmb.Config = Config;
Cmb.BaseConfig = BaseConfig;

export declare namespace Cmb {
  export { Config as Config, BaseConfig as BaseConfig };
}
