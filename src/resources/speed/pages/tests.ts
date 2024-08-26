// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as TestsAPI from './tests';
import * as SpeedAPI from '../speed';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Tests extends APIResource {
  /**
   * Starts a test for a specific webpage, in a specific region.
   */
  create(url: string, params: TestCreateParams, options?: Core.RequestOptions): Core.APIPromise<Test> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/speed_api/pages/${url}/tests`, { body, ...options }) as Core.APIPromise<{ result: Test }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Test history (list of tests) for a specific webpage.
   */
  list(url: string, params: TestListParams, options?: Core.RequestOptions): Core.PagePromise<TestsV4PagePaginationArray, Test> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/speed_api/pages/${url}/tests`, TestsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes all tests for a specific webpage from a specific region. Deleted tests
   * are still counted as part of the quota.
   */
  delete(url: string, params: TestDeleteParams, options?: Core.RequestOptions): Core.APIPromise<TestDeleteResponse> {
    const { zone_id, region } = params;
    return (this._client.delete(`/zones/${zone_id}/speed_api/pages/${url}/tests`, { query: { region }, ...options }) as Core.APIPromise<{ result: TestDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the result of a specific test.
   */
  get(url: string, testId: string, params: TestGetParams, options?: Core.RequestOptions): Core.APIPromise<Test> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/speed_api/pages/${url}/tests/${testId}`, options) as Core.APIPromise<{ result: Test }>)._thenUnwrap((obj) => obj.result);
  }
}

export class TestsV4PagePaginationArray extends V4PagePaginationArray<Test> {
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
  region?: 'asia-east1' | 'asia-northeast1' | 'asia-northeast2' | 'asia-south1' | 'asia-southeast1' | 'australia-southeast1' | 'europe-north1' | 'europe-southwest1' | 'europe-west1' | 'europe-west2' | 'europe-west3' | 'europe-west4' | 'europe-west8' | 'europe-west9' | 'me-west1' | 'southamerica-east1' | 'us-central1' | 'us-east1' | 'us-east4' | 'us-south1' | 'us-west1';
}

export interface TestListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
   */
  region?: 'asia-east1' | 'asia-northeast1' | 'asia-northeast2' | 'asia-south1' | 'asia-southeast1' | 'australia-southeast1' | 'europe-north1' | 'europe-southwest1' | 'europe-west1' | 'europe-west2' | 'europe-west3' | 'europe-west4' | 'europe-west8' | 'europe-west9' | 'me-west1' | 'southamerica-east1' | 'us-central1' | 'us-east1' | 'us-east4' | 'us-south1' | 'us-west1';
}

export interface TestDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
   */
  region?: 'asia-east1' | 'asia-northeast1' | 'asia-northeast2' | 'asia-south1' | 'asia-southeast1' | 'australia-southeast1' | 'europe-north1' | 'europe-southwest1' | 'europe-west1' | 'europe-west2' | 'europe-west3' | 'europe-west4' | 'europe-west8' | 'europe-west9' | 'me-west1' | 'southamerica-east1' | 'us-central1' | 'us-east1' | 'us-east4' | 'us-south1' | 'us-west1';
}

export interface TestGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Tests {
  export import Test = TestsAPI.Test;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestsV4PagePaginationArray = TestsAPI.TestsV4PagePaginationArray;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
  export import TestGetParams = TestsAPI.TestGetParams;
}
