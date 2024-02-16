// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EnablesAPI from 'cloudflare/resources/secondary-dns/outgoings/enables';

export class Enables extends APIResource {
  /**
   * Enable outgoing zone transfers for primary zone.
   */
  secondaryDNSPrimaryZoneEnableOutgoingZoneTransfers(
    zoneId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing/enable`, options) as Core.APIPromise<{
        result: EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The zone transfer status of a primary zone
 */
export type EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse = string;

export namespace Enables {
  export import EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse = EnablesAPI.EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse;
}
