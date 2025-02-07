// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Certificates extends APIResource {
  /**
   * Creates a new Zero Trust certificate.
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
   * Fetches all Zero Trust certificates for an account.
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
   * Deletes a gateway-managed Zero Trust certificate. A certificate must be
   * deactivated from the edge (inactive) before it is deleted.
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
   * Binds a single Zero Trust certificate to the edge.
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
   * Unbinds a single Zero Trust certificate from the edge
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
   * Fetches a single Zero Trust certificate.
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
   * Certificate UUID tag.
   */
  id?: string;

  /**
   * The deployment status of the certificate on Cloudflare's edge. Certificates in
   * the 'available' (previously called 'active') state may be used for Gateway TLS
   * interception.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * The CA certificate
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * The SHA256 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  in_use?: boolean;

  /**
   * The organization that issued the certificate.
   */
  issuer_org?: string;

  /**
   * The entire issuer field of the certificate.
   */
  issuer_raw?: string;

  /**
   * The type of certificate, either BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateListResponse {
  /**
   * Certificate UUID tag.
   */
  id?: string;

  /**
   * The deployment status of the certificate on Cloudflare's edge. Certificates in
   * the 'available' (previously called 'active') state may be used for Gateway TLS
   * interception.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * The CA certificate
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * The SHA256 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  in_use?: boolean;

  /**
   * The organization that issued the certificate.
   */
  issuer_org?: string;

  /**
   * The entire issuer field of the certificate.
   */
  issuer_raw?: string;

  /**
   * The type of certificate, either BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateDeleteResponse {
  /**
   * Certificate UUID tag.
   */
  id?: string;

  /**
   * The deployment status of the certificate on Cloudflare's edge. Certificates in
   * the 'available' (previously called 'active') state may be used for Gateway TLS
   * interception.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * The CA certificate
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * The SHA256 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  in_use?: boolean;

  /**
   * The organization that issued the certificate.
   */
  issuer_org?: string;

  /**
   * The entire issuer field of the certificate.
   */
  issuer_raw?: string;

  /**
   * The type of certificate, either BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateActivateResponse {
  /**
   * Certificate UUID tag.
   */
  id?: string;

  /**
   * The deployment status of the certificate on Cloudflare's edge. Certificates in
   * the 'available' (previously called 'active') state may be used for Gateway TLS
   * interception.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * The CA certificate
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * The SHA256 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  in_use?: boolean;

  /**
   * The organization that issued the certificate.
   */
  issuer_org?: string;

  /**
   * The entire issuer field of the certificate.
   */
  issuer_raw?: string;

  /**
   * The type of certificate, either BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateDeactivateResponse {
  /**
   * Certificate UUID tag.
   */
  id?: string;

  /**
   * The deployment status of the certificate on Cloudflare's edge. Certificates in
   * the 'available' (previously called 'active') state may be used for Gateway TLS
   * interception.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * The CA certificate
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * The SHA256 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  in_use?: boolean;

  /**
   * The organization that issued the certificate.
   */
  issuer_org?: string;

  /**
   * The entire issuer field of the certificate.
   */
  issuer_raw?: string;

  /**
   * The type of certificate, either BYO-PKI (custom) or Gateway-managed.
   */
  type?: 'custom' | 'gateway_managed';

  updated_at?: string;

  uploaded_on?: string;
}

export interface CertificateGetResponse {
  /**
   * Certificate UUID tag.
   */
  id?: string;

  /**
   * The deployment status of the certificate on Cloudflare's edge. Certificates in
   * the 'available' (previously called 'active') state may be used for Gateway TLS
   * interception.
   */
  binding_status?: 'pending_deployment' | 'available' | 'pending_deletion' | 'inactive';

  /**
   * The CA certificate
   */
  certificate?: string;

  created_at?: string;

  expires_on?: string;

  /**
   * The SHA256 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  in_use?: boolean;

  /**
   * The organization that issued the certificate.
   */
  issuer_org?: string;

  /**
   * The entire issuer field of the certificate.
   */
  issuer_raw?: string;

  /**
   * The type of certificate, either BYO-PKI (custom) or Gateway-managed.
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
   * Body param: Number of days the generated certificate will be valid, minimum 1
   * day and maximum 30 years. Defaults to 5 years.
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
