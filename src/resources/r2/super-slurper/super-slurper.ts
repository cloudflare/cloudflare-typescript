// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectivityPrecheckAPI from './connectivity-precheck';
import { BaseConnectivityPrecheck, ConnectivityPrecheck } from './connectivity-precheck';
import * as JobsAPI from './jobs/jobs';
import { BaseJobs, Jobs } from './jobs/jobs';

export class BaseSuperSlurper extends APIResource {
  static override readonly _key: readonly ['r2', 'superSlurper'] = Object.freeze([
    'r2',
    'superSlurper',
  ] as const);
}
export class SuperSlurper extends BaseSuperSlurper {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  connectivityPrecheck: ConnectivityPrecheckAPI.ConnectivityPrecheck =
    new ConnectivityPrecheckAPI.ConnectivityPrecheck(this._client);
}

SuperSlurper.Jobs = Jobs;
SuperSlurper.BaseJobs = BaseJobs;
SuperSlurper.ConnectivityPrecheck = ConnectivityPrecheck;
SuperSlurper.BaseConnectivityPrecheck = BaseConnectivityPrecheck;

export declare namespace SuperSlurper {
  export { Jobs as Jobs, BaseJobs as BaseJobs };

  export {
    ConnectivityPrecheck as ConnectivityPrecheck,
    BaseConnectivityPrecheck as BaseConnectivityPrecheck,
  };
}
