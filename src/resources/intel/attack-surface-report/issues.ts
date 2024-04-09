// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IssuesAPI from 'cloudflare/resources/intel/attack-surface-report/issues';
import * as Shared from 'cloudflare/resources/shared';
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

export type IssueClass = string;

export type IssueType =
  | 'compliance_violation'
  | 'email_security'
  | 'exposed_infrastructure'
  | 'insecure_configuration'
  | 'weak_authentication';

export type Product = string;

export type SeverityQueryParam = 'low' | 'moderate' | 'critical';

export type Subject = string;

export interface IssueListResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  result: IssueListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace IssueListResponse {
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
  issue_class?: Array<IssueClass>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<IssueClass>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueType>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueType>;

  /**
   * Query param:
   */
  product?: Array<Product>;

  /**
   * Query param:
   */
  'product~neq'?: Array<Product>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  subject?: Array<Subject>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<Subject>;
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
  issue_class?: Array<IssueClass>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<IssueClass>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueType>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueType>;

  /**
   * Query param:
   */
  product?: Array<Product>;

  /**
   * Query param:
   */
  'product~neq'?: Array<Product>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  subject?: Array<Subject>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<Subject>;
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
  issue_class?: Array<IssueClass>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<IssueClass>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueType>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueType>;

  /**
   * Query param:
   */
  product?: Array<Product>;

  /**
   * Query param:
   */
  'product~neq'?: Array<Product>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  subject?: Array<Subject>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<Subject>;
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
  issue_class?: Array<IssueClass>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<IssueClass>;

  /**
   * Query param:
   */
  issue_type?: Array<IssueType>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssueType>;

  /**
   * Query param:
   */
  product?: Array<Product>;

  /**
   * Query param:
   */
  'product~neq'?: Array<Product>;

  /**
   * Query param:
   */
  severity?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<SeverityQueryParam>;

  /**
   * Query param:
   */
  subject?: Array<Subject>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<Subject>;
}

export namespace Issues {
  export import IssueClass = IssuesAPI.IssueClass;
  export import IssueType = IssuesAPI.IssueType;
  export import Product = IssuesAPI.Product;
  export import SeverityQueryParam = IssuesAPI.SeverityQueryParam;
  export import Subject = IssuesAPI.Subject;
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
