// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FallbackOriginAPI from './fallback-origin';
import { BaseFallbackOrigin, FallbackOrigin } from './fallback-origin';
import * as CertificatePackAPI from './certificate-pack/certificate-pack';
import { BaseCertificatePack, CertificatePack } from './certificate-pack/certificate-pack';

export class BaseCustomHostnames extends APIResource {
  static override readonly _key: readonly ['customHostnames'] = Object.freeze(['customHostnames'] as const);
}
export class CustomHostnames extends BaseCustomHostnames {
  fallbackOrigin: FallbackOriginAPI.FallbackOrigin = new FallbackOriginAPI.FallbackOrigin(this._client);
  certificatePack: CertificatePackAPI.CertificatePack = new CertificatePackAPI.CertificatePack(this._client);
}

CustomHostnames.FallbackOrigin = FallbackOrigin;
CustomHostnames.BaseFallbackOrigin = BaseFallbackOrigin;
CustomHostnames.CertificatePack = CertificatePack;
CustomHostnames.BaseCertificatePack = BaseCertificatePack;

export declare namespace CustomHostnames {
  export { FallbackOrigin as FallbackOrigin, BaseFallbackOrigin as BaseFallbackOrigin };

  export { CertificatePack as CertificatePack, BaseCertificatePack as BaseCertificatePack };
}
