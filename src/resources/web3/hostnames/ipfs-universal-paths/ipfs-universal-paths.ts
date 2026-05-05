// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ContentListsAPI from './content-lists/content-lists';
import {
  BaseContentLists,
  ContentList,
  ContentListGetParams,
  ContentListUpdateParams,
  ContentLists,
} from './content-lists/content-lists';

export class BaseIPFSUniversalPaths extends APIResource {
  static override readonly _key: readonly ['web3', 'hostnames', 'ipfsUniversalPaths'] = Object.freeze([
    'web3',
    'hostnames',
    'ipfsUniversalPaths',
  ] as const);
}
export class IPFSUniversalPaths extends BaseIPFSUniversalPaths {
  contentLists: ContentListsAPI.ContentLists = new ContentListsAPI.ContentLists(this._client);
}

IPFSUniversalPaths.ContentLists = ContentLists;
IPFSUniversalPaths.BaseContentLists = BaseContentLists;

export declare namespace IPFSUniversalPaths {
  export {
    ContentLists as ContentLists,
    BaseContentLists as BaseContentLists,
    type ContentList as ContentList,
    type ContentListUpdateParams as ContentListUpdateParams,
    type ContentListGetParams as ContentListGetParams,
  };
}
