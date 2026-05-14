// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSAMLCertificates extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'samlCertificates'] = Object.freeze([
    'zeroTrust',
    'access',
    'samlCertificates',
  ] as const);
}
export class SAMLCertificates extends BaseSAMLCertificates {}
