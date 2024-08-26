// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { Vtt } from './vtt';
import * as LanguageAPI from './language';
import { multipartFormRequestOptions } from '../../../../core';
import * as CaptionsAPI from '../captions';
import * as VttAPI from './vtt';

export class Language extends APIResource {
  vtt: VttAPI.Vtt = new VttAPI.Vtt(this._client);

  /**
   * Generate captions or subtitles for provided language via AI.
   */
  create(identifier: string, language: string, params: LanguageCreateParams, options?: Core.RequestOptions): Core.APIPromise<CaptionsAPI.Caption> {
    const { account_id } = params;
    return (this._client.post(`/accounts/${account_id}/stream/${identifier}/captions/${language}/generate`, options) as Core.APIPromise<{ result: CaptionsAPI.Caption }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47
   * language. One caption or subtitle file per language is allowed.
   */
  update(identifier: string, language: string, params: LanguageUpdateParams, options?: Core.RequestOptions): Core.APIPromise<CaptionsAPI.Caption> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/stream/${identifier}/captions/${language}`, Core.multipartFormRequestOptions({ body, ...options })) as Core.APIPromise<{ result: CaptionsAPI.Caption }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the captions or subtitles from a video.
   */
  delete(identifier: string, language: string, params: LanguageDeleteParams, options?: Core.RequestOptions): Core.APIPromise<LanguageDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/stream/${identifier}/captions/${language}`, options) as Core.APIPromise<{ result: LanguageDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the captions or subtitles for provided language.
   */
  get(identifier: string, language: string, params: LanguageGetParams, options?: Core.RequestOptions): Core.APIPromise<CaptionsAPI.Caption> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/stream/${identifier}/captions/${language}`, options) as Core.APIPromise<{ result: CaptionsAPI.Caption }>)._thenUnwrap((obj) => obj.result);
  }
}

export type LanguageDeleteResponse = string

export interface LanguageCreateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface LanguageUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The WebVTT file containing the caption or subtitle content.
   */
  file: string;
}

export interface LanguageDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface LanguageGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Language {
  export import LanguageDeleteResponse = LanguageAPI.LanguageDeleteResponse;
  export import LanguageCreateParams = LanguageAPI.LanguageCreateParams;
  export import LanguageUpdateParams = LanguageAPI.LanguageUpdateParams;
  export import LanguageDeleteParams = LanguageAPI.LanguageDeleteParams;
  export import LanguageGetParams = LanguageAPI.LanguageGetParams;
  export import Vtt = VttAPI.Vtt;
  export import VttGetResponse = VttAPI.VttGetResponse;
  export import VttGetParams = VttAPI.VttGetParams;
}
