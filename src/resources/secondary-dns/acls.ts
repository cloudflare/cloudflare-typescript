// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/secondary-dns/acls';

export class ACLs extends APIResource {
  /**
   * Create ACL.
   */
  create(
    accountId: unknown,
    body: ACLCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/secondary_dns/acls`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List ACLs.
   */
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<ACLListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/acls`, options) as Core.APIPromise<{
        result: ACLListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete ACL.
   */
  delete(
    accountId: unknown,
    aclId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/secondary_dns/acls/${aclId}`, options) as Core.APIPromise<{
        result: ACLDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get ACL.
   */
  get(accountId: unknown, aclId: unknown, options?: Core.RequestOptions): Core.APIPromise<ACLGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/acls/${aclId}`, options) as Core.APIPromise<{
        result: ACLGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify ACL.
   */
  replace(
    accountId: unknown,
    aclId: unknown,
    body: ACLReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/secondary_dns/acls/${aclId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ACLCreateResponse {
  id: unknown;

  /**
   * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
   * be applied for the entire account. The IP range is used to allow additional
   * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
   * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
   * IPv6 respectively.
   */
  ip_range: string;

  /**
   * The name of the acl.
   */
  name: string;
}

export type ACLListResponse = Array<ACLListResponse.ACLListResponseItem>;

export namespace ACLListResponse {
  export interface ACLListResponseItem {
    id: unknown;

    /**
     * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
     * be applied for the entire account. The IP range is used to allow additional
     * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
     * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
     * IPv6 respectively.
     */
    ip_range: string;

    /**
     * The name of the acl.
     */
    name: string;
  }
}

export interface ACLDeleteResponse {
  id?: unknown;
}

export interface ACLGetResponse {
  id: unknown;

  /**
   * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
   * be applied for the entire account. The IP range is used to allow additional
   * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
   * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
   * IPv6 respectively.
   */
  ip_range: string;

  /**
   * The name of the acl.
   */
  name: string;
}

export interface ACLReplaceResponse {
  id: unknown;

  /**
   * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
   * be applied for the entire account. The IP range is used to allow additional
   * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
   * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
   * IPv6 respectively.
   */
  ip_range: string;

  /**
   * The name of the acl.
   */
  name: string;
}

export type ACLCreateParams = unknown;

export interface ACLReplaceParams {
  /**
   * Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will
   * be applied for the entire account. The IP range is used to allow additional
   * NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR requests from
   * for primary zones. CIDRs are limited to a maximum of /24 for IPv4 and /64 for
   * IPv6 respectively.
   */
  ip_range: string;

  /**
   * The name of the acl.
   */
  name: string;
}

export namespace ACLs {
  export import ACLCreateResponse = ACLsAPI.ACLCreateResponse;
  export import ACLListResponse = ACLsAPI.ACLListResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLReplaceResponse = ACLsAPI.ACLReplaceResponse;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLReplaceParams = ACLsAPI.ACLReplaceParams;
}
