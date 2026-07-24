// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseQuota extends APIResource {
  static override readonly _key: readonly ['secretsStore', 'quota'] = Object.freeze([
    'secretsStore',
    'quota',
  ] as const);

  /**
   * Lists the number of secrets used in the account.
   *
   * @example
   * ```ts
   * const quota = await client.secretsStore.quota.get({
   *   account_id: '985e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: QuotaGetParams, options?: RequestOptions): APIPromise<QuotaGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/secrets_store/quota`, options) as APIPromise<{
        result: QuotaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Quota extends BaseQuota {}

export interface QuotaGetResponse {
  secrets: QuotaGetResponse.Secrets;
}

export namespace QuotaGetResponse {
  export interface Secrets {
    /**
     * The number of secrets the account is entitled to use.
     */
    quota: number;

    /**
     * The number of secrets the account is currently using.
     */
    usage: number;
  }
}

export interface QuotaGetParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export declare namespace Quota {
  export { type QuotaGetResponse as QuotaGetResponse, type QuotaGetParams as QuotaGetParams };
}
