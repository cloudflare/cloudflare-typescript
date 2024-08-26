// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as ReferencesAPI from './references';

export class References extends APIResource {
  /**
   * Get risk score integration by reference id.
   */
  get(referenceId: string, params: ReferenceGetParams, options?: Core.RequestOptions): Core.APIPromise<ReferenceGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/zt_risk_scoring/integrations/reference_id/${referenceId}`, options) as Core.APIPromise<{ result: ReferenceGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface ReferenceGetResponse {
  /**
   * The id of the integration, a UUIDv4.
   */
  id: string;

  /**
   * The Cloudflare account tag.
   */
  account_tag: string;

  /**
   * Whether this integration is enabled and should export changes in risk score.
   */
  active: boolean;

  /**
   * When the integration was created in RFC3339 format.
   */
  created_at: string;

  integration_type: 'Okta';

  /**
   * A reference ID defined by the client. Should be set to the Access-Okta IDP
   * integration ID. Useful when the risk-score integration needs to be associated
   * with a secondary asset and recalled using that ID.
   */
  reference_id: string;

  /**
   * The base URL for the tenant. E.g. "https://tenant.okta.com"
   */
  tenant_url: string;

  /**
   * The URL for the Shared Signals Framework configuration, e.g.
   * "/.well-known/sse-configuration/{integration_uuid}/".
   * https://openid.net/specs/openid-sse-framework-1_0.html#rfc.section.6.2.1
   */
  well_known_url: string;
}

export interface ReferenceGetParams {
  account_id: string;
}

export namespace References {
  export import ReferenceGetResponse = ReferencesAPI.ReferenceGetResponse;
  export import ReferenceGetParams = ReferencesAPI.ReferenceGetParams;
}
