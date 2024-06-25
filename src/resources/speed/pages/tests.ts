// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TestsAPI from './tests';
import * as Shared from '../../shared';
import * as SpeedAPI from '../speed';

export class Tests extends APIResource {
  /**
   * Starts a test for a specific webpage, in a specific region.
   */
  create(url: string, params: TestCreateParams, options?: Core.RequestOptions): Core.APIPromise<Test> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/speed_api/pages/${url}/tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Test }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Test history (list of tests) for a specific webpage.
   */
  list(
    url: string,
    params: TestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestListResponse> {
    const { zone_id, ...query } = params;
    return this._client.get(`/zones/${zone_id}/speed_api/pages/${url}/tests`, { query, ...options });
  }

  /**
   * Deletes all tests for a specific webpage from a specific region. Deleted tests
   * are still counted as part of the quota.
   */
  delete(
    url: string,
    params: TestDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestDeleteResponse> {
    const { zone_id, region } = params;
    return (
      this._client.delete(`/zones/${zone_id}/speed_api/pages/${url}/tests`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: TestDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the result of a specific test.
   */
  get(
    url: string,
    testId: string,
    params: TestGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Test> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/speed_api/pages/${url}/tests/${testId}`,
        options,
      ) as Core.APIPromise<{ result: Test }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Test {
  /**
   * UUID
   */
  id?: string;

  date?: string;

  /**
   * The Lighthouse report.
   */
  desktopReport?: SpeedAPI.LighthouseReport;

  /**
   * The Lighthouse report.
   */
  mobileReport?: SpeedAPI.LighthouseReport;

  /**
   * A test region with a label.
   */
  region?: SpeedAPI.LabeledRegion;

  /**
   * The frequency of the test.
   */
  scheduleFrequency?: 'DAILY' | 'WEEKLY';

  /**
   * A URL.
   */
  url?: string;
}

export interface TestListResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;

  result_info?: TestListResponse.ResultInfo;
}

export namespace TestListResponse {
  export interface ResultInfo {
    count?: number;

    page?: number;

    per_page?: number;

    total_count?: number;
  }
}

export interface TestDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

export interface TestCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: A test region.
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

export interface TestListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  per_page?: number;

  /**
   * Query param: A test region.
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

export interface TestDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
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

export interface TestGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Tests {
  export import Test = TestsAPI.Test;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
  export import TestGetParams = TestsAPI.TestGetParams;
}
