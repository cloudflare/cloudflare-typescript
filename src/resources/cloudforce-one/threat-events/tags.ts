// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTags extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'tags'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'tags',
  ] as const);
}
export class Tags extends BaseTags {}
