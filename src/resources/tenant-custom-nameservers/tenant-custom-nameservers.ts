// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTenantCustomNameservers extends APIResource {
  static override readonly _key: readonly ['tenantCustomNameservers'] = Object.freeze([
    'tenantCustomNameservers',
  ] as const);

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
    options?: RequestOptions,
  ): APIPromise<TenantCustomNameserverCreateResponse> {
    return (
      this._client.post(path`/tenants/${tenantTag}/custom_ns`, { body, ...options }) as APIPromise<{
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
   *   'ns1.example.com',
   *   { tenant_tag: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  delete(
    customNSID: string,
    params: TenantCustomNameserverDeleteParams,
    options?: RequestOptions,
  ): PagePromise<TenantCustomNameserverDeleteResponsesSinglePage, TenantCustomNameserverDeleteResponse> {
    const { tenant_tag } = params;
    return this._client.getAPIList(
      path`/tenants/${tenant_tag}/custom_ns/${customNSID}`,
      SinglePage<TenantCustomNameserverDeleteResponse>,
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
    options?: RequestOptions,
  ): PagePromise<TenantCustomNameserverGetResponsesSinglePage, TenantCustomNameserverGetResponse> {
    return this._client.getAPIList(
      path`/tenants/${tenantTag}/custom_ns`,
      SinglePage<TenantCustomNameserverGetResponse>,
      options,
    );
  }
}
export class TenantCustomNameservers extends BaseTenantCustomNameservers {}

export type TenantCustomNameserverDeleteResponsesSinglePage =
  SinglePage<TenantCustomNameserverDeleteResponse>;

export type TenantCustomNameserverGetResponsesSinglePage = SinglePage<TenantCustomNameserverGetResponse>;

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

export interface TenantCustomNameserverDeleteParams {
  /**
   * Tenant identifier tag.
   */
  tenant_tag: string;
}

export declare namespace TenantCustomNameservers {
  export {
    type TenantCustomNameserverCreateResponse as TenantCustomNameserverCreateResponse,
    type TenantCustomNameserverDeleteResponse as TenantCustomNameserverDeleteResponse,
    type TenantCustomNameserverGetResponse as TenantCustomNameserverGetResponse,
    type TenantCustomNameserverDeleteResponsesSinglePage as TenantCustomNameserverDeleteResponsesSinglePage,
    type TenantCustomNameserverGetResponsesSinglePage as TenantCustomNameserverGetResponsesSinglePage,
    type TenantCustomNameserverCreateParams as TenantCustomNameserverCreateParams,
    type TenantCustomNameserverDeleteParams as TenantCustomNameserverDeleteParams,
  };
}
