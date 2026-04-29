// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as UploadAPI from './upload';
import { Upload } from './upload';
import * as VersionsAPI from './versions/versions';
import { Versions } from './versions/versions';

export class Datasets extends APIResource {
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Datasets.Upload = Upload;
Datasets.Versions = Versions;

export declare namespace Datasets {
  export { Upload as Upload };

  export { Versions as Versions };
}
