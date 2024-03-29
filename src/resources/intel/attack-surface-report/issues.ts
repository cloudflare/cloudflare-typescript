// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IssuesAPI from 'cloudflare/resources/intel/attack-surface-report/issues';
import { V4PagePagination, type V4PagePaginationParams } from 'cloudflare/pagination';

export class Issues extends APIResource {
  /**
   * Get Security Center Issues
   */
  list(
    params: IssueListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IssueListResponsesV4PagePagination, IssueListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/intel/attack-surface-report/issues`,
      IssueListResponsesV4PagePagination,
      { query, ...options },
    );
  }

  /**
   * Get Security Center Issue Counts by Class
   */
  class(params: IssueClassParams, options?: Core.RequestOptions): Core.APIPromise<IssueClassResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/attack-surface-report/issues/class`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: IssueClassResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Archive Security Center Insight
   */
  dismiss(
    issueId: string,
    params: IssueDismissParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IssueDismissResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/intel/attack-surface-report/${issueId}/dismiss`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IssueDismissResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Security Center Issue Counts by Severity
   */
  severity(
    params: IssueSeverityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IssueSeverityResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/attack-surface-report/issues/severity`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: IssueSeverityResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Security Center Issue Counts by Type
   */
  type(params: IssueTypeParams, options?: Core.RequestOptions): Core.APIPromise<IssueTypeResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/attack-surface-report/issues/type`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: IssueTypeResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class IssueListResponsesV4PagePagination extends V4PagePagination<IssueListResponse> {}

export interface IssueListResponse {
  errors: Array<IssueListResponse.Error>;

  messages: Array<IssueListResponse.Message>;

  result: IssueListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace IssueListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * Total number of results
     */
    count?: number;

    issues?: Array<Result.Issue>;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;
  }

  export namespace Result {
    export interface Issue {
      id?: string;

      dismissed?: boolean;

      issue_class?: string;

      issue_type?:
        | 'compliance_violation'
        | 'email_security'
        | 'exposed_infrastructure'
        | 'insecure_configuration'
        | 'weak_authentication';

      payload?: unknown;

      resolve_link?: string;

      resolve_text?: string;

      severity?: 'Low' | 'Moderate' | 'Critical';

      since?: string;

      subject?: string;

      timestamp?: string;
    }
  }
}

export type IssueClassResponse = Array<IssueClassResponse.IssueClassResponseItem>;

export namespace IssueClassResponse {
  export interface IssueClassResponseItem {
    count?: number;

    value?: string;
  }
}

export type IssueDismissResponse = unknown | string;

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
  issue_type?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

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
  severity?: Array<'low' | 'moderate' | 'critical'>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<'low' | 'moderate' | 'critical'>;

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
  issue_type?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

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
  severity?: Array<'low' | 'moderate' | 'critical'>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<'low' | 'moderate' | 'critical'>;

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
  issue_type?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

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
  severity?: Array<'low' | 'moderate' | 'critical'>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<'low' | 'moderate' | 'critical'>;

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
  issue_type?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<
    | 'compliance_violation'
    | 'email_security'
    | 'exposed_infrastructure'
    | 'insecure_configuration'
    | 'weak_authentication'
  >;

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
  severity?: Array<'low' | 'moderate' | 'critical'>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<'low' | 'moderate' | 'critical'>;

  /**
   * Query param:
   */
  subject?: Array<string>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<string>;
}

export namespace Issues {
  export import IssueListResponse = IssuesAPI.IssueListResponse;
  export import IssueClassResponse = IssuesAPI.IssueClassResponse;
  export import IssueDismissResponse = IssuesAPI.IssueDismissResponse;
  export import IssueSeverityResponse = IssuesAPI.IssueSeverityResponse;
  export import IssueTypeResponse = IssuesAPI.IssueTypeResponse;
  export import IssueListResponsesV4PagePagination = IssuesAPI.IssueListResponsesV4PagePagination;
  export import IssueListParams = IssuesAPI.IssueListParams;
  export import IssueClassParams = IssuesAPI.IssueClassParams;
  export import IssueDismissParams = IssuesAPI.IssueDismissParams;
  export import IssueSeverityParams = IssuesAPI.IssueSeverityParams;
  export import IssueTypeParams = IssuesAPI.IssueTypeParams;
}
