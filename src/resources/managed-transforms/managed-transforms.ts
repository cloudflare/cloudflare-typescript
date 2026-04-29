// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseManagedTransforms extends APIResource {
  static override readonly _key: readonly ['managedTransforms'] = Object.freeze([
    'managedTransforms',
  ] as const);
}
export class ManagedTransforms extends BaseManagedTransforms {}
