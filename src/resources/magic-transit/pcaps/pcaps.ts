// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DownloadAPI from './download';
import { BaseDownload, Download } from './download';
import * as OwnershipAPI from './ownership';
import { BaseOwnership, Ownership } from './ownership';

export class BasePCAPs extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'pcaps'] = Object.freeze([
    'magicTransit',
    'pcaps',
  ] as const);
}
export class PCAPs extends BasePCAPs {
  ownership: OwnershipAPI.Ownership = new OwnershipAPI.Ownership(this._client);
  download: DownloadAPI.Download = new DownloadAPI.Download(this._client);
}

PCAPs.Ownership = Ownership;
PCAPs.BaseOwnership = BaseOwnership;
PCAPs.Download = Download;
PCAPs.BaseDownload = BaseDownload;

export declare namespace PCAPs {
  export { Ownership as Ownership, BaseOwnership as BaseOwnership };

  export { Download as Download, BaseDownload as BaseDownload };
}
