// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Vtt extends APIResource {
  /**
   * Return WebVTT captions for a provided language.
   */
  get(language: string, params: VttGetParams, options?: RequestOptions): APIPromise<string> {
    const { account_id, identifier } = params;
    return this._client.get(path`/accounts/${account_id}/stream/${identifier}/captions/${language}/vtt`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/vtt' }, options?.headers]),
    });
  }
}

export type VttGetResponse = string;

export interface VttGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  identifier: string;
}

export declare namespace Vtt {
  export { type VttGetResponse as VttGetResponse, type VttGetParams as VttGetParams };
}
