// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SetupFlowsAPI from './setup-flows';
import { SetupFlows } from './setup-flows';

export class Applications extends APIResource {
  setupFlows: SetupFlowsAPI.SetupFlows = new SetupFlowsAPI.SetupFlows(this._client);
}

Applications.SetupFlows = SetupFlows;

export declare namespace Applications {
  export { SetupFlows as SetupFlows };
}
