// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ACLsAPI from './acls';
import { SinglePage } from '../../pagination';

export class ACLs extends APIResource {
  /**
   * Create ACL.
   */
  create(params: ACLCreateParams, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/acls`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify ACL.
   */
  update(aclId: string, params: ACLUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/acls/${aclId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List ACLs.
   */
  list(params: ACLListParams, options?: Core.RequestOptions): Core.PagePromise<ACLsSinglePage, ACL> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/secondary_dns/acls`, ACLsSinglePage, options);
  }

  /**
   * Delete ACL.
   */
  delete(
    aclId: string,
    params: ACLDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/secondary_dns/acls/${aclId}`, options) as Core.APIPromise<{
        result: ACLDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get ACL.
   */
  get(aclId: string, params: ACLGetParams, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/acls/${aclId}`, options) as Core.APIPromise<{
        result: ACL;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ACLsSinglePage extends SinglePage<ACL> {}

export interface ACL {
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
  account_id: string;
}

export interface ACLGetParams {
  account_id: string;
}

export namespace ACLs {
  export import ACL = ACLsAPI.ACL;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLsSinglePage = ACLsAPI.ACLsSinglePage;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLListParams = ACLsAPI.ACLListParams;
  export import ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export import ACLGetParams = ACLsAPI.ACLGetParams;
}
