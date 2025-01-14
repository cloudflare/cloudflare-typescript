// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Vtt extends APIResource {
  /**
   * Return WebVTT captions for a provided language.
   */
  get(
    identifier: string,
    language: string,
    params: VttGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/stream/${identifier}/captions/${language}/vtt`, {
      ...options,
      headers: { Accept: 'text/vtt', ...options?.headers },
    });
  }
}

export type VttGetResponse = string;

export interface VttGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Vtt {
  export { type VttGetResponse as VttGetResponse, type VttGetParams as VttGetParams };
}
