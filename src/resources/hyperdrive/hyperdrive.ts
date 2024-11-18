// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigsAPI from './configs';
import {
  ConfigCreateParams,
  ConfigCreateResponse,
  ConfigDeleteParams,
  ConfigDeleteResponse,
  ConfigEditParams,
  ConfigEditResponse,
  ConfigGetParams,
  ConfigGetResponse,
  ConfigListParams,
  ConfigListResponse,
  ConfigListResponsesSinglePage,
  ConfigUpdateParams,
  ConfigUpdateResponse,
  Configs,
} from './configs';

export class Hyperdrive extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export type Configuration =
  | Configuration.HyperdriveHyperdriveInternetOrigin
  | Configuration.HyperdriveHyperdriveOverAccessOrigin;

export namespace Configuration {
  export interface HyperdriveHyperdriveInternetOrigin {
    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The port (default: 5432 for Postgres) of your origin database.
     */
    port: number;

    /**
     * The name of your origin database.
     */
    database?: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme?: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user?: string;
  }

  export interface HyperdriveHyperdriveOverAccessOrigin {
    /**
     * The Client ID of the Access token to use when connecting to the origin database
     */
    access_client_id: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The name of your origin database.
     */
    database?: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme?: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user?: string;
  }
}

Hyperdrive.Configs = Configs;
Hyperdrive.ConfigListResponsesSinglePage = ConfigListResponsesSinglePage;

export declare namespace Hyperdrive {
  export {
    Configs as Configs,
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigEditResponse as ConfigEditResponse,
    type ConfigGetResponse as ConfigGetResponse,
    ConfigListResponsesSinglePage as ConfigListResponsesSinglePage,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
