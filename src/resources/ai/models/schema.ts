// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSchema extends APIResource {
  static override readonly _key: readonly ['ai', 'models', 'schema'] = Object.freeze([
    'ai',
    'models',
    'schema',
  ] as const);

  /**
   * Retrieves the input and output JSON schema definition for a Workers AI model.
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
export class Schema extends BaseSchema {}

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
