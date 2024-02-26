// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/pools/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided pool.
   */
  list(
    poolId: string,
    params: ReferenceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/pools/${poolId}/references`,
        options,
      ) as Core.APIPromise<{ result: ReferenceListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of resources that reference a given pool.
 */
export type ReferenceListResponse = Array<ReferenceListResponse.ReferenceListResponseItem>;

export namespace ReferenceListResponse {
  export interface ReferenceListResponseItem {
    reference_type?: '*' | 'referral' | 'referrer';

    resource_id?: string;

    resource_name?: string;

    resource_type?: string;
  }
}

export interface ReferenceListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace References {
  export import ReferenceListResponse = ReferencesAPI.ReferenceListResponse;
  export import ReferenceListParams = ReferencesAPI.ReferenceListParams;
}
