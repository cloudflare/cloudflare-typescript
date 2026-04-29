// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseClientCertificates extends APIResource {
  static override readonly _key: readonly ['clientCertificates'] = Object.freeze([
    'clientCertificates',
  ] as const);
}
export class ClientCertificates extends BaseClientCertificates {}
