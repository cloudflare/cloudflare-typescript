// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePurge extends APIResource {
  static override readonly _key: readonly ['queues', 'purge'] = Object.freeze(['queues', 'purge'] as const);
}
export class Purge extends BasePurge {}
