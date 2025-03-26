// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AvailableAlerts extends APIResource {
  /**
   * Gets a list of all alert types for which an account is eligible.
   */
  list(params: AvailableAlertListParams, options?: RequestOptions): APIPromise<AvailableAlertListResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/alerting/v3/available_alerts`, options) as APIPromise<{
        result: AvailableAlertListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AvailableAlertListResponse = Record<string, Array<AvailableAlertListResponse.Item>>;

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

export declare namespace AvailableAlerts {
  export {
    type AvailableAlertListResponse as AvailableAlertListResponse,
    type AvailableAlertListParams as AvailableAlertListParams,
  };
}
