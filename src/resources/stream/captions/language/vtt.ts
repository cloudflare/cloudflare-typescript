// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as VttAPI from './vtt';

export class Vtt extends APIResource {
  /**
   * Return WebVTT captions for a provided language.
   */
  get(identifier: string, language: string, params: VttGetParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/stream/${identifier}/captions/${language}/vtt`, { ...options, headers: { Accept: 'text/vtt', ...options?.headers } });
  }
}

export type VttGetResponse = string

export interface VttGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Vtt {
  export import VttGetResponse = VttAPI.VttGetResponse;
  export import VttGetParams = VttAPI.VttGetParams;
}
