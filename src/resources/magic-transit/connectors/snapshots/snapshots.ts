// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LatestAPI from './latest';
import { BaseLatest, Latest } from './latest';

export class BaseSnapshots extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors', 'snapshots'] = Object.freeze([
    'magicTransit',
    'connectors',
    'snapshots',
  ] as const);
}
export class Snapshots extends BaseSnapshots {
  latest: LatestAPI.Latest = new LatestAPI.Latest(this._client);
}

Snapshots.Latest = Latest;
Snapshots.BaseLatest = BaseLatest;

export declare namespace Snapshots {
  export { Latest as Latest, BaseLatest as BaseLatest };
}
