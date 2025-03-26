// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LanguageAPI from './language/language';
import {
  Language,
  LanguageCreateParams,
  LanguageDeleteParams,
  LanguageDeleteResponse,
  LanguageGetParams,
  LanguageUpdateParams,
} from './language/language';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Captions extends APIResource {
  language: LanguageAPI.Language = new LanguageAPI.Language(this._client);

  /**
   * Lists the available captions or subtitles for a specific video.
   */
  get(
    identifier: string,
    params: CaptionGetParams,
    options?: RequestOptions,
  ): PagePromise<CaptionsSinglePage, Caption> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/stream/${identifier}/captions`,
      SinglePage<Caption>,
      options,
    );
  }
}

export type CaptionsSinglePage = SinglePage<Caption>;

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

export interface CaptionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Captions.Language = Language;

export declare namespace Captions {
  export {
    type Caption as Caption,
    type CaptionsSinglePage as CaptionsSinglePage,
    type CaptionGetParams as CaptionGetParams,
  };

  export {
    Language as Language,
    type LanguageDeleteResponse as LanguageDeleteResponse,
    type LanguageCreateParams as LanguageCreateParams,
    type LanguageUpdateParams as LanguageUpdateParams,
    type LanguageDeleteParams as LanguageDeleteParams,
    type LanguageGetParams as LanguageGetParams,
  };
}
