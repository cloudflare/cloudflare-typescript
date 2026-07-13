// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAttackers extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'attackers'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'attackers',
  ] as const);

  /**
   * List attacker names referenced in events across one or more datasets.
   *
   * @example
   * ```ts
   * const attackers =
   *   await client.cloudforceOne.threatEvents.attackers.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: AttackerListParams, options?: RequestOptions): APIPromise<AttackerListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/attackers`, {
      query,
      ...options,
    });
  }
}
export class Attackers extends BaseAttackers {}

export interface AttackerListResponse {
  items: AttackerListResponse.Items;

  type: string;
}

export namespace AttackerListResponse {
  export interface Items {
    type: string;
  }
}

export interface AttackerListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Array of dataset IDs to query attackers from. If not provided, uses
   * the default dataset.
   */
  datasetIds?: Array<string>;
}

export declare namespace Attackers {
  export { type AttackerListResponse as AttackerListResponse, type AttackerListParams as AttackerListParams };
}
