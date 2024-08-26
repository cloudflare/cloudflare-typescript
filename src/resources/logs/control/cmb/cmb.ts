// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { Config } from './config';
import * as ConfigAPI from './config';

export class Cmb extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

export namespace Cmb {
  export import Config = ConfigAPI.Config;
  export import CmbConfig = ConfigAPI.CmbConfig;
  export import ConfigDeleteResponse = ConfigAPI.ConfigDeleteResponse;
  export import ConfigCreateParams = ConfigAPI.ConfigCreateParams;
  export import ConfigDeleteParams = ConfigAPI.ConfigDeleteParams;
  export import ConfigGetParams = ConfigAPI.ConfigGetParams;
}
