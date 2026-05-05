// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IssuesAPI from '../../intel/attack-surface-report/issues';
import * as AuditLogsAPI from './audit-logs';
import {
  AuditLogListByInsightParams,
  AuditLogListByInsightResponse,
  AuditLogListByInsightResponsesCursorPagination,
  AuditLogListParams,
  AuditLogListResponse,
  AuditLogListResponsesCursorPagination,
  AuditLogs,
  BaseAuditLogs,
} from './audit-logs';
import * as ClassAPI from './class';
import { BaseClass, Class, ClassGetParams, ClassGetResponse } from './class';
import * as ClassificationAPI from './classification';
import {
  BaseClassification,
  Classification,
  ClassificationUpdateParams,
  ClassificationUpdateResponse,
} from './classification';
import * as ContextAPI from './context';
import { BaseContext, Context, ContextGetParams, ContextGetResponse } from './context';
import * as SeverityAPI from './severity';
import { BaseSeverity, Severity, SeverityGetParams, SeverityGetResponse } from './severity';
import * as TypeAPI from './type';
import { BaseType, Type, TypeGetParams, TypeGetResponse } from './type';
import { APIPromise } from '../../../core/api-promise';
import { CloudflareError } from '../../../core/error';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseInsights extends APIResource {
  static override readonly _key: readonly ['securityCenter', 'insights'] = Object.freeze([
    'securityCenter',
    'insights',
  ] as const);

  /**
   * Lists all Security Center insights for the account or zone, showing security
   * findings and recommendations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const insightListResponse of client.securityCenter.insights.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: InsightListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InsightListResponsesV4PagePagination, InsightListResponse> {
    const { account_id, zone_id, ...query } = params ?? {};
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
      path`/${accountOrZone}/${accountOrZoneId}/security-center/insights`,
      V4PagePagination<InsightListResponse>,
      { query, ...options },
    );
  }

  /**
   * Archives a Security Center insight for an account or zone, removing it from the
   * active insights list while preserving historical data.
   *
   * @example
   * ```ts
   * const response =
   *   await client.securityCenter.insights.dismiss('issue_id', {
   *     account_id: 'account_id',
   *   });
   * ```
   */
  dismiss(
    issueID: string,
    params: InsightDismissParams,
    options?: RequestOptions,
  ): APIPromise<InsightDismissResponse> {
    const { account_id, zone_id, ...body } = params;
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
    return this._client.put(
      path`/${accountOrZone}/${accountOrZoneId}/security-center/insights/${issueID}/dismiss`,
      { body, ...options },
    );
  }
}
export class Insights extends BaseInsights {
  class: ClassAPI.Class = new ClassAPI.Class(this._client);
  severity: SeverityAPI.Severity = new SeverityAPI.Severity(this._client);
  type: TypeAPI.Type = new TypeAPI.Type(this._client);
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  classification: ClassificationAPI.Classification = new ClassificationAPI.Classification(this._client);
  context: ContextAPI.Context = new ContextAPI.Context(this._client);
}

export type InsightListResponsesV4PagePagination = V4PagePagination<InsightListResponse>;

export interface InsightListResponse {
  /**
   * Indicates the total number of results.
   */
  count?: number;

  issues?: Array<InsightListResponse.Issue>;

  /**
   * Specifies the current page within paginated list of results.
   */
  page?: number;

  /**
   * Sets the number of results per page of results.
   */
  per_page?: number;
}

export namespace InsightListResponse {
  export interface Issue {
    id?: string;

    dismissed?: boolean;

    /**
     * Indicates whether the insight has a large payload that requires fetching via the
     * context endpoint.
     */
    has_extended_context?: boolean;

    issue_class?: string;

    issue_type?: IssuesAPI.IssueType;

    payload?: Issue.Payload;

    resolve_link?: string;

    resolve_text?: string;

    severity?: 'Low' | 'Moderate' | 'Critical';

    since?: string;

    /**
     * The current status of the insight.
     */
    status?: 'active' | 'resolved';

