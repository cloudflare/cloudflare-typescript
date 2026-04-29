// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AssetsAPI from './assets';
import { Assets } from './assets';
import * as PublicAPI from './public';
import { Public } from './public';

export class Finetunes extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);
}

Finetunes.Assets = Assets;
Finetunes.Public = Public;

export declare namespace Finetunes {
  export { Assets as Assets };

  export { Public as Public };
}
