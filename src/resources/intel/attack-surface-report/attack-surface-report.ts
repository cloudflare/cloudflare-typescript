// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IssueTypesAPI from './issue-types';
import { BaseIssueTypes, IssueTypes } from './issue-types';
import * as IssuesAPI from './issues';
import { BaseIssues, Issues } from './issues';

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
  export { IssueTypes as IssueTypes, BaseIssueTypes as BaseIssueTypes };

  export { Issues as Issues, BaseIssues as BaseIssues };
}
