// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuditAPI from './audit';
import {
  Audit,
  AuditHistoryParams,
  AuditHistoryResponse,
  AuditListParams,
  AuditListResponse,
  AuditListResponsesCursorPaginationAfter,
  AuditProductCategoriesParams,
  AuditProductCategoriesResponse,
  AuditProductCategoriesResponsesSinglePage,
  BaseAudit,
} from './audit';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['accounts', 'logs'] = Object.freeze(['accounts', 'logs'] as const);
}
export class Logs extends BaseLogs {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
}

Logs.Audit = Audit;
Logs.BaseAudit = BaseAudit;

export declare namespace Logs {
  export {
    Audit as Audit,
    BaseAudit as BaseAudit,
    type AuditListResponse as AuditListResponse,
    type AuditHistoryResponse as AuditHistoryResponse,
    type AuditProductCategoriesResponse as AuditProductCategoriesResponse,
    type AuditListResponsesCursorPaginationAfter as AuditListResponsesCursorPaginationAfter,
    type AuditProductCategoriesResponsesSinglePage as AuditProductCategoriesResponsesSinglePage,
    type AuditListParams as AuditListParams,
    type AuditHistoryParams as AuditHistoryParams,
    type AuditProductCategoriesParams as AuditProductCategoriesParams,
  };
}
