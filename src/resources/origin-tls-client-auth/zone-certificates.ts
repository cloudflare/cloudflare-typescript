// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseZoneCertificates extends APIResource {
  static override readonly _key: readonly ['originTLSClientAuth', 'zoneCertificates'] = Object.freeze([
    'originTLSClientAuth',
    'zoneCertificates',
  ] as const);
}
export class ZoneCertificates extends BaseZoneCertificates {}
