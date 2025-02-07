// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class WANs extends APIResource {
  /**
   * Creates a new Site WAN.
   */
  create(
    siteID: string,
    params: WANCreateParams,
    options?: RequestOptions,
  ): PagePromise<WANsSinglePage, WAN> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/sites/${siteID}/wans`,
      SinglePage<WAN>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Update a specific Site WAN.
   */
  update(wanID: string, params: WANUpdateParams, options?: RequestOptions): APIPromise<WAN> {
    const { account_id, site_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/magic/sites/${site_id}/wans/${wanID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site WANs associated with an account.
   */
  list(siteID: string, params: WANListParams, options?: RequestOptions): PagePromise<WANsSinglePage, WAN> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/sites/${siteID}/wans`,
      SinglePage<WAN>,
      options,
    );
  }

  /**
   * Remove a specific Site WAN.
   */
  delete(wanID: string, params: WANDeleteParams, options?: RequestOptions): APIPromise<WAN> {
    const { account_id, site_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/magic/sites/${site_id}/wans/${wanID}`,
        options,
      ) as APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a specific Site WAN.
   */
  edit(wanID: string, params: WANEditParams, options?: RequestOptions): APIPromise<WAN> {
    const { account_id, site_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/magic/sites/${site_id}/wans/${wanID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site WAN.
   */
  get(wanID: string, params: WANGetParams, options?: RequestOptions): APIPromise<WAN> {
    const { account_id, site_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/sites/${site_id}/wans/${wanID}`,
        options,
      ) as APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WANsSinglePage = SinglePage<WAN>;

export interface WAN {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Magic WAN health check rate for tunnels created on this link. The default value
   * is `mid`.
   */
  health_check_rate?: 'low' | 'mid' | 'high';

  name?: string;

  physport?: number;

  /**
   * Priority of WAN for traffic loadbalancing.
   */
  priority?: number;

  /**
   * Identifier
   */
  site_id?: string;

  /**
   * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
   * availability mode.
   */
  static_addressing?: WANStaticAddressing;

  /**
   * VLAN port number.
   */
  vlan_tag?: number;
}

/**
 * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
 * availability mode.
 */
export interface WANStaticAddressing {
  /**
   * A valid CIDR notation representing an IP range.
   */
  address: string;

  /**
   * A valid IPv4 address.
   */
  gateway_address: string;

  /**
   * A valid CIDR notation representing an IP range.
   */
  secondary_address?: string;
}

/**
 * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
 * availability mode.
 */
export interface WANStaticAddressingParam {
  /**
   * A valid CIDR notation representing an IP range.
   */
  address: string;

  /**
   * A valid IPv4 address.
   */
  gateway_address: string;

  /**
   * A valid CIDR notation representing an IP range.
   */
  secondary_address?: string;
}

export interface WANCreateParams {
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
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  priority?: number;

  /**
   * Body param: (optional) if omitted, use DHCP. Submit secondary_address when site
   * is in high availability mode.
   */
  static_addressing?: WANStaticAddressingParam;
}

export interface WANUpdateParams {
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
  physport?: number;

  /**
   * Body param:
   */
  priority?: number;

  /**
   * Body param: (optional) if omitted, use DHCP. Submit secondary_address when site
   * is in high availability mode.
   */
  static_addressing?: WANStaticAddressingParam;

  /**
   * Body param: VLAN port number.
   */
  vlan_tag?: number;
}

export interface WANListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface WANDeleteParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Identifier
   */
  site_id: string;
}

export interface WANEditParams {
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
  physport?: number;

  /**
   * Body param:
   */
  priority?: number;

  /**
   * Body param: (optional) if omitted, use DHCP. Submit secondary_address when site
   * is in high availability mode.
   */
  static_addressing?: WANStaticAddressingParam;

  /**
   * Body param: VLAN port number.
   */
  vlan_tag?: number;
}

export interface WANGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Identifier
   */
  site_id: string;
}

export declare namespace WANs {
  export {
    type WAN as WAN,
    type WANStaticAddressing as WANStaticAddressing,
    type WANsSinglePage as WANsSinglePage,
    type WANCreateParams as WANCreateParams,
    type WANUpdateParams as WANUpdateParams,
    type WANListParams as WANListParams,
    type WANDeleteParams as WANDeleteParams,
    type WANEditParams as WANEditParams,
    type WANGetParams as WANGetParams,
  };
}
