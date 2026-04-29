// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ConnectivityPrecheckAPI from './connectivity-precheck';
import { ConnectivityPrecheck } from './connectivity-precheck';
import * as JobsAPI from './jobs/jobs';
import { Jobs } from './jobs/jobs';

export class SuperSlurper extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  connectivityPrecheck: ConnectivityPrecheckAPI.ConnectivityPrecheck =
    new ConnectivityPrecheckAPI.ConnectivityPrecheck(this._client);
}

SuperSlurper.Jobs = Jobs;
SuperSlurper.ConnectivityPrecheck = ConnectivityPrecheck;

export declare namespace SuperSlurper {
  export { Jobs as Jobs };

  export { ConnectivityPrecheck as ConnectivityPrecheck };
}
