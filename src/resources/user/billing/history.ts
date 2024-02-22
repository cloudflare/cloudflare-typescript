// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoryAPI from 'cloudflare/resources/user/billing/history';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class History extends APIResource {
  /**
   * Accesses your billing history object.
   */
  list(
    query?: HistoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HistoryListResponsesV4PagePaginationArray, HistoryListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<HistoryListResponsesV4PagePaginationArray, HistoryListResponse>;
  list(
    query: HistoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<HistoryListResponsesV4PagePaginationArray, HistoryListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/billing/history', HistoryListResponsesV4PagePaginationArray, {
      query,
      ...options,
    });
  }
}

export class HistoryListResponsesV4PagePaginationArray extends V4PagePaginationArray<HistoryListResponse> {}

export interface HistoryListResponse {
  /**
   * Billing item identifier tag.
   */
  id: string;

  /**
   * The billing item action.
   */
  action: string;

  /**
   * The amount associated with this billing item.
   */
  amount: number;

  /**
   * The monetary unit in which pricing information is displayed.
   */
  currency: string;

  /**
   * The billing item description.
   */
  description: string;

  /**
   * When the billing item was created.
   */
  occurred_at: string;

  /**
   * The billing item type.
   */
  type: string;

  zone: HistoryListResponse.Zone;
}

export namespace HistoryListResponse {
  export interface Zone {
    name?: unknown;
  }
}

export interface HistoryListParams extends V4PagePaginationArrayParams {
  /**
   * Field to order billing history by.
   */
  order?: 'type' | 'occured_at' | 'action';
}

export namespace History {
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryListResponsesV4PagePaginationArray = HistoryAPI.HistoryListResponsesV4PagePaginationArray;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
}
