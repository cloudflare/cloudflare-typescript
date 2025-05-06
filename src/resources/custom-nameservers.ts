// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SinglePage } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CustomNameservers extends APIResource {
  /**
   * Add Account Custom Nameserver
   *
   * @example
   * ```ts
   * const customNameserver =
   *   await client.customNameservers.create({
   *     account_id: '372e67954025e0ba6aaa6d586b9e0b59',
   *     ns_name: 'ns1.example.com',
   *   });
   * ```
   */
  create(params: CustomNameserverCreateParams, options?: RequestOptions): APIPromise<CustomNameserver> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/custom_ns`, { body, ...options }) as APIPromise<{
        result: CustomNameserver;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Account Custom Nameserver
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customNameserverDeleteResponse of client.customNameservers.delete(
   *   'ns1.example.com',
   *   { account_id: '372e67954025e0ba6aaa6d586b9e0b59' },
   * )) {
   *   // ...
   * }
   * ```
   */
  delete(
    customNSID: string,
    params: CustomNameserverDeleteParams,
    options?: RequestOptions,
  ): PagePromise<CustomNameserverDeleteResponsesSinglePage, CustomNameserverDeleteResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/custom_ns/${customNSID}`,
      SinglePage<CustomNameserverDeleteResponse>,
      { method: 'delete', ...options },
    );
  }

  /**
   * List an account's custom nameservers.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customNameserver of client.customNameservers.get(
   *   { account_id: '372e67954025e0ba6aaa6d586b9e0b59' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    params: CustomNameserverGetParams,
    options?: RequestOptions,
  ): PagePromise<CustomNameserversSinglePage, CustomNameserver> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/custom_ns`,
      SinglePage<CustomNameserver>,
      options,
    );
  }
}

export type CustomNameserverDeleteResponsesSinglePage = SinglePage<CustomNameserverDeleteResponse>;

export type CustomNameserversSinglePage = SinglePage<CustomNameserver>;

/**
 * A single account custom nameserver.
 */
export interface CustomNameserver {
  /**
   * A and AAAA records associated with the nameserver.
   */
  dns_records: Array<CustomNameserver.DNSRecord>;

  /**
   * The FQDN of the name server.
   */
  ns_name: string;

  /**
   * @deprecated Verification status of the nameserver.
   */
  status: 'moved' | 'pending' | 'verified';

  /**
   * Identifier
   */
  zone_tag: string;

  /**
   * The number of the set that this name server belongs to.
   */
  ns_set?: number;
}

export namespace CustomNameserver {
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
export type CustomNameserverDeleteResponse = string;

export interface CustomNameserverCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The FQDN of the name server.
   */
  ns_name: string;

  /**
   * Body param: The number of the set that this name server belongs to.
   */
  ns_set?: number;
}

export interface CustomNameserverDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface CustomNameserverGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace CustomNameservers {
  export {
    type CustomNameserver as CustomNameserver,
    type CustomNameserverDeleteResponse as CustomNameserverDeleteResponse,
    type CustomNameserverDeleteResponsesSinglePage as CustomNameserverDeleteResponsesSinglePage,
    type CustomNameserversSinglePage as CustomNameserversSinglePage,
    type CustomNameserverCreateParams as CustomNameserverCreateParams,
    type CustomNameserverDeleteParams as CustomNameserverDeleteParams,
    type CustomNameserverGetParams as CustomNameserverGetParams,
  };
}
