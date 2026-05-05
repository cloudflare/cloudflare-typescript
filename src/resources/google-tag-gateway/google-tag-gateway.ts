// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import { BaseConfigResource, Config, ConfigGetParams, ConfigResource, ConfigUpdateParams } from './config';

export class BaseGoogleTagGateway extends APIResource {
  static override readonly _key: readonly ['googleTagGateway'] = Object.freeze(['googleTagGateway'] as const);
}
export class GoogleTagGateway extends BaseGoogleTagGateway {
  config: ConfigAPI.ConfigResource = new ConfigAPI.ConfigResource(this._client);
}

GoogleTagGateway.ConfigResource = ConfigResource;
GoogleTagGateway.BaseConfigResource = BaseConfigResource;

export declare namespace GoogleTagGateway {
  export {
    ConfigResource as ConfigResource,
    BaseConfigResource as BaseConfigResource,
    type Config as Config,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
