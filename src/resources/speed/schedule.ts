// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ScheduleAPI from 'cloudflare/resources/speed/schedule';

export class Schedule extends APIResource {
  /**
   * Creates a scheduled test for a page.
   */
  create(
    zoneId: string,
    url: string,
    params?: ScheduleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleCreateResponse>;
  create(zoneId: string, url: string, options?: Core.RequestOptions): Core.APIPromise<ScheduleCreateResponse>;
  create(
    zoneId: string,
    url: string,
    params: ScheduleCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(zoneId, url, {}, params);
    }
    const { region } = params;
    return (
      this._client.post(`/zones/${zoneId}/speed_api/schedule/${url}`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: ScheduleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ScheduleCreateResponse {
  /**
   * The test schedule.
   */
  schedule?: ScheduleCreateResponse.Schedule;

  test?: ScheduleCreateResponse.Test;
}

export namespace ScheduleCreateResponse {
  /**
   * The test schedule.
   */
  export interface Schedule {
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

export interface ScheduleCreateParams {
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

export namespace Schedule {
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
}
