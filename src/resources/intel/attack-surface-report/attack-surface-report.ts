// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IssueTypesAPI from './issue-types';
import { IssueTypes } from './issue-types';
import * as IssuesAPI from './issues';
import { Issues } from './issues';

export class AttackSurfaceReport extends APIResource {
  issueTypes: IssueTypesAPI.IssueTypes = new IssueTypesAPI.IssueTypes(this._client);
  issues: IssuesAPI.Issues = new IssuesAPI.Issues(this._client);
}

AttackSurfaceReport.IssueTypes = IssueTypes;
AttackSurfaceReport.Issues = Issues;

export declare namespace AttackSurfaceReport {
  export { IssueTypes as IssueTypes };

  export { Issues as Issues };
}
