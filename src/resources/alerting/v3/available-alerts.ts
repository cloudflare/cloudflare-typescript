// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailableAlertsAPI from 'cloudflare/resources/alerting/v3/available-alerts';

export class AvailableAlerts extends APIResource {
  /**
   * Gets a list of all alert types for which an account is eligible.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AvailableAlertListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/alerting/v3/available_alerts`, options) as Core.APIPromise<{
        result: AvailableAlertListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AvailableAlertListResponse = unknown | Array<unknown> | string;

export namespace AvailableAlerts {
  export import AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
}
