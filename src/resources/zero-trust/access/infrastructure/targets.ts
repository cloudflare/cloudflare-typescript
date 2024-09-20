// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as TargetsAPI from './targets';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Targets extends APIResource {
  /**
   * Create new target
   */
  create(params: TargetCreateParams, options?: Core.RequestOptions): Core.APIPromise<TargetCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/infrastructure/targets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TargetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update target
   */
  update(
    targetId: string,
    params: TargetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/infrastructure/targets/${targetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TargetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all targets
   */
  list(
    params: TargetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TargetListResponsesV4PagePaginationArray, TargetListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/infrastructure/targets`,
      TargetListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete target
   */
  delete(targetId: string, params: TargetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/infrastructure/targets/${targetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get target
   */
  get(
    targetId: string,
    params: TargetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/infrastructure/targets/${targetId}`,
        options,
      ) as Core.APIPromise<{ result: TargetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TargetListResponsesV4PagePaginationArray extends V4PagePaginationArray<TargetListResponse> {}

export interface TargetCreateResponse {
  /**
   * Target identifier
   */
  id: string;

  /**
   * Date and time at which the target was created
   */
  created_at: string;

  /**
   * A non-unique field that refers to a target
   */
  hostname: string;

  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  ip: TargetCreateResponse.IP;

  /**
   * Date and time at which the target was modified
   */
  modified_at: string;
}

export namespace TargetCreateResponse {
  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  export interface IP {
    /**
     * The target's IPv4 address
     */
    ipv4?: IP.IPV4;

    /**
     * The target's IPv6 address
     */
    ipv6?: IP.IPV6;
  }

  export namespace IP {
    /**
     * The target's IPv4 address
     */
    export interface IPV4 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }

    /**
     * The target's IPv6 address
     */
    export interface IPV6 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }
  }
}

export interface TargetUpdateResponse {
  /**
   * Target identifier
   */
  id: string;

  /**
   * Date and time at which the target was created
   */
  created_at: string;

  /**
   * A non-unique field that refers to a target
   */
  hostname: string;

  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  ip: TargetUpdateResponse.IP;

  /**
   * Date and time at which the target was modified
   */
  modified_at: string;
}

export namespace TargetUpdateResponse {
  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  export interface IP {
    /**
     * The target's IPv4 address
     */
    ipv4?: IP.IPV4;

    /**
     * The target's IPv6 address
     */
    ipv6?: IP.IPV6;
  }

  export namespace IP {
    /**
     * The target's IPv4 address
     */
    export interface IPV4 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }

    /**
     * The target's IPv6 address
     */
    export interface IPV6 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }
  }
}

export interface TargetListResponse {
  /**
   * Target identifier
   */
  id: string;

  /**
   * Date and time at which the target was created
   */
  created_at: string;

  /**
   * A non-unique field that refers to a target
   */
  hostname: string;

  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  ip: TargetListResponse.IP;

  /**
   * Date and time at which the target was modified
   */
  modified_at: string;
}

export namespace TargetListResponse {
  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  export interface IP {
    /**
     * The target's IPv4 address
     */
    ipv4?: IP.IPV4;

    /**
     * The target's IPv6 address
     */
    ipv6?: IP.IPV6;
  }

  export namespace IP {
    /**
     * The target's IPv4 address
     */
    export interface IPV4 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }

    /**
     * The target's IPv6 address
     */
    export interface IPV6 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }
  }
}

export interface TargetGetResponse {
  /**
   * Target identifier
   */
  id: string;

  /**
   * Date and time at which the target was created
   */
  created_at: string;

  /**
   * A non-unique field that refers to a target
   */
  hostname: string;

  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  ip: TargetGetResponse.IP;

  /**
   * Date and time at which the target was modified
   */
  modified_at: string;
}

export namespace TargetGetResponse {
  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  export interface IP {
    /**
     * The target's IPv4 address
     */
    ipv4?: IP.IPV4;

    /**
     * The target's IPv6 address
     */
    ipv6?: IP.IPV6;
  }

  export namespace IP {
    /**
     * The target's IPv4 address
     */
    export interface IPV4 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }

    /**
     * The target's IPv6 address
     */
    export interface IPV6 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }
  }
}

export interface TargetCreateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param: A non-unique field that refers to a target. Case insensitive,
   * maximum length of 255 characters, supports the use of special characters dash
   * and period, does not support spaces, and must start and end with an alphanumeric
   * character.
   */
  hostname: string;

  /**
   * Body param: The IPv4/IPv6 address that identifies where to reach a target
   */
  ip: TargetCreateParams.IP;
}

export namespace TargetCreateParams {
  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  export interface IP {
    /**
     * The target's IPv4 address
     */
    ipv4?: IP.IPV4;

    /**
     * The target's IPv6 address
     */
    ipv6?: IP.IPV6;
  }

  export namespace IP {
    /**
     * The target's IPv4 address
     */
    export interface IPV4 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }

    /**
     * The target's IPv6 address
     */
    export interface IPV6 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }
  }
}

export interface TargetUpdateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param: A non-unique field that refers to a target. Case insensitive,
   * maximum length of 255 characters, supports the use of special characters dash
   * and period, does not support spaces, and must start and end with an alphanumeric
   * character.
   */
  hostname: string;

  /**
   * Body param: The IPv4/IPv6 address that identifies where to reach a target
   */
  ip: TargetUpdateParams.IP;
}

export namespace TargetUpdateParams {
  /**
   * The IPv4/IPv6 address that identifies where to reach a target
   */
  export interface IP {
    /**
     * The target's IPv4 address
     */
    ipv4?: IP.IPV4;

    /**
     * The target's IPv6 address
     */
    ipv6?: IP.IPV6;
  }

  export namespace IP {
    /**
     * The target's IPv4 address
     */
    export interface IPV4 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }

    /**
     * The target's IPv6 address
     */
    export interface IPV6 {
      /**
       * IP address of the target
       */
      ip_addr?: string;

      /**
       * Private virtual network identifier for the target
       */
      virtual_network_id?: string;
    }
  }
}

export interface TargetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Query param: Date and time at which the target was created
   */
  created_after?: string | null;

  /**
   * Query param: Hostname of a target
   */
  hostname?: string | null;

  /**
   * Query param: Partial match to the hostname of a target
   */
  hostname_contains?: string | null;

  /**
   * Query param: IPv4 address of the target
   */
  ip_v4?: string | null;

  /**
   * Query param: IPv6 address of the target
   */
  ip_v6?: string | null;

  /**
   * Query param: Date and time at which the target was modified
   */
  modified_after?: string | null;

  /**
   * Query param: Private virtual network identifier of the target
   */
  virtual_network_id?: string | null;
}

export interface TargetDeleteParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export interface TargetGetParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export namespace Targets {
  export import TargetCreateResponse = TargetsAPI.TargetCreateResponse;
  export import TargetUpdateResponse = TargetsAPI.TargetUpdateResponse;
  export import TargetListResponse = TargetsAPI.TargetListResponse;
  export import TargetGetResponse = TargetsAPI.TargetGetResponse;
  export import TargetListResponsesV4PagePaginationArray = TargetsAPI.TargetListResponsesV4PagePaginationArray;
  export import TargetCreateParams = TargetsAPI.TargetCreateParams;
  export import TargetUpdateParams = TargetsAPI.TargetUpdateParams;
  export import TargetListParams = TargetsAPI.TargetListParams;
  export import TargetDeleteParams = TargetsAPI.TargetDeleteParams;
  export import TargetGetParams = TargetsAPI.TargetGetParams;
}
