// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as AvailableAlertsAPI from './available-alerts';

export class AvailableAlerts extends APIResource {
  /**
   * Gets a list of all alert types for which an account is eligible.
   */
  list(
    params: AvailableAlertListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AvailableAlertListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/alerting/v3/available_alerts`, options) as Core.APIPromise<{
        result: AvailableAlertListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AvailableAlertListResponse = unknown | Array<unknown> | string;

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
