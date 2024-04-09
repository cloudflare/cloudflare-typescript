// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as IssueTypesAPI from 'cloudflare/resources/intel/attack-surface-report/issue-types';
import * as IssuesAPI from 'cloudflare/resources/intel/attack-surface-report/issues';

export class AttackSurfaceReport extends APIResource {
  issueTypes: IssueTypesAPI.IssueTypes = new IssueTypesAPI.IssueTypes(this._client);
  issues: IssuesAPI.Issues = new IssuesAPI.Issues(this._client);
}

export namespace AttackSurfaceReport {
  export import IssueTypes = IssueTypesAPI.IssueTypes;
  export import IssueTypeGetResponse = IssueTypesAPI.IssueTypeGetResponse;
  export import IssueTypeGetParams = IssueTypesAPI.IssueTypeGetParams;
  export import Issues = IssuesAPI.Issues;
  export import IssueClass = IssuesAPI.IssueClass;
  export import IssueType = IssuesAPI.IssueType;
  export import Product = IssuesAPI.Product;
  export import SeverityQueryParam = IssuesAPI.SeverityQueryParam;
  export import Subject = IssuesAPI.Subject;
  export import IssueListResponse = IssuesAPI.IssueListResponse;
  export import IssueClassResponse = IssuesAPI.IssueClassResponse;
  export import IssueSeverityResponse = IssuesAPI.IssueSeverityResponse;
  export import IssueTypeResponse = IssuesAPI.IssueTypeResponse;
  export import IssueListResponsesV4PagePagination = IssuesAPI.IssueListResponsesV4PagePagination;
  export import IssueListParams = IssuesAPI.IssueListParams;
  export import IssueClassParams = IssuesAPI.IssueClassParams;
  export import IssueDismissParams = IssuesAPI.IssueDismissParams;
  export import IssueSeverityParams = IssuesAPI.IssueSeverityParams;
  export import IssueTypeParams = IssuesAPI.IssueTypeParams;
}
