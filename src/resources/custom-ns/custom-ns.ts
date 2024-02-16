// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomNsAPI from 'cloudflare/resources/custom-ns/custom-ns';
import * as AvailabilitiesAPI from 'cloudflare/resources/custom-ns/availabilities';
import * as VerifiesAPI from 'cloudflare/resources/custom-ns/verifies';

export class CustomNs extends APIResource {
  availabilities: AvailabilitiesAPI.Availabilities = new AvailabilitiesAPI.Availabilities(this._client);
  verifies: VerifiesAPI.Verifies = new VerifiesAPI.Verifies(this._client);

  /**
   * Add Account Custom Nameserver
   */
  create(
    accountId: string,
    body: CustomNCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/custom_ns`, { body, ...options }) as Core.APIPromise<{
        result: CustomNCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List an account's custom nameservers.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<CustomNListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/custom_ns`, options) as Core.APIPromise<{
        result: CustomNListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Account Custom Nameserver
   */
  delete(
    accountId: string,
    customNsId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${accountId}/custom_ns/${customNsId}`, options) as Core.APIPromise<{
        result: CustomNDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A single account custom nameserver.
 */
export interface CustomNCreateResponse {
  /**
   * A and AAAA records associated with the nameserver.
   */
  dns_records: Array<CustomNCreateResponse.DNSRecord>;

  /**
   * The FQDN of the name server.
   */
  ns_name: string;

  /**
   * Verification status of the nameserver.
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

export namespace CustomNCreateResponse {
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

export type CustomNListResponse = Array<CustomNListResponse.CustomNListResponseItem>;

export namespace CustomNListResponse {
  /**
   * A single account custom nameserver.
   */
  export interface CustomNListResponseItem {
    /**
     * A and AAAA records associated with the nameserver.
     */
    dns_records: Array<CustomNListResponseItem.DNSRecord>;

    /**
     * The FQDN of the name server.
     */
    ns_name: string;

    /**
     * Verification status of the nameserver.
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

  export namespace CustomNListResponseItem {
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
}

export type CustomNDeleteResponse = unknown | Array<unknown> | string;

export interface CustomNCreateParams {
  /**
   * The FQDN of the name server.
   */
  ns_name: string;

  /**
   * The number of the set that this name server belongs to.
   */
  ns_set?: number;
}

export namespace CustomNs {
  export import CustomNCreateResponse = CustomNsAPI.CustomNCreateResponse;
  export import CustomNListResponse = CustomNsAPI.CustomNListResponse;
  export import CustomNDeleteResponse = CustomNsAPI.CustomNDeleteResponse;
  export import CustomNCreateParams = CustomNsAPI.CustomNCreateParams;
  export import Availabilities = AvailabilitiesAPI.Availabilities;
  export import AvailabilityGetResponse = AvailabilitiesAPI.AvailabilityGetResponse;
  export import Verifies = VerifiesAPI.Verifies;
  export import VerifyCreateResponse = VerifiesAPI.VerifyCreateResponse;
}
