// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncomingAPI from 'cloudflare/resources/secondary-dns/incoming';

export class Incoming extends APIResource {
  /**
   * Create secondary zone configuration for incoming zone transfers.
   */
  create(
    zoneId: unknown,
    body: IncomingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/incoming`, { body, ...options }) as Core.APIPromise<{
        result: IncomingCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update secondary zone configuration for incoming zone transfers.
   */
  update(
    zoneId: unknown,
    body: IncomingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/secondary_dns/incoming`, { body, ...options }) as Core.APIPromise<{
        result: IncomingUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete secondary zone configuration for incoming zone transfers.
   */
  delete(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<IncomingDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/secondary_dns/incoming`, options) as Core.APIPromise<{
        result: IncomingDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get secondary zone configuration for incoming zone transfers.
   */
  get(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<IncomingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/secondary_dns/incoming`, options) as Core.APIPromise<{
        result: IncomingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IncomingCreateResponse {
  id?: unknown;

  /**
   * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
   * applicable for primary zones.
   */
  auto_refresh_seconds?: number;

  /**
   * The time for a specific event.
   */
  checked_time?: string;

  /**
   * The time for a specific event.
   */
  created_time?: string;

  /**
   * The time for a specific event.
   */
  modified_time?: string;

  /**
   * Zone name.
   */
  name?: string;

  /**
   * A list of peer tags.
   */
  peers?: Array<unknown>;

  /**
   * The serial number of the SOA for the given zone.
   */
  soa_serial?: number;
}

export interface IncomingUpdateResponse {
  id?: unknown;

  /**
   * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
   * applicable for primary zones.
   */
  auto_refresh_seconds?: number;

  /**
   * The time for a specific event.
   */
  checked_time?: string;

  /**
   * The time for a specific event.
   */
  created_time?: string;

  /**
   * The time for a specific event.
   */
  modified_time?: string;

  /**
   * Zone name.
   */
  name?: string;

  /**
   * A list of peer tags.
   */
  peers?: Array<unknown>;

  /**
   * The serial number of the SOA for the given zone.
   */
  soa_serial?: number;
}

export interface IncomingDeleteResponse {
  id?: unknown;
}

export interface IncomingGetResponse {
  id?: unknown;

  /**
   * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
   * applicable for primary zones.
   */
  auto_refresh_seconds?: number;

  /**
   * The time for a specific event.
   */
  checked_time?: string;

  /**
   * The time for a specific event.
   */
  created_time?: string;

  /**
   * The time for a specific event.
   */
  modified_time?: string;

  /**
   * Zone name.
   */
  name?: string;

  /**
   * A list of peer tags.
   */
  peers?: Array<unknown>;

  /**
   * The serial number of the SOA for the given zone.
   */
  soa_serial?: number;
}

export interface IncomingCreateParams {
  /**
   * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
   * applicable for primary zones.
   */
  auto_refresh_seconds: number;

  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export interface IncomingUpdateParams {
  /**
   * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
   * applicable for primary zones.
   */
  auto_refresh_seconds: number;

  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export namespace Incoming {
  export import IncomingCreateResponse = IncomingAPI.IncomingCreateResponse;
  export import IncomingUpdateResponse = IncomingAPI.IncomingUpdateResponse;
  export import IncomingDeleteResponse = IncomingAPI.IncomingDeleteResponse;
  export import IncomingGetResponse = IncomingAPI.IncomingGetResponse;
  export import IncomingCreateParams = IncomingAPI.IncomingCreateParams;
  export import IncomingUpdateParams = IncomingAPI.IncomingUpdateParams;
}
