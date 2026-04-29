// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseMessage extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'requests', 'message'] = Object.freeze([
    'cloudforceOne',
    'requests',
    'message',
  ] as const);
}
export class Message extends BaseMessage {}
