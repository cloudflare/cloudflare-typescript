// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/secondary-dns/acls';
import { SinglePage } from 'cloudflare/pagination';

export class ACLs extends APIResource {
  /**
   * Create ACL.
   */
  create(params: ACLCreateParams, options?: Core.RequestOptions): Core.APIPromise<SecondaryDNSACL> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/acls`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify ACL.
   */
  update(
    aclId: string,
    params: ACLUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSACL> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/acls/${aclId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecondaryDNSACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List ACLs.
   */
  list(
    params: ACLListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SecondaryDnsaclsSinglePage, SecondaryDNSACL> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/secondary_dns/acls`,
      SecondaryDnsaclsSinglePage,
      options,
    );
  }

  /**
   * Delete ACL.
   */
  delete(
    aclId: string,
    params: ACLDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/secondary_dns/acls/${aclId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ACLDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get ACL.
   */
  get(aclId: string, params: ACLGetParams, options?: Core.RequestOptions): Core.APIPromise<SecondaryDNSACL> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/acls/${aclId}`, options) as Core.APIPromise<{
        result: SecondaryDNSACL;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SecondaryDnsaclsSinglePage extends SinglePage<SecondaryDNSACL> {}

export interface SecondaryDNSACL {
  id: string;

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

export interface UnnamedSchemaRef08eaa2f22bb9ce0f80063d710d4edafd {
  id: string;

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
  id?: string;
}

export interface ACLCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ACLUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Allowed IPv4/IPv6 address range of primary or secondary nameservers.
   * This will be applied for the entire account. The IP range is used to allow
   * additional NOTIFY IPs for secondary zones and IPs Cloudflare allows AXFR/IXFR
   * requests from for primary zones. CIDRs are limited to a maximum of /24 for IPv4
   * and /64 for IPv6 respectively.
   */
  ip_range: string;

  /**
   * Body param: The name of the acl.
   */
  name: string;
}

export interface ACLListParams {
  account_id: string;
}

export interface ACLDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ACLGetParams {
  account_id: string;
}

export namespace ACLs {
  export import SecondaryDNSACL = ACLsAPI.SecondaryDNSACL;
  export import UnnamedSchemaRef08eaa2f22bb9ce0f80063d710d4edafd = ACLsAPI.UnnamedSchemaRef08eaa2f22bb9ce0f80063d710d4edafd;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import SecondaryDnsaclsSinglePage = ACLsAPI.SecondaryDnsaclsSinglePage;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLListParams = ACLsAPI.ACLListParams;
  export import ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export import ACLGetParams = ACLsAPI.ACLGetParams;
}
