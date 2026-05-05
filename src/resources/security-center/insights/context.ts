// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseContext extends APIResource {
  static override readonly _key: readonly ['securityCenter', 'insights', 'context'] = Object.freeze([
    'securityCenter',
    'insights',
    'context',
  ] as const);

  /**
   * Returns the full context payload for an insight. This endpoint is used for
   * insights with large payloads that are not included inline in the list response.
   *
   * @example
   * ```ts
   * const context =
   *   await client.securityCenter.insights.context.get(
   *     'issue_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(issueID: string, params: ContextGetParams, options?: RequestOptions): APIPromise<ContextGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/security-center/insights/${issueID}/context`,
        options,
      ) as APIPromise<{ result: ContextGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Context extends BaseContext {}

export type ContextGetResponse = { [key: string]: unknown };

export interface ContextGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Context {
  export { type ContextGetResponse as ContextGetResponse, type ContextGetParams as ContextGetParams };
}
