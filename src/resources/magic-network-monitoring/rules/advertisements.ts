// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AdvertisementsAPI from 'cloudflare/resources/magic-network-monitoring/rules/advertisements';

export class Advertisements extends APIResource {}

export interface MagicVisibilityMNMRuleAdvertisable {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;
}

export namespace Advertisements {
  export import MagicVisibilityMNMRuleAdvertisable = AdvertisementsAPI.MagicVisibilityMNMRuleAdvertisable;
}
