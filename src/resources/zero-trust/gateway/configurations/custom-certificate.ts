// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseCustomCertificate extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'configurations', 'customCertificate'] =
    Object.freeze(['zeroTrust', 'gateway', 'configurations', 'customCertificate'] as const);
}
export class CustomCertificate extends BaseCustomCertificate {}
