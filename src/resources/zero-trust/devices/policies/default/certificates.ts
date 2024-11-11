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
    zoneTag: string,
    body: CertificateEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateEditResponse> {
    return (
      this._client.patch(`/zones/${zoneTag}/devices/policy/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches device certificate provisioning
   */
  get(zoneTag: string, options?: Core.RequestOptions): Core.APIPromise<CertificateGetResponse> {
    return (
      this._client.get(`/zones/${zoneTag}/devices/policy/certificates`, options) as Core.APIPromise<{
        result: CertificateGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CertificateEditResponse = unknown | string | null;

export type CertificateGetResponse = unknown | string | null;

export interface CertificateEditParams {
  /**
   * The current status of the device policy certificate provisioning feature for
   * WARP clients.
   */
  enabled: boolean;
}

export declare namespace Certificates {
  export {
    type CertificateEditResponse as CertificateEditResponse,
    type CertificateGetResponse as CertificateGetResponse,
    type CertificateEditParams as CertificateEditParams,
  };
}
