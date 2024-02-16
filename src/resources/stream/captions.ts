// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CaptionsAPI from 'cloudflare/resources/stream/captions';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Captions extends APIResource {
  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47
   * language. One caption or subtitle file per language is allowed.
   */
  update(
    accountId: string,
    identifier: string,
    language: string,
    body: CaptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionUpdateResponse> {
    return (
      this._client.put(
        `/accounts/${accountId}/stream/${identifier}/captions/${language}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: CaptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the captions or subtitles from a video.
   */
  delete(
    accountId: string,
    identifier: string,
    language: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/stream/${identifier}/captions/${language}`,
        options,
      ) as Core.APIPromise<{ result: CaptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the available captions or subtitles for a specific video.
   */
  streamSubtitlesCaptionsListCaptionsOrSubtitles(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/${identifier}/captions`, options) as Core.APIPromise<{
        result: CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CaptionUpdateResponse = unknown | string;

export type CaptionDeleteResponse = unknown | Array<unknown> | string;

export type CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse =
  Array<CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse.CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponseItem>;

export namespace CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse {
  export interface CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponseItem {
    /**
     * The language label displayed in the native language to users.
     */
    label?: string;

    /**
     * The language tag in BCP 47 format.
     */
    language?: string;
  }
}

export interface CaptionUpdateParams {
  /**
   * The WebVTT file containing the caption or subtitle content.
   */
  file: string;
}

export namespace Captions {
  export import CaptionUpdateResponse = CaptionsAPI.CaptionUpdateResponse;
  export import CaptionDeleteResponse = CaptionsAPI.CaptionDeleteResponse;
  export import CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse = CaptionsAPI.CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse;
  export import CaptionUpdateParams = CaptionsAPI.CaptionUpdateParams;
}
