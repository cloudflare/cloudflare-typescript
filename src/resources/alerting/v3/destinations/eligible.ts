// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EligibleAPI from 'cloudflare/resources/alerting/v3/destinations/eligible';

export class Eligible extends APIResource {
  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   */
  get(params: EligibleGetParams, options?: Core.RequestOptions): Core.APIPromise<EligibleGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/alerting/v3/destinations/eligible`,
        options,
      ) as Core.APIPromise<{ result: EligibleGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EligibleGetResponse = unknown | Array<unknown> | string;

export interface EligibleGetParams {
  /**
   * The account id
   */
  account_id: string;
}

export namespace Eligible {
  export import EligibleGetResponse = EligibleAPI.EligibleGetResponse;
  export import EligibleGetParams = EligibleAPI.EligibleGetParams;
}
