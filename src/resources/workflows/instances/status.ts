// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseStatus extends APIResource {
  static override readonly _key: readonly ['workflows', 'instances', 'status'] = Object.freeze([
    'workflows',
    'instances',
    'status',
  ] as const);
}
export class Status extends BaseStatus {}
