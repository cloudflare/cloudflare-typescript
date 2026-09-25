// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseConfigs extends APIResource {
  static override readonly _key: readonly ['hyperdrive', 'configs'] = Object.freeze([
    'hyperdrive',
    'configs',
  ] as const);

  /**
   * Creates and returns a new Hyperdrive configuration. For a PlanetScale
   * integration, the Cloudflare account must already be linked to PlanetScale in the
   * Hyperdrive dashboard.
   *
   * @example
   * ```ts
   * const config = await client.hyperdrive.configs.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'example-hyperdrive',
   *   origin: {
   *     database: 'postgres',
   *     host: 'database.example.com',
   *     password: 'password',
   *     port: 5432,
   *     scheme: 'postgres',
   *     user: 'postgres',
   *   },
   * });
   * ```
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
   * Replaces and returns the specified Hyperdrive configuration. The request must
   * include the name and complete origin connection details. Omitted caching
   * settings are reset to their defaults, while omitted mTLS settings and origin
   * connection limits are preserved. Use the update operation to modify only
   * selected fields.
   *
   * @example
   * ```ts
   * const config = await client.hyperdrive.configs.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'example-hyperdrive',
   *     origin: {
   *       database: 'postgres',
   *       host: 'database.example.com',
   *       password: 'password',
   *       port: 5432,
   *       scheme: 'postgres',
   *       user: 'postgres',
   *     },
   *   },
   * );
   * ```
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
   * Returns a list of Hyperdrives.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const configListResponse of client.hyperdrive.configs.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ConfigListParams,
    options?: RequestOptions,
  ): PagePromise<ConfigListResponsesV4PagePaginationArray, ConfigListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/hyperdrive/configs`,
      V4PagePaginationArray<ConfigListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes the specified Hyperdrive.
   *
   * @example
   * ```ts
   * const config = await client.hyperdrive.configs.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
   * Updates and returns the specified fields of the Hyperdrive configuration. Custom
   * caching settings are not kept if caching is disabled.
   *
   * @example
   * ```ts
   * const response = await client.hyperdrive.configs.edit(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const config = await client.hyperdrive.configs.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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

  /**
   * Restarts the connection pool for the specified Hyperdrive configuration without
   * changing its configuration. Existing connections are drained and a new pool is
   * established at the edge.
   *
   * @example
   * ```ts
   * const response = await client.hyperdrive.configs.restart(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  restart(
    hyperdriveID: string,
    params: ConfigRestartParams,
    options?: RequestOptions,
  ): APIPromise<ConfigRestartResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/hyperdrive/configs/${hyperdriveID}/restart`,
        options,
      ) as APIPromise<{ result: ConfigRestartResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Configs extends BaseConfigs {}

export type ConfigListResponsesV4PagePaginationArray = V4PagePaginationArray<ConfigListResponse>;

export interface ConfigCreateResponse {
  /**
   * Define configurations using a unique string identifier.
   */
  id: string;

  caching: ConfigCreateResponse.Caching;

  /**
   * The name of the Hyperdrive configuration. Used to identify the configuration in
   * the Cloudflare dashboard and API.
   */
  name: string;

  /**
   * Combines database connection fields with exactly one supported network location.
   */
  origin:
    | ConfigCreateResponse.PublicDatabase
    | ConfigCreateResponse.AccessProtectedDatabaseBehindCloudflareTunnel
    | ConfigCreateResponse.DatabaseReachableThroughAWorkersVPC;

  /**
   * Defines the creation time of the Hyperdrive configuration.
   */
  created_on?: string;

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  integration?: ConfigCreateResponse.Integration;

  /**
   * Defines the last modified time of the Hyperdrive configuration.
   */
  modified_on?: string;

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigCreateResponse.MTLS;

  /**
   * The (soft) maximum number of connections the Hyperdrive is allowed to make to
   * the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;

  /**
   * Defines the last time the Hyperdrive connection pool was explicitly restarted
   * via the restart endpoint. Omitted if the pool has never been explicitly
   * restarted.
   */
  restarted_on?: string | null;
}

