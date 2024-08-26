// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { ScheduleResource } from './schedule';
import { Availabilities } from './availabilities';
import { Pages } from './pages/pages';
import * as AvailabilitiesAPI from './availabilities';
import * as ScheduleAPI from './schedule';
import * as PagesAPI from './pages/pages';

export class Speed extends APIResource {
  schedule: ScheduleAPI.ScheduleResource = new ScheduleAPI.ScheduleResource(this._client);
  availabilities: AvailabilitiesAPI.Availabilities = new AvailabilitiesAPI.Availabilities(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
}

/**
 * A test region with a label.
 */
export interface LabeledRegion {
  label?: string;

  /**
   * A test region.
   */
  value?: 'asia-east1' | 'asia-northeast1' | 'asia-northeast2' | 'asia-south1' | 'asia-southeast1' | 'australia-southeast1' | 'europe-north1' | 'europe-southwest1' | 'europe-west1' | 'europe-west2' | 'europe-west3' | 'europe-west4' | 'europe-west8' | 'europe-west9' | 'me-west1' | 'southamerica-east1' | 'us-central1' | 'us-east1' | 'us-east4' | 'us-south1' | 'us-west1';
}

/**
 * The Lighthouse report.
 */
export interface LighthouseReport {
  /**
   * Cumulative Layout Shift.
   */
  cls?: number;

  /**
   * The type of device.
   */
  deviceType?: 'DESKTOP' | 'MOBILE';

  error?: LighthouseReport.Error;

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

export namespace LighthouseReport {
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

export interface Trend {
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

export namespace Speed {
  export import ScheduleResource = ScheduleAPI.ScheduleResource;
  export import Schedule = ScheduleAPI.Schedule;
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleDeleteResponse = ScheduleAPI.ScheduleDeleteResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
  export import ScheduleDeleteParams = ScheduleAPI.ScheduleDeleteParams;
  export import ScheduleGetParams = ScheduleAPI.ScheduleGetParams;
  export import Availabilities = AvailabilitiesAPI.Availabilities;
  export import Availability = AvailabilitiesAPI.Availability;
  export import AvailabilityListParams = AvailabilitiesAPI.AvailabilityListParams;
  export import Pages = PagesAPI.Pages;
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageListResponsesSinglePage = PagesAPI.PageListResponsesSinglePage;
  export import PageListParams = PagesAPI.PageListParams;
  export import PageTrendParams = PagesAPI.PageTrendParams;
}
