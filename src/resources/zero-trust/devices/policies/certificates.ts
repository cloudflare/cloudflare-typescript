// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Certificates extends APIResource {
  /**
   * Enable Zero Trust Clients to provision a certificate, containing a x509 subject,
   * and referenced by Access device posture policies when the client visits MTLS
   * protected domains. This facilitates device posture without a WARP session.
   */
  update(
    zoneTag: string,
    body: CertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneTag}/devices/policy/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateUpdateResponse }>
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

export interface DevicePolicyCertificates {
  /**
   * The current status of the device policy certificate provisioning feature for
   * WARP clients.
   */
  enabled: boolean;
}

export type CertificateUpdateResponse = unknown | string | null;

export type CertificateGetResponse = unknown | string | null;

export interface CertificateUpdateParams {
  /**
   * The current status of the device policy certificate provisioning feature for
   * WARP clients.
   */
  enabled: boolean;
}

export declare namespace Certificates {
  export {
    type DevicePolicyCertificates as DevicePolicyCertificates,
    type CertificateUpdateResponse as CertificateUpdateResponse,
    type CertificateGetResponse as CertificateGetResponse,
    type CertificateUpdateParams as CertificateUpdateParams,
  };
}
