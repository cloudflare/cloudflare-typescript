// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetsAPI from './assets';
import { Assets } from './assets';

export class CustomPages extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

CustomPages.Assets = Assets;

export declare namespace CustomPages {
  export { Assets as Assets };
}
