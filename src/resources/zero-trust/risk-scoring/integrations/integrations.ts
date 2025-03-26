// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReferencesAPI from './references';
import { ReferenceGetParams, ReferenceGetResponse, References } from './references';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Integrations extends APIResource {
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);

  /**
   * Create new risk score integration.
   */
  create(params: IntegrationCreateParams, options?: RequestOptions): APIPromise<IntegrationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/zt_risk_scoring/integrations`, {
        body,
        ...options,
      }) as APIPromise<{ result: IntegrationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Overwrite the reference_id, tenant_url, and active values with the ones provided
   */
  update(
    integrationID: string,
    params: IntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/zt_risk_scoring/integrations/${integrationID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: IntegrationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all risk score integrations for the account.
   */
  list(
    params: IntegrationListParams,
    options?: RequestOptions,
  ): PagePromise<IntegrationListResponsesSinglePage, IntegrationListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/zt_risk_scoring/integrations`,
      SinglePage<IntegrationListResponse>,
      options,
    );
  }

  /**
   * Delete a risk score integration.
   */
  delete(
    integrationID: string,
    params: IntegrationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/zt_risk_scoring/integrations/${integrationID}`,
        options,
      ) as APIPromise<{ result: IntegrationDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get risk score integration by id.
   */
  get(
    integrationID: string,
    params: IntegrationGetParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/zt_risk_scoring/integrations/${integrationID}`,
        options,
      ) as APIPromise<{ result: IntegrationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IntegrationListResponsesSinglePage = SinglePage<IntegrationListResponse>;

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

Integrations.References = References;

export declare namespace Integrations {
  export {
    type IntegrationCreateResponse as IntegrationCreateResponse,
    type IntegrationUpdateResponse as IntegrationUpdateResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationDeleteResponse as IntegrationDeleteResponse,
    type IntegrationGetResponse as IntegrationGetResponse,
    type IntegrationListResponsesSinglePage as IntegrationListResponsesSinglePage,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationGetParams as IntegrationGetParams,
  };

  export {
    References as References,
    type ReferenceGetResponse as ReferenceGetResponse,
    type ReferenceGetParams as ReferenceGetParams,
  };
}