    subject?: string;

    timestamp?: string;

    /**
     * User-defined classification for the insight. Can be 'false_positive',
     * 'accept_risk', 'other', or null.
     */
    user_classification?: 'false_positive' | 'accept_risk' | 'other' | null;
  }

  export namespace Issue {
    export interface Payload {
      /**
       * Describes the method used to detect insight.
       */
      detection_method?: string;

      zone_tag?: string;
    }
  }
}

export interface InsightDismissResponse {
  errors: Array<InsightDismissResponse.Error>;

  messages: Array<InsightDismissResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace InsightDismissResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface InsightListParams extends V4PagePaginationParams {
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
   * Query param
   */
  dismissed?: boolean;

  /**
   * Query param
   */
  issue_class?: Array<string>;

  /**
   * Query param
   */
  'issue_class~neq'?: Array<string>;

  /**
   * Query param
   */
  issue_type?: Array<IssuesAPI.IssueTypeParam>;

  /**
   * Query param
   */
  'issue_type~neq'?: Array<IssuesAPI.IssueTypeParam>;

  /**
   * Query param
   */
  product?: Array<string>;

  /**
   * Query param
   */
  'product~neq'?: Array<string>;

  /**
   * Query param
   */
  severity?: Array<IssuesAPI.SeverityQueryParamParam>;

  /**
   * Query param
   */
  'severity~neq'?: Array<IssuesAPI.SeverityQueryParamParam>;

  /**
   * Query param
   */
  subject?: Array<string>;

  /**
   * Query param
   */
  'subject~neq'?: Array<string>;
}

export interface InsightDismissParams {
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
   * Body param
   */
  dismiss?: boolean;
}

Insights.Class = Class;
Insights.BaseClass = BaseClass;
Insights.Severity = Severity;
Insights.BaseSeverity = BaseSeverity;
Insights.Type = Type;
Insights.BaseType = BaseType;
Insights.AuditLogs = AuditLogs;
Insights.BaseAuditLogs = BaseAuditLogs;
Insights.Classification = Classification;
Insights.BaseClassification = BaseClassification;
Insights.Context = Context;
Insights.BaseContext = BaseContext;

export declare namespace Insights {
  export {
    type InsightListResponse as InsightListResponse,
    type InsightDismissResponse as InsightDismissResponse,
    type InsightListResponsesV4PagePagination as InsightListResponsesV4PagePagination,
    type InsightListParams as InsightListParams,
    type InsightDismissParams as InsightDismissParams,
  };

  export {
    Class as Class,
    BaseClass as BaseClass,
    type ClassGetResponse as ClassGetResponse,
    type ClassGetParams as ClassGetParams,
  };

  export {
    Severity as Severity,
    BaseSeverity as BaseSeverity,
    type SeverityGetResponse as SeverityGetResponse,
    type SeverityGetParams as SeverityGetParams,
  };

  export {
    Type as Type,
    BaseType as BaseType,
    type TypeGetResponse as TypeGetResponse,
    type TypeGetParams as TypeGetParams,
  };

  export {
    AuditLogs as AuditLogs,
    BaseAuditLogs as BaseAuditLogs,
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListByInsightResponse as AuditLogListByInsightResponse,
    type AuditLogListResponsesCursorPagination as AuditLogListResponsesCursorPagination,
    type AuditLogListByInsightResponsesCursorPagination as AuditLogListByInsightResponsesCursorPagination,
    type AuditLogListParams as AuditLogListParams,
    type AuditLogListByInsightParams as AuditLogListByInsightParams,
  };

  export {
    Classification as Classification,
    BaseClassification as BaseClassification,
    type ClassificationUpdateResponse as ClassificationUpdateResponse,
    type ClassificationUpdateParams as ClassificationUpdateParams,
  };

  export {
    Context as Context,
    BaseContext as BaseContext,
    type ContextGetResponse as ContextGetResponse,
    type ContextGetParams as ContextGetParams,
  };
}
