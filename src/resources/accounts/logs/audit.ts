// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAudit extends APIResource {
  static override readonly _key: readonly ['accounts', 'logs', 'audit'] = Object.freeze([
    'accounts',
    'logs',
    'audit',
  ] as const);
}
export class Audit extends BaseAudit {}
