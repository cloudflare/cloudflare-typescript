// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/hyperdrive/configs';

export class Hyperdrive extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export namespace Hyperdrive {
  export import Configs = ConfigsAPI.Configs;
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigGetResponse = ConfigsAPI.ConfigGetResponse;
  export import ConfigReplaceResponse = ConfigsAPI.ConfigReplaceResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigReplaceParams = ConfigsAPI.ConfigReplaceParams;
}
