// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoryAPI from 'cloudflare/resources/user/billing/history';

export class History extends APIResource {
  /**
   * Accesses your billing history object.
   */
  get(query?: HistoryGetParams, options?: Core.RequestOptions): Core.APIPromise<HistoryGetResponse | null>;
  get(options?: Core.RequestOptions): Core.APIPromise<HistoryGetResponse | null>;
  get(
    query: HistoryGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryGetResponse | null> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/user/billing/history', { query, ...options }) as Core.APIPromise<{
        result: HistoryGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BillSubsAPIBillingHistory {
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

  zone: BillSubsAPIBillingHistory.Zone;
}

export namespace BillSubsAPIBillingHistory {
  export interface Zone {
    name?: unknown;
  }
}

export type HistoryGetResponse = Array<BillSubsAPIBillingHistory>;

export interface HistoryGetParams {
  /**
   * Field to order billing history by.
   */
  order?: 'type' | 'occured_at' | 'action';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export namespace History {
  export import BillSubsAPIBillingHistory = HistoryAPI.BillSubsAPIBillingHistory;
  export import HistoryGetResponse = HistoryAPI.HistoryGetResponse;
  export import HistoryGetParams = HistoryAPI.HistoryGetParams;
}
