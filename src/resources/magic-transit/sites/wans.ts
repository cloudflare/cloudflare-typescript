// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as WANsAPI from './wans';
import { SinglePage } from '../../../pagination';

export class WANs extends APIResource {
  /**
   * Creates a new Site WAN.
   */
  create(
    siteId: string,
    params: WANCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WANCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites/${siteId}/wans`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WANCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site WAN.
   */
  update(
    siteId: string,
    wanId: string,
    params: WANUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WAN> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site WANs associated with an account.
   */
  list(
    siteId: string,
    params: WANListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WANsSinglePage, WAN> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/sites/${siteId}/wans`,
      WANsSinglePage,
      options,
    );
  }

  /**
   * Remove a specific Site WAN.
   */
  delete(
    siteId: string,
    wanId: string,
    params: WANDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WAN> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`,
        options,
      ) as Core.APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patch a specific Site WAN.
   */
  edit(
    siteId: string,
    wanId: string,
    params: WANEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WAN> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site WAN.
   */
  get(
    siteId: string,
    wanId: string,
    params: WANGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WAN> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`,
        options,
      ) as Core.APIPromise<{ result: WAN }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WANsSinglePage extends SinglePage<WAN> {}

export interface WAN {
  /**
   * Identifier
   */
  id?: string;

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

export type WANCreateResponse = Array<WAN>;

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
}

export interface WANEditParams {
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
}

export namespace WANs {
  export import WAN = WANsAPI.WAN;
  export import WANStaticAddressing = WANsAPI.WANStaticAddressing;
  export import WANCreateResponse = WANsAPI.WANCreateResponse;
  export import WANsSinglePage = WANsAPI.WANsSinglePage;
  export import WANCreateParams = WANsAPI.WANCreateParams;
  export import WANUpdateParams = WANsAPI.WANUpdateParams;
  export import WANListParams = WANsAPI.WANListParams;
  export import WANDeleteParams = WANsAPI.WANDeleteParams;
  export import WANEditParams = WANsAPI.WANEditParams;
  export import WANGetParams = WANsAPI.WANGetParams;
}
