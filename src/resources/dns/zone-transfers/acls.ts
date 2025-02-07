// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ACLs extends APIResource {
  /**
   * Create ACL.
   */
  create(params: ACLCreateParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/secondary_dns/acls`, {
        body,
        ...options,
      }) as APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify ACL.
   */
  update(aclID: string, params: ACLUpdateParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/secondary_dns/acls/${aclID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List ACLs.
   */
  list(params: ACLListParams, options?: RequestOptions): PagePromise<ACLsSinglePage, ACL> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secondary_dns/acls`,
      SinglePage<ACL>,
      options,
    );
  }

  /**
   * Delete ACL.
   */
  delete(aclID: string, params: ACLDeleteParams, options?: RequestOptions): APIPromise<ACLDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/secondary_dns/acls/${aclID}`, options) as APIPromise<{
        result: ACLDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get ACL.
   */
  get(aclID: string, params: ACLGetParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/secondary_dns/acls/${aclID}`, options) as APIPromise<{
        result: ACL;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ACLsSinglePage = SinglePage<ACL>;

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

export declare namespace ACLs {
  export {
    type ACL as ACL,
    type ACLDeleteResponse as ACLDeleteResponse,
    type ACLsSinglePage as ACLsSinglePage,
    type ACLCreateParams as ACLCreateParams,
    type ACLUpdateParams as ACLUpdateParams,
    type ACLListParams as ACLListParams,
    type ACLDeleteParams as ACLDeleteParams,
    type ACLGetParams as ACLGetParams,
  };
}
