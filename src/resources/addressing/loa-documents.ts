// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseLOADocuments extends APIResource {
  static override readonly _key: readonly ['addressing', 'loaDocuments'] = Object.freeze([
    'addressing',
    'loaDocuments',
  ] as const);
}
export class LOADocuments extends BaseLOADocuments {}
