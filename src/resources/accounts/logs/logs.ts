// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuditAPI from './audit';
import { Audit, AuditListParams, AuditListResponse, AuditListResponsesCursorPaginationAfter } from './audit';

export class Logs extends APIResource {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
}

Logs.Audit = Audit;

export declare namespace Logs {
  export {
    Audit as Audit,
    type AuditListResponse as AuditListResponse,
    type AuditListResponsesCursorPaginationAfter as AuditListResponsesCursorPaginationAfter,
    type AuditListParams as AuditListParams,
  };
}
