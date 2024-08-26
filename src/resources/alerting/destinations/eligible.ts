// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as EligibleAPI from './eligible';

export class Eligible extends APIResource {
  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   */
  get(params: EligibleGetParams, options?: Core.RequestOptions): Core.APIPromise<EligibleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/alerting/v3/destinations/eligible`,
        options,
      ) as Core.APIPromise<{ result: EligibleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EligibleGetResponse = Record<string, Array<EligibleGetResponse.Item>>;

export namespace EligibleGetResponse {
  export interface Item {
    /**
     * Determines whether or not the account is eligible for the delivery mechanism.
     */
    eligible?: boolean;

    /**
     * Beta flag. Users can create a policy with a mechanism that is not ready, but we
     * cannot guarantee successful delivery of notifications.
     */
    ready?: boolean;

    /**
     * Determines type of delivery mechanism.
     */
    type?: 'email' | 'pagerduty' | 'webhook';
  }
}

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
