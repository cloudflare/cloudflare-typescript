// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as FieldsAPI from './fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available. The response is json object with key-value pairs,
   * where keys are field names, and values are descriptions.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<FieldGetResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/logs/received/fields`, options);
  }
}

export interface FieldGetResponse {
  key?: string;
}

export namespace Fields {
  export import FieldGetResponse = FieldsAPI.FieldGetResponse;
}
