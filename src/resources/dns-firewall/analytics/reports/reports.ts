// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BytimesAPI from './bytimes';
import { BaseBytimes, Bytimes } from './bytimes';

export class BaseReports extends APIResource {
  static override readonly _key: readonly ['dnsFirewall', 'analytics', 'reports'] = Object.freeze([
    'dnsFirewall',
    'analytics',
    'reports',
  ] as const);
}
export class Reports extends BaseReports {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
}

Reports.Bytimes = Bytimes;
Reports.BaseBytimes = BaseBytimes;

export declare namespace Reports {
  export { Bytimes as Bytimes, BaseBytimes as BaseBytimes };
}
