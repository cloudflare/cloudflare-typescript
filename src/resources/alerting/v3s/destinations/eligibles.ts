// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EligiblesAPI from 'cloudflare/resources/alerting/v3s/destinations/eligibles';

export class Eligibles extends APIResource {
  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   */
  notificationMechanismEligibilityGetDeliveryMechanismEligibility(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/alerting/v3/destinations/eligible`,
        options,
      ) as Core.APIPromise<{
        result: EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse =
  | unknown
  | Array<unknown>
  | string;

export namespace Eligibles {
  export import EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse = EligiblesAPI.EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse;
}
