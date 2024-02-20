// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EligibleAPI from 'cloudflare/resources/alerting/v3/destinations/eligible';

export class Eligible extends APIResource {
  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<EligibleGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/alerting/v3/destinations/eligible`,
        options,
      ) as Core.APIPromise<{ result: EligibleGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EligibleGetResponse = unknown | Array<unknown> | string;

export namespace Eligible {
  export import EligibleGetResponse = EligibleAPI.EligibleGetResponse;
}
