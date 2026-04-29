// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseVerification extends APIResource {
  static override readonly _key: readonly ['ssl', 'verification'] = Object.freeze([
    'ssl',
    'verification',
  ] as const);
}
export class Verification extends BaseVerification {}
