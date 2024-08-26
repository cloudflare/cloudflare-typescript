// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as AvailableAlertsAPI from './available-alerts';

export class AvailableAlerts extends APIResource {
  /**
   * Gets a list of all alert types for which an account is eligible.
   */
  list(params: AvailableAlertListParams, options?: Core.RequestOptions): Core.APIPromise<AvailableAlertListResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/alerting/v3/available_alerts`, options) as Core.APIPromise<{ result: AvailableAlertListResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type AvailableAlertListResponse = Record<string, Array<AvailableAlertListResponse.Item>>

export namespace AvailableAlertListResponse {
  export interface Item {
    /**
     * Describes the alert type.
     */
    description?: string;

    /**
     * Alert type name.
     */
    display_name?: string;

    /**
     * Format of additional configuration options (filters) for the alert type. Data
     * type of filters during policy creation: Array of strings.
     */
    filter_options?: Array<unknown>;

    /**
     * Use this value when creating and updating a notification policy.
     */
    type?: string;
  }
}

export interface AvailableAlertListParams {
  /**
   * The account id
   */
  account_id: string;
}

export namespace AvailableAlerts {
  export import AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
  export import AvailableAlertListParams = AvailableAlertsAPI.AvailableAlertListParams;
}
