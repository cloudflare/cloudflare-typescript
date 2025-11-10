// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Services extends APIResource {
  /**
   * Create connectivity service
   */
  create(params: ServiceCreateParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/connectivity/directory/services`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update connectivity service
   */
  update(serviceID: string, params: ServiceUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, ...body } = params;
    return this._client.put(path`/accounts/${account_id}/connectivity/directory/services/${serviceID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List connectivity services
   */
  list(params: ServiceListParams, options?: RequestOptions): APIPromise<void> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/connectivity/directory/services`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete connectivity service
   */
  delete(serviceID: string, params: ServiceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/connectivity/directory/services/${serviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get connectivity service
   */
  get(serviceID: string, params: ServiceGetParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/connectivity/directory/services/${serviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
