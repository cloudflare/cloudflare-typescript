// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FallbackOriginAPI from './fallback-origin';
import { FallbackOrigin } from './fallback-origin';
import * as CertificatePackAPI from './certificate-pack/certificate-pack';
import { CertificatePack } from './certificate-pack/certificate-pack';

export class CustomHostnames extends APIResource {
  fallbackOrigin: FallbackOriginAPI.FallbackOrigin = new FallbackOriginAPI.FallbackOrigin(this._client);
  certificatePack: CertificatePackAPI.CertificatePack = new CertificatePackAPI.CertificatePack(this._client);
}

CustomHostnames.FallbackOrigin = FallbackOrigin;
CustomHostnames.CertificatePack = CertificatePack;

export declare namespace CustomHostnames {
  export { FallbackOrigin as FallbackOrigin };

  export { CertificatePack as CertificatePack };
}
