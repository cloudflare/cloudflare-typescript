// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetsAPI from './assets';
import { Assets, BaseAssets } from './assets';
import * as PublicAPI from './public';
import { BasePublic, Public } from './public';

export class BaseFinetunes extends APIResource {
  static override readonly _key: readonly ['ai', 'finetunes'] = Object.freeze(['ai', 'finetunes'] as const);
}
export class Finetunes extends BaseFinetunes {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);
}

Finetunes.Assets = Assets;
Finetunes.BaseAssets = BaseAssets;
Finetunes.Public = Public;
Finetunes.BasePublic = BasePublic;

export declare namespace Finetunes {
  export { Assets as Assets, BaseAssets as BaseAssets };

  export { Public as Public, BasePublic as BasePublic };
}
