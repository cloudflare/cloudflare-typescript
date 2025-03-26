// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ACLs extends APIResource {
  /**
   * Creates a new Site ACL.
   */
  create(siteID: string, params: ACLCreateParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/magic/sites/${siteID}/acls`, {
        body,
        ...options,
      }) as APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site ACL.
   */
  update(aclID: string, params: ACLUpdateParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id, site_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/magic/sites/${site_id}/acls/${aclID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site ACLs associated with an account.
   */
  list(siteID: string, params: ACLListParams, options?: RequestOptions): PagePromise<ACLsSinglePage, ACL> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/sites/${siteID}/acls`,
      SinglePage<ACL>,
      options,
    );
  }

  /**
   * Remove a specific Site ACL.
   */
  delete(aclID: string, params: ACLDeleteParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id, site_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/magic/sites/${site_id}/acls/${aclID}`,
        options,
      ) as APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a specific Site ACL.
   */
  edit(aclID: string, params: ACLEditParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id, site_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/magic/sites/${site_id}/acls/${aclID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site ACL.
   */
  get(aclID: string, params: ACLGetParams, options?: RequestOptions): APIPromise<ACL> {
    const { account_id, site_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/sites/${site_id}/acls/${aclID}`,
        options,
      ) as APIPromise<{ result: ACL }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ACLsSinglePage = SinglePage<ACL>;

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
   * traffic locally on the Magic Connector. If not included in request, will default
   * to false.
   */
  forward_locally?: boolean;

  lan_1?: ACLConfiguration;

  lan_2?: ACLConfiguration;

  /**
   * The name of the ACL.
   */
  name?: string;

  protocols?: Array<AllowedProtocol>;

  /**
   * The desired traffic direction for this ACL policy. If set to "false", the policy
   * will allow bidirectional traffic. If set to "true", the policy will only allow
   * traffic in one direction. If not included in request, will default to false.
   */
  unidirectional?: boolean;
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
   * Array of port ranges on the provided LAN that will be included in the ACL. If no
   * ports or port rangess are provided, communication on any port on this LAN is
   * allowed.
   */
  port_ranges?: Array<string>;

  /**
   * Array of ports on the provided LAN that will be included in the ACL. If no ports
   * or port ranges are provided, communication on any port on this LAN is allowed.
   */
  ports?: Array<number>;

  /**
   * Array of subnet IPs within the LAN that will be included in the ACL. If no
   * subnets are provided, communication on any subnets on this LAN are allowed.
   */
  subnets?: Array<Subnet>;
}

export interface ACLConfigurationParam {
  /**
   * The identifier for the LAN you want to create an ACL policy with.
   */
  lan_id: string;

  /**
   * The name of the LAN based on the provided lan_id.
   */
  lan_name?: string;

  /**
   * Array of port ranges on the provided LAN that will be included in the ACL. If no
   * ports or port rangess are provided, communication on any port on this LAN is
   * allowed.
   */
  port_ranges?: Array<string>;

  /**
   * Array of ports on the provided LAN that will be included in the ACL. If no ports
   * or port ranges are provided, communication on any port on this LAN is allowed.
   */
  ports?: Array<number>;

  /**
   * Array of subnet IPs within the LAN that will be included in the ACL. If no
   * subnets are provided, communication on any subnets on this LAN are allowed.
   */
  subnets?: Array<SubnetParam>;
}

/**
 * Array of allowed communication protocols between configured LANs. If no
 * protocols are provided, all protocols are allowed.
 */
export type AllowedProtocol = 'tcp' | 'udp' | 'icmp';

/**
 * Array of allowed communication protocols between configured LANs. If no
 * protocols are provided, all protocols are allowed.
 */
export type AllowedProtocolParam = 'tcp' | 'udp' | 'icmp';

/**
 * A valid IPv4 address.
 */
export type Subnet = string;

/**
 * A valid IPv4 address.
 */
export type SubnetParam = string;

export interface ACLCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  lan_1: ACLConfigurationParam;

  /**
   * Body param:
   */
  lan_2: ACLConfigurationParam;

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
   * policy will forward traffic locally on the Magic Connector. If not included in
   * request, will default to false.
   */
  forward_locally?: boolean;

  /**
   * Body param:
   */
  protocols?: Array<AllowedProtocolParam>;

  /**
   * Body param: The desired traffic direction for this ACL policy. If set to
   * "false", the policy will allow bidirectional traffic. If set to "true", the
   * policy will only allow traffic in one direction. If not included in request,
   * will default to false.
   */
  unidirectional?: boolean;
}

export interface ACLUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Identifier
   */
  site_id: string;

  /**
   * Body param: Description for the ACL.
   */
  description?: string;

  /**
   * Body param: The desired forwarding action for this ACL policy. If set to
   * "false", the policy will forward traffic to Cloudflare. If set to "true", the
   * policy will forward traffic locally on the Magic Connector. If not included in
   * request, will default to false.
   */
  forward_locally?: boolean;

  /**
   * Body param:
   */
  lan_1?: ACLConfigurationParam;

  /**
   * Body param:
   */
  lan_2?: ACLConfigurationParam;

  /**
   * Body param: The name of the ACL.
   */
  name?: string;

  /**
   * Body param:
   */
  protocols?: Array<AllowedProtocolParam>;

  /**
   * Body param: The desired traffic direction for this ACL policy. If set to
   * "false", the policy will allow bidirectional traffic. If set to "true", the
   * policy will only allow traffic in one direction. If not included in request,
   * will default to false.
   */
  unidirectional?: boolean;
}

export interface ACLListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ACLDeleteParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Identifier
   */
  site_id: string;
}

export interface ACLEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Identifier
   */
  site_id: string;

  /**
   * Body param: Description for the ACL.
   */
  description?: string;

  /**
   * Body param: The desired forwarding action for this ACL policy. If set to
   * "false", the policy will forward traffic to Cloudflare. If set to "true", the
   * policy will forward traffic locally on the Magic Connector. If not included in
   * request, will default to false.
   */
  forward_locally?: boolean;

  /**
   * Body param:
   */
  lan_1?: ACLConfigurationParam;

  /**
   * Body param:
   */
  lan_2?: ACLConfigurationParam;

  /**
   * Body param: The name of the ACL.
   */
  name?: string;

  /**
   * Body param:
   */
  protocols?: Array<AllowedProtocolParam>;

  /**
   * Body param: The desired traffic direction for this ACL policy. If set to
   * "false", the policy will allow bidirectional traffic. If set to "true", the
   * policy will only allow traffic in one direction. If not included in request,
   * will default to false.
   */
  unidirectional?: boolean;
}

export interface ACLGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Identifier
   */
  site_id: string;
}

export declare namespace ACLs {
  export {
    type ACL as ACL,
    type ACLConfiguration as ACLConfiguration,
    type AllowedProtocol as AllowedProtocol,
    type Subnet as Subnet,
    type ACLsSinglePage as ACLsSinglePage,
    type ACLCreateParams as ACLCreateParams,
    type ACLUpdateParams as ACLUpdateParams,
    type ACLListParams as ACLListParams,
    type ACLDeleteParams as ACLDeleteParams,
    type ACLEditParams as ACLEditParams,
    type ACLGetParams as ACLGetParams,
  };
}
