// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Relate extends APIResource {
  /**
   * Removes an event reference
   *
   * @example
   * ```ts
   * const relate =
   *   await client.cloudforceOne.threatEvents.relate.delete(
   *     'event_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    eventId: string,
    params?: RelateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelateDeleteResponse>;
  delete(eventId: string, options?: Core.RequestOptions): Core.APIPromise<RelateDeleteResponse>;
  delete(
    eventId: string,
    params: RelateDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelateDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(eventId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/cloudforce-one/events/relate/${eventId}`,
        options,
      ) as Core.APIPromise<{ result: RelateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RelateDeleteResponse {
  success: boolean;
}

export interface RelateDeleteParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export declare namespace Relate {
  export { type RelateDeleteResponse as RelateDeleteResponse, type RelateDeleteParams as RelateDeleteParams };
}
