// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ConfigAPI from './config';

export class Cmb extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

export namespace Cmb {
  export import Config = ConfigAPI.Config;
  export type CmbConfig = ConfigAPI.CmbConfig;
  export type ConfigDeleteResponse = ConfigAPI.ConfigDeleteResponse;
  export type ConfigCreateParams = ConfigAPI.ConfigCreateParams;
  export type ConfigDeleteParams = ConfigAPI.ConfigDeleteParams;
  export type ConfigGetParams = ConfigAPI.ConfigGetParams;
}
