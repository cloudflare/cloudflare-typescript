// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DownloadsAPI from './downloads';
import { Downloads } from './downloads';
import * as PermissionsAPI from './permissions';
import { Permissions } from './permissions';
import * as SnapshotsAPI from './snapshots';
import { Snapshots } from './snapshots';

export class IndicatorFeeds extends APIResource {
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
}

IndicatorFeeds.Snapshots = Snapshots;
IndicatorFeeds.Permissions = Permissions;
IndicatorFeeds.Downloads = Downloads;

export declare namespace IndicatorFeeds {
  export { Snapshots as Snapshots };

  export { Permissions as Permissions };

  export { Downloads as Downloads };
}
