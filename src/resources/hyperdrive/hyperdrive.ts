// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Configs } from './configs';
import * as HyperdriveAPI from './hyperdrive';
import * as ConfigsAPI from './configs';
import { SinglePage } from '../../pagination';

export class HyperdriveResource extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export class HyperdrivesSinglePage extends SinglePage<Hyperdrive> {
}

export interface Configuration {
  /**
   * The name of your origin database.
   */
  database: string;

  /**
   * The host (hostname or IP) of your origin database.
   */
  host: string;

  /**
   * Specifies the URL scheme used to connect to your origin database.
   */
  scheme: 'postgres' | 'postgresql' | 'mysql';

  /**
   * The user of your origin database.
   */
  user: string;

  /**
   * The Client ID of the Access token to use when connecting to the origin database
   */
  access_client_id?: string;

  /**
   * The port (default: 5432 for Postgres) of your origin database.
   */
  port?: number;
}

export interface ConfigurationParam {
  /**
   * The name of your origin database.
   */
  database: string;

  /**
   * The host (hostname or IP) of your origin database.
   */
  host: string;

  /**
   * Specifies the URL scheme used to connect to your origin database.
   */
  scheme: 'postgres' | 'postgresql' | 'mysql';

  /**
   * The user of your origin database.
   */
  user: string;

  /**
   * The Client ID of the Access token to use when connecting to the origin database
   */
  access_client_id?: string;

  /**
   * The port (default: 5432 for Postgres) of your origin database.
   */
  port?: number;
}

export interface Hyperdrive {
  caching?: Hyperdrive.Caching;

  name?: string;

  origin?: Configuration;
}

export namespace Hyperdrive {
  export interface Caching {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;

    /**
     * When present, specifies max duration for which items should persist in the
     * cache. (Default: 60)
     */
    max_age?: number;

    /**
     * When present, indicates the number of seconds cache may serve the response after
     * it becomes stale. (Default: 15)
     */
    stale_while_revalidate?: number;
  }
}

export namespace HyperdriveResource {
  export import Configs = ConfigsAPI.Configs;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import ConfigListParams = ConfigsAPI.ConfigListParams;
  export import ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export import ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export import ConfigGetParams = ConfigsAPI.ConfigGetParams;
}
