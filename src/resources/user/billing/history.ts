// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';

export class History extends APIResource {
  /**
   * Accesses your billing history object.
   */
  list(
    query: HistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BillingHistoriesV4PagePaginationArray, BillingHistory> {
    return this._client.getAPIList('/user/billing/history', V4PagePaginationArray<BillingHistory>, {
      query,
      ...options,
    });
  }
}

export type BillingHistoriesV4PagePaginationArray = V4PagePaginationArray<BillingHistory>;

export interface BillingHistory {
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

  zone: BillingHistory.Zone;
}

export namespace BillingHistory {
  export interface Zone {
    name?: string;
  }
}

export interface HistoryListParams extends V4PagePaginationArrayParams {
  /**
   * The billing item action.
   */
  action?: string;

  /**
   * When the billing item was created.
   */
  occurred_at?: string;

  /**
   * Field to order billing history by.
   */
  order?: 'type' | 'occurred_at' | 'action';

  /**
   * The billing item type.
   */
  type?: string;
}

export declare namespace History {
  export {
    type BillingHistory as BillingHistory,
    type BillingHistoriesV4PagePaginationArray as BillingHistoriesV4PagePaginationArray,
    type HistoryListParams as HistoryListParams,
  };
}