export namespace ConfigCreateResponse {
  export interface Caching {
    /**
     * Defines whether caching is disabled.
     */
    disabled: boolean;

    /**
     * Defines the maximum duration (in seconds) items persist in the cache.
     */
    max_age?: number;

    /**
     * Defines the number of seconds the cache may serve a stale response.
     */
    stale_while_revalidate?: number;
  }

  export interface PublicDatabase {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface DatabaseReachableThroughAWorkersVPC {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  export interface Integration {
    /**
     * The name of the PlanetScale database branch.
     */
    database_branch_name: string;

    /**
     * The name of the PlanetScale database.
     */
    database_name: string;

    /**
     * The database integration used by this operation.
     */
    integration: 'planetscale';

    /**
     * The name of the PlanetScale organization.
     */
    organization_name: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The database name to use when connecting. Defaults to `postgres` for PostgreSQL
     * and `mysql` for MySQL.
     */
    custom_database_name?: string;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }
}

export interface ConfigUpdateResponse {
  /**
   * Define configurations using a unique string identifier.
   */
  id: string;

  caching: ConfigUpdateResponse.Caching;

  /**
   * The name of the Hyperdrive configuration. Used to identify the configuration in
   * the Cloudflare dashboard and API.
   */
  name: string;

  /**
   * Combines database connection fields with exactly one supported network location.
   */
  origin:
    | ConfigUpdateResponse.PublicDatabase
    | ConfigUpdateResponse.AccessProtectedDatabaseBehindCloudflareTunnel
    | ConfigUpdateResponse.DatabaseReachableThroughAWorkersVPC;

  /**
   * Defines the creation time of the Hyperdrive configuration.
   */
  created_on?: string;

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  integration?: ConfigUpdateResponse.Integration;

  /**
   * Defines the last modified time of the Hyperdrive configuration.
   */
  modified_on?: string;

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigUpdateResponse.MTLS;

  /**
   * The (soft) maximum number of connections the Hyperdrive is allowed to make to
   * the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;

  /**
   * Defines the last time the Hyperdrive connection pool was explicitly restarted
   * via the restart endpoint. Omitted if the pool has never been explicitly
   * restarted.
   */
  restarted_on?: string | null;
}

export namespace ConfigUpdateResponse {
  export interface Caching {
    /**
     * Defines whether caching is disabled.
     */
    disabled: boolean;

    /**
     * Defines the maximum duration (in seconds) items persist in the cache.
     */
    max_age?: number;

    /**
     * Defines the number of seconds the cache may serve a stale response.
     */
    stale_while_revalidate?: number;
  }

  export interface PublicDatabase {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface DatabaseReachableThroughAWorkersVPC {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  export interface Integration {
    /**
     * The name of the PlanetScale database branch.
     */
    database_branch_name: string;

    /**
     * The name of the PlanetScale database.
     */
    database_name: string;

    /**
     * The database integration used by this operation.
     */
    integration: 'planetscale';

    /**
     * The name of the PlanetScale organization.
     */
    organization_name: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The database name to use when connecting. Defaults to `postgres` for PostgreSQL
     * and `mysql` for MySQL.
     */
    custom_database_name?: string;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }
}

export interface ConfigListResponse {
  /**
   * Define configurations using a unique string identifier.
   */
  id: string;

  caching: ConfigListResponse.Caching;

  /**
   * The name of the Hyperdrive configuration. Used to identify the configuration in
   * the Cloudflare dashboard and API.
   */
  name: string;

  /**
   * Combines database connection fields with exactly one supported network location.
   */
  origin:
    | ConfigListResponse.PublicDatabase
    | ConfigListResponse.AccessProtectedDatabaseBehindCloudflareTunnel
    | ConfigListResponse.DatabaseReachableThroughAWorkersVPC;

  /**
   * Defines the creation time of the Hyperdrive configuration.
   */
  created_on?: string;

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  integration?: ConfigListResponse.Integration;

  /**
   * Defines the last modified time of the Hyperdrive configuration.
   */
  modified_on?: string;

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigListResponse.MTLS;

