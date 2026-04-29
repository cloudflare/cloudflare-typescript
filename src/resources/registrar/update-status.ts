// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseUpdateStatus extends APIResource {
  static override readonly _key: readonly ['registrar', 'updateStatus'] = Object.freeze([
    'registrar',
    'updateStatus',
  ] as const);
}
export class UpdateStatus extends BaseUpdateStatus {}
