// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BgpPrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp-prefixes';

export class BgpPrefixes extends APIResource {
  /**
   * Retrieve a single BGP Prefix according to its identifier
   */
  retrieve(
    accountIdentifier: string,
    prefixIdentifier: string,
    bgpPrefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BgpPrefixRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/prefixes/${bgpPrefixIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: BgpPrefixRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement
   * status (advertised or withdrawn).
   */
  update(
    accountIdentifier: string,
    prefixIdentifier: string,
    bgpPrefixIdentifier: string,
    body: BgpPrefixUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BgpPrefixUpdateResponse> {
    return (
      this._client.patch(
        `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/prefixes/${bgpPrefixIdentifier}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: BgpPrefixUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to
   * control which specific subnets are advertised to the Internet. It is possible to
   * advertise subnets more specific than an IP Prefix by creating more specific BGP
   * Prefixes.
   */
  list(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BgpPrefixListResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/prefixes`,
        options,
      ) as Core.APIPromise<{ result: BgpPrefixListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BgpPrefixRetrieveResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: BgpPrefixRetrieveResponse.BgpSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: BgpPrefixRetrieveResponse.OnDemand;
}

export namespace BgpPrefixRetrieveResponse {
  export interface BgpSignalOpts {
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

export interface BgpPrefixUpdateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: BgpPrefixUpdateResponse.BgpSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: BgpPrefixUpdateResponse.OnDemand;
}

export namespace BgpPrefixUpdateResponse {
  export interface BgpSignalOpts {
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

export type BgpPrefixListResponse = Array<BgpPrefixListResponse.BgpPrefixListResponseItem>;

export namespace BgpPrefixListResponse {
  export interface BgpPrefixListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    bgp_signal_opts?: BgpPrefixListResponseItem.BgpSignalOpts;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    modified_at?: string;

    on_demand?: BgpPrefixListResponseItem.OnDemand;
  }

  export namespace BgpPrefixListResponseItem {
    export interface BgpSignalOpts {
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

export interface BgpPrefixUpdateParams {
  on_demand?: BgpPrefixUpdateParams.OnDemand;
}

export namespace BgpPrefixUpdateParams {
  export interface OnDemand {
    advertised?: boolean;
  }
}

export namespace BgpPrefixes {
  export import BgpPrefixRetrieveResponse = BgpPrefixesAPI.BgpPrefixRetrieveResponse;
  export import BgpPrefixUpdateResponse = BgpPrefixesAPI.BgpPrefixUpdateResponse;
  export import BgpPrefixListResponse = BgpPrefixesAPI.BgpPrefixListResponse;
  export import BgpPrefixUpdateParams = BgpPrefixesAPI.BgpPrefixUpdateParams;
}