  /**
   * The (soft) maximum number of connections the Hyperdrive is allowed to make to
   * the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;

  /**
   * Defines the last time the Hyperdrive connection pool was explicitly restarted
   * via the restart endpoint. Omitted if the pool has never been explicitly
   * restarted.
   */
  restarted_on?: string | null;
}

export namespace ConfigListResponse {
  export interface Caching {
    /**
     * Defines whether caching is disabled.
     */
    disabled: boolean;

    /**
     * Defines the maximum duration (in seconds) items persist in the cache.
     */
    max_age?: number;

    /**
     * Defines the number of seconds the cache may serve a stale response.
     */
    stale_while_revalidate?: number;
  }

  export interface PublicDatabase {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface DatabaseReachableThroughAWorkersVPC {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  export interface Integration {
    /**
     * The name of the PlanetScale database branch.
     */
    database_branch_name: string;

    /**
     * The name of the PlanetScale database.
     */
    database_name: string;

    /**
     * The database integration used by this operation.
     */
    integration: 'planetscale';

    /**
     * The name of the PlanetScale organization.
     */
    organization_name: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The database name to use when connecting. Defaults to `postgres` for PostgreSQL
     * and `mysql` for MySQL.
     */
    custom_database_name?: string;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }
}

export type ConfigDeleteResponse = unknown;

export interface ConfigEditResponse {
  /**
   * Define configurations using a unique string identifier.
   */
  id: string;

  caching: ConfigEditResponse.Caching;

  /**
   * The name of the Hyperdrive configuration. Used to identify the configuration in
   * the Cloudflare dashboard and API.
   */
  name: string;

  /**
   * Combines database connection fields with exactly one supported network location.
   */
  origin:
    | ConfigEditResponse.PublicDatabase
    | ConfigEditResponse.AccessProtectedDatabaseBehindCloudflareTunnel
    | ConfigEditResponse.DatabaseReachableThroughAWorkersVPC;

  /**
   * Defines the creation time of the Hyperdrive configuration.
   */
  created_on?: string;

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  integration?: ConfigEditResponse.Integration;

  /**
   * Defines the last modified time of the Hyperdrive configuration.
   */
  modified_on?: string;

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigEditResponse.MTLS;

  /**
   * The (soft) maximum number of connections the Hyperdrive is allowed to make to
   * the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;

  /**
   * Defines the last time the Hyperdrive connection pool was explicitly restarted
   * via the restart endpoint. Omitted if the pool has never been explicitly
   * restarted.
   */
  restarted_on?: string | null;
}

export namespace ConfigEditResponse {
  export interface Caching {
    /**
     * Defines whether caching is disabled.
     */
    disabled: boolean;

    /**
     * Defines the maximum duration (in seconds) items persist in the cache.
     */
    max_age?: number;

    /**
     * Defines the number of seconds the cache may serve a stale response.
     */
    stale_while_revalidate?: number;
  }

  export interface PublicDatabase {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface DatabaseReachableThroughAWorkersVPC {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  export interface Integration {
    /**
     * The name of the PlanetScale database branch.
     */
    database_branch_name: string;

    /**
     * The name of the PlanetScale database.
     */
    database_name: string;

    /**
     * The database integration used by this operation.
     */
    integration: 'planetscale';

    /**
     * The name of the PlanetScale organization.
     */
    organization_name: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The database name to use when connecting. Defaults to `postgres` for PostgreSQL
     * and `mysql` for MySQL.
     */
    custom_database_name?: string;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }
}

export interface ConfigGetResponse {
  /**
   * Define configurations using a unique string identifier.
   */
  id: string;

  caching: ConfigGetResponse.Caching;

  /**
   * The name of the Hyperdrive configuration. Used to identify the configuration in
   * the Cloudflare dashboard and API.
   */
  name: string;

  /**
   * Combines database connection fields with exactly one supported network location.
   */
  origin:
    | ConfigGetResponse.PublicDatabase
    | ConfigGetResponse.AccessProtectedDatabaseBehindCloudflareTunnel
    | ConfigGetResponse.DatabaseReachableThroughAWorkersVPC;

