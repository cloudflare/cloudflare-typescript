// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SpeedAPI from 'cloudflare/resources/speed/speed';
import * as AvailabilitiesAPI from 'cloudflare/resources/speed/availabilities';
import * as PagesAPI from 'cloudflare/resources/speed/pages';
import * as ScheduleAPI from 'cloudflare/resources/speed/schedule';
import * as TestsAPI from 'cloudflare/resources/speed/tests';

export class Speed extends APIResource {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  schedule: ScheduleAPI.Schedule = new ScheduleAPI.Schedule(this._client);
  availabilities: AvailabilitiesAPI.Availabilities = new AvailabilitiesAPI.Availabilities(this._client);
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);

  /**
   * Deletes a scheduled test for a page.
   */
  delete(
    url: string,
    params: SpeedDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedDeleteResponse> {
    const { zone_id, region } = params;
    return (
      this._client.delete(`/zones/${zone_id}/speed_api/schedule/${url}`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: SpeedDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the test schedule for a page in a specific region.
   */
  scheduleGet(
    url: string,
    params: SpeedScheduleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObservatorySchedule> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/schedule/${url}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ObservatorySchedule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the core web vital metrics trend over time for a specific page.
   */
  trendsList(
    url: string,
    params: SpeedTrendsListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObservatoryTrend> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/pages/${url}/trend`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ObservatoryTrend }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The test schedule.
 */
export interface ObservatorySchedule {
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

export interface ObservatoryTrend {
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

export interface SpeedDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

export interface SpeedDeleteParams {
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

export interface SpeedScheduleGetParams {
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

export interface SpeedTrendsListParams {
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
   * Query param: The timezone of the start and end timestamps.
   */
  tz: string;
}

export namespace Speed {
  export import ObservatorySchedule = SpeedAPI.ObservatorySchedule;
  export import ObservatoryTrend = SpeedAPI.ObservatoryTrend;
  export import SpeedDeleteResponse = SpeedAPI.SpeedDeleteResponse;
  export import SpeedDeleteParams = SpeedAPI.SpeedDeleteParams;
  export import SpeedScheduleGetParams = SpeedAPI.SpeedScheduleGetParams;
  export import SpeedTrendsListParams = SpeedAPI.SpeedTrendsListParams;
  export import Tests = TestsAPI.Tests;
  export import ObservatoryPageTest = TestsAPI.ObservatoryPageTest;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
  export import TestGetParams = TestsAPI.TestGetParams;
  export import Schedule = ScheduleAPI.Schedule;
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
  export import Availabilities = AvailabilitiesAPI.Availabilities;
  export import ObservatoryAvailabilities = AvailabilitiesAPI.ObservatoryAvailabilities;
  export import AvailabilityListParams = AvailabilitiesAPI.AvailabilityListParams;
  export import Pages = PagesAPI.Pages;
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageListParams = PagesAPI.PageListParams;
}
