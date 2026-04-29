// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DownloadsAPI from './downloads';
import { BaseDownloads, Downloads } from './downloads';
import * as PermissionsAPI from './permissions';
import { BasePermissions, Permissions } from './permissions';
import * as SnapshotsAPI from './snapshots';
import { BaseSnapshots, Snapshots } from './snapshots';

export class BaseIndicatorFeeds extends APIResource {
  static override readonly _key: readonly ['intel', 'indicatorFeeds'] = Object.freeze([
    'intel',
    'indicatorFeeds',
  ] as const);
}
export class IndicatorFeeds extends BaseIndicatorFeeds {
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
}

IndicatorFeeds.Snapshots = Snapshots;
IndicatorFeeds.BaseSnapshots = BaseSnapshots;
IndicatorFeeds.Permissions = Permissions;
IndicatorFeeds.BasePermissions = BasePermissions;
IndicatorFeeds.Downloads = Downloads;
IndicatorFeeds.BaseDownloads = BaseDownloads;

export declare namespace IndicatorFeeds {
  export { Snapshots as Snapshots, BaseSnapshots as BaseSnapshots };

  export { Permissions as Permissions, BasePermissions as BasePermissions };

  export { Downloads as Downloads, BaseDownloads as BaseDownloads };
}
