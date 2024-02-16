// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoriesAPI from 'cloudflare/resources/alerting/v3s/histories';

export class Histories extends APIResource {
  /**
   * Gets a list of history records for notifications sent to an account. The records
   * are displayed for last `x` number of days based on the zone plan (free = 30, pro
   * = 30, biz = 30, ent = 90).
   */
  notificationHistoryListHistory(
    accountId: string,
    query?: HistoryNotificationHistoryListHistoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryNotificationHistoryListHistoryResponse | null>;
  notificationHistoryListHistory(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryNotificationHistoryListHistoryResponse | null>;
  notificationHistoryListHistory(
    accountId: string,
    query: HistoryNotificationHistoryListHistoryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryNotificationHistoryListHistoryResponse | null> {
    if (isRequestOptions(query)) {
      return this.notificationHistoryListHistory(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/alerting/v3/history`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HistoryNotificationHistoryListHistoryResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type HistoryNotificationHistoryListHistoryResponse =
  Array<HistoryNotificationHistoryListHistoryResponse.HistoryNotificationHistoryListHistoryResponseItem>;

export namespace HistoryNotificationHistoryListHistoryResponse {
  export interface HistoryNotificationHistoryListHistoryResponseItem {
    /**
     * UUID
     */
    id?: string;

    /**
     * Message body included in the notification sent.
     */
    alert_body?: string;

    /**
     * Type of notification that has been dispatched.
     */
    alert_type?: string;

    /**
     * Description of the notification policy (if present).
     */
    description?: string;

    /**
     * The mechanism to which the notification has been dispatched.
     */
    mechanism?: string;

    /**
     * The type of mechanism to which the notification has been dispatched. This can be
     * email/pagerduty/webhook based on the mechanism configured.
     */
    mechanism_type?: 'email' | 'pagerduty' | 'webhook';

    /**
     * Name of the policy.
     */
    name?: string;

    /**
     * The unique identifier of a notification policy
     */
    policy_id?: string;

    /**
     * Timestamp of when the notification was dispatched in ISO 8601 format.
     */
    sent?: string;
  }
}

export interface HistoryNotificationHistoryListHistoryParams {
  /**
   * Limit the returned results to history records older than the specified date.
   * This must be a timestamp that conforms to RFC3339.
   */
  before?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;

  /**
   * Limit the returned results to history records newer than the specified date.
   * This must be a timestamp that conforms to RFC3339.
   */
  since?: string;
}

export namespace Histories {
  export import HistoryNotificationHistoryListHistoryResponse = HistoriesAPI.HistoryNotificationHistoryListHistoryResponse;
  export import HistoryNotificationHistoryListHistoryParams = HistoriesAPI.HistoryNotificationHistoryListHistoryParams;
}
