// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseApps extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'apps'] = Object.freeze([
    'realtimeKit',
    'apps',
  ] as const);

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
  get(params: AppGetParams, options?: RequestOptions): APIPromise<AppGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/realtime/kit/apps`, { query, ...options });
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
  post(params: AppPostParams, options?: RequestOptions): APIPromise<AppPostResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/realtime/kit/apps`, { body, ...options });
  }
}
export class Apps extends BaseApps {}

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
