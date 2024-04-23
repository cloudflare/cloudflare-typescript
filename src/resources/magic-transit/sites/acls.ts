// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/magic-transit/sites/acls';
import { SinglePage } from 'cloudflare/pagination';

export class ACLs extends APIResource {
  /**
   * Creates a new Site ACL.
   */
  create(siteId: string, params: ACLCreateParams, options?: Core.RequestOptions): Core.APIPromise<ACL> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites/${siteId}/acls`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site ACL.
   */
  update(
    siteId: string,
    aclIdentifier: string,
    params: ACLUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACL> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/acls/${aclIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site ACLs associated with an account.
   */
  list(
    siteId: string,
    params: ACLListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACLsSinglePage, ACL> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/sites/${siteId}/acls`,
      ACLsSinglePage,
      options,
    );
  }

  /**
   * Remove a specific Site ACL.
   */
  delete(
    siteId: string,
    aclIdentifier: string,
    params: ACLDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACL> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/sites/${siteId}/acls/${aclIdentifier}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site ACL.
   */
  get(
    siteId: string,
    aclIdentifier: string,
    params: ACLGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACL> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/acls/${aclIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ACLsSinglePage extends SinglePage<ACL> {}

/**
 * Bidirectional ACL policy for network traffic within a site.
 */
export interface ACL {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Description for the ACL.
   */
  description?: string;

  /**
   * The desired forwarding action for this ACL policy. If set to "false", the policy
   * will forward traffic to Cloudflare. If set to "true", the policy will forward
   * traffic locally on the Magic WAN Connector. If not included in request, will
   * default to false.
   */
  forward_locally?: boolean;

  lan_1?: ACLConfiguration;

  lan_2?: ACLConfiguration;

  /**
   * The name of the ACL.
   */
  name?: string;

  protocols?: Array<'tcp' | 'udp' | 'icmp'>;
}

export interface ACLConfiguration {
  /**
   * The identifier for the LAN you want to create an ACL policy with.
   */
  lan_id: string;

  /**
   * The name of the LAN based on the provided lan_id.
   */
  lan_name?: string;

  /**
   * Array of ports on the provided LAN that will be included in the ACL. If no ports
   * are provided, communication on any port on this LAN is allowed.
   */
  ports?: Array<number>;

  /**
   * Array of subnet IPs within the LAN that will be included in the ACL. If no
   * subnets are provided, communication on any subnets on this LAN are allowed.
   */
  subnets?: Array<Subnet>;
}

/**
 * A valid IPv4 address.
 */
export type Subnet = string | string;

export interface ACLCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  lan_1: ACLConfiguration;

  /**
   * Body param:
   */
  lan_2: ACLConfiguration;

  /**
   * Body param: The name of the ACL.
   */
  name: string;

  /**
   * Body param: Description for the ACL.
   */
  description?: string;

  /**
   * Body param: The desired forwarding action for this ACL policy. If set to
   * "false", the policy will forward traffic to Cloudflare. If set to "true", the
   * policy will forward traffic locally on the Magic WAN Connector. If not included
   * in request, will default to false.
   */
  forward_locally?: boolean;

  /**
   * Body param:
   */
  protocols?: Array<'tcp' | 'udp' | 'icmp'>;
}

export interface ACLUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Description for the ACL.
   */
  description?: string;

  /**
   * Body param: The desired forwarding action for this ACL policy. If set to
   * "false", the policy will forward traffic to Cloudflare. If set to "true", the
   * policy will forward traffic locally on the Magic WAN Connector. If not included
   * in request, will default to false.
   */
  forward_locally?: boolean;

  /**
   * Body param:
   */
  lan_1?: ACLConfiguration;

  /**
   * Body param:
   */
  lan_2?: ACLConfiguration;

  /**
   * Body param: The name of the ACL.
   */
  name?: string;

  /**
   * Body param:
   */
  protocols?: Array<'tcp' | 'udp' | 'icmp'>;
}

export interface ACLListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ACLDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ACLGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ACLs {
  export import ACL = ACLsAPI.ACL;
  export import ACLConfiguration = ACLsAPI.ACLConfiguration;
  export import Subnet = ACLsAPI.Subnet;
  export import ACLsSinglePage = ACLsAPI.ACLsSinglePage;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
  export import ACLListParams = ACLsAPI.ACLListParams;
  export import ACLDeleteParams = ACLsAPI.ACLDeleteParams;
  export import ACLGetParams = ACLsAPI.ACLGetParams;
}
