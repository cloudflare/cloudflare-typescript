// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseMetadataIndex extends APIResource {
  static override readonly _key: readonly ['vectorize', 'indexes', 'metadataIndex'] = Object.freeze([
    'vectorize',
    'indexes',
    'metadataIndex',
  ] as const);
}
export class MetadataIndex extends BaseMetadataIndex {}
