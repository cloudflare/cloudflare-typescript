// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IssueTypesAPI from './issue-types';
import * as IssuesAPI from './issues';

export class AttackSurfaceReport extends APIResource {
  issueTypes: IssueTypesAPI.IssueTypes = new IssueTypesAPI.IssueTypes(this._client);
  issues: IssuesAPI.Issues = new IssuesAPI.Issues(this._client);
}

export namespace AttackSurfaceReport {
  export import IssueTypes = IssueTypesAPI.IssueTypes;
  export type IssueTypeGetResponse = IssueTypesAPI.IssueTypeGetResponse;
  export type IssueTypeGetParams = IssueTypesAPI.IssueTypeGetParams;
  export import Issues = IssuesAPI.Issues;
  export type IssueType = IssuesAPI.IssueType;
  export type SeverityQueryParam = IssuesAPI.SeverityQueryParam;
  export type IssueListResponse = IssuesAPI.IssueListResponse;
  export type IssueClassResponse = IssuesAPI.IssueClassResponse;
  export type IssueDismissResponse = IssuesAPI.IssueDismissResponse;
  export type IssueSeverityResponse = IssuesAPI.IssueSeverityResponse;
  export type IssueTypeResponse = IssuesAPI.IssueTypeResponse;
  export import IssueListResponsesV4PagePagination = IssuesAPI.IssueListResponsesV4PagePagination;
  export type IssueListParams = IssuesAPI.IssueListParams;
  export type IssueClassParams = IssuesAPI.IssueClassParams;
  export type IssueDismissParams = IssuesAPI.IssueDismissParams;
  export type IssueSeverityParams = IssuesAPI.IssueSeverityParams;
  export type IssueTypeParams = IssuesAPI.IssueTypeParams;
}
