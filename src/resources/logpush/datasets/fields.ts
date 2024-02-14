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
    accountOrZone: string,
    accountOrZoneId: string,
    datasetId: string | null,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldListResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/logpush/datasets/${datasetId}/fields`,
        options,
      ) as Core.APIPromise<{ result: FieldListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FieldListResponse = unknown;

export namespace Fields {
  export import FieldListResponse = FieldsAPI.FieldListResponse;
}
