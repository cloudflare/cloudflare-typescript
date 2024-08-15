// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ReferencesAPI from './references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided monitor.
   */
  get(
    monitorId: string,
    params: ReferenceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/monitors/${monitorId}/references`,
        options,
      ) as Core.APIPromise<{ result: ReferenceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of resources that reference a given monitor.
 */
export type ReferenceGetResponse = Array<ReferenceGetResponse.ReferenceGetResponseItem>;

export namespace ReferenceGetResponse {
  export interface ReferenceGetResponseItem {
    reference_type?: '*' | 'referral' | 'referrer';

    resource_id?: string;

    resource_name?: string;

    resource_type?: string;
  }
}

export interface ReferenceGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace References {
  export import ReferenceGetResponse = ReferencesAPI.ReferenceGetResponse;
  export import ReferenceGetParams = ReferencesAPI.ReferenceGetParams;
}
