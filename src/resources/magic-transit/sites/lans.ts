// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as LANsAPI from './lans';
import { SinglePage } from '../../../pagination';

export class LANs extends APIResource {
  /**
   * Creates a new Site LAN. If the site is in high availability mode,
   * static_addressing is required along with secondary and virtual address.
   */
  create(
    siteId: string,
    params: LANCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LANCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites/${siteId}/lans`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LANCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site LAN.
   */
  update(
    siteId: string,
    lanId: string,
    params: LANUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LAN> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site LANs associated with an account.
   */
  list(
    siteId: string,
    params: LANListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LANsSinglePage, LAN> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/sites/${siteId}/lans`,
      LANsSinglePage,
      options,
    );
  }

  /**
   * Remove a specific Site LAN.
   */
  delete(
    siteId: string,
    lanId: string,
    params: LANDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LAN> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`,
        options,
      ) as Core.APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a specific Site LAN.
   */
  edit(
    siteId: string,
    lanId: string,
    params: LANEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LAN> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site LAN.
   */
  get(
    siteId: string,
    lanId: string,
    params: LANGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LAN> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`,
        options,
      ) as Core.APIPromise<{ result: LAN }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class LANsSinglePage extends SinglePage<LAN> {}

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
   * VLAN port number.
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

export type LANCreateResponse = Array<LAN>;

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
   * Body param: VLAN port number.
   */
  vlan_tag: number;

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
}

export interface LANUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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
   * Body param: VLAN port number.
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
}

export interface LANEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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
   * Body param: VLAN port number.
   */
  vlan_tag?: number;
}

export interface LANGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace LANs {
  export import DHCPRelay = LANsAPI.DHCPRelay;
  export import DHCPServer = LANsAPI.DHCPServer;
  export import LAN = LANsAPI.LAN;
  export import LANStaticAddressing = LANsAPI.LANStaticAddressing;
  export import Nat = LANsAPI.Nat;
  export import RoutedSubnet = LANsAPI.RoutedSubnet;
  export import LANCreateResponse = LANsAPI.LANCreateResponse;
  export import LANsSinglePage = LANsAPI.LANsSinglePage;
  export import LANCreateParams = LANsAPI.LANCreateParams;
  export import LANUpdateParams = LANsAPI.LANUpdateParams;
  export import LANListParams = LANsAPI.LANListParams;
  export import LANDeleteParams = LANsAPI.LANDeleteParams;
  export import LANEditParams = LANsAPI.LANEditParams;
  export import LANGetParams = LANsAPI.LANGetParams;
}
