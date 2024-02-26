// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AssociationsAPI from 'cloudflare/resources/mtls-certificates/associations';

export class Associations extends APIResource {
  /**
   * Lists all active associations between the certificate and Cloudflare services.
   */
  list(
    mtlsCertificateId: string,
    params: AssociationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssociationListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/mtls_certificates/${mtlsCertificateId}/associations`,
        options,
      ) as Core.APIPromise<{ result: AssociationListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AssociationListResponse = Array<AssociationListResponse.AssociationListResponseItem>;

export namespace AssociationListResponse {
  export interface AssociationListResponseItem {
    /**
     * The service using the certificate.
     */
    service?: string;

    /**
     * Certificate deployment status for the given service.
     */
    status?: string;
  }
}

export interface AssociationListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Associations {
  export import AssociationListResponse = AssociationsAPI.AssociationListResponse;
  export import AssociationListParams = AssociationsAPI.AssociationListParams;
}
