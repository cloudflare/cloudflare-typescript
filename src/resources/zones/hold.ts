// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HoldAPI from 'cloudflare/resources/zones/hold';

export class Hold extends APIResource {
  /**
   * Enforce a zone hold on the zone, blocking the creation and activation of zones
   * with this zone's hostname.
   */
  enforce(
    zoneId: string,
    params?: HoldEnforceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldEnforceResponse>;
  enforce(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HoldEnforceResponse>;
  enforce(
    zoneId: string,
    params: HoldEnforceParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldEnforceResponse> {
    if (isRequestOptions(params)) {
      return this.enforce(zoneId, {}, params);
    }
    const { include_subdomains } = params;
    return (
      this._client.post(`/zones/${zoneId}/hold`, {
        query: { include_subdomains },
        ...options,
      }) as Core.APIPromise<{ result: HoldEnforceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve whether the zone is subject to a zone hold, and metadata about the
   * hold.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HoldGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/hold`, options) as Core.APIPromise<{ result: HoldGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Stop enforcement of a zone hold on the zone, permanently or temporarily,
   * allowing the creation and activation of zones with this zone's hostname.
   */
  remove(
    zoneId: string,
    params?: HoldRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldRemoveResponse>;
  remove(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HoldRemoveResponse>;
  remove(
    zoneId: string,
    params: HoldRemoveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldRemoveResponse> {
    if (isRequestOptions(params)) {
      return this.remove(zoneId, {}, params);
    }
    const { hold_after } = params;
    return (
      this._client.delete(`/zones/${zoneId}/hold`, { query: { hold_after }, ...options }) as Core.APIPromise<{
        result: HoldRemoveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HoldEnforceResponse {
  hold?: boolean;

  hold_after?: string;

  include_subdomains?: string;
}

export interface HoldGetResponse {
  hold?: boolean;

  hold_after?: string;

  include_subdomains?: string;
}

export interface HoldRemoveResponse {
  hold?: boolean;

  hold_after?: string;

  include_subdomains?: string;
}

export interface HoldEnforceParams {
  /**
   * If provided, the zone hold will extend to block any subdomain of the given zone,
   * as well as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with
   * the hostname 'example.com' and include_subdomains=true will block 'example.com',
   * 'staging.example.com', 'api.staging.example.com', etc.
   */
  include_subdomains?: boolean;
}

export interface HoldRemoveParams {
  /**
   * If `hold_after` is provided, the hold will be temporarily disabled, then
   * automatically re-enabled by the system at the time specified in this
   * RFC3339-formatted timestamp. Otherwise, the hold will be disabled indefinitely.
   */
  hold_after?: string;
}

export namespace Hold {
  export import HoldEnforceResponse = HoldAPI.HoldEnforceResponse;
  export import HoldGetResponse = HoldAPI.HoldGetResponse;
  export import HoldRemoveResponse = HoldAPI.HoldRemoveResponse;
  export import HoldEnforceParams = HoldAPI.HoldEnforceParams;
  export import HoldRemoveParams = HoldAPI.HoldRemoveParams;
}
