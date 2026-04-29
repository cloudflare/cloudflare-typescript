// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOutputs extends APIResource {
  static override readonly _key: readonly ['stream', 'liveInputs', 'outputs'] = Object.freeze([
    'stream',
    'liveInputs',
    'outputs',
  ] as const);
}
export class Outputs extends BaseOutputs {}
