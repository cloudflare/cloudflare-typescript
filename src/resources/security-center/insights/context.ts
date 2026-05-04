// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Context extends APIResource {
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
  get(
    issueId: string,
    params: ContextGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContextGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/security-center/insights/${issueId}/context`,
        options,
      ) as Core.APIPromise<{ result: ContextGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
