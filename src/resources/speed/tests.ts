// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TestsAPI from 'cloudflare/resources/speed/tests';

export class Tests extends APIResource {
  /**
   * Test history (list of tests) for a specific webpage.
   */
  list(
    zoneId: string,
    url: string,
    query?: TestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestListResponse>;
  list(zoneId: string, url: string, options?: Core.RequestOptions): Core.APIPromise<TestListResponse>;
  list(
    zoneId: string,
    url: string,
    query: TestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, url, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/speed_api/pages/${url}/tests`, { query, ...options });
  }
}

export interface TestListResponse {
  errors: Array<TestListResponse.Error>;

  messages: Array<TestListResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;

  result_info?: TestListResponse.ResultInfo;
}

export namespace TestListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface ResultInfo {
    count?: number;

    page?: number;

    per_page?: number;

    total_count?: number;
  }
}

export interface TestListParams {
  page?: number;

  per_page?: number;

  /**
   * A test region.
   */
  region?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';
}

export namespace Tests {
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestListParams = TestsAPI.TestListParams;
}
