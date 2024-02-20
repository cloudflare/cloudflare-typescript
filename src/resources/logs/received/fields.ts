// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FieldsAPI from 'cloudflare/resources/logs/received/fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available. The response is json object with key-value pairs,
   * where keys are field names, and values are descriptions.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<FieldListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/logs/received/fields`, options);
  }
}

export interface FieldListResponse {
  key?: string;
}

export namespace Fields {
  export import FieldListResponse = FieldsAPI.FieldListResponse;
}
