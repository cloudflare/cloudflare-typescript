// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as EntriesAPI from './entries';
import { BaseEntries, Entries } from './entries';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'datasets', 'versions'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'datasets',
    'versions',
  ] as const);
}
export class Versions extends BaseVersions {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
}

Versions.Entries = Entries;
Versions.BaseEntries = BaseEntries;

export declare namespace Versions {
  export { Entries as Entries, BaseEntries as BaseEntries };
}
