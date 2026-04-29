// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthoritiesAPI from './authorities';
import { Authorities, BaseAuthorities } from './authorities';
import * as LogsAPI from './logs';
import { BaseLogs, Logs } from './logs';

export class BaseCT extends APIResource {
  static override readonly _key: readonly ['radar', 'ct'] = Object.freeze(['radar', 'ct'] as const);
}
export class CT extends BaseCT {
  authorities: AuthoritiesAPI.Authorities = new AuthoritiesAPI.Authorities(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

CT.Authorities = Authorities;
CT.BaseAuthorities = BaseAuthorities;
CT.Logs = Logs;
CT.BaseLogs = BaseLogs;

export declare namespace CT {
  export { Authorities as Authorities, BaseAuthorities as BaseAuthorities };

  export { Logs as Logs, BaseLogs as BaseLogs };
}
