// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as AdvertisementsAPI from './advertisements';

export class Advertisements extends APIResource {
  /**
   * Update advertisement for rule.
   */
  edit(ruleId: string, params: AdvertisementEditParams, options?: Core.RequestOptions): Core.APIPromise<Advertisement | null> {
    const { account_id, body } = params;
    return (this._client.patch(`/accounts/${account_id}/mnm/rules/${ruleId}/advertisement`, { body: body, ...options }) as Core.APIPromise<{ result: Advertisement | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface Advertisement {
  /**
   * Toggle on if you would like Cloudflare to automatically advertise the IP
   * Prefixes within the rule via Magic Transit when the rule is triggered. Only
   * available for users of Magic Transit.
   */
  automatic_advertisement: boolean | null;
}

export interface AdvertisementEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Advertisements {
  export import Advertisement = AdvertisementsAPI.Advertisement;
  export import AdvertisementEditParams = AdvertisementsAPI.AdvertisementEditParams;
}
