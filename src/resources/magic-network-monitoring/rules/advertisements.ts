// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Advertisements extends APIResource {
  /**
   * Update advertisement for rule.
   */
  edit(
    ruleID: string,
    params: AdvertisementEditParams,
    options?: RequestOptions,
  ): APIPromise<Advertisement | null> {
    const { account_id, body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/mnm/rules/${ruleID}/advertisement`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: Advertisement | null }>
    )._thenUnwrap((obj) => obj.result);
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

export declare namespace Advertisements {
  export { type Advertisement as Advertisement, type AdvertisementEditParams as AdvertisementEditParams };
}
