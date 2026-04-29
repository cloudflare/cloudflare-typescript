// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDNSSEC extends APIResource {
  static override readonly _key: readonly ['dns', 'dnssec'] = Object.freeze(['dns', 'dnssec'] as const);
}
export class DNSSEC extends BaseDNSSEC {}
