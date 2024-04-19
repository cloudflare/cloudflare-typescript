// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CaptionsAPI from 'cloudflare/resources/stream/captions/captions';
import * as LanguageAPI from 'cloudflare/resources/stream/captions/language/language';

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
   * The language label displayed in the native language to users.
   */
  label?: string;

  /**
   * The language tag in BCP 47 format.
   */
  language?: string;
}

export type CaptionGetResponse = Array<Caption>;

export interface CaptionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Captions {
  export import Caption = CaptionsAPI.Caption;
  export import CaptionGetResponse = CaptionsAPI.CaptionGetResponse;
  export import CaptionGetParams = CaptionsAPI.CaptionGetParams;
  export import Language = LanguageAPI.Language;
  export import LanguageDeleteResponse = LanguageAPI.LanguageDeleteResponse;
  export import LanguageUpdateParams = LanguageAPI.LanguageUpdateParams;
  export import LanguageDeleteParams = LanguageAPI.LanguageDeleteParams;
  export import LanguageGetParams = LanguageAPI.LanguageGetParams;
}
