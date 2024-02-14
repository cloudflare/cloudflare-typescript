// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SpeedAPIAPI from 'cloudflare/resources/speed-api/speed-api';
import * as ScheduleAPI from 'cloudflare/resources/speed-api/schedule';

export class SpeedAPI extends APIResource {
  schedule: ScheduleAPI.Schedule = new ScheduleAPI.Schedule(this._client);

  /**
   * Retrieves quota for all plans, as well as the current zone quota.
   */
  availabilitiesList(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIAvailabilitiesListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/speed_api/availabilities`, options) as Core.APIPromise<{
        result: SpeedAPIAvailabilitiesListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all webpages which have been tested.
   */
  pagesList(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SpeedAPIPagesListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/speed_api/pages`, options) as Core.APIPromise<{
        result: SpeedAPIPagesListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a scheduled test for a page.
   */
  scheduleDelete(
    zoneId: string,
    url: string,
    params?: SpeedAPIScheduleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIScheduleDeleteResponse>;
  scheduleDelete(
    zoneId: string,
    url: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIScheduleDeleteResponse>;
  scheduleDelete(
    zoneId: string,
    url: string,
    params: SpeedAPIScheduleDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIScheduleDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.scheduleDelete(zoneId, url, {}, params);
    }
    const { region } = params;
    return (
      this._client.delete(`/zones/${zoneId}/speed_api/schedule/${url}`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: SpeedAPIScheduleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the test schedule for a page in a specific region.
   */
  scheduleRetrieve(
    zoneId: string,
    url: string,
    query?: SpeedAPIScheduleRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIScheduleRetrieveResponse>;
  scheduleRetrieve(
    zoneId: string,
    url: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIScheduleRetrieveResponse>;
  scheduleRetrieve(
    zoneId: string,
    url: string,
    query: SpeedAPIScheduleRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPIScheduleRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.scheduleRetrieve(zoneId, url, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/speed_api/schedule/${url}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SpeedAPIScheduleRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Starts a test for a specific webpage, in a specific region.
   */
  testsCreate(
    zoneId: string,
    url: string,
    body?: SpeedAPITestsCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsCreateResponse>;
  testsCreate(
    zoneId: string,
    url: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsCreateResponse>;
  testsCreate(
    zoneId: string,
    url: string,
    body: SpeedAPITestsCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsCreateResponse> {
    if (isRequestOptions(body)) {
      return this.testsCreate(zoneId, url, {}, body);
    }
    return (
      this._client.post(`/zones/${zoneId}/speed_api/pages/${url}/tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SpeedAPITestsCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all tests for a specific webpage from a specific region. Deleted tests
   * are still counted as part of the quota.
   */
  testsDelete(
    zoneId: string,
    url: string,
    params?: SpeedAPITestsDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsDeleteResponse>;
  testsDelete(
    zoneId: string,
    url: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsDeleteResponse>;
  testsDelete(
    zoneId: string,
    url: string,
    params: SpeedAPITestsDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.testsDelete(zoneId, url, {}, params);
    }
    const { region } = params;
    return (
      this._client.delete(`/zones/${zoneId}/speed_api/pages/${url}/tests`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: SpeedAPITestsDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Test history (list of tests) for a specific webpage.
   */
  testsList(
    zoneId: string,
    url: string,
    query?: SpeedAPITestsListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsListResponse>;
  testsList(
    zoneId: string,
    url: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsListResponse>;
  testsList(
    zoneId: string,
    url: string,
    query: SpeedAPITestsListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsListResponse> {
    if (isRequestOptions(query)) {
      return this.testsList(zoneId, url, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/speed_api/pages/${url}/tests`, { query, ...options });
  }

  /**
   * Retrieves the result of a specific test.
   */
  testsRetrieve(
    zoneId: string,
    url: string,
    testId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITestsRetrieveResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/speed_api/pages/${url}/tests/${testId}`,
        options,
      ) as Core.APIPromise<{ result: SpeedAPITestsRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the core web vital metrics trend over time for a specific page.
   */
  trendsList(
    zoneId: string,
    url: string,
    query: SpeedAPITrendsListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedAPITrendsListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/speed_api/pages/${url}/trend`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SpeedAPITrendsListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SpeedAPIAvailabilitiesListResponse {
  quota?: SpeedAPIAvailabilitiesListResponse.Quota;

  regions?: Array<SpeedAPIAvailabilitiesListResponse.Region>;

  regionsPerPlan?: unknown;
}

export namespace SpeedAPIAvailabilitiesListResponse {
  export interface Quota {
    /**
     * Cloudflare plan.
     */
    plan?: string;

    /**
     * The number of tests available per plan.
     */
    quotasPerPlan?: Record<string, number>;

    /**
     * The number of remaining schedules available.
     */
    remainingSchedules?: number;

    /**
     * The number of remaining tests available.
     */
    remainingTests?: number;

    /**
     * The number of schedules available per plan.
     */
    scheduleQuotasPerPlan?: Record<string, number>;
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

export type SpeedAPIPagesListResponse = Array<SpeedAPIPagesListResponse.SpeedAPIPagesListResponseItem>;

export namespace SpeedAPIPagesListResponse {
  export interface SpeedAPIPagesListResponseItem {
    /**
     * A test region with a label.
     */
    region?: SpeedAPIPagesListResponseItem.Region;

    /**
     * The frequency of the test.
     */
    scheduleFrequency?: 'DAILY' | 'WEEKLY';

    tests?: Array<SpeedAPIPagesListResponseItem.Test>;

    /**
     * A URL.
     */
    url?: string;
  }

  export namespace SpeedAPIPagesListResponseItem {
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

    export interface Test {
      /**
       * UUID
       */
      id?: string;

      date?: string;

      /**
       * The Lighthouse report.
       */
      desktopReport?: Test.DesktopReport;

      /**
       * The Lighthouse report.
       */
      mobileReport?: Test.MobileReport;

      /**
       * A test region with a label.
       */
      region?: Test.Region;

      /**
       * The frequency of the test.
       */
      scheduleFrequency?: 'DAILY' | 'WEEKLY';

      /**
       * A URL.
       */
      url?: string;
    }

    export namespace Test {
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
  }
}

export interface SpeedAPIScheduleDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

/**
 * The test schedule.
 */
export interface SpeedAPIScheduleRetrieveResponse {
  /**
   * The frequency of the test.
   */
  frequency?: 'DAILY' | 'WEEKLY';

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

  /**
   * A URL.
   */
  url?: string;
}

export interface SpeedAPITestsCreateResponse {
  /**
   * UUID
   */
  id?: string;

  date?: string;

  /**
   * The Lighthouse report.
   */
  desktopReport?: SpeedAPITestsCreateResponse.DesktopReport;

  /**
   * The Lighthouse report.
   */
  mobileReport?: SpeedAPITestsCreateResponse.MobileReport;

  /**
   * A test region with a label.
   */
  region?: SpeedAPITestsCreateResponse.Region;

  /**
   * The frequency of the test.
   */
  scheduleFrequency?: 'DAILY' | 'WEEKLY';

  /**
   * A URL.
   */
  url?: string;
}

export namespace SpeedAPITestsCreateResponse {
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

export interface SpeedAPITestsDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

export interface SpeedAPITestsListResponse {
  errors: Array<SpeedAPITestsListResponse.Error>;

  messages: Array<SpeedAPITestsListResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;

  result_info?: SpeedAPITestsListResponse.ResultInfo;
}

export namespace SpeedAPITestsListResponse {
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

export interface SpeedAPITestsRetrieveResponse {
  /**
   * UUID
   */
  id?: string;

  date?: string;

  /**
   * The Lighthouse report.
   */
  desktopReport?: SpeedAPITestsRetrieveResponse.DesktopReport;

  /**
   * The Lighthouse report.
   */
  mobileReport?: SpeedAPITestsRetrieveResponse.MobileReport;

  /**
   * A test region with a label.
   */
  region?: SpeedAPITestsRetrieveResponse.Region;

  /**
   * The frequency of the test.
   */
  scheduleFrequency?: 'DAILY' | 'WEEKLY';

  /**
   * A URL.
   */
  url?: string;
}

export namespace SpeedAPITestsRetrieveResponse {
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

export interface SpeedAPITrendsListResponse {
  /**
   * Cumulative Layout Shift trend.
   */
  cls?: Array<number | null>;

  /**
   * First Contentful Paint trend.
   */
  fcp?: Array<number | null>;

  /**
   * Largest Contentful Paint trend.
   */
  lcp?: Array<number | null>;

  /**
   * The Lighthouse score trend.
   */
  performanceScore?: Array<number | null>;

  /**
   * Speed Index trend.
   */
  si?: Array<number | null>;

  /**
   * Total Blocking Time trend.
   */
  tbt?: Array<number | null>;

  /**
   * Time To First Byte trend.
   */
  ttfb?: Array<number | null>;

  /**
   * Time To Interactive trend.
   */
  tti?: Array<number | null>;
}

export interface SpeedAPIScheduleDeleteParams {
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

export interface SpeedAPIScheduleRetrieveParams {
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

export interface SpeedAPITestsCreateParams {
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

export interface SpeedAPITestsDeleteParams {
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

export interface SpeedAPITestsListParams {
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

export interface SpeedAPITrendsListParams {
  /**
   * The type of device.
   */
  deviceType: 'DESKTOP' | 'MOBILE';

  /**
   * A comma-separated list of metrics to include in the results.
   */
  metrics: string;

  /**
   * A test region.
   */
  region:
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

  /**
   * The timezone of the start and end timestamps.
   */
  tz: string;
}

export namespace SpeedAPI {
  export import SpeedAPIAvailabilitiesListResponse = SpeedAPIAPI.SpeedAPIAvailabilitiesListResponse;
  export import SpeedAPIPagesListResponse = SpeedAPIAPI.SpeedAPIPagesListResponse;
  export import SpeedAPIScheduleDeleteResponse = SpeedAPIAPI.SpeedAPIScheduleDeleteResponse;
  export import SpeedAPIScheduleRetrieveResponse = SpeedAPIAPI.SpeedAPIScheduleRetrieveResponse;
  export import SpeedAPITestsCreateResponse = SpeedAPIAPI.SpeedAPITestsCreateResponse;
  export import SpeedAPITestsDeleteResponse = SpeedAPIAPI.SpeedAPITestsDeleteResponse;
  export import SpeedAPITestsListResponse = SpeedAPIAPI.SpeedAPITestsListResponse;
  export import SpeedAPITestsRetrieveResponse = SpeedAPIAPI.SpeedAPITestsRetrieveResponse;
  export import SpeedAPITrendsListResponse = SpeedAPIAPI.SpeedAPITrendsListResponse;
  export import SpeedAPIScheduleDeleteParams = SpeedAPIAPI.SpeedAPIScheduleDeleteParams;
  export import SpeedAPIScheduleRetrieveParams = SpeedAPIAPI.SpeedAPIScheduleRetrieveParams;
  export import SpeedAPITestsCreateParams = SpeedAPIAPI.SpeedAPITestsCreateParams;
  export import SpeedAPITestsDeleteParams = SpeedAPIAPI.SpeedAPITestsDeleteParams;
  export import SpeedAPITestsListParams = SpeedAPIAPI.SpeedAPITestsListParams;
  export import SpeedAPITrendsListParams = SpeedAPIAPI.SpeedAPITrendsListParams;
  export import Schedule = ScheduleAPI.Schedule;
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
}