  /**
   * Defines the creation time of the Hyperdrive configuration.
   */
  created_on?: string;

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  integration?: ConfigGetResponse.Integration;

  /**
   * Defines the last modified time of the Hyperdrive configuration.
   */
  modified_on?: string;

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigGetResponse.MTLS;

  /**
   * The (soft) maximum number of connections the Hyperdrive is allowed to make to
   * the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;

  /**
   * Defines the last time the Hyperdrive connection pool was explicitly restarted
   * via the restart endpoint. Omitted if the pool has never been explicitly
   * restarted.
   */
  restarted_on?: string | null;
}

export namespace ConfigGetResponse {
  export interface Caching {
    /**
     * Defines whether caching is disabled.
     */
    disabled: boolean;

    /**
     * Defines the maximum duration (in seconds) items persist in the cache.
     */
    max_age?: number;

    /**
     * Defines the number of seconds the cache may serve a stale response.
     */
    stale_while_revalidate?: number;
  }

  export interface PublicDatabase {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface DatabaseReachableThroughAWorkersVPC {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  export interface Integration {
    /**
     * The name of the PlanetScale database branch.
     */
    database_branch_name: string;

    /**
     * The name of the PlanetScale database.
     */
    database_name: string;

    /**
     * The database integration used by this operation.
     */
    integration: 'planetscale';

    /**
     * The name of the PlanetScale organization.
     */
    organization_name: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The database name to use when connecting. Defaults to `postgres` for PostgreSQL
     * and `mysql` for MySQL.
     */
    custom_database_name?: string;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }
}

export interface ConfigRestartResponse {
  /**
   * Define configurations using a unique string identifier.
   */
  id: string;

  caching: ConfigRestartResponse.Caching;

  /**
   * The name of the Hyperdrive configuration. Used to identify the configuration in
   * the Cloudflare dashboard and API.
   */
  name: string;

  /**
   * Combines database connection fields with exactly one supported network location.
   */
  origin:
    | ConfigRestartResponse.PublicDatabase
    | ConfigRestartResponse.AccessProtectedDatabaseBehindCloudflareTunnel
    | ConfigRestartResponse.DatabaseReachableThroughAWorkersVPC;

  /**
   * Defines the creation time of the Hyperdrive configuration.
   */
  created_on?: string;

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  integration?: ConfigRestartResponse.Integration;

  /**
   * Defines the last modified time of the Hyperdrive configuration.
   */
  modified_on?: string;

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigRestartResponse.MTLS;

  /**
   * The (soft) maximum number of connections the Hyperdrive is allowed to make to
   * the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;

  /**
   * Defines the last time the Hyperdrive connection pool was explicitly restarted
   * via the restart endpoint. Omitted if the pool has never been explicitly
   * restarted.
   */
  restarted_on?: string | null;
}

export namespace ConfigRestartResponse {
  export interface Caching {
    /**
     * Defines whether caching is disabled.
     */
    disabled: boolean;

    /**
     * Defines the maximum duration (in seconds) items persist in the cache.
     */
    max_age?: number;

    /**
     * Defines the number of seconds the cache may serve a stale response.
     */
    stale_while_revalidate?: number;
  }

  export interface PublicDatabase {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface DatabaseReachableThroughAWorkersVPC {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  /**
   * Connects to a PlanetScale database using credentials managed by Cloudflare. The
   * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
   * dashboard.
   */
  export interface Integration {
    /**
     * The name of the PlanetScale database branch.
     */
    database_branch_name: string;

    /**
     * The name of the PlanetScale database.
     */
    database_name: string;

    /**
     * The database integration used by this operation.
     */
    integration: 'planetscale';

    /**
     * The name of the PlanetScale organization.
     */
    organization_name: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The database name to use when connecting. Defaults to `postgres` for PostgreSQL
     * and `mysql` for MySQL.
     */
    custom_database_name?: string;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }
}

export type ConfigCreateParams =
  | ConfigCreateParams.HyperdriveHyperdriveConfigCreateWithOrigin
  | ConfigCreateParams.HyperdriveHyperdriveConfigCreateWithIntegration;

export declare namespace ConfigCreateParams {
  export interface HyperdriveHyperdriveConfigCreateWithOrigin {
    /**
     * Path param: The Cloudflare account ID.
     */
    account_id: string;

