// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ColosAPI from 'cloudflare/resources/zero-trust/dex/colos';
import { SinglePage } from 'cloudflare/pagination';

export class Colos extends APIResource {
  /**
   * List Cloudflare colos that account's devices were connected to during a time
   * period, sorted by usage starting from the most used colo. Colos without traffic
   * are also returned and sorted alphabetically.
   */
  list(
    params: ColoListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ColoListResponsesSinglePage, ColoListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dex/colos`, ColoListResponsesSinglePage, {
      query,
      ...options,
    });
  }
}

export class ColoListResponsesSinglePage extends SinglePage<ColoListResponse> {}

export type ColoListResponse = unknown;

export interface ColoListParams {
  /**
   * Path param: unique identifier linked to an account in the API request path.
   */
  account_id: string;

  /**
   * Query param: End time for connection period in RFC3339 (ISO 8601) format.
   */
  timeEnd: string;

  /**
   * Query param: Start time for connection period in RFC3339 (ISO 8601) format.
   */
  timeStart: string;

  /**
   * Query param: Type of usage that colos should be sorted by. If unspecified,
   * returns all Cloudflare colos sorted alphabetically.
   */
  sortBy?: 'fleet-status-usage' | 'application-tests-usage';
}

export namespace Colos {
  export import ColoListResponse = ColosAPI.ColoListResponse;
  export import ColoListResponsesSinglePage = ColosAPI.ColoListResponsesSinglePage;
  export import ColoListParams = ColosAPI.ColoListParams;
}
