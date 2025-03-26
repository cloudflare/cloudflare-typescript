// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CloudflareError } from '../../../core/error';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Fields extends APIResource {
  /**
   * Lists all fields available for a dataset. The response result is an object with
   * key-value pairs, where keys are field names, and values are descriptions.
   */
  get(
    datasetID: string | null,
    params: FieldGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FieldGetResponse> {
    const { account_id, zone_id } = params ?? {};
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
        path`/${accountOrZone}/${accountOrZoneId}/logpush/datasets/${datasetID}/fields`,
        options,
      ) as APIPromise<{ result: FieldGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FieldGetResponse = unknown;

export interface FieldGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export declare namespace Fields {
  export { type FieldGetResponse as FieldGetResponse, type FieldGetParams as FieldGetParams };
}
