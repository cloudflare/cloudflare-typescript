// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as VttAPI from './vtt';
import { Vtt } from './vtt';

export class Language extends APIResource {
  vtt: VttAPI.Vtt = new VttAPI.Vtt(this._client);
}

Language.Vtt = Vtt;

export declare namespace Language {
  export { Vtt as Vtt };
}
