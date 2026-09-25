// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseActions extends APIResource {
  static override readonly _key: readonly ['accounts', 'subscriptions', 'actions'] = Object.freeze([
    'accounts',
    'subscriptions',
    'actions',
  ] as const);

  /**
   * Smartly applies the incoming subscription into the lifecycle of the
   * subscription.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.accounts.subscriptions.actions.append(
   *     '506e3185e9c882d175a2d0cb0093d9f2',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  append(
    subscriptionIdentifier: string,
    params: ActionAppendParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Subscription> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}/action/append`, {
        body,
        ...options,
      }) as APIPromise<{ result: Shared.Subscription }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Actions extends BaseActions {}

export interface ActionAppendParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * Body param: The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlanParam;
}

export declare namespace Actions {
  export { type ActionAppendParams as ActionAppendParams };
}
