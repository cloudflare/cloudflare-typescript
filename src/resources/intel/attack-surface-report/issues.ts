// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIssues extends APIResource {
  static override readonly _key: readonly ['intel', 'attackSurfaceReport', 'issues'] = Object.freeze([
    'intel',
    'attackSurfaceReport',
    'issues',
  ] as const);
}
export class Issues extends BaseIssues {}
