// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CertificatesAPI from './certificates';
import { BaseCertificates, Certificates } from './certificates';

export class BaseCertificatePack extends APIResource {
  static override readonly _key: readonly ['customHostnames', 'certificatePack'] = Object.freeze([
    'customHostnames',
    'certificatePack',
  ] as const);
}
export class CertificatePack extends BaseCertificatePack {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
}

CertificatePack.Certificates = Certificates;
CertificatePack.BaseCertificates = BaseCertificates;

export declare namespace CertificatePack {
  export { Certificates as Certificates, BaseCertificates as BaseCertificates };
}
