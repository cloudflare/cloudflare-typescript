// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as FieldsAPI from './fields';

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

export namespace Fields {
  export import FieldGetResponse = FieldsAPI.FieldGetResponse;
  export import FieldGetParams = FieldsAPI.FieldGetParams;
}
