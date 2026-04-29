// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseLatest extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors', 'snapshots', 'latest'] =
    Object.freeze(['magicTransit', 'connectors', 'snapshots', 'latest'] as const);
}
export class Latest extends BaseLatest {}
