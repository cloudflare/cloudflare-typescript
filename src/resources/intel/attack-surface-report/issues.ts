// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IssuesAPI from './issues';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Issues extends APIResource {
  /**
   * Get Security Center Issues
   */
  list(
    params: IssueListParams,
    options?: RequestOptions,
  ): PagePromise<IssueListResponsesV4PagePagination, IssueListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/intel/attack-surface-report/issues`,
      V4PagePagination<IssueListResponse>,
      { query, ...options },
    );
  }

  /**
   * Get Security Center Issue Counts by Class
   */
  class(params: IssueClassParams, options?: RequestOptions): APIPromise<IssueClassResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/intel/attack-surface-report/issues/class`, {
        query,
        ...options,
      }) as APIPromise<{ result: IssueClassResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Archive Security Center Insight
   */
  dismiss(
    issueID: string,
    params: IssueDismissParams,
    options?: RequestOptions,
  ): APIPromise<IssueDismissResponse> {
    const { account_id, ...body } = params;
    return this._client.put(path`/accounts/${account_id}/intel/attack-surface-report/${issueID}/dismiss`, {
      body,
      ...options,
    });
  }

  /**
   * Get Security Center Issue Counts by Severity
   */
  severity(params: IssueSeverityParams, options?: RequestOptions): APIPromise<IssueSeverityResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/intel/attack-surface-report/issues/severity`, {
        query,
        ...options,
      }) as APIPromise<{ result: IssueSeverityResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Security Center Issue Counts by Type
   */
  type(params: IssueTypeParams, options?: RequestOptions): APIPromise<IssueTypeResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/intel/attack-surface-report/issues/type`, {
        query,
        ...options,
      }) as APIPromise<{ result: IssueTypeResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IssueListResponsesV4PagePagination = V4PagePagination<IssueListResponse>;

export type IssueType =
  | 'compliance_violation'
  | 'email_security'
  | 'exposed_infrastructure'
  | 'insecure_configuration'
  | 'weak_authentication';

export type IssueTypeParam =
  | 'compliance_violation'
  | 'email_security'
  | 'exposed_infrastructure'
  | 'insecure_configuration'
  | 'weak_authentication';

export type SeverityQueryParam = 'low' | 'moderate' | 'critical';

export type SeverityQueryParamParam = 'low' | 'moderate' | 'critical';

export interface IssueListResponse {
  /**
   * Total number of results
   */
  count?: number;

  issues?: Array<IssueListResponse.Issue>;

  /**
   * Current page within paginated list of results
   */
  page?: number;

  /**
   * Number of results per page of results
   */
  per_page?: number;
}

export namespace IssueListResponse {
  export interface Issue {
    id?: string;

    dismissed?: boolean;

    issue_class?: string;

    issue_type?: IssuesAPI.IssueType;

    payload?: unknown;

    resolve_link?: string;

    resolve_text?: string;

    severity?: 'Low' | 'Moderate' | 'Critical';

    since?: string;

    subject?: string;

    timestamp?: string;
  }
}

export type IssueClassResponse = Array<IssueClassResponse.IssueClassResponseItem>;

export namespace IssueClassResponse {
  export interface IssueClassResponseItem {
    count?: number;

    value?: string;
  }
}

export interface IssueDismissResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export type IssueSeverityResponse = Array<IssueSeverityResponse.IssueSeverityResponseItem>;

export namespace IssueSeverityResponse {
  export interface IssueSeverityResponseItem {
    count?: number;

    value?: string;
  }
}

export type IssueTypeResponse = Array<IssueTypeResponse.IssueTypeResponseItem>;

export namespace IssueTypeResponse {
  export interface IssueTypeResponseItem {
    count?: number;

    value?: string;
  }
}

export interface IssueListParams extends V4PagePaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  dismissed?: boolean;

  /**
   * Query param:
   */
  issue_class?: Array<string>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<string>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  product?: Array<string>;

  /**
   * Query param:
   */
  'product~neq'?: Array<string>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  subject?: Array<string>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<string>;
}

export interface IssueClassParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  dismissed?: boolean;

  /**
   * Query param:
   */
  issue_class?: Array<string>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<string>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  product?: Array<string>;

  /**
   * Query param:
   */
  'product~neq'?: Array<string>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  subject?: Array<string>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<string>;
}

export interface IssueDismissParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  dismiss?: boolean;
}

export interface IssueSeverityParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  dismissed?: boolean;

  /**
   * Query param:
   */
  issue_class?: Array<string>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<string>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  product?: Array<string>;

  /**
   * Query param:
   */
  'product~neq'?: Array<string>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  subject?: Array<string>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<string>;
}

export interface IssueTypeParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  dismissed?: boolean;

  /**
   * Query param:
   */
  issue_class?: Array<string>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<string>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueTypeParam>;

  /**
   * Query param:
   */
  product?: Array<string>;

  /**
   * Query param:
   */
  'product~neq'?: Array<string>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParamParam>;

  /**
   * Query param:
   */
  subject?: Array<string>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<string>;
}

export declare namespace Issues {
  export {
    type IssueType as IssueType,
    type SeverityQueryParam as SeverityQueryParam,
    type IssueListResponse as IssueListResponse,
    type IssueClassResponse as IssueClassResponse,
    type IssueDismissResponse as IssueDismissResponse,
    type IssueSeverityResponse as IssueSeverityResponse,
    type IssueTypeResponse as IssueTypeResponse,
    type IssueListResponsesV4PagePagination as IssueListResponsesV4PagePagination,
    type IssueListParams as IssueListParams,
    type IssueClassParams as IssueClassParams,
    type IssueDismissParams as IssueDismissParams,
    type IssueSeverityParams as IssueSeverityParams,
    type IssueTypeParams as IssueTypeParams,
  };
}
