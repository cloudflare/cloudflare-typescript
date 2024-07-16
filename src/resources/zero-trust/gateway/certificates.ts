// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CertificatesAPI from './certificates';
import { SinglePage } from '../../../pagination';

export class Certificates extends APIResource {
  /**
   * Creates a new Zero Trust certificate.
   */
  create(
    params: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust certificates for an account.
   */
  list(
    params: CertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CertificateListResponsesSinglePage, CertificateListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/gateway/certificates`,
      CertificateListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes a gateway-managed Zero Trust certificate.
   */
  delete(
    certificateId: string,
    params: CertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/gateway/certificates/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: CertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust certificate.
   */
  get(
    certificateId: string,
    params: CertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/gateway/certificates/${certificateId}`,
        options,
      ) as Core.APIPromise<{ result: CertificateGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CertificateListResponsesSinglePage extends SinglePage<CertificateListResponse> {}

export interface CertificateCreateResponse {
  /**
   * Certificate UUID tag.
   */
  id?: string;

  /**
   * The deployment status of the certificate on Cloudflare's edge.
   */
  binding_status?: 'pending_deployment' | 'active' | 'pending_deletion' | 'inactive';

  created_at?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  enabled?: boolean;

  expires_on?: string;

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
   * The deployment status of the certificate on Cloudflare's edge.
   */
  binding_status?: 'pending_deployment' | 'active' | 'pending_deletion' | 'inactive';

  created_at?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  enabled?: boolean;

  expires_on?: string;

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
   * The deployment status of the certificate on Cloudflare's edge.
   */
  binding_status?: 'pending_deployment' | 'active' | 'pending_deletion' | 'inactive';

  created_at?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  enabled?: boolean;

  expires_on?: string;

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
   * The deployment status of the certificate on Cloudflare's edge.
   */
  binding_status?: 'pending_deployment' | 'active' | 'pending_deletion' | 'inactive';

  created_at?: string;

  /**
   * Use this certificate for Gateway TLS interception
   */
  enabled?: boolean;

  expires_on?: string;

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

export interface CertificateGetParams {
  account_id: string;
}

export namespace Certificates {
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateListResponsesSinglePage = CertificatesAPI.CertificateListResponsesSinglePage;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
}
