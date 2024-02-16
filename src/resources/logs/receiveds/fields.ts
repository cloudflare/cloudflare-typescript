// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FieldsAPI from 'cloudflare/resources/logs/receiveds/fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available. The response is json object with key-value pairs,
   * where keys are field names, and values are descriptions.
   */
  logsReceivedListFields(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldLogsReceivedListFieldsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/logs/received/fields`, options);
  }
}

export interface FieldLogsReceivedListFieldsResponse {
  key?: string;
}

export namespace Fields {
  export import FieldLogsReceivedListFieldsResponse = FieldsAPI.FieldLogsReceivedListFieldsResponse;
}
