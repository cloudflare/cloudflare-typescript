// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IssueTypesAPI from './issue-types';
import {
  IssueTypeGetParams,
  IssueTypeGetResponse,
  IssueTypeGetResponsesSinglePage,
  IssueTypes,
} from './issue-types';
import * as IssuesAPI from './issues';
import {
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

export class AttackSurfaceReport extends APIResource {
  issueTypes: IssueTypesAPI.IssueTypes = new IssueTypesAPI.IssueTypes(this._client);
  issues: IssuesAPI.Issues = new IssuesAPI.Issues(this._client);
}

AttackSurfaceReport.IssueTypes = IssueTypes;
AttackSurfaceReport.Issues = Issues;

export declare namespace AttackSurfaceReport {
  export {
    IssueTypes as IssueTypes,
    type IssueTypeGetResponse as IssueTypeGetResponse,
    type IssueTypeGetResponsesSinglePage as IssueTypeGetResponsesSinglePage,
    type IssueTypeGetParams as IssueTypeGetParams,
  };

  export {
    Issues as Issues,
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
