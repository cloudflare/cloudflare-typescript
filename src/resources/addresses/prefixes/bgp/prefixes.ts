// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/addresses/prefixes/bgp/prefixes';

export class Prefixes extends APIResource {
  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to
   * control which specific subnets are advertised to the Internet. It is possible to
   * advertise subnets more specific than an IP Prefix by creating more specific BGP
   * Prefixes.
   */
  list(
    prefixId: string,
    params: PrefixListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes`,
        options,
      ) as Core.APIPromise<{ result: PrefixListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement
   * status (advertised or withdrawn).
   */
  edit(
    prefixId: string,
    bgpPrefixId: string,
    params: PrefixEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: PrefixEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a single BGP Prefix according to its identifier
   */
  get(
    prefixId: string,
    bgpPrefixId: string,
    params: PrefixGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
        options,
      ) as Core.APIPromise<{ result: PrefixGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PrefixListResponse = Array<PrefixListResponse.PrefixListResponseItem>;

export namespace PrefixListResponse {
  export interface PrefixListResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    bgp_signal_opts?: PrefixListResponseItem.BGPSignalOpts;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    modified_at?: string;

    on_demand?: PrefixListResponseItem.OnDemand;
  }

  export namespace PrefixListResponseItem {
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

export interface PrefixEditResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: PrefixEditResponse.BGPSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: PrefixEditResponse.OnDemand;
}

export namespace PrefixEditResponse {
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

export interface PrefixGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  bgp_signal_opts?: PrefixGetResponse.BGPSignalOpts;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  modified_at?: string;

  on_demand?: PrefixGetResponse.OnDemand;
}

export namespace PrefixGetResponse {
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

export interface PrefixListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PrefixEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  on_demand?: PrefixEditParams.OnDemand;
}

export namespace PrefixEditParams {
  export interface OnDemand {
    advertised?: boolean;
  }
}

export interface PrefixGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Prefixes {
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixEditResponse = PrefixesAPI.PrefixEditResponse;
  export import PrefixGetResponse = PrefixesAPI.PrefixGetResponse;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export import PrefixGetParams = PrefixesAPI.PrefixGetParams;
}
