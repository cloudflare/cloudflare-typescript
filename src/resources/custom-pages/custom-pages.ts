// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import { Assets, BaseAssets } from './assets';

export class BaseCustomPages extends APIResource {
  static override readonly _key: readonly ['customPages'] = Object.freeze(['customPages'] as const);
}
export class CustomPages extends BaseCustomPages {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

CustomPages.Assets = Assets;
CustomPages.BaseAssets = BaseAssets;

export declare namespace CustomPages {
  export { Assets as Assets, BaseAssets as BaseAssets };
}
