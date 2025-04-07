// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LANs extends APIResource {
  /**
   * Creates a new Site LAN. If the site is in high availability mode,
   * static_addressing is required along with secondary and virtual address.
   */
  create(
    siteID: string,
    params: LANCreateParams,
    options?: RequestOptions,
  ): PagePromise<LANsSinglePage, LAN> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/sites/${siteID}/lans`,
      SinglePage<LAN>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Update a specific Site LAN.
   */
  update(lanID: string, params: LANUpdateParams, options?: RequestOptions): APIPromise<LAN> {
    const { account_id, site_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/magic/sites/${site_id}/lans/${lanID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site LANs associated with an account.
   */
  list(siteID: string, params: LANListParams, options?: RequestOptions): PagePromise<LANsSinglePage, LAN> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/sites/${siteID}/lans`,
      SinglePage<LAN>,
      options,
    );
  }

  /**
   * Remove a specific Site LAN.
   */
  delete(lanID: string, params: LANDeleteParams, options?: RequestOptions): APIPromise<LAN> {
    const { account_id, site_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/magic/sites/${site_id}/lans/${lanID}`,
        options,
      ) as APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a specific Site LAN.
   */
  edit(lanID: string, params: LANEditParams, options?: RequestOptions): APIPromise<LAN> {
    const { account_id, site_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/magic/sites/${site_id}/lans/${lanID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site LAN.
   */
  get(lanID: string, params: LANGetParams, options?: RequestOptions): APIPromise<LAN> {
    const { account_id, site_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/sites/${site_id}/lans/${lanID}`,
        options,
      ) as APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LANsSinglePage = SinglePage<LAN>;

export interface DHCPRelay {
  /**
   * List of DHCP server IPs.
   */
  server_addresses?: Array<string>;
}

export interface DHCPRelayParam {
  /**
   * List of DHCP server IPs.
   */
  server_addresses?: Array<string>;
}

export interface DHCPServer {
  /**
   * A valid IPv4 address.
   */
  dhcp_pool_end?: string;

  /**
   * A valid IPv4 address.
   */
  dhcp_pool_start?: string;

  /**
   * A valid IPv4 address.
   */
  dns_server?: string;

  dns_servers?: Array<string>;

  /**
   * Mapping of MAC addresses to IP addresses
   */
  reservations?: Record<string, string>;
}

export interface DHCPServerParam {
  /**
   * A valid IPv4 address.
   */
  dhcp_pool_end?: string;

  /**
   * A valid IPv4 address.
   */
  dhcp_pool_start?: string;

  /**
   * A valid IPv4 address.
   */
  dns_server?: string;

  dns_servers?: Array<string>;

  /**
   * Mapping of MAC addresses to IP addresses
   */
  reservations?: Record<string, string>;
}

export interface LAN {
  /**
   * Identifier
   */
  id?: string;

  /**
   * mark true to use this LAN for HA probing. only works for site with HA turned on.
   * only one LAN can be set as the ha_link.
   */
  ha_link?: boolean;

  name?: string;

  nat?: Nat;

  physport?: number;

  routed_subnets?: Array<RoutedSubnet>;

  /**
   * Identifier
   */
  site_id?: string;

  /**
   * If the site is not configured in high availability mode, this configuration is
   * optional (if omitted, use DHCP). However, if in high availability mode,
   * static_address is required along with secondary and virtual address.
   */
  static_addressing?: LANStaticAddressing;

  /**
   * VLAN ID. Use zero for untagged.
   */
  vlan_tag?: number;
}

/**
 * If the site is not configured in high availability mode, this configuration is
 * optional (if omitted, use DHCP). However, if in high availability mode,
 * static_address is required along with secondary and virtual address.
 */
export interface LANStaticAddressing {
  /**
   * A valid CIDR notation representing an IP range.
   */
  address: string;

  dhcp_relay?: DHCPRelay;

  dhcp_server?: DHCPServer;

  /**
   * A valid CIDR notation representing an IP range.
   */
  secondary_address?: string;

  /**
   * A valid CIDR notation representing an IP range.
   */
  virtual_address?: string;
}

/**
 * If the site is not configured in high availability mode, this configuration is
 * optional (if omitted, use DHCP). However, if in high availability mode,
 * static_address is required along with secondary and virtual address.
 */
export interface LANStaticAddressingParam {
  /**
   * A valid CIDR notation representing an IP range.
   */
  address: string;

  dhcp_relay?: DHCPRelayParam;

  dhcp_server?: DHCPServerParam;

  /**
   * A valid CIDR notation representing an IP range.
   */
  secondary_address?: string;

  /**
   * A valid CIDR notation representing an IP range.
   */
  virtual_address?: string;
}

export interface Nat {
  /**
   * A valid CIDR notation representing an IP range.
   */
  static_prefix?: string;
}

export interface NatParam {
  /**
   * A valid CIDR notation representing an IP range.
   */
  static_prefix?: string;
}

export interface RoutedSubnet {
  /**
   * A valid IPv4 address.
   */
  next_hop: string;

  /**
   * A valid CIDR notation representing an IP range.
   */
  prefix: string;

  nat?: Nat;
}

export interface RoutedSubnetParam {
  /**
   * A valid IPv4 address.
   */
  next_hop: string;

  /**
   * A valid CIDR notation representing an IP range.
   */
  prefix: string;

  nat?: NatParam;
}

export interface LANCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  physport: number;

  /**
   * Body param: mark true to use this LAN for HA probing. only works for site with
   * HA turned on. only one LAN can be set as the ha_link.
   */
  ha_link?: boolean;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  nat?: NatParam;

  /**
   * Body param:
   */
  routed_subnets?: Array<RoutedSubnetParam>;

  /**
   * Body param: If the site is not configured in high availability mode, this
   * configuration is optional (if omitted, use DHCP). However, if in high
   * availability mode, static_address is required along with secondary and virtual
   * address.
   */
  static_addressing?: LANStaticAddressingParam;

  /**
   * Body param: VLAN ID. Use zero for untagged.
   */
  vlan_tag?: number;
}

