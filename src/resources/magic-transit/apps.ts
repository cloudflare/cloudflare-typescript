// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseApps extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'apps'] = Object.freeze([
    'magicTransit',
    'apps',
  ] as const);
}
export class Apps extends BaseApps {}
