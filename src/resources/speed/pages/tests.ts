// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SpeedAPI from '../speed';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tests extends APIResource {
  /**
   * Starts a test for a specific webpage, in a specific region.
   */
  create(url: string, params: TestCreateParams, options?: RequestOptions): APIPromise<Test> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/speed_api/pages/${url}/tests`, {
        body,
        ...options,
      }) as APIPromise<{ result: Test }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Test history (list of tests) for a specific webpage.
   */
  list(
    url: string,
    params: TestListParams,
    options?: RequestOptions,
  ): PagePromise<TestsV4PagePaginationArray, Test> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/speed_api/pages/${url}/tests`,
      V4PagePaginationArray<Test>,
      { query, ...options },
    );
  }

  /**
   * Deletes all tests for a specific webpage from a specific region. Deleted tests
   * are still counted as part of the quota.
   */
  delete(url: string, params: TestDeleteParams, options?: RequestOptions): APIPromise<TestDeleteResponse> {
    const { zone_id, region } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/speed_api/pages/${url}/tests`, {
        query: { region },
        ...options,
      }) as APIPromise<{ result: TestDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the result of a specific test.
   */
  get(testID: string, params: TestGetParams, options?: RequestOptions): APIPromise<Test> {
    const { zone_id, url } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/speed_api/pages/${url}/tests/${testID}`,
        options,
      ) as APIPromise<{ result: Test }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TestsV4PagePaginationArray = V4PagePaginationArray<Test>;

export interface Test {
  /**
   * UUID.
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
   * Path param: Identifier.
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

export interface TestListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
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

export interface TestDeleteParams {
  /**
   * Path param: Identifier.
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
   * Identifier.
   */
  zone_id: string;

  /**
   * A URL.
   */
  url: string;
}

export declare namespace Tests {
  export {
    type Test as Test,
    type TestDeleteResponse as TestDeleteResponse,
    type TestsV4PagePaginationArray as TestsV4PagePaginationArray,
    type TestCreateParams as TestCreateParams,
    type TestListParams as TestListParams,
    type TestDeleteParams as TestDeleteParams,
    type TestGetParams as TestGetParams,
  };
}
