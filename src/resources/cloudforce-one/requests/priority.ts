// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePriority extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'requests', 'priority'] = Object.freeze([
    'cloudforceOne',
    'requests',
    'priority',
  ] as const);
}
export class Priority extends BasePriority {}
