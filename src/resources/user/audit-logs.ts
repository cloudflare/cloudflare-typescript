// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAuditLogs extends APIResource {
  static override readonly _key: readonly ['user', 'auditLogs'] = Object.freeze([
    'user',
    'auditLogs',
  ] as const);
}
export class AuditLogs extends BaseAuditLogs {}
