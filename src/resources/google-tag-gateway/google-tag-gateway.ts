// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import { BaseConfig, Config } from './config';

export class BaseGoogleTagGateway extends APIResource {
  static override readonly _key: readonly ['googleTagGateway'] = Object.freeze(['googleTagGateway'] as const);
}
export class GoogleTagGateway extends BaseGoogleTagGateway {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

GoogleTagGateway.Config = Config;
GoogleTagGateway.BaseConfig = BaseConfig;

export declare namespace GoogleTagGateway {
  export { Config as Config, BaseConfig as BaseConfig };
}
