// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagesAPI from 'cloudflare/resources/speed/pages';

export class Pages extends APIResource {
  /**
   * Lists all webpages which have been tested.
   */
  list(params: PageListParams, options?: Core.RequestOptions): Core.APIPromise<PageListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/pages`, options) as Core.APIPromise<{
        result: PageListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PageListResponse = Array<PageListResponse.PageListResponseItem>;

export namespace PageListResponse {
  export interface PageListResponseItem {
    /**
     * A test region with a label.
     */
    region?: PageListResponseItem.Region;

    /**
     * The frequency of the test.
     */
    scheduleFrequency?: 'DAILY' | 'WEEKLY';

    tests?: Array<PageListResponseItem.Test>;

    /**
     * A URL.
     */
    url?: string;
  }

  export namespace PageListResponseItem {
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

export interface PageListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Pages {
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageListParams = PagesAPI.PageListParams;
}
