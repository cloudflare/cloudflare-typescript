// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomNameserversAPI from 'cloudflare/resources/custom-nameservers';

export class CustomNameservers extends APIResource {
  /**
   * Add Account Custom Nameserver
   */
  create(
    params: CustomNameserverCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSCustomNameserversCustomNs> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/custom_ns`, { body, ...options }) as Core.APIPromise<{
        result: DNSCustomNameserversCustomNs;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Account Custom Nameserver
   */
  delete(
    customNsId: string,
    params: CustomNameserverDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserverDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/custom_ns/${customNsId}`, options) as Core.APIPromise<{
        result: CustomNameserverDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Eligible Zones for Account Custom Nameservers
   */
  availabilty(
    params: CustomNameserverAvailabiltyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserverAvailabiltyResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/custom_ns/availability`, options) as Core.APIPromise<{
        result: CustomNameserverAvailabiltyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List an account's custom nameservers.
   */
  get(
    params: CustomNameserverGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserverGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/custom_ns`, options) as Core.APIPromise<{
        result: CustomNameserverGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Verify Account Custom Nameserver Glue Records
   */
  verify(
    params: CustomNameserverVerifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserverVerifyResponse | null> {
    const { account_id } = params;
    return (
      this._client.post(`/accounts/${account_id}/custom_ns/verify`, options) as Core.APIPromise<{
        result: CustomNameserverVerifyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A single account custom nameserver.
 */
export interface DNSCustomNameserversCustomNs {
  /**
   * A and AAAA records associated with the nameserver.
   */
  dns_records: Array<DNSCustomNameserversCustomNs.DNSRecord>;

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

export namespace DNSCustomNameserversCustomNs {
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

export type CustomNameserverDeleteResponse = unknown | Array<unknown> | string;

export type CustomNameserverAvailabiltyResponse = Array<string>;

export type CustomNameserverGetResponse = Array<DNSCustomNameserversCustomNs>;

export type CustomNameserverVerifyResponse = Array<DNSCustomNameserversCustomNs>;

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

export interface CustomNameserverVerifyParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace CustomNameservers {
  export import DNSCustomNameserversCustomNs = CustomNameserversAPI.DNSCustomNameserversCustomNs;
  export import CustomNameserverDeleteResponse = CustomNameserversAPI.CustomNameserverDeleteResponse;
  export import CustomNameserverAvailabiltyResponse = CustomNameserversAPI.CustomNameserverAvailabiltyResponse;
  export import CustomNameserverGetResponse = CustomNameserversAPI.CustomNameserverGetResponse;
  export import CustomNameserverVerifyResponse = CustomNameserversAPI.CustomNameserverVerifyResponse;
  export import CustomNameserverCreateParams = CustomNameserversAPI.CustomNameserverCreateParams;
  export import CustomNameserverDeleteParams = CustomNameserversAPI.CustomNameserverDeleteParams;
  export import CustomNameserverAvailabiltyParams = CustomNameserversAPI.CustomNameserverAvailabiltyParams;
  export import CustomNameserverGetParams = CustomNameserversAPI.CustomNameserverGetParams;
  export import CustomNameserverVerifyParams = CustomNameserversAPI.CustomNameserverVerifyParams;
}
