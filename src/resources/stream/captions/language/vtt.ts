// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VttAPI from 'cloudflare/resources/stream/captions/language/vtt';

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
    const { account_id, body } = params;
    return this._client.get(`/accounts/${account_id}/stream/${identifier}/captions/${language}/vtt`, {
      body: body,
      ...options,
      headers: { Accept: 'text/vtt', ...options?.headers },
    });
  }
}

export type VttGetResponse = string;

export interface VttGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Vtt {
  export import VttGetResponse = VttAPI.VttGetResponse;
  export import VttGetParams = VttAPI.VttGetParams;
}
