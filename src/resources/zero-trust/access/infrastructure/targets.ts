// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
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
   * Lists and sorts an account’s targets. Filters are optional and are ANDed
   * together.
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
   * Removes one or more targets.
   */
  bulkDelete(params: TargetBulkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/infrastructure/targets/batch`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Adds one or more targets.
   */
  bulkUpdate(
    params: TargetBulkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetBulkUpdateResponse> {
    const { account_id, body } = params;
    return this._client.put(`/accounts/${account_id}/infrastructure/targets/batch`, {
      body: body,
      ...options,
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
       */
      virtual_network_id?: string;
    }
  }
}

export type TargetBulkUpdateResponse = Array<TargetBulkUpdateResponse.TargetBulkUpdateResponseItem>;

export namespace TargetBulkUpdateResponse {
  export interface TargetBulkUpdateResponseItem {
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
    ip: TargetBulkUpdateResponseItem.IP;

    /**
     * Date and time at which the target was modified
     */
    modified_at: string;
  }

  export namespace TargetBulkUpdateResponseItem {
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
         * (optional) Private virtual network identifier for the target. If omitted, the
         * default virtual network ID will be used.
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
         * (optional) Private virtual network identifier for the target. If omitted, the
         * default virtual network ID will be used.
         */
        virtual_network_id?: string;
      }
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
       * (optional) Private virtual network identifier for the target. If omitted, the
       * default virtual network ID will be used.
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
   * Query param: Date and time at which the target was created after (inclusive)
   */
  created_after?: string | null;

  /**
   * Query param: Date and time at which the target was created before (inclusive)
   */
  created_before?: string | null;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Hostname of a target
   */
  hostname?: string | null;

  /**
   * Query param: Partial match to the hostname of a target
   */
  hostname_contains?: string | null;

  /**
   * Query param: Filters for targets whose IP addresses look like the specified
   * string. Supports `*` as a wildcard character
   */
  ip_like?: string | null;

  /**
   * Query param: IPv4 address of the target
   */
  ip_v4?: string | null;

  /**
   * Query param: IPv6 address of the target
   */
  ip_v6?: string | null;

  /**
   * Query param: Filters for targets that have any of the following IP addresses.
   * Specify `ips` multiple times in query parameter to build list of candidates.
   */
  ips?: Array<string>;

  /**
   * Query param: Defines an IPv4 filter range's ending value (inclusive). Requires
   * `ipv4_start` to be specified as well.
   */
  ipv4_end?: string | null;

  /**
   * Query param: Defines an IPv4 filter range's starting value (inclusive). Requires
   * `ipv4_end` to be specified as well.
   */
  ipv4_start?: string | null;

  /**
   * Query param: Defines an IPv6 filter range's ending value (inclusive). Requires
   * `ipv6_start` to be specified as well.
   */
  ipv6_end?: string | null;

  /**
   * Query param: Defines an IPv6 filter range's starting value (inclusive). Requires
   * `ipv6_end` to be specified as well.
   */
  ipv6_start?: string | null;

  /**
   * Query param: Date and time at which the target was modified after (inclusive)
   */
  modified_after?: string | null;

  /**
   * Query param: Date and time at which the target was modified before (inclusive)
   */
  modified_before?: string | null;

  /**
   * Query param: The field to sort by.
   */
  order?: 'hostname' | 'created_at';

  /**
   * Query param: Filters for targets that have any of the following UUIDs. Specify
   * `target_ids` multiple times in query parameter to build list of candidates.
   */
  target_ids?: Array<string>;

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

export interface TargetBulkDeleteParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export interface TargetBulkUpdateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<TargetBulkUpdateParams.Body>;
}

export namespace TargetBulkUpdateParams {
  export interface Body {
    /**
     * A non-unique field that refers to a target. Case insensitive, maximum length of
     * 255 characters, supports the use of special characters dash and period, does not
     * support spaces, and must start and end with an alphanumeric character.
     */
    hostname: string;

    /**
     * The IPv4/IPv6 address that identifies where to reach a target
     */
    ip: Body.IP;
  }

  export namespace Body {
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
         * (optional) Private virtual network identifier for the target. If omitted, the
         * default virtual network ID will be used.
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
         * (optional) Private virtual network identifier for the target. If omitted, the
         * default virtual network ID will be used.
         */
        virtual_network_id?: string;
      }
    }
  }
}

export interface TargetGetParams {
  /**
   * Account identifier
   */
  account_id: string;
}

Targets.TargetListResponsesV4PagePaginationArray = TargetListResponsesV4PagePaginationArray;

export declare namespace Targets {
  export {
    type TargetCreateResponse as TargetCreateResponse,
    type TargetUpdateResponse as TargetUpdateResponse,
    type TargetListResponse as TargetListResponse,
    type TargetBulkUpdateResponse as TargetBulkUpdateResponse,
    type TargetGetResponse as TargetGetResponse,
    TargetListResponsesV4PagePaginationArray as TargetListResponsesV4PagePaginationArray,
    type TargetCreateParams as TargetCreateParams,
    type TargetUpdateParams as TargetUpdateParams,
    type TargetListParams as TargetListParams,
    type TargetDeleteParams as TargetDeleteParams,
    type TargetBulkDeleteParams as TargetBulkDeleteParams,
    type TargetBulkUpdateParams as TargetBulkUpdateParams,
    type TargetGetParams as TargetGetParams,
  };
}
