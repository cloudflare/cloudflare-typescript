// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseReports extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'phishguard', 'reports'] = Object.freeze([
    'emailSecurity',
    'phishguard',
    'reports',
  ] as const);
}
export class Reports extends BaseReports {}
