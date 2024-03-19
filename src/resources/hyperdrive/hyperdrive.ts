// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/hyperdrive/configs';

export class Hyperdrive extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export namespace Hyperdrive {
  export import Configs = ConfigsAPI.Configs;
  export import HyperdriveHyperdriveWithIdentifier = ConfigsAPI.HyperdriveHyperdriveWithIdentifier;
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigUpdateResponse = ConfigsAPI.ConfigUpdateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigEditResponse = ConfigsAPI.ConfigEditResponse;
  export import ConfigGetResponse = ConfigsAPI.ConfigGetResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import ConfigListParams = ConfigsAPI.ConfigListParams;
  export import ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export import ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export import ConfigGetParams = ConfigsAPI.ConfigGetParams;
}
