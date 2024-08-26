// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { IssueTypes } from './issue-types';
import { Issues } from './issues';
import * as IssueTypesAPI from './issue-types';
import * as IssuesAPI from './issues';

export class AttackSurfaceReport extends APIResource {
  issueTypes: IssueTypesAPI.IssueTypes = new IssueTypesAPI.IssueTypes(this._client);
  issues: IssuesAPI.Issues = new IssuesAPI.Issues(this._client);
}

export namespace AttackSurfaceReport {
  export import IssueTypes = IssueTypesAPI.IssueTypes;
  export import IssueTypeGetResponse = IssueTypesAPI.IssueTypeGetResponse;
  export import IssueTypeGetParams = IssueTypesAPI.IssueTypeGetParams;
  export import Issues = IssuesAPI.Issues;
  export import IssueType = IssuesAPI.IssueType;
  export import SeverityQueryParam = IssuesAPI.SeverityQueryParam;
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
