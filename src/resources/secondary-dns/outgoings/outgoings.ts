// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OutgoingsAPI from 'cloudflare/resources/secondary-dns/outgoings/outgoings';
import * as DisablesAPI from 'cloudflare/resources/secondary-dns/outgoings/disables';
import * as EnablesAPI from 'cloudflare/resources/secondary-dns/outgoings/enables';
import * as ForceNotifiesAPI from 'cloudflare/resources/secondary-dns/outgoings/force-notifies';
import * as StatusesAPI from 'cloudflare/resources/secondary-dns/outgoings/statuses';

export class Outgoings extends APIResource {
  disables: DisablesAPI.Disables = new DisablesAPI.Disables(this._client);
  enables: EnablesAPI.Enables = new EnablesAPI.Enables(this._client);
  forceNotifies: ForceNotifiesAPI.ForceNotifies = new ForceNotifiesAPI.ForceNotifies(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);

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
   * Create primary zone configuration for outgoing zone transfers.
   */
  secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration(
    zoneId: unknown,
    body: OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing`, { body, ...options }) as Core.APIPromise<{
        result: OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get primary zone configuration for outgoing zone transfers.
   */
  secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails(
    zoneId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse> {
    return (
      this._client.get(`/zones/${zoneId}/secondary_dns/outgoing`, options) as Core.APIPromise<{
        result: OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update primary zone configuration for outgoing zone transfers.
   */
  secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration(
    zoneId: unknown,
    body: OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse> {
    return (
      this._client.put(`/zones/${zoneId}/secondary_dns/outgoing`, { body, ...options }) as Core.APIPromise<{
        result: OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OutgoingDeleteResponse {
  id?: unknown;
}

export interface OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse {
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

export interface OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse {
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

export interface OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse {
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

export interface OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams {
  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export interface OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams {
  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export namespace Outgoings {
  export import OutgoingDeleteResponse = OutgoingsAPI.OutgoingDeleteResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams;
  export import Disables = DisablesAPI.Disables;
  export import DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse = DisablesAPI.DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse;
  export import Enables = EnablesAPI.Enables;
  export import EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse = EnablesAPI.EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse;
  export import ForceNotifies = ForceNotifiesAPI.ForceNotifies;
  export import ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse = ForceNotifiesAPI.ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse;
  export import Statuses = StatusesAPI.Statuses;
  export import StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse = StatusesAPI.StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse;
}
