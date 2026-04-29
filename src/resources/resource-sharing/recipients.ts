// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRecipients extends APIResource {
  static override readonly _key: readonly ['resourceSharing', 'recipients'] = Object.freeze([
    'resourceSharing',
    'recipients',
  ] as const);
}
export class Recipients extends BaseRecipients {}
