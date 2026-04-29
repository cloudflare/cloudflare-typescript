// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DownloadAPI from './download';
import { Download } from './download';
import * as OwnershipAPI from './ownership';
import { Ownership } from './ownership';

export class PCAPs extends APIResource {
  ownership: OwnershipAPI.Ownership = new OwnershipAPI.Ownership(this._client);
  download: DownloadAPI.Download = new DownloadAPI.Download(this._client);
}

PCAPs.Ownership = Ownership;
PCAPs.Download = Download;

export declare namespace PCAPs {
  export { Ownership as Ownership };

  export { Download as Download };
}
