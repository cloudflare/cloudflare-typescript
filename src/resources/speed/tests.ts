// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TestsAPI from 'cloudflare/resources/speed/tests';

export class Tests extends APIResource {
  /**
   * Starts a test for a specific webpage, in a specific region.
   */
  create(
    zoneId: string,
    url: string,
    body?: TestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestCreateResponse>;
  create(zoneId: string, url: string, options?: Core.RequestOptions): Core.APIPromise<TestCreateResponse>;
  create(
    zoneId: string,
    url: string,
    body: TestCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create(zoneId, url, {}, body);
    }
    return (
      this._client.post(`/zones/${zoneId}/speed_api/pages/${url}/tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TestCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

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

  /**
   * Deletes all tests for a specific webpage from a specific region. Deleted tests
   * are still counted as part of the quota.
   */
  delete(
    zoneId: string,
    url: string,
    params?: TestDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestDeleteResponse>;
  delete(zoneId: string, url: string, options?: Core.RequestOptions): Core.APIPromise<TestDeleteResponse>;
  delete(
    zoneId: string,
    url: string,
    params: TestDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(zoneId, url, {}, params);
    }
    const { region } = params;
    return (
      this._client.delete(`/zones/${zoneId}/speed_api/pages/${url}/tests`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: TestDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the result of a specific test.
   */
  get(
    zoneId: string,
    url: string,
    testId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/speed_api/pages/${url}/tests/${testId}`,
        options,
      ) as Core.APIPromise<{ result: TestGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TestCreateResponse {
  /**
   * UUID
   */
  id?: string;

  date?: string;

  /**
   * The Lighthouse report.
   */
  desktopReport?: TestCreateResponse.DesktopReport;

  /**
   * The Lighthouse report.
   */
  mobileReport?: TestCreateResponse.MobileReport;

  /**
   * A test region with a label.
   */
  region?: TestCreateResponse.Region;

  /**
   * The frequency of the test.
   */
  scheduleFrequency?: 'DAILY' | 'WEEKLY';

  /**
   * A URL.
   */
  url?: string;
}

export namespace TestCreateResponse {
  /**
   * The Lighthouse report.
   */
  export interface DesktopReport {
    /**
     * Cumulative Layout Shift.
     */
    cls?: number;

    /**
     * The type of device.
     */
    deviceType?: 'DESKTOP' | 'MOBILE';

    error?: DesktopReport.Error;

    /**
     * First Contentful Paint.
     */
    fcp?: number;

    /**
     * The URL to the full Lighthouse JSON report.
     */
    jsonReportUrl?: string;

    /**
     * Largest Contentful Paint.
     */
    lcp?: number;

    /**
     * The Lighthouse performance score.
     */
    performanceScore?: number;

    /**
     * Speed Index.
     */
    si?: number;

    /**
     * The state of the Lighthouse report.
     */
    state?: 'RUNNING' | 'COMPLETE' | 'FAILED';

    /**
     * Total Blocking Time.
     */
    tbt?: number;

    /**
     * Time To First Byte.
     */
    ttfb?: number;

    /**
     * Time To Interactive.
     */
    tti?: number;
  }

  export namespace DesktopReport {
    export interface Error {
      /**
       * The error code of the Lighthouse result.
       */
      code?: 'NOT_REACHABLE' | 'DNS_FAILURE' | 'NOT_HTML' | 'LIGHTHOUSE_TIMEOUT' | 'UNKNOWN';

      /**
       * Detailed error message.
       */
      detail?: string;

      /**
       * The final URL displayed to the user.
       */
      finalDisplayedUrl?: string;
    }
  }

  /**
   * The Lighthouse report.
   */
  export interface MobileReport {
    /**
     * Cumulative Layout Shift.
     */
    cls?: number;

    /**
     * The type of device.
     */
    deviceType?: 'DESKTOP' | 'MOBILE';

    error?: MobileReport.Error;

    /**
     * First Contentful Paint.
     */
    fcp?: number;

    /**
     * The URL to the full Lighthouse JSON report.
     */
    jsonReportUrl?: string;

    /**
     * Largest Contentful Paint.
     */
    lcp?: number;

    /**
     * The Lighthouse performance score.
     */
    performanceScore?: number;

    /**
     * Speed Index.
     */
    si?: number;

    /**
     * The state of the Lighthouse report.
     */
    state?: 'RUNNING' | 'COMPLETE' | 'FAILED';

    /**
     * Total Blocking Time.
     */
    tbt?: number;

    /**
     * Time To First Byte.
     */
    ttfb?: number;

    /**
     * Time To Interactive.
     */
    tti?: number;
  }

  export namespace MobileReport {
    export interface Error {
      /**
       * The error code of the Lighthouse result.
       */
      code?: 'NOT_REACHABLE' | 'DNS_FAILURE' | 'NOT_HTML' | 'LIGHTHOUSE_TIMEOUT' | 'UNKNOWN';

      /**
       * Detailed error message.
       */
      detail?: string;

      /**
       * The final URL displayed to the user.
       */
      finalDisplayedUrl?: string;
    }
  }

  /**
   * A test region with a label.
   */
  export interface Region {
    label?: string;

    /**
     * A test region.
     */
    value?:
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

export interface TestDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

export interface TestGetResponse {
  /**
   * UUID
   */
  id?: string;

  date?: string;

  /**
   * The Lighthouse report.
   */
  desktopReport?: TestGetResponse.DesktopReport;

  /**
   * The Lighthouse report.
   */
  mobileReport?: TestGetResponse.MobileReport;

  /**
   * A test region with a label.
   */
  region?: TestGetResponse.Region;

  /**
   * The frequency of the test.
   */
  scheduleFrequency?: 'DAILY' | 'WEEKLY';

  /**
   * A URL.
   */
  url?: string;
}

export namespace TestGetResponse {
  /**
   * The Lighthouse report.
   */
  export interface DesktopReport {
    /**
     * Cumulative Layout Shift.
     */
    cls?: number;

    /**
     * The type of device.
     */
    deviceType?: 'DESKTOP' | 'MOBILE';

    error?: DesktopReport.Error;

    /**
     * First Contentful Paint.
     */
    fcp?: number;

    /**
     * The URL to the full Lighthouse JSON report.
     */
    jsonReportUrl?: string;

    /**
     * Largest Contentful Paint.
     */
    lcp?: number;

    /**
     * The Lighthouse performance score.
     */
    performanceScore?: number;

    /**
     * Speed Index.
     */
    si?: number;

    /**
     * The state of the Lighthouse report.
     */
    state?: 'RUNNING' | 'COMPLETE' | 'FAILED';

    /**
     * Total Blocking Time.
     */
    tbt?: number;

    /**
     * Time To First Byte.
     */
    ttfb?: number;

    /**
     * Time To Interactive.
     */
    tti?: number;
  }

  export namespace DesktopReport {
    export interface Error {
      /**
       * The error code of the Lighthouse result.
       */
      code?: 'NOT_REACHABLE' | 'DNS_FAILURE' | 'NOT_HTML' | 'LIGHTHOUSE_TIMEOUT' | 'UNKNOWN';

      /**
       * Detailed error message.
       */
      detail?: string;

      /**
       * The final URL displayed to the user.
       */
      finalDisplayedUrl?: string;
    }
  }

  /**
   * The Lighthouse report.
   */
  export interface MobileReport {
    /**
     * Cumulative Layout Shift.
     */
    cls?: number;

    /**
     * The type of device.
     */
    deviceType?: 'DESKTOP' | 'MOBILE';

    error?: MobileReport.Error;

    /**
     * First Contentful Paint.
     */
    fcp?: number;

    /**
     * The URL to the full Lighthouse JSON report.
     */
    jsonReportUrl?: string;

    /**
     * Largest Contentful Paint.
     */
    lcp?: number;

    /**
     * The Lighthouse performance score.
     */
    performanceScore?: number;

    /**
     * Speed Index.
     */
    si?: number;

    /**
     * The state of the Lighthouse report.
     */
    state?: 'RUNNING' | 'COMPLETE' | 'FAILED';

    /**
     * Total Blocking Time.
     */
    tbt?: number;

    /**
     * Time To First Byte.
     */
    ttfb?: number;

    /**
     * Time To Interactive.
     */
    tti?: number;
  }

  export namespace MobileReport {
    export interface Error {
      /**
       * The error code of the Lighthouse result.
       */
      code?: 'NOT_REACHABLE' | 'DNS_FAILURE' | 'NOT_HTML' | 'LIGHTHOUSE_TIMEOUT' | 'UNKNOWN';

      /**
       * Detailed error message.
       */
      detail?: string;

      /**
       * The final URL displayed to the user.
       */
      finalDisplayedUrl?: string;
    }
  }

  /**
   * A test region with a label.
   */
  export interface Region {
    label?: string;

    /**
     * A test region.
     */
    value?:
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
}

export interface TestCreateParams {
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

export interface TestDeleteParams {
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
  export import TestCreateResponse = TestsAPI.TestCreateResponse;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestGetResponse = TestsAPI.TestGetResponse;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
}
