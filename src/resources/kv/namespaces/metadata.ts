// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseMetadata extends APIResource {
  static override readonly _key: readonly ['kv', 'namespaces', 'metadata'] = Object.freeze([
    'kv',
    'namespaces',
    'metadata',
  ] as const);
}
export class Metadata extends BaseMetadata {}
