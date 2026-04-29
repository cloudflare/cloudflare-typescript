// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCertificates extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'certificates'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'certificates',
  ] as const);
}
export class Certificates extends BaseCertificates {}
