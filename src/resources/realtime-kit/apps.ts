// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Apps extends APIResource {
  /**
   * Fetch all apps for your account
   *
   * @example
   * ```ts
   * const app = await client.realtimeKit.apps.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: AppGetParams, options?: Core.RequestOptions): Core.APIPromise<AppGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/apps`, { query, ...options });
  }

  /**
   * Create new app for your account
   *
   * @example
   * ```ts
   * const response = await client.realtimeKit.apps.post({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'x',
   * });
   * ```
   */
  post(params: AppPostParams, options?: Core.RequestOptions): Core.APIPromise<AppPostResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/apps`, { body, ...options });
  }
}

export interface AppGetResponse {
  data?: Array<AppGetResponse.Data>;

  paging?: AppGetResponse.Paging;

  success?: boolean;
}

export namespace AppGetResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    name?: string;
  }

  export interface Paging {
    end_offset?: number;

    start_offset?: number;

    total_count?: number;
  }
}

export interface AppPostResponse {
  data?: AppPostResponse.Data;

  success?: boolean;
}

export namespace AppPostResponse {
  export interface Data {
    app?: Data.App;
  }

  export namespace Data {
    export interface App {
      id?: string;

      created_at?: string;

      name?: string;
    }
  }
}

export interface AppGetParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Query param: The page number from which you want your page search results to be
   * displayed.
   */
  page_no?: number;

  /**
   * Query param: Number of results per page.
   */
  per_page?: number;

  /**
   * Query param: Search string that matches apps by name.
   */
  search?: string;

  /**
   * Query param: Sort order for apps by creation time.
   */
  sort_order?: 'ASC' | 'DESC';
}

export interface AppPostParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;
}

export declare namespace Apps {
  export {
    type AppGetResponse as AppGetResponse,
    type AppPostResponse as AppPostResponse,
    type AppGetParams as AppGetParams,
    type AppPostParams as AppPostParams,
  };
}