    /**
     * Body param: The name of the Hyperdrive configuration. Used to identify the
     * configuration in the Cloudflare dashboard and API.
     */
    name: string;

    /**
     * Body param: Combines database connection fields with exactly one supported
     * network location.
     */
    origin:
      | HyperdriveHyperdriveConfigCreateWithOrigin.PublicDatabase
      | HyperdriveHyperdriveConfigCreateWithOrigin.AccessProtectedDatabaseBehindCloudflareTunnel
      | HyperdriveHyperdriveConfigCreateWithOrigin.DatabaseReachableThroughAWorkersVPC;

    /**
     * Body param
     */
    caching?:
      | HyperdriveHyperdriveConfigCreateWithOrigin.HyperdriveHyperdriveCachingCreateDisabled
      | HyperdriveHyperdriveConfigCreateWithOrigin.HyperdriveHyperdriveCachingCreateEnabled;

    /**
     * Body param
     */
    integration?: unknown | null;

    /**
     * Body param: mTLS configuration for the origin connection. Cannot be used with
     * VPC Service origins; TLS must be managed on the VPC Service.
     */
    mtls?: HyperdriveHyperdriveConfigCreateWithOrigin.MTLS;

    /**
     * Body param: The (soft) maximum number of connections the Hyperdrive is allowed
     * to make to the origin database.
     *
     * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
     * specified, defaults to 20 for free tier and 60 for paid tier. Certain
     * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
     * if you need a higher limit.
     */
    origin_connection_limit?: number;
  }

  export namespace HyperdriveHyperdriveConfigCreateWithOrigin {
    export interface PublicDatabase {
      /**
       * Set the name of your origin database.
       */
      database: string;

      /**
       * Defines the publicly reachable hostname or IP of your origin database. Private,
       * loopback, and link-local IP addresses are not allowed.
       */
      host: string;

      /**
       * Set the password needed to access your origin database. The API never returns
       * this write-only value.
       */
      password: string;

      /**
       * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
       * 3306 for MySQL if not specified.
       */
      port: number;

      /**
       * Specifies the URL scheme used to connect to your origin database.
       */
      scheme: 'postgres' | 'postgresql' | 'mysql';

      /**
       * Set the user of your origin database.
       */
      user: string;
    }

    export interface AccessProtectedDatabaseBehindCloudflareTunnel {
      /**
       * Defines the Client ID of the Access token to use when connecting to the origin
       * database.
       */
      access_client_id: string;

      /**
       * Defines the Client Secret of the Access Token to use when connecting to the
       * origin database. The API never returns this write-only value.
       */
      access_client_secret: string;

      /**
       * Set the name of your origin database.
       */
      database: string;

      /**
       * Defines the host (hostname or IP) of your origin database.
       */
      host: string;

      /**
       * Set the password needed to access your origin database. The API never returns
       * this write-only value.
       */
      password: string;

      /**
       * Specifies the URL scheme used to connect to your origin database.
       */
      scheme: 'postgres' | 'postgresql' | 'mysql';

      /**
       * Set the user of your origin database.
       */
      user: string;
    }

    export interface DatabaseReachableThroughAWorkersVPC {
      /**
       * Set the name of your origin database.
       */
      database: string;

      /**
       * Set the password needed to access your origin database. The API never returns
       * this write-only value.
       */
      password: string;

      /**
       * Specifies the URL scheme used to connect to your origin database.
       */
      scheme: 'postgres' | 'postgresql' | 'mysql';

      /**
       * The identifier of the Workers VPC Service to connect through. Hyperdrive will
       * egress through the specified VPC Service to reach the origin database.
       */
      service_id: string;

      /**
       * Set the user of your origin database.
       */
      user: string;
    }

    export interface HyperdriveHyperdriveCachingCreateDisabled {
      disabled: true;

      max_age?: number | null;

      stale_while_revalidate?: number | null;
    }

