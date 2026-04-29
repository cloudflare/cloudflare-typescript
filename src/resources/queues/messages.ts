// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMessages extends APIResource {
  static override readonly _key: readonly ['queues', 'messages'] = Object.freeze([
    'queues',
    'messages',
  ] as const);
}
export class Messages extends BaseMessages {}
