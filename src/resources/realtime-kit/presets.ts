// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePresets extends APIResource {
  static override readonly _key: readonly ['realtimeKit', 'presets'] = Object.freeze([
    'realtimeKit',
    'presets',
  ] as const);
}
export class Presets extends BasePresets {}
