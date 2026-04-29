// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LanguageAPI from './language/language';
import { BaseLanguage, Language } from './language/language';

export class BaseCaptions extends APIResource {
  static override readonly _key: readonly ['stream', 'captions'] = Object.freeze([
    'stream',
    'captions',
  ] as const);
}
export class Captions extends BaseCaptions {
  language: LanguageAPI.Language = new LanguageAPI.Language(this._client);
}

Captions.Language = Language;
Captions.BaseLanguage = BaseLanguage;

export declare namespace Captions {
  export { Language as Language, BaseLanguage as BaseLanguage };
}
