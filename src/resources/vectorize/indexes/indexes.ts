// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetadataIndexAPI from './metadata-index';
import { BaseMetadataIndex, MetadataIndex } from './metadata-index';

export class BaseIndexes extends APIResource {
  static override readonly _key: readonly ['vectorize', 'indexes'] = Object.freeze([
    'vectorize',
    'indexes',
  ] as const);
}
export class Indexes extends BaseIndexes {
  metadataIndex: MetadataIndexAPI.MetadataIndex = new MetadataIndexAPI.MetadataIndex(this._client);
}

Indexes.MetadataIndex = MetadataIndex;
Indexes.BaseMetadataIndex = BaseMetadataIndex;

export declare namespace Indexes {
  export { MetadataIndex as MetadataIndex, BaseMetadataIndex as BaseMetadataIndex };
}
