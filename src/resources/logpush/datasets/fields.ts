// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FieldsAPI from 'cloudflare/resources/logpush/datasets/fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available for a dataset. The response result is an object with
   * key-value pairs, where keys are field names, and values are descriptions.
   */
  list(
    datasetId: string | null,
    params: FieldListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldListResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.get(
        `/${account_id}/${zone_id}/logpush/datasets/${datasetId}/fields`,
        options,
      ) as Core.APIPromise<{ result: FieldListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FieldListResponse = unknown;

export interface FieldListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export namespace Fields {
  export import FieldListResponse = FieldsAPI.FieldListResponse;
  export import FieldListParams = FieldsAPI.FieldListParams;
}
