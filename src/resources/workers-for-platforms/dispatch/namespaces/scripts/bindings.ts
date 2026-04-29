// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseBindings extends APIResource {
  static override readonly _key: readonly [
    'workersForPlatforms',
    'dispatch',
    'namespaces',
    'scripts',
    'bindings',
  ] = Object.freeze(['workersForPlatforms', 'dispatch', 'namespaces', 'scripts', 'bindings'] as const);
}
export class Bindings extends BaseBindings {}
