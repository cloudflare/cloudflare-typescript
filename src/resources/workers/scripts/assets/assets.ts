// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UploadAPI from './upload';
import { BaseUpload, Upload } from './upload';

export class BaseAssets extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'assets'] = Object.freeze([
    'workers',
    'scripts',
    'assets',
  ] as const);
}
export class Assets extends BaseAssets {
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);
}

Assets.Upload = Upload;
Assets.BaseUpload = BaseUpload;

export declare namespace Assets {
  export { Upload as Upload, BaseUpload as BaseUpload };
}
