// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
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
    zoneId: string,
    url: string,
    params?: SpeedDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedDeleteResponse>;
  delete(zoneId: string, url: string, options?: Core.RequestOptions): Core.APIPromise<SpeedDeleteResponse>;
  delete(
    zoneId: string,
    url: string,
    params: SpeedDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(zoneId, url, {}, params);
    }
    const { region } = params;
    return (
      this._client.delete(`/zones/${zoneId}/speed_api/schedule/${url}`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: SpeedDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the test schedule for a page in a specific region.
   */
  scheduleGet(
    zoneId: string,
    url: string,
    query?: SpeedScheduleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedScheduleGetResponse>;
  scheduleGet(
    zoneId: string,
    url: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedScheduleGetResponse>;
  scheduleGet(
    zoneId: string,
    url: string,
    query: SpeedScheduleGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedScheduleGetResponse> {
    if (isRequestOptions(query)) {
      return this.scheduleGet(zoneId, url, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/speed_api/schedule/${url}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SpeedScheduleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the core web vital metrics trend over time for a specific page.
   */
  trendsList(
    zoneId: string,
    url: string,
    query: SpeedTrendsListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeedTrendsListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/speed_api/pages/${url}/trend`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SpeedTrendsListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SpeedDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

/**
 * The test schedule.
 */
export interface SpeedScheduleGetResponse {
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

export interface SpeedTrendsListResponse {
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

export interface SpeedDeleteParams {
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

export interface SpeedScheduleGetParams {
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

export interface SpeedTrendsListParams {
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

export namespace Speed {
  export import SpeedDeleteResponse = SpeedAPI.SpeedDeleteResponse;
  export import SpeedScheduleGetResponse = SpeedAPI.SpeedScheduleGetResponse;
  export import SpeedTrendsListResponse = SpeedAPI.SpeedTrendsListResponse;
  export import SpeedDeleteParams = SpeedAPI.SpeedDeleteParams;
  export import SpeedScheduleGetParams = SpeedAPI.SpeedScheduleGetParams;
  export import SpeedTrendsListParams = SpeedAPI.SpeedTrendsListParams;
  export import Tests = TestsAPI.Tests;
  export import TestCreateResponse = TestsAPI.TestCreateResponse;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestDeleteResponse = TestsAPI.TestDeleteResponse;
  export import TestGetResponse = TestsAPI.TestGetResponse;
  export import TestCreateParams = TestsAPI.TestCreateParams;
  export import TestListParams = TestsAPI.TestListParams;
  export import TestDeleteParams = TestsAPI.TestDeleteParams;
  export import Schedule = ScheduleAPI.Schedule;
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
  export import Availabilities = AvailabilitiesAPI.Availabilities;
  export import AvailabilityListResponse = AvailabilitiesAPI.AvailabilityListResponse;
  export import Pages = PagesAPI.Pages;
  export import PageListResponse = PagesAPI.PageListResponse;
}
