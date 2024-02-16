// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoriesAPI from 'cloudflare/resources/users/billings/histories';

export class Histories extends APIResource {
  /**
   * Accesses your billing history object.
   */
  userBillingHistoryBillingHistoryDetails(
    query?: HistoryUserBillingHistoryBillingHistoryDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryUserBillingHistoryBillingHistoryDetailsResponse | null>;
  userBillingHistoryBillingHistoryDetails(
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryUserBillingHistoryBillingHistoryDetailsResponse | null>;
  userBillingHistoryBillingHistoryDetails(
    query: HistoryUserBillingHistoryBillingHistoryDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryUserBillingHistoryBillingHistoryDetailsResponse | null> {
    if (isRequestOptions(query)) {
      return this.userBillingHistoryBillingHistoryDetails({}, query);
    }
    return (
      this._client.get('/user/billing/history', { query, ...options }) as Core.APIPromise<{
        result: HistoryUserBillingHistoryBillingHistoryDetailsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type HistoryUserBillingHistoryBillingHistoryDetailsResponse =
  Array<HistoryUserBillingHistoryBillingHistoryDetailsResponse.HistoryUserBillingHistoryBillingHistoryDetailsResponseItem>;

export namespace HistoryUserBillingHistoryBillingHistoryDetailsResponse {
  export interface HistoryUserBillingHistoryBillingHistoryDetailsResponseItem {
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

    zone: HistoryUserBillingHistoryBillingHistoryDetailsResponseItem.Zone;
  }

  export namespace HistoryUserBillingHistoryBillingHistoryDetailsResponseItem {
    export interface Zone {
      name?: unknown;
    }
  }
}

export interface HistoryUserBillingHistoryBillingHistoryDetailsParams {
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

export namespace Histories {
  export import HistoryUserBillingHistoryBillingHistoryDetailsResponse = HistoriesAPI.HistoryUserBillingHistoryBillingHistoryDetailsResponse;
  export import HistoryUserBillingHistoryBillingHistoryDetailsParams = HistoriesAPI.HistoryUserBillingHistoryBillingHistoryDetailsParams;
}
