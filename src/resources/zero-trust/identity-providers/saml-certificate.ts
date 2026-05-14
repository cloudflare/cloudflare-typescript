// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSAMLCertificate extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'identityProviders', 'samlCertificate'] =
    Object.freeze(['zeroTrust', 'identityProviders', 'samlCertificate'] as const);
}
export class SAMLCertificate extends BaseSAMLCertificate {}
