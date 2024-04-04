// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LANsAPI from 'cloudflare/resources/magic-transit/sites/lans';

export class LANs extends APIResource {
  /**
   * Creates a new LAN. If the site is in high availability mode, static_addressing
   * is required along with secondary and virtual address.
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
   * Update a specific LAN.
   */
  update(
    siteId: string,
    lanId: string,
    params: LANUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LANUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: LANUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists LANs associated with an account and site.
   */
  list(
    siteId: string,
    params: LANListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LANListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/sites/${siteId}/lans`, options) as Core.APIPromise<{
        result: LANListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific LAN.
   */
  delete(
    siteId: string,
    lanId: string,
    params: LANDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LANDeleteResponse> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: LANDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific LAN.
   */
  get(
    siteId: string,
    lanId: string,
    params: LANGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LANGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/sites/${siteId}/lans/${lanId}`,
        options,
      ) as Core.APIPromise<{ result: LANGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LANCreateResponse {
  lans?: Array<LANCreateResponse.LAN>;
}

export namespace LANCreateResponse {
  export interface LAN {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: LAN.Nat;

    physport?: number;

    routed_subnets?: Array<LAN.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: LAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace LAN {
    export interface Nat {
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

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DHCPRelay;

      dhcp_server?: StaticAddressing.DHCPServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DHCPRelay {
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
    }
  }
}

export interface LANUpdateResponse {
  lan?: LANUpdateResponse.LAN;
}

export namespace LANUpdateResponse {
  export interface LAN {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: LAN.Nat;

    physport?: number;

    routed_subnets?: Array<LAN.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: LAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace LAN {
    export interface Nat {
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

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DHCPRelay;

      dhcp_server?: StaticAddressing.DHCPServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DHCPRelay {
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
    }
  }
}

export interface LANListResponse {
  lans?: Array<LANListResponse.LAN>;
}

export namespace LANListResponse {
  export interface LAN {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: LAN.Nat;

    physport?: number;

    routed_subnets?: Array<LAN.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: LAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace LAN {
    export interface Nat {
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

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DHCPRelay;

      dhcp_server?: StaticAddressing.DHCPServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DHCPRelay {
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
    }
  }
}

export interface LANDeleteResponse {
  deleted?: boolean;

  deleted_lan?: LANDeleteResponse.DeletedLAN;
}

export namespace LANDeleteResponse {
  export interface DeletedLAN {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: DeletedLAN.Nat;

    physport?: number;

    routed_subnets?: Array<DeletedLAN.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: DeletedLAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace DeletedLAN {
    export interface Nat {
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

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DHCPRelay;

      dhcp_server?: StaticAddressing.DHCPServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DHCPRelay {
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
    }
  }
}

export interface LANGetResponse {
  lan?: LANGetResponse.LAN;
}

export namespace LANGetResponse {
  export interface LAN {
    /**
     * Identifier
     */
    id?: string;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: LAN.Nat;

    physport?: number;

    routed_subnets?: Array<LAN.RoutedSubnet>;

    /**
     * Identifier
     */
    site_id?: string;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: LAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace LAN {
    export interface Nat {
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

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DHCPRelay;

      dhcp_server?: StaticAddressing.DHCPServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DHCPRelay {
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
    }
  }
}

export interface LANCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  lan?: LANCreateParams.LAN;
}

export namespace LANCreateParams {
  export interface LAN {
    physport: number;

    /**
     * VLAN port number.
     */
    vlan_tag: number;

    description?: string;

    /**
     * mark true to use this LAN for HA probing. only works for site with HA turned on.
     * only one LAN can be set as the ha_link.
     */
    ha_link?: boolean;

    nat?: LAN.Nat;

    routed_subnets?: Array<LAN.RoutedSubnet>;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: LAN.StaticAddressing;
  }

  export namespace LAN {
    export interface Nat {
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

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DHCPRelay;

      dhcp_server?: StaticAddressing.DHCPServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DHCPRelay {
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
    }
  }
}

export interface LANUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  lan?: LANUpdateParams.LAN;
}

export namespace LANUpdateParams {
  export interface LAN {
    description?: string;

    nat?: LAN.Nat;

    physport?: number;

    routed_subnets?: Array<LAN.RoutedSubnet>;

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    static_addressing?: LAN.StaticAddressing;

    /**
     * VLAN port number.
     */
    vlan_tag?: number;
  }

  export namespace LAN {
    export interface Nat {
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

      nat?: RoutedSubnet.Nat;
    }

    export namespace RoutedSubnet {
      export interface Nat {
        /**
         * A valid CIDR notation representing an IP range.
         */
        static_prefix?: string;
      }
    }

    /**
     * If the site is not configured in high availability mode, this configuration is
     * optional (if omitted, use DHCP). However, if in high availability mode,
     * static_address is required along with secondary and virtual address.
     */
    export interface StaticAddressing {
      /**
       * A valid CIDR notation representing an IP range.
       */
      address: string;

      dhcp_relay?: StaticAddressing.DHCPRelay;

      dhcp_server?: StaticAddressing.DHCPServer;

      /**
       * A valid CIDR notation representing an IP range.
       */
      secondary_address?: string;

      /**
       * A valid CIDR notation representing an IP range.
       */
      virtual_address?: string;
    }

    export namespace StaticAddressing {
      export interface DHCPRelay {
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
    }
  }
}

export interface LANListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface LANDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface LANGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace LANs {
  export import LANCreateResponse = LANsAPI.LANCreateResponse;
  export import LANUpdateResponse = LANsAPI.LANUpdateResponse;
  export import LANListResponse = LANsAPI.LANListResponse;
  export import LANDeleteResponse = LANsAPI.LANDeleteResponse;
  export import LANGetResponse = LANsAPI.LANGetResponse;
  export import LANCreateParams = LANsAPI.LANCreateParams;
  export import LANUpdateParams = LANsAPI.LANUpdateParams;
  export import LANListParams = LANsAPI.LANListParams;
  export import LANDeleteParams = LANsAPI.LANDeleteParams;
  export import LANGetParams = LANsAPI.LANGetParams;
}
