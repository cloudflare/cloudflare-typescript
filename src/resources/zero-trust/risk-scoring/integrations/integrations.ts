// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as IntegrationsAPI from './integrations';
import * as ReferencesAPI from './references';
import { SinglePage } from '../../../../pagination';

export class Integrations extends APIResource {
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Create new risk score integration.
   */
  create(
    params: IntegrationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/zt_risk_scoring/integrations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntegrationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Overwrite the reference_id, tenant_url, and active values with the ones provided
   */
  update(
    integrationId: string,
    params: IntegrationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/zt_risk_scoring/integrations/${integrationId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntegrationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all risk score integrations for the account.
   */
  list(
    params: IntegrationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IntegrationListResponsesSinglePage, IntegrationListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/zt_risk_scoring/integrations`,
      IntegrationListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a risk score integration.
   */
  delete(
    integrationId: string,
    params: IntegrationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/zt_risk_scoring/integrations/${integrationId}`,
        options,
      ) as Core.APIPromise<{ result: IntegrationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get risk score integration by id.
   */
  get(
    integrationId: string,
    params: IntegrationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/zt_risk_scoring/integrations/${integrationId}`,
        options,
      ) as Core.APIPromise<{ result: IntegrationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class IntegrationListResponsesSinglePage extends SinglePage<IntegrationListResponse> {}

export interface IntegrationCreateResponse {
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

export interface IntegrationUpdateResponse {
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

export interface IntegrationListResponse {
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

export type IntegrationDeleteResponse = unknown;

export interface IntegrationGetResponse {
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

export interface IntegrationCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  integration_type: 'Okta';

  /**
   * Body param: The base url of the tenant, e.g. "https://tenant.okta.com"
   */
  tenant_url: string;

  /**
   * Body param: A reference id that can be supplied by the client. Currently this
   * should be set to the Access-Okta IDP ID (a UUIDv4).
   * https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider
   */
  reference_id?: string | null;
}

export interface IntegrationUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Whether this integration is enabled. If disabled, no risk changes
   * will be exported to the third-party.
   */
  active: boolean;

  /**
   * Body param: The base url of the tenant, e.g. "https://tenant.okta.com"
   */
  tenant_url: string;

  /**
   * Body param: A reference id that can be supplied by the client. Currently this
   * should be set to the Access-Okta IDP ID (a UUIDv4).
   * https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider
   */
  reference_id?: string | null;
}

export interface IntegrationListParams {
  account_id: string;
}

export interface IntegrationDeleteParams {
  account_id: string;
}

export interface IntegrationGetParams {
  account_id: string;
}

export namespace Integrations {
  export import IntegrationCreateResponse = IntegrationsAPI.IntegrationCreateResponse;
  export import IntegrationUpdateResponse = IntegrationsAPI.IntegrationUpdateResponse;
  export import IntegrationListResponse = IntegrationsAPI.IntegrationListResponse;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationGetResponse = IntegrationsAPI.IntegrationGetResponse;
  export import IntegrationListResponsesSinglePage = IntegrationsAPI.IntegrationListResponsesSinglePage;
  export import IntegrationCreateParams = IntegrationsAPI.IntegrationCreateParams;
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
  export import IntegrationListParams = IntegrationsAPI.IntegrationListParams;
  export import IntegrationDeleteParams = IntegrationsAPI.IntegrationDeleteParams;
  export import IntegrationGetParams = IntegrationsAPI.IntegrationGetParams;
  export import References = ReferencesAPI.References;
  export import ReferenceGetResponse = ReferencesAPI.ReferenceGetResponse;
  export import ReferenceGetParams = ReferencesAPI.ReferenceGetParams;
}
