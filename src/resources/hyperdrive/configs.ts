// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HyperdriveAPI from './hyperdrive';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Configs extends APIResource {
  /**
   * Creates and returns a new Hyperdrive configuration.
   */
  create(params: ConfigCreateParams, options?: RequestOptions): APIPromise<ConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/hyperdrive/configs`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConfigCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Hyperdrive configuration.
   */
  update(
    hyperdriveID: string,
    params: ConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConfigUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/hyperdrive/configs/${hyperdriveID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConfigUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Hyperdrives
   */
  list(
    params: ConfigListParams,
    options?: RequestOptions,
  ): PagePromise<ConfigListResponsesSinglePage, ConfigListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/hyperdrive/configs`,
      SinglePage<ConfigListResponse>,
      options,
    );
  }

  /**
   * Deletes the specified Hyperdrive.
   */
  delete(
    hyperdriveID: string,
    params: ConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConfigDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/hyperdrive/configs/${hyperdriveID}`,
        options,
      ) as APIPromise<{ result: ConfigDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patches and returns the specified Hyperdrive configuration. Custom caching
   * settings are not kept if caching is disabled.
   */
  edit(
    hyperdriveID: string,
    params: ConfigEditParams,
    options?: RequestOptions,
  ): APIPromise<ConfigEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/hyperdrive/configs/${hyperdriveID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConfigEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Hyperdrive configuration.
   */
  get(
    hyperdriveID: string,
    params: ConfigGetParams,
    options?: RequestOptions,
  ): APIPromise<ConfigGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/hyperdrive/configs/${hyperdriveID}`,
        options,
      ) as APIPromise<{ result: ConfigGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConfigListResponsesSinglePage = SinglePage<ConfigListResponse>;

export interface ConfigCreateResponse extends HyperdriveAPI.Hyperdrive {
  /**
   * When the Hyperdrive configuration was created.
   */
  created_on?: string;

  /**
   * When the Hyperdrive configuration was last modified.
   */
  modified_on?: string;
}

export interface ConfigUpdateResponse extends HyperdriveAPI.Hyperdrive {
  /**
   * When the Hyperdrive configuration was created.
   */
  created_on?: string;

  /**
   * When the Hyperdrive configuration was last modified.
   */
  modified_on?: string;
}

export interface ConfigListResponse extends HyperdriveAPI.Hyperdrive {
  /**
   * When the Hyperdrive configuration was created.
   */
  created_on?: string;

  /**
   * When the Hyperdrive configuration was last modified.
   */
  modified_on?: string;
}

export type ConfigDeleteResponse = unknown;

export interface ConfigEditResponse extends HyperdriveAPI.Hyperdrive {
  /**
   * When the Hyperdrive configuration was created.
   */
  created_on?: string;

  /**
   * When the Hyperdrive configuration was last modified.
   */
  modified_on?: string;
}

export interface ConfigGetResponse extends HyperdriveAPI.Hyperdrive {
  /**
   * When the Hyperdrive configuration was created.
   */
  created_on?: string;

  /**
   * When the Hyperdrive configuration was last modified.
   */
  modified_on?: string;
}

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
     * The Client ID of the Access token to use when connecting to the origin database.
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
     * The Client ID of the Access token to use when connecting to the origin database.
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
     * The Client ID of the Access token to use when connecting to the origin database.
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
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigEditResponse as ConfigEditResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigListResponsesSinglePage as ConfigListResponsesSinglePage,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
