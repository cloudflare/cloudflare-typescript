// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PoliciesAPI from '../policies';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseCertificates extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'default', 'certificates'] =
    Object.freeze(['zeroTrust', 'devices', 'policies', 'default', 'certificates'] as const);

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
    options?: RequestOptions,
  ): APIPromise<PoliciesAPI.DevicePolicyCertificates | null> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/devices/policy/certificates`, {
        body,
        ...options,
      }) as APIPromise<{ result: PoliciesAPI.DevicePolicyCertificates | null }>
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
    params: CertificateGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PoliciesAPI.DevicePolicyCertificates | null> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/devices/policy/certificates`, options) as APIPromise<{
        result: PoliciesAPI.DevicePolicyCertificates | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Certificates extends BaseCertificates {}

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
