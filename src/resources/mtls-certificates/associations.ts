// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAssociations extends APIResource {
  static override readonly _key: readonly ['mtlsCertificates', 'associations'] = Object.freeze([
    'mtlsCertificates',
    'associations',
  ] as const);
}
export class Associations extends BaseAssociations {}
