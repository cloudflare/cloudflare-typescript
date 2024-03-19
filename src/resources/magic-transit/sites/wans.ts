// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WansAPI from 'cloudflare/resources/magic-transit/sites/wans';

export class Wans extends APIResource {
  /**
   * Creates a new WAN.
   */
  create(
    siteId: string,
    params: WanCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WanCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/magic/sites/${siteId}/wans`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WanCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific WAN.
   */
  update(
    siteId: string,
    wanId: string,
    params: WanUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WanUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WanUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists WANs associated with an account and site.
   */
  list(
    siteId: string,
    params: WanListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WanListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/sites/${siteId}/wans`, options) as Core.APIPromise<{
        result: WanListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific WAN.
   */
  delete(
    siteId: string,
    wanId: string,
    params: WanDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WanDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`,
        options,
      ) as Core.APIPromise<{ result: WanDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific WAN.
   */
  get(
    siteId: string,
    wanId: string,
    params: WanGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WanGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`,
        options,
      ) as Core.APIPromise<{ result: WanGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WanCreateResponse {
  wans?: Array<WanCreateResponse.Wan>;
}

export namespace WanCreateResponse {
  export interface Wan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

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
    static_addressing?: Wan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Wan {
    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    export interface StaticAddressing {
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
  }
}

export interface WanUpdateResponse {
  wan?: WanUpdateResponse.Wan;
}

export namespace WanUpdateResponse {
  export interface Wan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

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
    static_addressing?: Wan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Wan {
    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    export interface StaticAddressing {
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
  }
}

export interface WanListResponse {
  wans?: Array<WanListResponse.Wan>;
}

export namespace WanListResponse {
  export interface Wan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

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
    static_addressing?: Wan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Wan {
    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    export interface StaticAddressing {
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
  }
}

export interface WanDeleteResponse {
  deleted?: boolean;

  deleted_wan?: WanDeleteResponse.DeletedWan;
}

export namespace WanDeleteResponse {
  export interface DeletedWan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

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
    static_addressing?: DeletedWan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace DeletedWan {
    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    export interface StaticAddressing {
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
  }
}

export interface WanGetResponse {
  wan?: WanGetResponse.Wan;
}

export namespace WanGetResponse {
  export interface Wan {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

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
    static_addressing?: Wan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Wan {
    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    export interface StaticAddressing {
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
  }
}

export interface WanCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  wan?: WanCreateParams.Wan;
}

export namespace WanCreateParams {
  export interface Wan {
    physport: number;

    /**
     * VLAN port number.
     */
    vlan_tag: number;

    description?: string;

    priority?: number;

    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    static_addressing?: Wan.StaticAddressing;
  }

  export namespace Wan {
    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    export interface StaticAddressing {
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
  }
}

export interface WanUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  wan?: WanUpdateParams.Wan;
}

export namespace WanUpdateParams {
  export interface Wan {
    description?: string;

    physport?: number;

    priority?: number;

    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    static_addressing?: Wan.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace Wan {
    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    export interface StaticAddressing {
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
  }
}

export interface WanListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface WanDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface WanGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Wans {
  export import WanCreateResponse = WansAPI.WanCreateResponse;
  export import WanUpdateResponse = WansAPI.WanUpdateResponse;
  export import WanListResponse = WansAPI.WanListResponse;
  export import WanDeleteResponse = WansAPI.WanDeleteResponse;
  export import WanGetResponse = WansAPI.WanGetResponse;
  export import WanCreateParams = WansAPI.WanCreateParams;
  export import WanUpdateParams = WansAPI.WanUpdateParams;
  export import WanListParams = WansAPI.WanListParams;
  export import WanDeleteParams = WansAPI.WanDeleteParams;
  export import WanGetParams = WansAPI.WanGetParams;
}
