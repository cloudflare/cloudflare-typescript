// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BGPPrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp-prefixes';

export class BGPPrefixes extends APIResource {
  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement
   * status (advertised or withdrawn).
   */
  update(
    accountId: string,
    prefixId: string,
    bgpPrefixId: string,
    body: BGPPrefixUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPPrefixUpdateResponse> {
    return (
      this._client.patch(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: BGPPrefixUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to
   * control which specific subnets are advertised to the Internet. It is possible to
   * advertise subnets more specific than an IP Prefix by creating more specific BGP
   * Prefixes.
   */
  list(
    accountId: string,
    prefixId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPPrefixListResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes`,
        options,
      ) as Core.APIPromise<{ result: BGPPrefixListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a single BGP Prefix according to its identifier
   */
  get(
    accountId: string,
    prefixId: string,
    bgpPrefixId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPPrefixGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        options,
      ) as Core.APIPromise<{ result: BGPPrefixGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BGPPrefixUpdateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: BGPPrefixUpdateResponse.BGPSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: BGPPrefixUpdateResponse.OnDemand;
}

export namespace BGPPrefixUpdateResponse {
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

export interface BGPPrefixUpdateParams {
  on_demand?: BGPPrefixUpdateParams.OnDemand;
}

export namespace BGPPrefixUpdateParams {
  export interface OnDemand {
    advertised?: boolean;
  }
}

export namespace BGPPrefixes {
  export import BGPPrefixUpdateResponse = BGPPrefixesAPI.BGPPrefixUpdateResponse;
  export import BGPPrefixListResponse = BGPPrefixesAPI.BGPPrefixListResponse;
  export import BGPPrefixGetResponse = BGPPrefixesAPI.BGPPrefixGetResponse;
  export import BGPPrefixUpdateParams = BGPPrefixesAPI.BGPPrefixUpdateParams;
}
