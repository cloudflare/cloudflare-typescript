// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAudit extends APIResource {
  static override readonly _key: readonly ['organizations', 'logs', 'audit'] = Object.freeze([
    'organizations',
    'logs',
    'audit',
  ] as const);
}
export class Audit extends BaseAudit {}
