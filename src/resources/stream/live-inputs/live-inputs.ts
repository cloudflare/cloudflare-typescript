// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OutputsAPI from './outputs';
import { BaseOutputs, Outputs } from './outputs';

export class BaseLiveInputs extends APIResource {
  static override readonly _key: readonly ['stream', 'liveInputs'] = Object.freeze([
    'stream',
    'liveInputs',
  ] as const);
}
export class LiveInputs extends BaseLiveInputs {
  outputs: OutputsAPI.Outputs = new OutputsAPI.Outputs(this._client);
}

LiveInputs.Outputs = Outputs;
LiveInputs.BaseOutputs = BaseOutputs;

export declare namespace LiveInputs {
  export { Outputs as Outputs, BaseOutputs as BaseOutputs };
}
