// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Fields extends APIResource {
  /**
   * Lists all fields available. The response is json object with key-value pairs,
   * where keys are field names, and values are descriptions.
   *
   * @example
   * ```ts
   * const field = await client.logs.received.fields.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params?: FieldGetParams, options?: Core.RequestOptions): Core.APIPromise<FieldGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<FieldGetResponse>;
  get(
    params: FieldGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { zone_id = this._client.zoneId } = params;
    return this._client.get(`/zones/${zone_id}/logs/received/fields`, options);
  }
}

export interface FieldGetResponse {
  key?: string;
}

export interface FieldGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace Fields {
  export { type FieldGetResponse as FieldGetResponse, type FieldGetParams as FieldGetParams };
}
