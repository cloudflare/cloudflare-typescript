// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { SinglePage } from '../pagination';

export class CustomNameservers extends APIResource {
  /**
   * Add Account Custom Nameserver
   */
  create(
    params: CustomNameserverCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserver> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/custom_ns`, { body, ...options }) as Core.APIPromise<{
        result: CustomNameserver;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Account Custom Nameserver
   */
  delete(
    customNSId: string,
    params: CustomNameserverDeleteParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomNameserverDeleteResponsesSinglePage, CustomNameserverDeleteResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/custom_ns/${customNSId}`,
      CustomNameserverDeleteResponsesSinglePage,
      { method: 'delete', ...options },
    );
  }

  /**
   * Get Eligible Zones for Account Custom Nameservers
   */
  availabilty(
    params: CustomNameserverAvailabiltyParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomNameserverAvailabiltyResponsesSinglePage, CustomNameserverAvailabiltyResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/custom_ns/availability`,
      CustomNameserverAvailabiltyResponsesSinglePage,
      options,
    );
  }

  /**
   * List an account's custom nameservers.
   */
  get(
    params: CustomNameserverGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomNameserversSinglePage, CustomNameserver> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/custom_ns`, CustomNameserversSinglePage, options);
  }
}

export class CustomNameserverDeleteResponsesSinglePage extends SinglePage<CustomNameserverDeleteResponse> {}

export class CustomNameserverAvailabiltyResponsesSinglePage extends SinglePage<CustomNameserverAvailabiltyResponse> {}

export class CustomNameserversSinglePage extends SinglePage<CustomNameserver> {}

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

/**
 * Name of zone based on which account custom nameservers can be created. For
 * example, if example.com is returned, then ns1.example.com can be used as an
 * account custom nameserver.
 */
export type CustomNameserverAvailabiltyResponse = string;

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

export interface CustomNameserverAvailabiltyParams {
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
