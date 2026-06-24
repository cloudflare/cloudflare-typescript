// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SetupFlowsAPI from './setup-flows';
import { BaseSetupFlows, SetupFlows } from './setup-flows';

export class BaseApplications extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'applications'] = Object.freeze([
    'zeroTrust',
    'casb',
    'applications',
  ] as const);
}
export class Applications extends BaseApplications {
  setupFlows: SetupFlowsAPI.SetupFlows = new SetupFlowsAPI.SetupFlows(this._client);
}

Applications.SetupFlows = SetupFlows;
Applications.BaseSetupFlows = BaseSetupFlows;

export declare namespace Applications {
  export { SetupFlows as SetupFlows, BaseSetupFlows as BaseSetupFlows };
}
