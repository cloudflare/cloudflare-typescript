// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as VersionsAPI from './versions';
import { BaseVersions, Versions } from './versions';

export class BaseWorkers extends APIResource {
  static override readonly _key: readonly ['workers', 'beta', 'workers'] = Object.freeze([
    'workers',
    'beta',
    'workers',
  ] as const);
}
export class Workers extends BaseWorkers {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

Workers.Versions = Versions;
Workers.BaseVersions = BaseVersions;

export declare namespace Workers {
  export { Versions as Versions, BaseVersions as BaseVersions };
}
