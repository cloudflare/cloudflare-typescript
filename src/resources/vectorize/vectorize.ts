// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IndexesAPI from './indexes/indexes';
import { Indexes } from './indexes/indexes';

export class Vectorize extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

Vectorize.Indexes = Indexes;

export declare namespace Vectorize {
  export { Indexes as Indexes };
}
