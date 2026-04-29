// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UploadAPI from './upload';
import { BaseUpload, Upload } from './upload';
import * as VersionsAPI from './versions/versions';
import { BaseVersions, Versions } from './versions/versions';

export class BaseDatasets extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'datasets'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'datasets',
  ] as const);
}
export class Datasets extends BaseDatasets {
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Datasets.Upload = Upload;
Datasets.BaseUpload = BaseUpload;
Datasets.Versions = Versions;
Datasets.BaseVersions = BaseVersions;

export declare namespace Datasets {
  export { Upload as Upload, BaseUpload as BaseUpload };

  export { Versions as Versions, BaseVersions as BaseVersions };
}
