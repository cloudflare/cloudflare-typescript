// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IssueTypesAPI from './issue-types';
import {
  BaseIssueTypes,
  IssueTypeGetParams,
  IssueTypeGetResponse,
  IssueTypeGetResponsesSinglePage,
  IssueTypes,
} from './issue-types';
import * as IssuesAPI from './issues';
import {
  BaseIssues,
  IssueClassParams,
  IssueClassResponse,
  IssueDismissParams,
  IssueDismissResponse,
  IssueListParams,
  IssueListResponse,
  IssueListResponsesV4PagePagination,
  IssueSeverityParams,
  IssueSeverityResponse,
  IssueType,
  IssueTypeParams,
  IssueTypeResponse,
  Issues,
  SeverityQueryParam,
} from './issues';

export class BaseAttackSurfaceReport extends APIResource {
  static override readonly _key: readonly ['intel', 'attackSurfaceReport'] = Object.freeze([
    'intel',
    'attackSurfaceReport',
  ] as const);
}
export class AttackSurfaceReport extends BaseAttackSurfaceReport {
  issueTypes: IssueTypesAPI.IssueTypes = new IssueTypesAPI.IssueTypes(this._client);
  issues: IssuesAPI.Issues = new IssuesAPI.Issues(this._client);
}

AttackSurfaceReport.IssueTypes = IssueTypes;
AttackSurfaceReport.BaseIssueTypes = BaseIssueTypes;
AttackSurfaceReport.Issues = Issues;
AttackSurfaceReport.BaseIssues = BaseIssues;

export declare namespace AttackSurfaceReport {
  export {
    IssueTypes as IssueTypes,
    BaseIssueTypes as BaseIssueTypes,
    type IssueTypeGetResponse as IssueTypeGetResponse,
    type IssueTypeGetResponsesSinglePage as IssueTypeGetResponsesSinglePage,
    type IssueTypeGetParams as IssueTypeGetParams,
  };

  export {
    Issues as Issues,
    BaseIssues as BaseIssues,
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
