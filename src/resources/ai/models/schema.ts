// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schema extends APIResource {
  /**
   * Get Model Schema
   */
  get(params: SchemaGetParams, options?: RequestOptions): APIPromise<SchemaGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai/models/schema`, { query, ...options }) as APIPromise<{
        result: SchemaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SchemaGetResponse = unknown;

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

export declare namespace Schema {
  export { type SchemaGetResponse as SchemaGetResponse, type SchemaGetParams as SchemaGetParams };
}
