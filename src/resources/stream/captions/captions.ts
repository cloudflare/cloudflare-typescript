// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CaptionsAPI from './captions';
import * as LanguageAPI from './language/language';

export class Captions extends APIResource {
  language: LanguageAPI.Language = new LanguageAPI.Language(this._client);

  /**
   * Lists the available captions or subtitles for a specific video.
   */
  get(
    identifier: string,
    params: CaptionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}/captions`, options) as Core.APIPromise<{
        result: CaptionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Caption {
  /**
   * Whether the caption was generated via AI.
   */
  generated?: boolean;

  /**
   * The language label displayed in the native language to users.
   */
  label?: string;

  /**
   * The language tag in BCP 47 format.
   */
  language?: string;

  /**
   * The status of a generated caption.
   */
  status?: 'ready' | 'inprogress' | 'error';
}

export type CaptionGetResponse = Array<Caption>;

export interface CaptionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Captions {
  export type Caption = CaptionsAPI.Caption;
  export type CaptionGetResponse = CaptionsAPI.CaptionGetResponse;
  export type CaptionGetParams = CaptionsAPI.CaptionGetParams;
  export import Language = LanguageAPI.Language;
  export type LanguageDeleteResponse = LanguageAPI.LanguageDeleteResponse;
  export type LanguageCreateParams = LanguageAPI.LanguageCreateParams;
  export type LanguageUpdateParams = LanguageAPI.LanguageUpdateParams;
  export type LanguageDeleteParams = LanguageAPI.LanguageDeleteParams;
  export type LanguageGetParams = LanguageAPI.LanguageGetParams;
}
