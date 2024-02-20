// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConfigAPI from 'cloudflare/resources/logs/controls/cmb/config';

export class Cmb extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

export namespace Cmb {
  export import Config = ConfigAPI.Config;
  export import ConfigCreateResponse = ConfigAPI.ConfigCreateResponse;
  export import ConfigDeleteResponse = ConfigAPI.ConfigDeleteResponse;
  export import ConfigGetResponse = ConfigAPI.ConfigGetResponse;
  export import ConfigCreateParams = ConfigAPI.ConfigCreateParams;
}
