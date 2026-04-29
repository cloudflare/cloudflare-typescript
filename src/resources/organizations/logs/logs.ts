// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuditAPI from './audit';
import { Audit, BaseAudit } from './audit';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['organizations', 'logs'] = Object.freeze([
    'organizations',
    'logs',
  ] as const);
}
export class Logs extends BaseLogs {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
}

Logs.Audit = Audit;
Logs.BaseAudit = BaseAudit;

export declare namespace Logs {
  export { Audit as Audit, BaseAudit as BaseAudit };
}
