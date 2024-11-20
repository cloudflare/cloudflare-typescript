// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HyperdriveAPI from './hyperdrive';
import { HyperdrivesSinglePage } from './hyperdrive';

export class Configs extends APIResource {
  /**
   * Creates and returns a new Hyperdrive configuration.
   */
  create(
    params: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/hyperdrive/configs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Hyperdrive configuration.
   */
  update(
    hyperdriveId: string,
    params: ConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Hyperdrives
   */
  list(
    params: ConfigListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HyperdrivesSinglePage, HyperdriveAPI.Hyperdrive> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/hyperdrive/configs`,
      HyperdrivesSinglePage,
      options,
    );
  }

  /**
   * Deletes the specified Hyperdrive.
   */
  delete(
    hyperdriveId: string,
    params: ConfigDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patches and returns the specified Hyperdrive configuration. Custom caching
   * settings are not kept if caching is disabled.
   */
  edit(
    hyperdriveId: string,
    params: ConfigEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Hyperdrive configuration.
   */
  get(
    hyperdriveId: string,
    params: ConfigGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConfigDeleteResponse = unknown;

export interface ConfigCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  origin:
    | ConfigCreateParams.PublicDatabase
    | ConfigCreateParams.AccessProtectedDatabaseBehindCloudflareTunnel;

  /**
   * Body param:
   */
  caching?:
    | ConfigCreateParams.HyperdriveHyperdriveCachingCommon
    | ConfigCreateParams.HyperdriveHyperdriveCachingEnabled;
}

export namespace ConfigCreateParams {
  export interface PublicDatabase {
    /**
     * The name of your origin database.
     */
    database: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;

    /**
     * The port (default: 5432 for Postgres) of your origin database.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * The Client ID of the Access token to use when connecting to the origin database
     */
    access_client_id: string;

    /**
     * The Client Secret of the Access token to use when connecting to the origin
     * database. This value is write-only and never returned by the API.
     */
    access_client_secret: string;

    /**
     * The name of your origin database.
     */
    database: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user: string;
  }

  export interface HyperdriveHyperdriveCachingCommon {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;
  }

  export interface HyperdriveHyperdriveCachingEnabled {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;

    /**
     * When present, specifies max duration for which items should persist in the
     * cache. Not returned if set to default. (Default: 60)
     */
    max_age?: number;

    /**
     * When present, indicates the number of seconds cache may serve the response after
     * it becomes stale. Not returned if set to default. (Default: 15)
     */
    stale_while_revalidate?: number;
  }
}

export interface ConfigUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  origin:
    | ConfigUpdateParams.PublicDatabase
    | ConfigUpdateParams.AccessProtectedDatabaseBehindCloudflareTunnel;

  /**
   * Body param:
   */
  caching?:
    | ConfigUpdateParams.HyperdriveHyperdriveCachingCommon
    | ConfigUpdateParams.HyperdriveHyperdriveCachingEnabled;
}

export namespace ConfigUpdateParams {
  export interface PublicDatabase {
    /**
     * The name of your origin database.
     */
    database: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;

    /**
     * The port (default: 5432 for Postgres) of your origin database.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * The Client ID of the Access token to use when connecting to the origin database
     */
    access_client_id: string;

    /**
     * The Client Secret of the Access token to use when connecting to the origin
     * database. This value is write-only and never returned by the API.
     */
    access_client_secret: string;

    /**
     * The name of your origin database.
     */
    database: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user: string;
  }

  export interface HyperdriveHyperdriveCachingCommon {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;
  }

  export interface HyperdriveHyperdriveCachingEnabled {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;

    /**
     * When present, specifies max duration for which items should persist in the
     * cache. Not returned if set to default. (Default: 60)
     */
    max_age?: number;

    /**
     * When present, indicates the number of seconds cache may serve the response after
     * it becomes stale. Not returned if set to default. (Default: 15)
     */
    stale_while_revalidate?: number;
  }
}

export interface ConfigListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ConfigDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ConfigEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  caching?:
    | ConfigEditParams.HyperdriveHyperdriveCachingCommon
    | ConfigEditParams.HyperdriveHyperdriveCachingEnabled;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  origin?:
    | ConfigEditParams.HyperdriveHyperdriveDatabase
    | ConfigEditParams.HyperdriveHyperdriveInternetOrigin
    | ConfigEditParams.HyperdriveHyperdriveOverAccessOrigin;
}

export namespace ConfigEditParams {
  export interface HyperdriveHyperdriveCachingCommon {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;
  }

  export interface HyperdriveHyperdriveCachingEnabled {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;

    /**
     * When present, specifies max duration for which items should persist in the
     * cache. Not returned if set to default. (Default: 60)
     */
    max_age?: number;

    /**
     * When present, indicates the number of seconds cache may serve the response after
     * it becomes stale. Not returned if set to default. (Default: 15)
     */
    stale_while_revalidate?: number;
  }

  export interface HyperdriveHyperdriveDatabase {
    /**
     * The name of your origin database.
     */
    database?: string;

    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password?: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme?: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user?: string;
  }

  export interface HyperdriveHyperdriveInternetOrigin {
    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * The port (default: 5432 for Postgres) of your origin database.
     */
    port: number;
  }

  export interface HyperdriveHyperdriveOverAccessOrigin {
    /**
     * The Client ID of the Access token to use when connecting to the origin database
     */
    access_client_id: string;

    /**
     * The Client Secret of the Access token to use when connecting to the origin
     * database. This value is write-only and never returned by the API.
     */
    access_client_secret: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host: string;
  }
}

export interface ConfigGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Configs {
  export {
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };
}

export { HyperdrivesSinglePage };
