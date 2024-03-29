// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WANsAPI from 'cloudflare/resources/magic-transit/sites/wans';

export class WANs extends APIResource {
  /**
   * Creates a new WAN.
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
   * Update a specific WAN.
   */
  update(
    siteId: string,
    wanId: string,
    params: WANUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WANUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WANUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists WANs associated with an account and site.
   */
  list(
    siteId: string,
    params: WANListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WANListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/sites/${siteId}/wans`, options) as Core.APIPromise<{
        result: WANListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific WAN.
   */
  delete(
    siteId: string,
    wanId: string,
    params: WANDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WANDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`,
        options,
      ) as Core.APIPromise<{ result: WANDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific WAN.
   */
  get(
    siteId: string,
    wanId: string,
    params: WANGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WANGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/wans/${wanId}`,
        options,
      ) as Core.APIPromise<{ result: WANGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WANCreateResponse {
  wans?: Array<WANCreateResponse.WAN>;
}

export namespace WANCreateResponse {
  export interface WAN {
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
    static_addressing?: WAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace WAN {
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

export interface WANUpdateResponse {
  wan?: WANUpdateResponse.WAN;
}

export namespace WANUpdateResponse {
  export interface WAN {
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
    static_addressing?: WAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace WAN {
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

export interface WANListResponse {
  wans?: Array<WANListResponse.WAN>;
}

export namespace WANListResponse {
  export interface WAN {
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
    static_addressing?: WAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace WAN {
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

export interface WANDeleteResponse {
  deleted?: boolean;

  deleted_wan?: WANDeleteResponse.DeletedWAN;
}

export namespace WANDeleteResponse {
  export interface DeletedWAN {
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
    static_addressing?: DeletedWAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace DeletedWAN {
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

export interface WANGetResponse {
  wan?: WANGetResponse.WAN;
}

export namespace WANGetResponse {
  export interface WAN {
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
    static_addressing?: WAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace WAN {
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

export interface WANCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  wan?: WANCreateParams.WAN;
}

export namespace WANCreateParams {
  export interface WAN {
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
    static_addressing?: WAN.StaticAddressing;
  }

  export namespace WAN {
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

export interface WANUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  wan?: WANUpdateParams.WAN;
}

export namespace WANUpdateParams {
  export interface WAN {
    description?: string;

    physport?: number;

    priority?: number;

    /**
     * (optional) if omitted, use DHCP. Submit secondary_address when site is in high
     * availability mode.
     */
    static_addressing?: WAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace WAN {
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

export interface WANGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace WANs {
  export import WANCreateResponse = WANsAPI.WANCreateResponse;
  export import WANUpdateResponse = WANsAPI.WANUpdateResponse;
  export import WANListResponse = WANsAPI.WANListResponse;
  export import WANDeleteResponse = WANsAPI.WANDeleteResponse;
  export import WANGetResponse = WANsAPI.WANGetResponse;
  export import WANCreateParams = WANsAPI.WANCreateParams;
  export import WANUpdateParams = WANsAPI.WANUpdateParams;
  export import WANListParams = WANsAPI.WANListParams;
  export import WANDeleteParams = WANsAPI.WANDeleteParams;
  export import WANGetParams = WANsAPI.WANGetParams;
}
