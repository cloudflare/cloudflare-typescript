// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseConsumers extends APIResource {
  static override readonly _key: readonly ['queues', 'consumers'] = Object.freeze([
    'queues',
    'consumers',
  ] as const);
}
export class Consumers extends BaseConsumers {}
