// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRelate extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'relate'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'relate',
  ] as const);

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
    eventID: string,
    params: RelateDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelateDeleteResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/events/relate/${eventID}`,
        options,
      ) as APIPromise<{ result: RelateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Relate extends BaseRelate {}

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
