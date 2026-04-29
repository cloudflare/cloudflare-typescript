// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseTags extends APIResource {
  static override readonly _key: readonly [
    'workersForPlatforms',
    'dispatch',
    'namespaces',
    'scripts',
    'tags',
  ] = Object.freeze(['workersForPlatforms', 'dispatch', 'namespaces', 'scripts', 'tags'] as const);
}
export class Tags extends BaseTags {}
