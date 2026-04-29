// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DirectUploadsAPI from './direct-uploads';
import { DirectUploads } from './direct-uploads';

export class V2 extends APIResource {
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);
}

V2.DirectUploads = DirectUploads;

export declare namespace V2 {
  export { DirectUploads as DirectUploads };
}
