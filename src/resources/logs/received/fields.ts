// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Fields extends APIResource {
  /**
   * Lists all fields available. The response is json object with key-value pairs,
   * where keys are field names, and values are descriptions.
   */
  get(params: FieldGetParams, options?: Core.RequestOptions): Core.APIPromise<FieldGetResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/logs/received/fields`, options);
  }
}

export interface FieldGetResponse {
  key?: string;
}

export interface FieldGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Fields {
  export { type FieldGetResponse as FieldGetResponse, type FieldGetParams as FieldGetParams };
}
