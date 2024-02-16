// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailabilitiesAPI from 'cloudflare/resources/custom-ns/availabilities';

export class Availabilities extends APIResource {
  /**
   * Get Eligible Zones for Account Custom Nameservers
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AvailabilityGetResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/custom_ns/availability`, options) as Core.APIPromise<{
        result: AvailabilityGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AvailabilityGetResponse = Array<string>;

export namespace Availabilities {
  export import AvailabilityGetResponse = AvailabilitiesAPI.AvailabilityGetResponse;
}
