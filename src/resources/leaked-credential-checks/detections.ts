// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDetections extends APIResource {
  static override readonly _key: readonly ['leakedCredentialChecks', 'detections'] = Object.freeze([
    'leakedCredentialChecks',
    'detections',
  ] as const);
}
export class Detections extends BaseDetections {}
