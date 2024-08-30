// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HoldsAPI from './holds';

export class Holds extends APIResource {
  /**
   * Enforce a zone hold on the zone, blocking the creation and activation of zones
   * with this zone's hostname.
   */
  create(params: HoldCreateParams, options?: Core.RequestOptions): Core.APIPromise<ZoneHold> {
    const { zone_id, include_subdomains } = params;
    return (
      this._client.post(`/zones/${zone_id}/hold`, {
        query: { include_subdomains },
        ...options,
      }) as Core.APIPromise<{ result: ZoneHold }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Stop enforcement of a zone hold on the zone, permanently or temporarily,
   * allowing the creation and activation of zones with this zone's hostname.
   */
  delete(params: HoldDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ZoneHold> {
    const { zone_id, hold_after } = params;
    return (
      this._client.delete(`/zones/${zone_id}/hold`, {
        query: { hold_after },
        ...options,
      }) as Core.APIPromise<{ result: ZoneHold }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve whether the zone is subject to a zone hold, and metadata about the
   * hold.
   */
  get(params: HoldGetParams, options?: Core.RequestOptions): Core.APIPromise<ZoneHold> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/hold`, options) as Core.APIPromise<{ result: ZoneHold }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZoneHold {
  hold?: boolean;

  hold_after?: string;

  include_subdomains?: string;
}

export interface HoldCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: If provided, the zone hold will extend to block any subdomain of
   * the given zone, as well as SSL4SaaS Custom Hostnames. For example, a zone hold
   * on a zone with the hostname 'example.com' and include_subdomains=true will block
   * 'example.com', 'staging.example.com', 'api.staging.example.com', etc.
   */
  include_subdomains?: boolean;
}

export interface HoldDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: If `hold_after` is provided, the hold will be temporarily disabled,
   * then automatically re-enabled by the system at the time specified in this
   * RFC3339-formatted timestamp. Otherwise, the hold will be disabled indefinitely.
   */
  hold_after?: string;
}

export interface HoldGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Holds {
  export import ZoneHold = HoldsAPI.ZoneHold;
  export import HoldCreateParams = HoldsAPI.HoldCreateParams;
  export import HoldDeleteParams = HoldsAPI.HoldDeleteParams;
  export import HoldGetParams = HoldsAPI.HoldGetParams;
}
