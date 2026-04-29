// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ReportsAPI from './reports';
import { Reports } from './reports';

export class Phishguard extends APIResource {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

Phishguard.Reports = Reports;

export declare namespace Phishguard {
  export { Reports as Reports };
}
