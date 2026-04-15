// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import * as Core from '../../../../../core';
import * as PoliciesAPI from '../policies';

export class Certificates extends APIResource {
  /**
   * Enable Zero Trust Clients to provision a certificate, containing a x509 subject,
   * and referenced by Access device posture policies when the client visits MTLS
   * protected domains. This facilitates device posture without a WARP session.
   *
   * @example
   * ```ts
   * const devicePolicyCertificates =
   *   await client.zeroTrust.devices.policies.default.certificates.edit(
   *     {
   *       zone_id: '699d98642c564d2e855e9661899b7252',
   *       enabled: true,
   *     },
   *   );
   * ```
   */
  edit(
    params: CertificateEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoliciesAPI.DevicePolicyCertificates | null> {
    const { zone_id = this._client.zoneId, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/devices/policy/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PoliciesAPI.DevicePolicyCertificates | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches device certificate provisioning.
   *
   * @example
   * ```ts
   * const devicePolicyCertificates =
   *   await client.zeroTrust.devices.policies.default.certificates.get(
   *     { zone_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    params?: CertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoliciesAPI.DevicePolicyCertificates | null>;
  get(options?: Core.RequestOptions): Core.APIPromise<PoliciesAPI.DevicePolicyCertificates | null>;
  get(
    params: CertificateGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PoliciesAPI.DevicePolicyCertificates | null> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { zone_id = this._client.zoneId } = params;
    return (
      this._client.get(`/zones/${zone_id}/devices/policy/certificates`, options) as Core.APIPromise<{
        result: PoliciesAPI.DevicePolicyCertificates | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CertificateEditParams {
  /**
   * Path param
   */
  zone_id?: string;

  /**
   * Body param: The current status of the device policy certificate provisioning
   * feature for WARP clients.
   */
  enabled: boolean;
}

export interface CertificateGetParams {
  zone_id?: string;
}

export declare namespace Certificates {
  export {
    type CertificateEditParams as CertificateEditParams,
    type CertificateGetParams as CertificateGetParams,
  };
}
