// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IndexesAPI from './indexes/indexes';
import { BaseIndexes, Indexes } from './indexes/indexes';

export class BaseVectorize extends APIResource {
  static override readonly _key: readonly ['vectorize'] = Object.freeze(['vectorize'] as const);
}
export class Vectorize extends BaseVectorize {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

Vectorize.Indexes = Indexes;
Vectorize.BaseIndexes = BaseIndexes;

export declare namespace Vectorize {
  export { Indexes as Indexes, BaseIndexes as BaseIndexes };
}
