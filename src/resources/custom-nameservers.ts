// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as CustomNameserversAPI from './custom-nameservers';

export class CustomNameservers extends APIResource {
  /**
   * Add Account Custom Nameserver
   */
  create(params: CustomNameserverCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomNameserver> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/custom_ns`, { body, ...options }) as Core.APIPromise<{ result: CustomNameserver }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Account Custom Nameserver
   */
  delete(customNSId: string, params: CustomNameserverDeleteParams, options?: Core.RequestOptions): Core.APIPromise<CustomNameserverDeleteResponse | null> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/custom_ns/${customNSId}`, options) as Core.APIPromise<{ result: CustomNameserverDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Eligible Zones for Account Custom Nameservers
   */
  availabilty(params: CustomNameserverAvailabiltyParams, options?: Core.RequestOptions): Core.APIPromise<CustomNameserverAvailabiltyResponse | null> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/custom_ns/availability`, options) as Core.APIPromise<{ result: CustomNameserverAvailabiltyResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List an account's custom nameservers.
   */
  get(params: CustomNameserverGetParams, options?: Core.RequestOptions): Core.APIPromise<CustomNameserverGetResponse | null> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/custom_ns`, options) as Core.APIPromise<{ result: CustomNameserverGetResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

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
   * @deprecated: Verification status of the nameserver.
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

export type CustomNameserverDeleteResponse = Array<string>

export type CustomNameserverAvailabiltyResponse = Array<string>

export type CustomNameserverGetResponse = Array<CustomNameserver>

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
