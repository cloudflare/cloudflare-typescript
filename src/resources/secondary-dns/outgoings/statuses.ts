// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatusesAPI from 'cloudflare/resources/secondary-dns/outgoings/statuses';

export class Statuses extends APIResource {
  /**
   * Get primary zone transfer status.
   */
  secondaryDNSPrimaryZoneGetOutgoingZoneTransferStatus(
    zoneId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse> {
    return (
      this._client.get(`/zones/${zoneId}/secondary_dns/outgoing/status`, options) as Core.APIPromise<{
        result: StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The zone transfer status of a primary zone
 */
export type StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse = string;

export namespace Statuses {
  export import StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse = StatusesAPI.StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse;
}
