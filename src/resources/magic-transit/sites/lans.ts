// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseLANs extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'sites', 'lans'] = Object.freeze([
    'magicTransit',
    'sites',
    'lans',
  ] as const);

  /**
   * Creates a new Site LAN. If the site is in high availability mode,
   * static_addressing is required along with secondary and virtual address.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const lan of client.magicTransit.sites.lans.create(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const lan = await client.magicTransit.sites.lans.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     site_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const lan of client.magicTransit.sites.lans.list(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const lan = await client.magicTransit.sites.lans.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     site_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const lan = await client.magicTransit.sites.lans.edit(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     site_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const lan = await client.magicTransit.sites.lans.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     site_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
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
export class LANs extends BaseLANs {}

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
   * Optional list of custom DHCP options to include in DHCP responses. Only valid
   * when DHCP server is enabled.
   */
  dhcp_options?: Array<DHCPServer.DHCPOption>;

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
  reservations?: { [key: string]: string };
}

export namespace DHCPServer {
  /**
   * A custom DHCP option to include in DHCP responses.
   */
  export interface DHCPOption {
    /**
     * DHCP option number (1-254). Options 0 and 255 are reserved by RFC 2132. Options
     * 3, 6, and 51 are not allowed because they conflict with connector-managed
     * configuration.
     */
    code: number;

    /**
     * The type of the option value. text: a string (max 255 bytes). hex:
     * colon-separated hex bytes (e.g. "01:04:aa:bb:cc", max 255 bytes). ip: an IPv4
     * address (e.g. "10.20.30.40"). byte: an unsigned integer 0-255 (1 byte). short:
     * an unsigned integer 0-65535 (2 bytes). integer: an unsigned integer 0-4294967295
     * (4 bytes).
     */
    type: 'text' | 'hex' | 'ip' | 'byte' | 'short' | 'integer';

    /**
     * The option value, interpreted according to the type field.
     */
    value: string;
  }
}

export interface DHCPServerParam {
  /**
   * Optional list of custom DHCP options to include in DHCP responses. Only valid
   * when DHCP server is enabled.
   */
  dhcp_options?: Array<DHCPServerParam.DHCPOption>;

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
  reservations?: { [key: string]: string };
}

export namespace DHCPServerParam {
  /**
   * A custom DHCP option to include in DHCP responses.
   */
  export interface DHCPOption {
    /**
     * DHCP option number (1-254). Options 0 and 255 are reserved by RFC 2132. Options
     * 3, 6, and 51 are not allowed because they conflict with connector-managed
     * configuration.
     */
    code: number;

    /**
     * The type of the option value. text: a string (max 255 bytes). hex:
     * colon-separated hex bytes (e.g. "01:04:aa:bb:cc", max 255 bytes). ip: an IPv4
     * address (e.g. "10.20.30.40"). byte: an unsigned integer 0-255 (1 byte). short:
     * an unsigned integer 0-65535 (2 bytes). integer: an unsigned integer 0-4294967295
     * (4 bytes).
     */
    type: 'text' | 'hex' | 'ip' | 'byte' | 'short' | 'integer';

    /**
     * The option value, interpreted according to the type field.
     */
    value: string;
  }
}

export interface LAN {
  /**
   * Identifier
   */
  id?: string;

  bond_id?: number;

  /**
   * mark true to use this LAN for HA probing. only works for site with HA turned on.
   * only one LAN can be set as the ha_link.
   */
  ha_link?: boolean;

  /**
   * mark true to use this LAN for source-based breakout traffic
   */
  is_breakout?: boolean;

  /**
   * mark true to use this LAN for source-based prioritized traffic
   */
  is_prioritized?: boolean;

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
   * Body param
   */
  bond_id?: number;

  /**
   * Body param: mark true to use this LAN for HA probing. only works for site with
   * HA turned on. only one LAN can be set as the ha_link.
   */
  ha_link?: boolean;

  /**
   * Body param: mark true to use this LAN for source-based breakout traffic
   */
  is_breakout?: boolean;

  /**
   * Body param: mark true to use this LAN for source-based prioritized traffic
   */
  is_prioritized?: boolean;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  nat?: NatParam;

  /**
   * Body param
   */
  physport?: number;

  /**
   * Body param
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
   * Body param
   */
  bond_id?: number;

  /**
   * Body param: mark true to use this LAN for source-based breakout traffic
   */
  is_breakout?: boolean;

  /**
   * Body param: mark true to use this LAN for source-based prioritized traffic
   */
  is_prioritized?: boolean;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  nat?: NatParam;

  /**
   * Body param
   */
  physport?: number;

  /**
   * Body param
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
   * Body param
   */
  bond_id?: number;

  /**
   * Body param: mark true to use this LAN for source-based breakout traffic
   */
  is_breakout?: boolean;

  /**
   * Body param: mark true to use this LAN for source-based prioritized traffic
   */
  is_prioritized?: boolean;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  nat?: NatParam;

  /**
   * Body param
   */
  physport?: number;

  /**
   * Body param
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
