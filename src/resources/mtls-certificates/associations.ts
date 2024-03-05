// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AssociationsAPI from 'cloudflare/resources/mtls-certificates/associations';

export class Associations extends APIResource {
  /**
   * Lists all active associations between the certificate and Cloudflare services.
   */
  get(
    mtlsCertificateId: string,
    params: AssociationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssociationGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/mtls_certificates/${mtlsCertificateId}/associations`,
        options,
      ) as Core.APIPromise<{ result: AssociationGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AssociationGetResponse = Array<AssociationGetResponse.AssociationGetResponseItem>;

export namespace AssociationGetResponse {
  export interface AssociationGetResponseItem {
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

export interface AssociationGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Associations {
  export import AssociationGetResponse = AssociationsAPI.AssociationGetResponse;
  export import AssociationGetParams = AssociationsAPI.AssociationGetParams;
}
