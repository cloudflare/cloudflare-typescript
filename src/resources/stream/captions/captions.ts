// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as LanguageAPI from './language/language';
import { Language } from './language/language';

export class Captions extends APIResource {
  language: LanguageAPI.Language = new LanguageAPI.Language(this._client);
}

Captions.Language = Language;

export declare namespace Captions {
  export { Language as Language };
}
