// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class Vtt extends APIResource {
  /**
   * Return WebVTT captions for a provided language.
   *
   * @example
   * ```ts
   * const vtt = await client.stream.captions.language.vtt.get(
   *   'ea95132c15732412d22c1476fa83f27a',
   *   'tr',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    identifier: string,
    language: string,
    params?: VttGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string>;
  get(identifier: string, language: string, options?: Core.RequestOptions): Core.APIPromise<string>;
  get(
    identifier: string,
    language: string,
    params: VttGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.get(identifier, language, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/stream/${identifier}/captions/${language}/vtt`, {
      ...options,
      headers: { Accept: 'text/vtt', ...options?.headers },
    });
  }
}

export type VttGetResponse = string;

export interface VttGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export declare namespace Vtt {
  export { type VttGetResponse as VttGetResponse, type VttGetParams as VttGetParams };
}
