// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAuditSSHSettings extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'auditSSHSettings'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'auditSSHSettings',
  ] as const);
}
export class AuditSSHSettings extends BaseAuditSSHSettings {}
