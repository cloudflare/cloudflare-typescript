// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseQuota extends APIResource {
  static override readonly _key: readonly ['secretsStore', 'quota'] = Object.freeze([
    'secretsStore',
    'quota',
  ] as const);
}
export class Quota extends BaseQuota {}