    export interface HyperdriveHyperdriveCachingCreateEnabled {
      disabled?: false;

      /**
       * Specify the maximum duration (in seconds) items should persist in the cache.
       * Defaults to 60 seconds if not specified.
       */
      max_age?: number | null;

      /**
       * Specify the number of seconds the cache may serve a stale response. Defaults to
       * 15 seconds if not specified.
       */
      stale_while_revalidate?: number | null;
    }

    /**
     * mTLS configuration for the origin connection. Cannot be used with VPC Service
     * origins; TLS must be managed on the VPC Service.
     */
    export interface MTLS {
      /**
       * Define CA certificate ID obtained after uploading CA cert.
       */
      ca_certificate_id?: string;

      /**
       * Define mTLS certificate ID obtained after uploading client cert.
       */
      mtls_certificate_id?: string;

      /**
       * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
       * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
       * certificate; the require modes cannot be used with a CA certificate.
       */
      sslmode?: string;
    }
  }

  export interface HyperdriveHyperdriveConfigCreateWithIntegration {
    /**
     * Path param: The Cloudflare account ID.
     */
    account_id: string;

    /**
     * Body param: Connects to a PlanetScale database using credentials managed by
     * Cloudflare. The Cloudflare account must already be linked to PlanetScale in the
     * Hyperdrive dashboard.
     */
    integration: HyperdriveHyperdriveConfigCreateWithIntegration.Integration;

    /**
     * Body param: The name of the Hyperdrive configuration. Used to identify the
     * configuration in the Cloudflare dashboard and API.
     */
    name: string;

    /**
     * Body param
     */
    caching?:
      | HyperdriveHyperdriveConfigCreateWithIntegration.HyperdriveHyperdriveCachingCreateDisabled
      | HyperdriveHyperdriveConfigCreateWithIntegration.HyperdriveHyperdriveCachingCreateEnabled;

    /**
     * Body param: mTLS configuration for the origin connection. Cannot be used with
     * VPC Service origins; TLS must be managed on the VPC Service.
     */
    mtls?: HyperdriveHyperdriveConfigCreateWithIntegration.MTLS;

    /**
     * Body param
     */
    origin?: unknown | null;

    /**
     * Body param: The (soft) maximum number of connections the Hyperdrive is allowed
     * to make to the origin database.
     *
     * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
     * specified, defaults to 20 for free tier and 60 for paid tier. Certain
     * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
     * if you need a higher limit.
     */
    origin_connection_limit?: number;
  }

  export namespace HyperdriveHyperdriveConfigCreateWithIntegration {
    /**
     * Connects to a PlanetScale database using credentials managed by Cloudflare. The
     * Cloudflare account must already be linked to PlanetScale in the Hyperdrive
     * dashboard.
     */
    export interface Integration {
      /**
       * The name of the PlanetScale database branch.
       */
      database_branch_name: string;

      /**
       * The name of the PlanetScale database.
       */
      database_name: string;

      /**
       * The database integration used by this operation.
       */
      integration: 'planetscale';

      /**
       * The name of the PlanetScale organization.
       */
      organization_name: string;

      /**
       * Specifies the URL scheme used to connect to your origin database.
       */
      scheme: 'postgres' | 'postgresql' | 'mysql';

      /**
       * The database name to use when connecting. Defaults to `postgres` for PostgreSQL
       * and `mysql` for MySQL.
       */
      custom_database_name?: string;
    }

    export interface HyperdriveHyperdriveCachingCreateDisabled {
      disabled: true;

      max_age?: number | null;

      stale_while_revalidate?: number | null;
    }

    export interface HyperdriveHyperdriveCachingCreateEnabled {
      disabled?: false;

      /**
       * Specify the maximum duration (in seconds) items should persist in the cache.
       * Defaults to 60 seconds if not specified.
       */
      max_age?: number | null;

      /**
       * Specify the number of seconds the cache may serve a stale response. Defaults to
       * 15 seconds if not specified.
       */
      stale_while_revalidate?: number | null;
    }

