// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class TenantCustomNameservers extends APIResource {
  /**
   * Add Tenant Custom Nameserver
   *
   * @example
   * ```ts
   * const tenantCustomNameserver =
   *   await client.tenantCustomNameservers.create(
   *     '699d98642c564d2e855e9661899b7252',
   *     { ns_name: 'ns1.example.com' },
   *   );
   * ```
   */
  create(
    tenantTag: string,
    body: TenantCustomNameserverCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TenantCustomNameserverCreateResponse> {
    return (
      this._client.post(`/tenants/${tenantTag}/custom_ns`, { body, ...options }) as Core.APIPromise<{
        result: TenantCustomNameserverCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Tenant Custom Nameserver
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tenantCustomNameserverDeleteResponse of client.tenantCustomNameservers.delete(
   *   '699d98642c564d2e855e9661899b7252',
   *   'ns1.example.com',
   * )) {
   *   // ...
   * }
   * ```
   */
  delete(
    tenantTag: string,
    customNSId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TenantCustomNameserverDeleteResponsesSinglePage, TenantCustomNameserverDeleteResponse> {
    return this._client.getAPIList(
      `/tenants/${tenantTag}/custom_ns/${customNSId}`,
      TenantCustomNameserverDeleteResponsesSinglePage,
      { method: 'delete', ...options },
    );
  }

  /**
   * List a tenant's custom nameservers.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tenantCustomNameserverGetResponse of client.tenantCustomNameservers.get(
   *   '699d98642c564d2e855e9661899b7252',
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    tenantTag: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TenantCustomNameserverGetResponsesSinglePage, TenantCustomNameserverGetResponse> {
    return this._client.getAPIList(
      `/tenants/${tenantTag}/custom_ns`,
      TenantCustomNameserverGetResponsesSinglePage,
      options,
    );
  }
}

export class TenantCustomNameserverDeleteResponsesSinglePage extends SinglePage<TenantCustomNameserverDeleteResponse> {}

export class TenantCustomNameserverGetResponsesSinglePage extends SinglePage<TenantCustomNameserverGetResponse> {}

/**
 * A single tenant custom nameserver.
 */
export interface TenantCustomNameserverCreateResponse {
  /**
   * A and AAAA records associated with the nameserver.
   */
  dns_records: Array<TenantCustomNameserverCreateResponse.DNSRecord>;

  /**
   * The FQDN of the name server.
   */
  ns_name: string;

  /**
   * @deprecated Verification status of the nameserver.
   */
  status: 'moved' | 'pending' | 'verified';

  /**
   * Identifier.
   */
  zone_tag: string;

  /**
   * The number of the set that this name server belongs to.
   */
  ns_set?: number;
}

export namespace TenantCustomNameserverCreateResponse {
  export interface DNSRecord {
    /**
     * DNS record type.
     */
    type?: 'A' | 'AAAA';

    /**
     * DNS record contents (an IPv4 or IPv6 address).
     */
    value?: string;
  }
}

/**
 * Unused
 */
export type TenantCustomNameserverDeleteResponse = string;

/**
 * A single tenant custom nameserver.
 */
export interface TenantCustomNameserverGetResponse {
  /**
   * A and AAAA records associated with the nameserver.
   */
  dns_records: Array<TenantCustomNameserverGetResponse.DNSRecord>;

  /**
   * The FQDN of the name server.
   */
  ns_name: string;

  /**
   * @deprecated Verification status of the nameserver.
   */
  status: 'moved' | 'pending' | 'verified';

  /**
   * Identifier.
   */
  zone_tag: string;

  /**
   * The number of the set that this name server belongs to.
   */
  ns_set?: number;
}

export namespace TenantCustomNameserverGetResponse {
  export interface DNSRecord {
    /**
     * DNS record type.
     */
    type?: 'A' | 'AAAA';

    /**
     * DNS record contents (an IPv4 or IPv6 address).
     */
    value?: string;
  }
}

export interface TenantCustomNameserverCreateParams {
  /**
   * The FQDN of the name server.
   */
  ns_name: string;

  /**
   * The number of the set that this name server belongs to.
   */
  ns_set?: number;
}

TenantCustomNameservers.TenantCustomNameserverDeleteResponsesSinglePage =
  TenantCustomNameserverDeleteResponsesSinglePage;
TenantCustomNameservers.TenantCustomNameserverGetResponsesSinglePage =
  TenantCustomNameserverGetResponsesSinglePage;

export declare namespace TenantCustomNameservers {
  export {
    type TenantCustomNameserverCreateResponse as TenantCustomNameserverCreateResponse,
    type TenantCustomNameserverDeleteResponse as TenantCustomNameserverDeleteResponse,
    type TenantCustomNameserverGetResponse as TenantCustomNameserverGetResponse,
    TenantCustomNameserverDeleteResponsesSinglePage as TenantCustomNameserverDeleteResponsesSinglePage,
    TenantCustomNameserverGetResponsesSinglePage as TenantCustomNameserverGetResponsesSinglePage,
    type TenantCustomNameserverCreateParams as TenantCustomNameserverCreateParams,
  };
}
