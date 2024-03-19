// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagesAPI from 'cloudflare/resources/speed/pages';
import * as TestsAPI from 'cloudflare/resources/speed/tests';

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

    tests?: Array<TestsAPI.ObservatoryPageTest>;

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