    /**
     * mTLS configuration for the origin connection. Cannot be used with VPC Service
     * origins; TLS must be managed on the VPC Service.
     */
    export interface MTLS {
      /**
       * Define CA certificate ID obtained after uploading CA cert.
       */
      ca_certificate_id?: string;

      /**
       * Define mTLS certificate ID obtained after uploading client cert.
       */
      mtls_certificate_id?: string;

      /**
       * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
       * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
       * certificate; the require modes cannot be used with a CA certificate.
       */
      sslmode?: string;
    }
  }
}

export interface ConfigUpdateParams {
  /**
   * Path param: The Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: The name of the Hyperdrive configuration. Used to identify the
   * configuration in the Cloudflare dashboard and API.
   */
  name: string;

  /**
   * Body param: Combines database connection fields with exactly one supported
   * network location.
   */
  origin:
    | ConfigUpdateParams.PublicDatabase
    | ConfigUpdateParams.AccessProtectedDatabaseBehindCloudflareTunnel
    | ConfigUpdateParams.DatabaseReachableThroughAWorkersVPC;

  /**
   * Body param
   */
  caching?:
    | ConfigUpdateParams.HyperdriveHyperdriveCachingCommon
    | ConfigUpdateParams.HyperdriveHyperdriveCachingEnabled;

  /**
   * Body param: mTLS configuration for the origin connection. Cannot be used with
   * VPC Service origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigUpdateParams.MTLS;

  /**
   * Body param: The (soft) maximum number of connections the Hyperdrive is allowed
   * to make to the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;
}

export namespace ConfigUpdateParams {
  export interface PublicDatabase {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Set the password needed to access your origin database. The API never returns
     * this write-only value.
     */
    password: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface AccessProtectedDatabaseBehindCloudflareTunnel {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Defines the Client Secret of the Access Token to use when connecting to the
     * origin database. The API never returns this write-only value.
     */
    access_client_secret: string;

    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;

    /**
     * Set the password needed to access your origin database. The API never returns
     * this write-only value.
     */
    password: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface DatabaseReachableThroughAWorkersVPC {
    /**
     * Set the name of your origin database.
     */
    database: string;

    /**
     * Set the password needed to access your origin database. The API never returns
     * this write-only value.
     */
    password: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme: 'postgres' | 'postgresql' | 'mysql';

    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;

    /**
     * Set the user of your origin database.
     */
    user: string;
  }

  export interface HyperdriveHyperdriveCachingCommon {
    /**
     * Set to true to disable caching of SQL responses. Default is false.
     */
    disabled?: boolean;
  }

  export interface HyperdriveHyperdriveCachingEnabled {
    /**
     * Set to true to disable caching of SQL responses. Default is false.
     */
    disabled?: boolean;

    /**
     * Specify the maximum duration (in seconds) items should persist in the cache.
     * Defaults to 60 seconds if not specified.
     */
    max_age?: number;

    /**
     * Specify the number of seconds the cache may serve a stale response. Defaults to
     * 15 seconds if not specified.
     */
    stale_while_revalidate?: number;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }
}

export interface ConfigListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: The Cloudflare account ID.
   */
  account_id: string;
}

export interface ConfigDeleteParams {
  /**
   * The Cloudflare account ID.
   */
  account_id: string;
}

export interface ConfigEditParams {
  /**
   * Path param: The Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  caching?:
    | ConfigEditParams.HyperdriveHyperdriveCachingCommon
    | ConfigEditParams.HyperdriveHyperdriveCachingEnabled;

  /**
   * Body param: mTLS configuration for the origin connection. Cannot be used with
   * VPC Service origins; TLS must be managed on the VPC Service.
   */
  mtls?: ConfigEditParams.MTLS;

  /**
   * Body param: The name of the Hyperdrive configuration. Used to identify the
   * configuration in the Cloudflare dashboard and API. An empty value leaves the
   * name unchanged.
   */
  name?: string;

  /**
   * Body param: Connect to a database through a Workers VPC Service. TLS settings
   * (mTLS, sslmode) cannot be configured on the Hyperdrive when using a VPC Service
   * origin; TLS must be managed on the VPC Service itself.
   */
  origin?:
    | ConfigEditParams.HyperdriveHyperdriveDatabase
    | ConfigEditParams.HyperdriveInternetOrigin
    | ConfigEditParams.HyperdriveOverAccessOrigin
    | ConfigEditParams.HyperdriveVPCServiceOrigin;

