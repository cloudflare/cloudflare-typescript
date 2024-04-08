// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/hyperdrive/configs';
import { SinglePage } from 'cloudflare/pagination';

export class HyperdriveResource extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export class HyperdrivesSinglePage extends SinglePage<Hyperdrive> {}

export interface Configuration {
  /**
   * The password required to access your origin database. This value is write-only
   * and never returned by the API.
   */
  password: string;
}

export interface Hyperdrive {
  /**
   * Identifier
   */
  id?: string;
}

export namespace HyperdriveResource {
  export import Configs = ConfigsAPI.Configs;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import ConfigListParams = ConfigsAPI.ConfigListParams;
  export import ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export import ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export import ConfigGetParams = ConfigsAPI.ConfigGetParams;
}
