// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class HistoryResource extends APIResource {
  /**
   * Gets a list of history records for notifications sent to an account. The records
   * are displayed for last `x` number of days based on the zone plan (free = 30, pro
   * = 30, biz = 30, ent = 90).
   */
  list(
    params: HistoryListParams,
    options?: RequestOptions,
  ): PagePromise<HistoriesV4PagePaginationArray, History> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/alerting/v3/history`,
      V4PagePaginationArray<History>,
      { query, ...options },
    );
  }
}

export type HistoriesV4PagePaginationArray = V4PagePaginationArray<History>;

export interface History {
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

export interface HistoryListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: The account id
   */
  account_id: string;

  /**
   * Query param: Limit the returned results to history records older than the
   * specified date. This must be a timestamp that conforms to RFC3339.
   */
  before?: string;

  /**
   * Query param: Limit the returned results to history records newer than the
   * specified date. This must be a timestamp that conforms to RFC3339.
   */
  since?: string;
}

export declare namespace HistoryResource {
  export {
    type History as History,
    type HistoriesV4PagePaginationArray as HistoriesV4PagePaginationArray,
    type HistoryListParams as HistoryListParams,
  };
}