  /**
   * Body param: The (soft) maximum number of connections the Hyperdrive is allowed
   * to make to the origin database.
   *
   * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts. If not
   * specified, defaults to 20 for free tier and 60 for paid tier. Certain
   * Cloudflare-managed origins may be permitted a higher limit. Contact Cloudflare
   * if you need a higher limit.
   */
  origin_connection_limit?: number;
}

export namespace ConfigEditParams {
  export interface HyperdriveHyperdriveCachingCommon {
    /**
     * Set to true to disable caching of SQL responses. Default is false.
     */
    disabled?: boolean;
  }

  export interface HyperdriveHyperdriveCachingEnabled {
    /**
     * Set to true to disable caching of SQL responses. Default is false.
     */
    disabled?: boolean;

    /**
     * Specify the maximum duration (in seconds) items should persist in the cache.
     * Defaults to 60 seconds if not specified.
     */
    max_age?: number;

    /**
     * Specify the number of seconds the cache may serve a stale response. Defaults to
     * 15 seconds if not specified.
     */
    stale_while_revalidate?: number;
  }

  /**
   * mTLS configuration for the origin connection. Cannot be used with VPC Service
   * origins; TLS must be managed on the VPC Service.
   */
  export interface MTLS {
    /**
     * Define CA certificate ID obtained after uploading CA cert.
     */
    ca_certificate_id?: string;

    /**
     * Define mTLS certificate ID obtained after uploading client cert.
     */
    mtls_certificate_id?: string;

    /**
     * PostgreSQL accepts `require`, `verify-ca`, and `verify-full`. MySQL accepts
     * `REQUIRED`, `VERIFY_CA`, and `VERIFY_IDENTITY`. The verify modes require a CA
     * certificate; the require modes cannot be used with a CA certificate.
     */
    sslmode?: string;
  }

  export interface HyperdriveHyperdriveDatabase {
    /**
     * Set the name of your origin database.
     */
    database?: string;

    /**
     * Set the password needed to access your origin database. The API never returns
     * this write-only value.
     */
    password?: string;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme?: 'postgres' | 'postgresql' | 'mysql';

    /**
     * Set the user of your origin database.
     */
    user?: string;
  }

  export interface HyperdriveInternetOrigin {
    /**
     * Defines the publicly reachable hostname or IP of your origin database. Private,
     * loopback, and link-local IP addresses are not allowed.
     */
    host: string;

    /**
     * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or
     * 3306 for MySQL if not specified.
     */
    port: number;
  }

  export interface HyperdriveOverAccessOrigin {
    /**
     * Defines the Client ID of the Access token to use when connecting to the origin
     * database.
     */
    access_client_id: string;

    /**
     * Defines the Client Secret of the Access Token to use when connecting to the
     * origin database. The API never returns this write-only value.
     */
    access_client_secret: string;

    /**
     * Defines the host (hostname or IP) of your origin database.
     */
    host: string;
  }

  /**
   * Connect to a database through a Workers VPC Service. TLS settings (mTLS,
   * sslmode) cannot be configured on the Hyperdrive when using a VPC Service origin;
   * TLS must be managed on the VPC Service itself.
   */
  export interface HyperdriveVPCServiceOrigin {
    /**
     * The identifier of the Workers VPC Service to connect through. Hyperdrive will
     * egress through the specified VPC Service to reach the origin database.
     */
    service_id: string;
  }
}

export interface ConfigGetParams {
  /**
   * The Cloudflare account ID.
   */
  account_id: string;
}

export interface ConfigRestartParams {
  /**
   * The Cloudflare account ID.
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
    type ConfigRestartResponse as ConfigRestartResponse,
    type ConfigListResponsesV4PagePaginationArray as ConfigListResponsesV4PagePaginationArray,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
    type ConfigRestartParams as ConfigRestartParams,
  };
}
