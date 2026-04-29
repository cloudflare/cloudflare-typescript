// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReportsAPI from './reports';
import { BaseReports, Reports } from './reports';

export class BasePhishguard extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'phishguard'] = Object.freeze([
    'emailSecurity',
    'phishguard',
  ] as const);
}
export class Phishguard extends BasePhishguard {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

Phishguard.Reports = Reports;
Phishguard.BaseReports = BaseReports;

export declare namespace Phishguard {
  export { Reports as Reports, BaseReports as BaseReports };
}
