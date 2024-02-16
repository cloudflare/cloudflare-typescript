// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncomingsAPI from 'cloudflare/resources/secondary-dns/incomings';

export class Incomings extends APIResource {
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
   * Create secondary zone configuration for incoming zone transfers.
   */
  secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration(
    zoneId: unknown,
    body: IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/incoming`, { body, ...options }) as Core.APIPromise<{
        result: IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get secondary zone configuration for incoming zone transfers.
   */
  secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails(
    zoneId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse> {
    return (
      this._client.get(`/zones/${zoneId}/secondary_dns/incoming`, options) as Core.APIPromise<{
        result: IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update secondary zone configuration for incoming zone transfers.
   */
  secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration(
    zoneId: unknown,
    body: IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse> {
    return (
      this._client.put(`/zones/${zoneId}/secondary_dns/incoming`, { body, ...options }) as Core.APIPromise<{
        result: IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IncomingDeleteResponse {
  id?: unknown;
}

export interface IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse {
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

export interface IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse {
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

export interface IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse {
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

export interface IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams {
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

export interface IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams {
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

export namespace Incomings {
  export import IncomingDeleteResponse = IncomingsAPI.IncomingDeleteResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams;
}
