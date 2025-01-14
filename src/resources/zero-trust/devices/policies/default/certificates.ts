// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';

export class Certificates extends APIResource {
  /**
   * Enable Zero Trust Clients to provision a certificate, containing a x509 subject,
   * and referenced by Access device posture policies when the client visits MTLS
   * protected domains. This facilitates device posture without a WARP session.
   */
  edit(
    params: CertificateEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateEditResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/devices/policy/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches device certificate provisioning
   */
  get(
    params: CertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateGetResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/devices/policy/certificates`, options) as Core.APIPromise<{
        result: CertificateGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CertificateEditResponse = unknown | string;

export type CertificateGetResponse = unknown | string;

export interface CertificateEditParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param: The current status of the device policy certificate provisioning
   * feature for WARP clients.
   */
  enabled: boolean;
}

export interface CertificateGetParams {
  zone_id: string;
}

export declare namespace Certificates {
  export {
    type CertificateEditResponse as CertificateEditResponse,
    type CertificateGetResponse as CertificateGetResponse,
    type CertificateEditParams as CertificateEditParams,
    type CertificateGetParams as CertificateGetParams,
  };
}
