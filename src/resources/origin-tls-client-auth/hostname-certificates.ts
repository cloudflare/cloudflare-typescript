// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseHostnameCertificates extends APIResource {
  static override readonly _key: readonly ['originTLSClientAuth', 'hostnameCertificates'] = Object.freeze([
    'originTLSClientAuth',
    'hostnameCertificates',
  ] as const);
}
export class HostnameCertificates extends BaseHostnameCertificates {}
