// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseObjects extends APIResource {
  static override readonly _key: readonly ['durableObjects', 'namespaces', 'objects'] = Object.freeze([
    'durableObjects',
    'namespaces',
    'objects',
  ] as const);
}
export class Objects extends BaseObjects {}
