// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagesAPI from 'cloudflare/resources/speed/pages';
import * as SpeedAPI from 'cloudflare/resources/speed/speed';
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

export namespace Pages {
  export import PageListResponse = PagesAPI.PageListResponse;
  export import PageListResponsesSinglePage = PagesAPI.PageListResponsesSinglePage;
  export import PageListParams = PagesAPI.PageListParams;
}
