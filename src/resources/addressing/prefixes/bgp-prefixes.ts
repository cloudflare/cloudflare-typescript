// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BGPPrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp-prefixes';

export class BGPPrefixes extends APIResource {
  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to
   * control which specific subnets are advertised to the Internet. It is possible to
   * advertise subnets more specific than an IP Prefix by creating more specific BGP
   * Prefixes.
   */
  list(
    prefixId: string,
    params: BGPPrefixListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPPrefixListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes`,
        options,
      ) as Core.APIPromise<{ result: BGPPrefixListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement
   * status (advertised or withdrawn).
   */
  edit(
    prefixId: string,
    bgpPrefixId: string,
    params: BGPPrefixEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPPrefixEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: BGPPrefixEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a single BGP Prefix according to its identifier
   */
  get(
    prefixId: string,
    bgpPrefixId: string,
    params: BGPPrefixGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPPrefixGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        options,
      ) as Core.APIPromise<{ result: BGPPrefixGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BGPPrefixListResponse = Array<BGPPrefixListResponse.BGPPrefixListResponseItem>;

export namespace BGPPrefixListResponse {
  export interface BGPPrefixListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    bgp_signal_opts?: BGPPrefixListResponseItem.BGPSignalOpts;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    modified_at?: string;

    on_demand?: BGPPrefixListResponseItem.OnDemand;
  }

  export namespace BGPPrefixListResponseItem {
    export interface BGPSignalOpts {
      /**
       * Whether control of advertisement of the prefix to the Internet is enabled to be
       * performed via BGP signal
       */
      enabled?: boolean;

      /**
       * Last time BGP signaling control was toggled. This field is null if BGP signaling
       * has never been enabled.
       */
      modified_at?: string | null;
    }

    export interface OnDemand {
      /**
       * Prefix advertisement status to the Internet. This field is only not 'null' if on
       * demand is enabled.
       */
      advertised?: boolean | null;

      /**
       * Last time the advertisement status was changed. This field is only not 'null' if
       * on demand is enabled.
       */
      advertised_modified_at?: string | null;

      /**
       * Whether advertisement of the prefix to the Internet may be dynamically enabled
       * or disabled.
       */
      on_demand_enabled?: boolean;

      /**
       * Whether advertisement status of the prefix is locked, meaning it cannot be
       * changed.
       */
      on_demand_locked?: boolean;
    }
  }
}

export interface BGPPrefixEditResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: BGPPrefixEditResponse.BGPSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: BGPPrefixEditResponse.OnDemand;
}

export namespace BGPPrefixEditResponse {
  export interface BGPSignalOpts {
    /**
     * Whether control of advertisement of the prefix to the Internet is enabled to be
     * performed via BGP signal
     */
    enabled?: boolean;

    /**
     * Last time BGP signaling control was toggled. This field is null if BGP signaling
     * has never been enabled.
     */
    modified_at?: string | null;
  }

  export interface OnDemand {
    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
  }
}

export interface BGPPrefixGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: BGPPrefixGetResponse.BGPSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: BGPPrefixGetResponse.OnDemand;
}

export namespace BGPPrefixGetResponse {
  export interface BGPSignalOpts {
    /**
     * Whether control of advertisement of the prefix to the Internet is enabled to be
     * performed via BGP signal
     */
    enabled?: boolean;

    /**
     * Last time BGP signaling control was toggled. This field is null if BGP signaling
     * has never been enabled.
     */
    modified_at?: string | null;
  }

  export interface OnDemand {
    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
  }
}

export interface BGPPrefixListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface BGPPrefixEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  on_demand?: BGPPrefixEditParams.OnDemand;
}

export namespace BGPPrefixEditParams {
  export interface OnDemand {
    advertised?: boolean;
  }
}

export interface BGPPrefixGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace BGPPrefixes {
  export import BGPPrefixListResponse = BGPPrefixesAPI.BGPPrefixListResponse;
  export import BGPPrefixEditResponse = BGPPrefixesAPI.BGPPrefixEditResponse;
  export import BGPPrefixGetResponse = BGPPrefixesAPI.BGPPrefixGetResponse;
  export import BGPPrefixListParams = BGPPrefixesAPI.BGPPrefixListParams;
  export import BGPPrefixEditParams = BGPPrefixesAPI.BGPPrefixEditParams;
  export import BGPPrefixGetParams = BGPPrefixesAPI.BGPPrefixGetParams;
}
