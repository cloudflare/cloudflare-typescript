// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OutputsAPI from './outputs';
import { Outputs } from './outputs';

export class LiveInputs extends APIResource {
  outputs: OutputsAPI.Outputs = new OutputsAPI.Outputs(this._client);
}

LiveInputs.Outputs = Outputs;

export declare namespace LiveInputs {
  export { Outputs as Outputs };
}
