// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as SchemaAPI from './schema';

export class Schema extends APIResource {
  /**
   * Get Model Schema
   */
  get(params: SchemaGetParams, options?: Core.RequestOptions): Core.APIPromise<SchemaGetResponse> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/ai/models/schema`, { query, ...options }) as Core.APIPromise<{ result: SchemaGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type SchemaGetResponse = unknown

export interface SchemaGetParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: Model Name
   */
  model: string;
}

export namespace Schema {
  export import SchemaGetResponse = SchemaAPI.SchemaGetResponse;
  export import SchemaGetParams = SchemaAPI.SchemaGetParams;
}
