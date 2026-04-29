// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as MetadataIndexAPI from './metadata-index';
import { MetadataIndex } from './metadata-index';

export class Indexes extends APIResource {
  metadataIndex: MetadataIndexAPI.MetadataIndex = new MetadataIndexAPI.MetadataIndex(this._client);
}

Indexes.MetadataIndex = MetadataIndex;

export declare namespace Indexes {
  export { MetadataIndex as MetadataIndex };
}
