// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseInvites extends APIResource {
  static override readonly _key: readonly ['user', 'invites'] = Object.freeze(['user', 'invites'] as const);
}
export class Invites extends BaseInvites {}
