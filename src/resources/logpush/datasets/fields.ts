// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as FieldsAPI from 'cloudflare/resources/logpush/datasets/fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available for a dataset. The response result is an object with
   * key-value pairs, where keys are field names, and values are descriptions.
   */
  list(
    datasetId: string | null,
    params?: FieldListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldListResponse>;
  list(datasetId: string | null, options?: Core.RequestOptions): Core.APIPromise<FieldListResponse>;
  list(
    datasetId: string | null,
    params: FieldListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldListResponse> {
    if (isRequestOptions(params)) {
      return this.list(datasetId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/logpush/datasets/${datasetId}/fields`,
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
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Fields {
  export import FieldListResponse = FieldsAPI.FieldListResponse;
  export import FieldListParams = FieldsAPI.FieldListParams;
}
