// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error';
import { CursorPagination, type CursorPaginationParams } from '../../../pagination';

export class AuditLogs extends APIResource {
  /**
   * Lists audit log entries for all Security Center insights in the account or zone,
   * showing changes to insight status and classification.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditLogListResponse of client.securityCenter.insights.auditLogs.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: AuditLogListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesCursorPagination, AuditLogListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesCursorPagination, AuditLogListResponse>;
  list(
    params: AuditLogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesCursorPagination, AuditLogListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id, ...query } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/security-center/insights/audit-log`,
      AuditLogListResponsesCursorPagination,
      { query, ...options },
    );
  }

  /**
   * Lists audit log entries for a specific Security Center insight, showing changes
   * to its status and classification over time.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditLogListByInsightResponse of client.securityCenter.insights.auditLogs.listByInsight(
   *   'issue_id',
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listByInsight(
    issueId: string,
    params?: AuditLogListByInsightParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListByInsightResponsesCursorPagination, AuditLogListByInsightResponse>;
  listByInsight(
    issueId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListByInsightResponsesCursorPagination, AuditLogListByInsightResponse>;
  listByInsight(
    issueId: string,
    params: AuditLogListByInsightParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListByInsightResponsesCursorPagination, AuditLogListByInsightResponse> {
    if (isRequestOptions(params)) {
      return this.listByInsight(issueId, {}, params);
    }
    const { account_id, zone_id, ...query } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/security-center/insights/${issueId}/audit-log`,
      AuditLogListByInsightResponsesCursorPagination,
      { query, ...options },
    );
  }
}

export class AuditLogListResponsesCursorPagination extends CursorPagination<AuditLogListResponse> {}

export class AuditLogListByInsightResponsesCursorPagination extends CursorPagination<AuditLogListByInsightResponse> {}

export interface AuditLogListResponse {
  /**
   * UUIDv7 identifier for the audit log entry, time-ordered.
   */
  id?: string;

  /**
   * The timestamp when the change occurred.
   */
  changed_at?: string;

  /**
   * The actor that made the change. 'system' for automated changes, or a user
   * identifier.
   */
  changed_by?: string;

  /**
   * The value of the field after the change. Null if the field was cleared.
   */
  current_value?: string | null;

  /**
   * The field that was changed.
   */
  field_changed?: 'status' | 'user_classification';

  /**
   * The ID of the insight this audit log entry relates to.
   */
  issue_id?: string;

  /**
   * The value of the field before the change. Null if the field was not previously
   * set.
   */
  previous_value?: string | null;

  /**
   * Optional rationale provided for the change.
   */
  rationale?: string | null;

  /**
   * The zone ID associated with the insight. Only present for zone-level insights.
   */
  zone_id?: number;
}

export interface AuditLogListByInsightResponse {
  /**
   * UUIDv7 identifier for the audit log entry, time-ordered.
   */
  id?: string;

  /**
   * The timestamp when the change occurred.
   */
  changed_at?: string;

  /**
   * The actor that made the change. 'system' for automated changes, or a user
   * identifier.
   */
  changed_by?: string;

  /**
   * The value of the field after the change. Null if the field was cleared.
   */
  current_value?: string | null;

  /**
   * The field that was changed.
   */
  field_changed?: 'status' | 'user_classification';

  /**
   * The ID of the insight this audit log entry relates to.
   */
  issue_id?: string;

  /**
   * The value of the field before the change. Null if the field was not previously
   * set.
   */
  previous_value?: string | null;

  /**
   * Optional rationale provided for the change.
   */
  rationale?: string | null;

  /**
   * The zone ID associated with the insight. Only present for zone-level insights.
   */
  zone_id?: number;
}

export interface AuditLogListParams extends CursorPaginationParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Query param: Filter entries changed before this timestamp (RFC 3339).
   */
  before?: string;

  /**
   * Query param: Filter by the actor that made the change.
   */
  changed_by?: string;

  /**
   * Query param: Filter by the field that was changed.
   */
  field_changed?: 'status' | 'user_classification';

  /**
   * Query param: Sort order for results. Use 'asc' for oldest first or 'desc' for
   * newest first.
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: Filter entries changed at or after this timestamp (RFC 3339).
   */
  since?: string;
}

export interface AuditLogListByInsightParams extends CursorPaginationParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Query param: Filter entries changed before this timestamp (RFC 3339).
   */
  before?: string;

  /**
   * Query param: Filter by the actor that made the change.
   */
  changed_by?: string;

  /**
   * Query param: Filter by the field that was changed.
   */
  field_changed?: 'status' | 'user_classification';

  /**
   * Query param: Sort order for results. Use 'asc' for oldest first or 'desc' for
   * newest first.
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: Filter entries changed at or after this timestamp (RFC 3339).
   */
  since?: string;
}

AuditLogs.AuditLogListResponsesCursorPagination = AuditLogListResponsesCursorPagination;
AuditLogs.AuditLogListByInsightResponsesCursorPagination = AuditLogListByInsightResponsesCursorPagination;

export declare namespace AuditLogs {
  export {
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListByInsightResponse as AuditLogListByInsightResponse,
    AuditLogListResponsesCursorPagination as AuditLogListResponsesCursorPagination,
    AuditLogListByInsightResponsesCursorPagination as AuditLogListByInsightResponsesCursorPagination,
    type AuditLogListParams as AuditLogListParams,
    type AuditLogListByInsightParams as AuditLogListByInsightParams,
  };
}
