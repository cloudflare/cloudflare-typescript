// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Certificates extends APIResource {
  /**
   * Create a new Zero Trust certificate.
   *
   * @example
   * ```ts
   * const certificate =
   *   await client.zeroTrust.gateway.certificates.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
   */
  create(params: CertificateCreateParams, options?: RequestOptions): APIPromise<CertificateCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/gateway/certificates`, {
        body,
        ...options,
      }) as APIPromise<{ result: CertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Zero Trust certificates for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const certificateListResponse of client.zeroTrust.gateway.certificates.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CertificateListParams,
    options?: RequestOptions,
  ): PagePromise<CertificateListResponsesSinglePage, CertificateListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/certificates`,
      SinglePage<CertificateListResponse>,
      options,
    );
  }

  /**
   * Delete a gateway-managed Zero Trust certificate. You must deactivate the
   * certificate from the edge (inactive) before deleting it.
   *
   * @example
   * ```ts
   * const certificate =
   *   await client.zeroTrust.gateway.certificates.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  delete(
    certificateID: string,
    params: CertificateDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CertificateDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/gateway/certificates/${certificateID}`,
        options,
      ) as APIPromise<{ result: CertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Bind a single Zero Trust certificate to the edge.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.gateway.certificates.activate(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       body: {},
   *     },
   *   );
   * ```
   */
  activate(
    certificateID: string,
    params: CertificateActivateParams,
    options?: RequestOptions,
  ): APIPromise<CertificateActivateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/gateway/certificates/${certificateID}/activate`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: CertificateActivateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Unbind a single Zero Trust certificate from the edge.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.gateway.certificates.deactivate(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       body: {},
   *     },
   *   );
   * ```
   */
  deactivate(
    certificateID: string,
    params: CertificateDeactivateParams,
    options?: RequestOptions,
  ): APIPromise<CertificateDeactivateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/gateway/certificates/${certificateID}/deactivate`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: CertificateDeactivateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single Zero Trust certificate.
   *
   * @example
   * ```ts
   * const certificate =
   *   await client.zeroTrust.gateway.certificates.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    certificateID: string,
    params: CertificateGetParams,
    options?: RequestOptions,
  ): APIPromise<CertificateGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/gateway/certificates/${certificateID}`,
        options,
      ) as APIPromise<{ result: CertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CertificateListResponsesSinglePage = SinglePage<CertificateListResponse>;

export interface CertificateCreateResponse {
  /**
   * Identify the certificate with a UUID.
   */
  id?: string;

  /**
   * Indicate the read-only deployment status of the certificate on Cloudflare's
   * edge. Gateway TLS interception can use certificates in the 'available'
   * (previously called 'active') state.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * Provide the CA certificate (read-only).
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * Provide the SHA256 fingerprint of the certificate (read-only).
   */
  fingerprint?: string;

  /**
   * Indicate whether Gateway TLS interception uses this certificate (read-only). You
   * cannot set this value directly. To configure interception, use the Gateway
   * configuration setting named `certificate` (read-only).
   */
  in_use?: boolean;

  /**
   * Indicate the organization that issued the certificate (read-only).
   */
  issuer_org?: string;

  /**
   * Provide the entire issuer field of the certificate (read-only).
   */
  issuer_raw?: string;

  /**
   * Indicate the read-only certificate type, BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateListResponse {
  /**
   * Identify the certificate with a UUID.
   */
  id?: string;

  /**
   * Indicate the read-only deployment status of the certificate on Cloudflare's
   * edge. Gateway TLS interception can use certificates in the 'available'
   * (previously called 'active') state.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * Provide the CA certificate (read-only).
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * Provide the SHA256 fingerprint of the certificate (read-only).
   */
  fingerprint?: string;

  /**
   * Indicate whether Gateway TLS interception uses this certificate (read-only). You
   * cannot set this value directly. To configure interception, use the Gateway
   * configuration setting named `certificate` (read-only).
   */
  in_use?: boolean;

  /**
   * Indicate the organization that issued the certificate (read-only).
   */
  issuer_org?: string;

  /**
   * Provide the entire issuer field of the certificate (read-only).
   */
  issuer_raw?: string;

  /**
   * Indicate the read-only certificate type, BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateDeleteResponse {
  /**
   * Identify the certificate with a UUID.
   */
  id?: string;

  /**
   * Indicate the read-only deployment status of the certificate on Cloudflare's
   * edge. Gateway TLS interception can use certificates in the 'available'
   * (previously called 'active') state.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * Provide the CA certificate (read-only).
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * Provide the SHA256 fingerprint of the certificate (read-only).
   */
  fingerprint?: string;

  /**
   * Indicate whether Gateway TLS interception uses this certificate (read-only). You
   * cannot set this value directly. To configure interception, use the Gateway
   * configuration setting named `certificate` (read-only).
   */
  in_use?: boolean;

  /**
   * Indicate the organization that issued the certificate (read-only).
   */
  issuer_org?: string;

  /**
   * Provide the entire issuer field of the certificate (read-only).
   */
  issuer_raw?: string;

  /**
   * Indicate the read-only certificate type, BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateActivateResponse {
  /**
   * Identify the certificate with a UUID.
   */
  id?: string;

  /**
   * Indicate the read-only deployment status of the certificate on Cloudflare's
   * edge. Gateway TLS interception can use certificates in the 'available'
   * (previously called 'active') state.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * Provide the CA certificate (read-only).
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * Provide the SHA256 fingerprint of the certificate (read-only).
   */
  fingerprint?: string;

  /**
   * Indicate whether Gateway TLS interception uses this certificate (read-only). You
   * cannot set this value directly. To configure interception, use the Gateway
   * configuration setting named `certificate` (read-only).
   */
  in_use?: boolean;

  /**
   * Indicate the organization that issued the certificate (read-only).
   */
  issuer_org?: string;

  /**
   * Provide the entire issuer field of the certificate (read-only).
   */
  issuer_raw?: string;

  /**
   * Indicate the read-only certificate type, BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateDeactivateResponse {
  /**
   * Identify the certificate with a UUID.
   */
  id?: string;

  /**
   * Indicate the read-only deployment status of the certificate on Cloudflare's
   * edge. Gateway TLS interception can use certificates in the 'available'
   * (previously called 'active') state.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * Provide the CA certificate (read-only).
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * Provide the SHA256 fingerprint of the certificate (read-only).
   */
  fingerprint?: string;

  /**
   * Indicate whether Gateway TLS interception uses this certificate (read-only). You
   * cannot set this value directly. To configure interception, use the Gateway
   * configuration setting named `certificate` (read-only).
   */
  in_use?: boolean;

  /**
   * Indicate the organization that issued the certificate (read-only).
   */
  issuer_org?: string;

  /**
   * Provide the entire issuer field of the certificate (read-only).
   */
  issuer_raw?: string;

  /**
   * Indicate the read-only certificate type, BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateGetResponse {
  /**
   * Identify the certificate with a UUID.
   */
  id?: string;

  /**
   * Indicate the read-only deployment status of the certificate on Cloudflare's
   * edge. Gateway TLS interception can use certificates in the 'available'
   * (previously called 'active') state.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * Provide the CA certificate (read-only).
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * Provide the SHA256 fingerprint of the certificate (read-only).
   */
  fingerprint?: string;

  /**
   * Indicate whether Gateway TLS interception uses this certificate (read-only). You
   * cannot set this value directly. To configure interception, use the Gateway
   * configuration setting named `certificate` (read-only).
   */
  in_use?: boolean;

  /**
   * Indicate the organization that issued the certificate (read-only).
   */
  issuer_org?: string;

  /**
   * Provide the entire issuer field of the certificate (read-only).
   */
  issuer_raw?: string;

  /**
   * Indicate the read-only certificate type, BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Sets the certificate validity period in days (range: 1-10,950 days /
   * ~30 years). Defaults to 1,825 days (5 years). **Important**: This field is only
   * settable during the certificate creation. Certificates becomes immutable after
   * creation - use the `/activate` and `/deactivate` endpoints to manage certificate
   * lifecycle.
   */
  validity_period_days?: number;
}

export interface CertificateListParams {
  account_id: string;
}

export interface CertificateDeleteParams {
  account_id: string;
}

export interface CertificateActivateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface CertificateDeactivateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface CertificateGetParams {
  account_id: string;
}

export declare namespace Certificates {
  export {
    type CertificateCreateResponse as CertificateCreateResponse,
    type CertificateListResponse as CertificateListResponse,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    type CertificateActivateResponse as CertificateActivateResponse,
    type CertificateDeactivateResponse as CertificateDeactivateResponse,
    type CertificateGetResponse as CertificateGetResponse,
    type CertificateListResponsesSinglePage as CertificateListResponsesSinglePage,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateDeleteParams as CertificateDeleteParams,
    type CertificateActivateParams as CertificateActivateParams,
    type CertificateDeactivateParams as CertificateDeactivateParams,
    type CertificateGetParams as CertificateGetParams,
  };
}
