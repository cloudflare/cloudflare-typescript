// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDetections extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'detections'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'detections',
  ] as const);
}
export class Detections extends BaseDetections {}
