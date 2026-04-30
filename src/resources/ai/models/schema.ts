// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Schema extends APIResource {
  /**
   * Retrieves the input and output JSON schema definition for a Workers AI model.
   */
  get(params: SchemaGetParams, options?: Core.RequestOptions): Core.APIPromise<SchemaGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai/models/schema`, { query, ...options }) as Core.APIPromise<{
        result: SchemaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SchemaGetResponse {
  input: SchemaGetResponse.Input;

  output: SchemaGetResponse.Output;
}

export namespace SchemaGetResponse {
  export interface Input {
    additionalProperties: boolean;

    description: string;

    type: string;
  }

  export interface Output {
    additionalProperties: boolean;

    description: string;

    type: string;
  }
}

export interface SchemaGetParams {
  /**
   * Path param
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
