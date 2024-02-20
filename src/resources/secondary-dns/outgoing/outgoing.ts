// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OutgoingAPI from 'cloudflare/resources/secondary-dns/outgoing/outgoing';
import * as StatusAPI from 'cloudflare/resources/secondary-dns/outgoing/status';

export class Outgoing extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * Create primary zone configuration for outgoing zone transfers.
   */
  create(
    zoneId: unknown,
    body: OutgoingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing`, { body, ...options }) as Core.APIPromise<{
        result: OutgoingCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update primary zone configuration for outgoing zone transfers.
   */
  update(
    zoneId: unknown,
    body: OutgoingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/secondary_dns/outgoing`, { body, ...options }) as Core.APIPromise<{
        result: OutgoingUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete primary zone configuration for outgoing zone transfers.
   */
  delete(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<OutgoingDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/secondary_dns/outgoing`, options) as Core.APIPromise<{
        result: OutgoingDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable outgoing zone transfers for primary zone and clears IXFR backlog of
   * primary zone.
   */
  disable(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<OutgoingDisableResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing/disable`, options) as Core.APIPromise<{
        result: OutgoingDisableResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable outgoing zone transfers for primary zone.
   */
  enable(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<OutgoingEnableResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing/enable`, options) as Core.APIPromise<{
        result: OutgoingEnableResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.
   */
  forceNotify(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<OutgoingForceNotifyResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing/force_notify`, options) as Core.APIPromise<{
        result: OutgoingForceNotifyResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get primary zone configuration for outgoing zone transfers.
   */
  get(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<OutgoingGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/secondary_dns/outgoing`, options) as Core.APIPromise<{
        result: OutgoingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OutgoingCreateResponse {
  id?: unknown;

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
  last_transferred_time?: string;

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

export interface OutgoingUpdateResponse {
  id?: unknown;

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
  last_transferred_time?: string;

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

export interface OutgoingDeleteResponse {
  id?: unknown;
}

/**
 * The zone transfer status of a primary zone
 */
export type OutgoingDisableResponse = string;

/**
 * The zone transfer status of a primary zone
 */
export type OutgoingEnableResponse = string;

/**
 * When force_notify query parameter is set to true, the response is a simple
 * string
 */
export type OutgoingForceNotifyResponse = string;

export interface OutgoingGetResponse {
  id?: unknown;

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
  last_transferred_time?: string;

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

export interface OutgoingCreateParams {
  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export interface OutgoingUpdateParams {
  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export namespace Outgoing {
  export import OutgoingCreateResponse = OutgoingAPI.OutgoingCreateResponse;
  export import OutgoingUpdateResponse = OutgoingAPI.OutgoingUpdateResponse;
  export import OutgoingDeleteResponse = OutgoingAPI.OutgoingDeleteResponse;
  export import OutgoingDisableResponse = OutgoingAPI.OutgoingDisableResponse;
  export import OutgoingEnableResponse = OutgoingAPI.OutgoingEnableResponse;
  export import OutgoingForceNotifyResponse = OutgoingAPI.OutgoingForceNotifyResponse;
  export import OutgoingGetResponse = OutgoingAPI.OutgoingGetResponse;
  export import OutgoingCreateParams = OutgoingAPI.OutgoingCreateParams;
  export import OutgoingUpdateParams = OutgoingAPI.OutgoingUpdateParams;
  export import Status = StatusAPI.Status;
  export import StatusGetResponse = StatusAPI.StatusGetResponse;
}
