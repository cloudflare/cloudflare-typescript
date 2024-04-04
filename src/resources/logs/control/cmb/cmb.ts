// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConfigAPI from 'cloudflare/resources/logs/control/cmb/config';

export class Cmb extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

export namespace Cmb {
  export import Config = ConfigAPI.Config;
  export import CmbConfig = ConfigAPI.CmbConfig;
  export import ConfigCreateParams = ConfigAPI.ConfigCreateParams;
  export import ConfigDeleteParams = ConfigAPI.ConfigDeleteParams;
  export import ConfigGetParams = ConfigAPI.ConfigGetParams;
}
