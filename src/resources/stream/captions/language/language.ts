// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as VttAPI from './vtt';
import { BaseVtt, Vtt } from './vtt';

export class BaseLanguage extends APIResource {
  static override readonly _key: readonly ['stream', 'captions', 'language'] = Object.freeze([
    'stream',
    'captions',
    'language',
  ] as const);
}
export class Language extends BaseLanguage {
  vtt: VttAPI.Vtt = new VttAPI.Vtt(this._client);
}

Language.Vtt = Vtt;
Language.BaseVtt = BaseVtt;

export declare namespace Language {
  export { Vtt as Vtt, BaseVtt as BaseVtt };
}
