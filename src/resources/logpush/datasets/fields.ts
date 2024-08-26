// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error'
import * as FieldsAPI from './fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available for a dataset. The response result is an object with
   * key-value pairs, where keys are field names, and values are descriptions.
   */
  get(datasetId: string | null, params?: FieldGetParams, options?: Core.RequestOptions): Core.APIPromise<FieldGetResponse>
  get(datasetId: string | null, options?: Core.RequestOptions): Core.APIPromise<FieldGetResponse>
  get(datasetId: string | null, params: FieldGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<FieldGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(datasetId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } = account_id ? {
      accountOrZone: "accounts",
      accountOrZoneId: account_id,
    } : {
      accountOrZone: "zones",
      accountOrZoneId: zone_id,
    }
    return (this._client.get(`/${accountOrZone}/${accountOrZoneId}/logpush/datasets/${datasetId}/fields`, options) as Core.APIPromise<{ result: FieldGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type FieldGetResponse = unknown

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

export namespace Fields {
  export import FieldGetResponse = FieldsAPI.FieldGetResponse;
  export import FieldGetParams = FieldsAPI.FieldGetParams;
}