export interface LANUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Identifier
   */
  site_id: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  nat?: NatParam;

  /**
   * Body param:
   */
  physport?: number;

  /**
   * Body param:
   */
  routed_subnets?: Array<RoutedSubnetParam>;

  /**
   * Body param: If the site is not configured in high availability mode, this
   * configuration is optional (if omitted, use DHCP). However, if in high
   * availability mode, static_address is required along with secondary and virtual
   * address.
   */
  static_addressing?: LANStaticAddressingParam;

  /**
   * Body param: VLAN ID. Use zero for untagged.
   */
  vlan_tag?: number;
}

export interface LANListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface LANDeleteParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Identifier
   */
  site_id: string;
}

export interface LANEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: Identifier
   */
  site_id: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  nat?: NatParam;

  /**
   * Body param:
   */
  physport?: number;

  /**
   * Body param:
   */
  routed_subnets?: Array<RoutedSubnetParam>;

  /**
   * Body param: If the site is not configured in high availability mode, this
   * configuration is optional (if omitted, use DHCP). However, if in high
   * availability mode, static_address is required along with secondary and virtual
   * address.
   */
  static_addressing?: LANStaticAddressingParam;

  /**
   * Body param: VLAN ID. Use zero for untagged.
   */
  vlan_tag?: number;
}

export interface LANGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Identifier
   */
  site_id: string;
}

export declare namespace LANs {
  export {
    type DHCPRelay as DHCPRelay,
    type DHCPServer as DHCPServer,
    type LAN as LAN,
    type LANStaticAddressing as LANStaticAddressing,
    type Nat as Nat,
    type RoutedSubnet as RoutedSubnet,
    type LANsSinglePage as LANsSinglePage,
    type LANCreateParams as LANCreateParams,
    type LANUpdateParams as LANUpdateParams,
    type LANListParams as LANListParams,
    type LANDeleteParams as LANDeleteParams,
    type LANEditParams as LANEditParams,
    type LANGetParams as LANGetParams,
  };
}
