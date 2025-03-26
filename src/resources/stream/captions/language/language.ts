// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CaptionsAPI from '../captions';
import * as VttAPI from './vtt';
import { Vtt, VttGetParams, VttGetResponse } from './vtt';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Language extends APIResource {
  vtt: VttAPI.Vtt = new VttAPI.Vtt(this._client);

  /**
   * Generate captions or subtitles for provided language via AI.
   */
  create(
    language: string,
    params: LanguageCreateParams,
    options?: RequestOptions,
  ): APIPromise<CaptionsAPI.Caption> {
    const { account_id, identifier } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/stream/${identifier}/captions/${language}/generate`,
        options,
      ) as APIPromise<{ result: CaptionsAPI.Caption }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47
   * language. One caption or subtitle file per language is allowed.
   */
  update(
    language: string,
    params: LanguageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CaptionsAPI.Caption> {
    const { account_id, identifier, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: CaptionsAPI.Caption }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the captions or subtitles from a video.
   */
  delete(
    language: string,
    params: LanguageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<LanguageDeleteResponse> {
    const { account_id, identifier } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        options,
      ) as APIPromise<{ result: LanguageDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the captions or subtitles for provided language.
   */
  get(
    language: string,
    params: LanguageGetParams,
    options?: RequestOptions,
  ): APIPromise<CaptionsAPI.Caption> {
    const { account_id, identifier } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        options,
      ) as APIPromise<{ result: CaptionsAPI.Caption }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LanguageDeleteResponse = string;

export interface LanguageCreateParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  identifier: string;
}

export interface LanguageUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: A Cloudflare-generated unique identifier for a media item.
   */
  identifier: string;

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

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  identifier: string;
}

export interface LanguageGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * A Cloudflare-generated unique identifier for a media item.
   */
  identifier: string;
}

Language.Vtt = Vtt;

export declare namespace Language {
  export {
    type LanguageDeleteResponse as LanguageDeleteResponse,
    type LanguageCreateParams as LanguageCreateParams,
    type LanguageUpdateParams as LanguageUpdateParams,
    type LanguageDeleteParams as LanguageDeleteParams,
    type LanguageGetParams as LanguageGetParams,
  };

  export { Vtt as Vtt, type VttGetResponse as VttGetResponse, type VttGetParams as VttGetParams };
}
