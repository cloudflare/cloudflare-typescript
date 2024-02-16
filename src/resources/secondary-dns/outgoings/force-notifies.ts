// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ForceNotifiesAPI from 'cloudflare/resources/secondary-dns/outgoings/force-notifies';

export class ForceNotifies extends APIResource {
  /**
   * Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.
   */
  secondaryDNSPrimaryZoneForceDNSNotify(
    zoneId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/outgoing/force_notify`, options) as Core.APIPromise<{
        result: ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When force_notify query parameter is set to true, the response is a simple
 * string
 */
export type ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse = string;

export namespace ForceNotifies {
  export import ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse = ForceNotifiesAPI.ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse;
}
