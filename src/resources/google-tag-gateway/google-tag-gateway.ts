// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigAPI from './config';
import { Config, ConfigGetParams, ConfigResource, ConfigUpdateParams } from './config';

export class GoogleTagGateway extends APIResource {
  config: ConfigAPI.ConfigResource = new ConfigAPI.ConfigResource(this._client);
}

GoogleTagGateway.ConfigResource = ConfigResource;

export declare namespace GoogleTagGateway {
  export {
    ConfigResource as ConfigResource,
    type Config as Config,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
