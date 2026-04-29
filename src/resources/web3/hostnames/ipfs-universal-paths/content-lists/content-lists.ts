// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as EntriesAPI from './entries';
import { BaseEntries, Entries } from './entries';

export class BaseContentLists extends APIResource {
  static override readonly _key: readonly ['web3', 'hostnames', 'ipfsUniversalPaths', 'contentLists'] =
    Object.freeze(['web3', 'hostnames', 'ipfsUniversalPaths', 'contentLists'] as const);
}
export class ContentLists extends BaseContentLists {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
}

ContentLists.Entries = Entries;
ContentLists.BaseEntries = BaseEntries;

export declare namespace ContentLists {
  export { Entries as Entries, BaseEntries as BaseEntries };
}
