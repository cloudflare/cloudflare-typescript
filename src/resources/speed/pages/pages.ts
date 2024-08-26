// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as PagesAPI from './pages';
import * as SpeedAPI from '../speed';
import * as TestsAPI from './tests';
import { SinglePage } from '../../../pagination';

export class Pages extends APIResource {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);

  /**
   * Lists all webpages which have been tested.
   */
  list(params: PageListParams, options?: Core.RequestOptions): Core.PagePromise<PageListResponsesSinglePage, PageListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/speed_api/pages`, PageListResponsesSinglePage, options);
  }

  /**
   * Lists the core web vital metrics trend over time for a specific page.
   */
  trend(url: string, params: PageTrendParams, options?: Core.RequestOptions): Core.APIPromise<SpeedAPI.Trend> {
    const { zone_id, ...query } = params;
    return (this._client.get(`/zones/${zone_id}/speed_api/pages/${url}/trend`, { query, ...options }) as Core.APIPromise<{ result: SpeedAPI.Trend }>)._thenUnwrap((obj) => obj.result);
  }
}

export class PageListResponsesSinglePage extends SinglePage<PageListResponse> {
}

export interface PageListResponse {
  /**
   * A test region with a label.
   */
  region?: SpeedAPI.LabeledRegion;

  /**
   * The frequency of the test.
   */
  scheduleFrequency?: 'DAILY' | 'WEEKLY';

  tests?: Array<TestsAPI.Test>;

  /**
   * A URL.
   */
  url?: string;
}

export interface PageListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface PageTrendParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The type of device.
   */
  deviceType: 'DESKTOP' | 'MOBILE';

  /**
   * Query param: A comma-separated list of metrics to include in the results.
   */
  metrics: string;

  /**
   * Query param: A test region.
   */
  region: 'asia-east1' | 'asia-northeast1' | 'asia-northeast2' | 'asia-south1' | 'asia-southeast1' | 'australia-southeast1' | 'europe-north1' | 'europe-southwest1' | 'europe-west1' | 'europe-west2' | 'europe-west3' | 'europe-west4' | 'europe-west8' | 'europe-west9' | 'me-west1' | 'southamerica-east1' | 'us-central1' | 'us-east1' | 'us-east4' | 'us-south1' | 'us-west1';

  /**
   * Query param:
   */
  start: string;

  /**
   * Query param: The timezone of the start and end timestamps.
   */
  tz: string;

  /**
   * Query param:
   */
  end?: string;
}

export namespace Pages {
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageListResponsesSinglePage = PagesAPI.PageListResponsesSinglePage;
  export import PageListParams = PagesAPI.PageListParams;
  export import PageTrendParams = PagesAPI.PageTrendParams;
  export import Tests = TestsAPI.Tests;
  export import Test = TestsAPI.Test;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestsV4PagePaginationArray = TestsAPI.TestsV4PagePaginationArray;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
  export import TestGetParams = TestsAPI.TestGetParams;
}
