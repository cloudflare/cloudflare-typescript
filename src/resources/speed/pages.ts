// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagesAPI from 'cloudflare/resources/speed/pages';
import * as TestsAPI from 'cloudflare/resources/speed/tests';
import { SinglePage } from 'cloudflare/pagination';

export class Pages extends APIResource {
  /**
   * Lists all webpages which have been tested.
   */
  list(
    params: PageListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PageListResponsesSinglePage, PageListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/speed_api/pages`, PageListResponsesSinglePage, options);
  }
}

export class PageListResponsesSinglePage extends SinglePage<PageListResponse> {}

export interface PageListResponse {
  /**
   * A test region with a label.
   */
  region?: PageListResponse.Region;

  /**
   * The frequency of the test.
   */
  scheduleFrequency?: 'DAILY' | 'WEEKLY';

  tests?: Array<TestsAPI.ObservatoryPageTest>;

  /**
   * A URL.
   */
  url?: string;
}

export namespace PageListResponse {
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

export interface PageListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Pages {
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageListResponsesSinglePage = PagesAPI.PageListResponsesSinglePage;
  export import PageListParams = PagesAPI.PageListParams;
}
