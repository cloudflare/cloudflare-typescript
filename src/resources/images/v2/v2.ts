// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DirectUploadsAPI from './direct-uploads';
import { BaseDirectUploads, DirectUploads } from './direct-uploads';

export class BaseV2 extends APIResource {
  static override readonly _key: readonly ['images', 'v2'] = Object.freeze(['images', 'v2'] as const);
}
export class V2 extends BaseV2 {
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);
}

V2.DirectUploads = DirectUploads;
V2.BaseDirectUploads = BaseDirectUploads;

export declare namespace V2 {
  export { DirectUploads as DirectUploads, BaseDirectUploads as BaseDirectUploads };
}
