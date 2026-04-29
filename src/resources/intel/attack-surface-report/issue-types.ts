// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIssueTypes extends APIResource {
  static override readonly _key: readonly ['intel', 'attackSurfaceReport', 'issueTypes'] = Object.freeze([
    'intel',
    'attackSurfaceReport',
    'issueTypes',
  ] as const);
}
export class IssueTypes extends BaseIssueTypes {}
