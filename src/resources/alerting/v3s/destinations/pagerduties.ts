// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagerdutiesAPI from 'cloudflare/resources/alerting/v3s/destinations/pagerduties';

export class Pagerduties extends APIResource {
  /**
   * Get a list of all configured PagerDuty services.
   */
  notificationDestinationsWithPagerDutyListPagerDutyServices(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/alerting/v3/destinations/pagerduty`,
        options,
      ) as Core.APIPromise<{
        result: PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse =
  Array<PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse.PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponseItem>;

export namespace PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse {
  export interface PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponseItem {
    /**
     * UUID
     */
    id?: string;

    /**
     * The name of the pagerduty service.
     */
    name?: string;
  }
}

export namespace Pagerduties {
  export import PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse = PagerdutiesAPI.PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse;
}
