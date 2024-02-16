// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DisablesAPI from 'cloudflare/resources/secondary-dns/outgoings/disables';

export class Disables extends APIResource {
  /**
   * Disable outgoing zone transfers for primary zone and clears IXFR backlog of
   * primary zone.
   */
  secondaryDNSPrimaryZoneDisableOutgoingZoneTransfers(
    zoneId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing/disable`, options) as Core.APIPromise<{
        result: DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The zone transfer status of a primary zone
 */
export type DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse = string;

export namespace Disables {
  export import DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse = DisablesAPI.DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse;
}
