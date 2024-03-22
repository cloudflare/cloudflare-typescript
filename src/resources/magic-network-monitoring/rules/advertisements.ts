// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AdvertisementsAPI from 'cloudflare/resources/magic-network-monitoring/rules/advertisements';

export class Advertisements extends APIResource {
  /**
   * Update advertisement for rule.
   */
  edit(
    ruleId: unknown,
    params: AdvertisementEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MagicVisibilityMNMRuleAdvertisable | null> {
    const { account_id } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/mnm/rules/${ruleId}/advertisement`,
        options,
      ) as Core.APIPromise<{ result: MagicVisibilityMNMRuleAdvertisable | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MagicVisibilityMNMRuleAdvertisable {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;
}

export interface AdvertisementEditParams {
  account_id: unknown;
}

export namespace Advertisements {
  export import MagicVisibilityMNMRuleAdvertisable = AdvertisementsAPI.MagicVisibilityMNMRuleAdvertisable;
  export import AdvertisementEditParams = AdvertisementsAPI.AdvertisementEditParams;
}
