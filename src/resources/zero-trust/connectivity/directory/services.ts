// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Services extends APIResource {
  /**
   * Create connectivity service
   *
   * @example
   * ```ts
   * await client.zeroTrust.connectivity.directory.services.create(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     host: {},
   *     name: 'name',
   *     type: 'http',
   *   },
   * );
   * ```
   */
  create(params: ServiceCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/connectivity/directory/services`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update connectivity service
   *
   * @example
   * ```ts
   * await client.zeroTrust.connectivity.directory.services.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     account_id: 'account_id',
   *     host: {},
   *     name: 'name',
   *     type: 'http',
   *   },
   * );
   * ```
   */
  update(
    serviceId: string,
    params: ServiceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/connectivity/directory/services/${serviceId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List connectivity services
   *
   * @example
   * ```ts
   * await client.zeroTrust.connectivity.directory.services.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  list(params: ServiceListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/connectivity/directory/services`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete connectivity service
   *
   * @example
   * ```ts
   * await client.zeroTrust.connectivity.directory.services.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    serviceId: string,
    params: ServiceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/connectivity/directory/services/${serviceId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get connectivity service
   *
   * @example
   * ```ts
   * await client.zeroTrust.connectivity.directory.services.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(serviceId: string, params: ServiceGetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/connectivity/directory/services/${serviceId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ServiceCreateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  host: ServiceCreateParams.Host;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  type: 'http';

  /**
   * Body param:
   */
  http_port?: number | null;

  /**
   * Body param:
   */
  https_port?: number | null;
}

export namespace ServiceCreateParams {
  export interface Host {
    hostname?: string | null;

    ipv4?: string;

    ipv6?: string;

    network?: unknown;

    resolver_network?: unknown;
  }
}

export interface ServiceUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  host: ServiceUpdateParams.Host;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  type: 'http';

  /**
   * Body param:
   */
  http_port?: number | null;

  /**
   * Body param:
   */
  https_port?: number | null;
}

export namespace ServiceUpdateParams {
  export interface Host {
    hostname?: string | null;

    ipv4?: string;

    ipv6?: string;

    network?: unknown;

    resolver_network?: unknown;
  }
}

export interface ServiceListParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Query param: Current page in the response
   */
  page?: number;

  /**
   * Query param: Max amount of entries returned per page
   */
  per_page?: number;

  /**
   * Query param:
   */
  type?: 'http' | null;
}

export interface ServiceDeleteParams {
  account_id: string;
}

export interface ServiceGetParams {
  account_id: string;
}

export declare namespace Services {
  export {
    type ServiceCreateParams as ServiceCreateParams,
    type ServiceUpdateParams as ServiceUpdateParams,
    type ServiceListParams as ServiceListParams,
    type ServiceDeleteParams as ServiceDeleteParams,
    type ServiceGetParams as ServiceGetParams,
  };
}
