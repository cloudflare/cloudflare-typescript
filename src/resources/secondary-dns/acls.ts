// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/secondary-dns/acls';

export class ACLs extends APIResource {
  /**
   * Modify ACL.
   */
  update(
    accountId: unknown,
    aclId: unknown,
    body: ACLUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/secondary_dns/acls/${aclId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLUpdateResponse }>
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
   * Create ACL.
   */
  secondaryDNSACLCreateACL(
    accountId: unknown,
    body: ACLSecondaryDNSACLCreateACLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLSecondaryDNSACLCreateACLResponse> {
    return (
      this._client.post(`/accounts/${accountId}/secondary_dns/acls`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLSecondaryDNSACLCreateACLResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List ACLs.
   */
  secondaryDNSACLListACLs(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLSecondaryDNSACLListACLsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/acls`, options) as Core.APIPromise<{
        result: ACLSecondaryDNSACLListACLsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ACLUpdateResponse {
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

export interface ACLSecondaryDNSACLCreateACLResponse {
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

export type ACLSecondaryDNSACLListACLsResponse =
  Array<ACLSecondaryDNSACLListACLsResponse.ACLSecondaryDnsaclListACLsResponseItem>;

export namespace ACLSecondaryDNSACLListACLsResponse {
  export interface ACLSecondaryDnsaclListACLsResponseItem {
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

export interface ACLUpdateParams {
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

export type ACLSecondaryDNSACLCreateACLParams = unknown;

export namespace ACLs {
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLSecondaryDNSACLCreateACLResponse = ACLsAPI.ACLSecondaryDNSACLCreateACLResponse;
  export import ACLSecondaryDNSACLListACLsResponse = ACLsAPI.ACLSecondaryDNSACLListACLsResponse;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLSecondaryDNSACLCreateACLParams = ACLsAPI.ACLSecondaryDNSACLCreateACLParams;
}
