// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/monitors/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided monitor.
   */
  list(
    accountId: string,
    monitorId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceListResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/load_balancers/monitors/${monitorId}/references`,
        options,
      ) as Core.APIPromise<{ result: ReferenceListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of resources that reference a given monitor.
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

export namespace References {
  export import ReferenceListResponse = ReferencesAPI.ReferenceListResponse;
}
