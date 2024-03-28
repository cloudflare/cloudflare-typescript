// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as PoliciesAPI from 'cloudflare/resources/zero-trust/access/applications/policies';
import { SinglePage } from 'cloudflare/pagination';

export class Policies extends APIResource {
  /**
   * Create a new Access policy for an application.
   */
  create(
    uuid: string,
    params: PolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustPolicies> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/policies`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustPolicies }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a configured Access policy.
   */
  update(
    uuid1: string,
    uuid: string,
    params: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustPolicies> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid1}/policies/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustPolicies }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Access policies configured for an application.
   */
  list(
    uuid: string,
    params?: PolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustPoliciesSinglePage, ZeroTrustPolicies>;
  list(
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustPoliciesSinglePage, ZeroTrustPolicies>;
  list(
    uuid: string,
    params: PolicyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustPoliciesSinglePage, ZeroTrustPolicies> {
    if (isRequestOptions(params)) {
      return this.list(uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid}/policies`,
      ZeroTrustPoliciesSinglePage,
      options,
    );
  }

  /**
   * Delete an Access policy.
   */
  delete(
    uuid1: string,
    uuid: string,
    params?: PolicyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse>;
  delete(uuid1: string, uuid: string, options?: Core.RequestOptions): Core.APIPromise<PolicyDeleteResponse>;
  delete(
    uuid1: string,
    uuid: string,
    params: PolicyDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(uuid1, uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid1}/policies/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: PolicyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access policy.
   */
  get(
    uuid1: string,
    uuid: string,
    params?: PolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustPolicies>;
  get(uuid1: string, uuid: string, options?: Core.RequestOptions): Core.APIPromise<ZeroTrustPolicies>;
  get(
    uuid1: string,
    uuid: string,
    params: PolicyGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustPolicies> {
    if (isRequestOptions(params)) {
      return this.get(uuid1, uuid, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${uuid1}/policies/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: ZeroTrustPolicies }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ZeroTrustPoliciesSinglePage extends SinglePage<ZeroTrustPolicies> {}

export interface ZeroTrustPolicies {
  /**
   * UUID
   */
  id?: string;

  /**
   * Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<ZeroTrustPolicies.ApprovalGroup>;

  /**
   * Requires the user to request access from an administrator at the start of each
   * session.
   */
  approval_required?: boolean;

  created_at?: string;

  /**
   * The action Access will take if a user matches this policy.
   */
  decision?: 'allow' | 'deny' | 'non_identity' | 'bypass';

  /**
   * Rules evaluated with a NOT logical operator. To match the policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | ZeroTrustPolicies.AccessEmailRule
    | ZeroTrustPolicies.AccessEmailListRule
    | ZeroTrustPolicies.AccessDomainRule
    | ZeroTrustPolicies.AccessEveryoneRule
    | ZeroTrustPolicies.AccessIPRule
    | ZeroTrustPolicies.AccessIPListRule
    | ZeroTrustPolicies.AccessCertificateRule
    | ZeroTrustPolicies.AccessAccessGroupRule
    | ZeroTrustPolicies.AccessAzureGroupRule
    | ZeroTrustPolicies.AccessGitHubOrganizationRule
    | ZeroTrustPolicies.AccessGsuiteGroupRule
    | ZeroTrustPolicies.AccessOktaGroupRule
    | ZeroTrustPolicies.AccessSamlGroupRule
    | ZeroTrustPolicies.AccessServiceTokenRule
    | ZeroTrustPolicies.AccessAnyValidServiceTokenRule
    | ZeroTrustPolicies.AccessExternalEvaluationRule
    | ZeroTrustPolicies.AccessCountryRule
    | ZeroTrustPolicies.AccessAuthenticationMethodRule
    | ZeroTrustPolicies.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<
    | ZeroTrustPolicies.AccessEmailRule
    | ZeroTrustPolicies.AccessEmailListRule
    | ZeroTrustPolicies.AccessDomainRule
    | ZeroTrustPolicies.AccessEveryoneRule
    | ZeroTrustPolicies.AccessIPRule
    | ZeroTrustPolicies.AccessIPListRule
    | ZeroTrustPolicies.AccessCertificateRule
    | ZeroTrustPolicies.AccessAccessGroupRule
    | ZeroTrustPolicies.AccessAzureGroupRule
    | ZeroTrustPolicies.AccessGitHubOrganizationRule
    | ZeroTrustPolicies.AccessGsuiteGroupRule
    | ZeroTrustPolicies.AccessOktaGroupRule
    | ZeroTrustPolicies.AccessSamlGroupRule
    | ZeroTrustPolicies.AccessServiceTokenRule
    | ZeroTrustPolicies.AccessAnyValidServiceTokenRule
    | ZeroTrustPolicies.AccessExternalEvaluationRule
    | ZeroTrustPolicies.AccessCountryRule
    | ZeroTrustPolicies.AccessAuthenticationMethodRule
    | ZeroTrustPolicies.AccessDevicePostureRule
  >;

  /**
   * Require this application to be served in an isolated browser for users matching
   * this policy. 'Client Web Isolation' must be on for the account in order to use
   * this feature.
   */
  isolation_required?: boolean;

  /**
   * The name of the Access policy.
   */
  name?: string;

  /**
   * The order of execution for this policy. Must be unique for each policy.
   */
  precedence?: number;

  /**
   * A custom message that will appear on the purpose justification screen.
   */
  purpose_justification_prompt?: string;

  /**
   * Require users to enter a justification when they log in to the application.
   */
  purpose_justification_required?: boolean;

  /**
   * Rules evaluated with an AND logical operator. To match the policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | ZeroTrustPolicies.AccessEmailRule
    | ZeroTrustPolicies.AccessEmailListRule
    | ZeroTrustPolicies.AccessDomainRule
    | ZeroTrustPolicies.AccessEveryoneRule
    | ZeroTrustPolicies.AccessIPRule
    | ZeroTrustPolicies.AccessIPListRule
    | ZeroTrustPolicies.AccessCertificateRule
    | ZeroTrustPolicies.AccessAccessGroupRule
    | ZeroTrustPolicies.AccessAzureGroupRule
    | ZeroTrustPolicies.AccessGitHubOrganizationRule
    | ZeroTrustPolicies.AccessGsuiteGroupRule
    | ZeroTrustPolicies.AccessOktaGroupRule
    | ZeroTrustPolicies.AccessSamlGroupRule
    | ZeroTrustPolicies.AccessServiceTokenRule
    | ZeroTrustPolicies.AccessAnyValidServiceTokenRule
    | ZeroTrustPolicies.AccessExternalEvaluationRule
    | ZeroTrustPolicies.AccessCountryRule
    | ZeroTrustPolicies.AccessAuthenticationMethodRule
    | ZeroTrustPolicies.AccessDevicePostureRule
  >;

  /**
   * The amount of time that tokens issued for the application will be valid. Must be
   * in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s,
   * m, h.
   */
  session_duration?: string;

  updated_at?: string;
}

export namespace ZeroTrustPolicies {
  /**
   * A group of email addresses that can approve a temporary authentication request.
   */
  export interface ApprovalGroup {
    /**
     * The number of approvals needed to obtain access.
     */
    approvals_needed: number;

    /**
     * A list of emails that can approve the access request.
     */
    email_addresses?: Array<unknown>;

    /**
     * The UUID of an re-usable email list.
     */
    email_list_uuid?: string;
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export interface PolicyDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface PolicyCreateParams {
  /**
   * Body param: The action Access will take if a user matches this policy.
   */
  decision: 'allow' | 'deny' | 'non_identity' | 'bypass';

  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<
    | PolicyCreateParams.AccessEmailRule
    | PolicyCreateParams.AccessEmailListRule
    | PolicyCreateParams.AccessDomainRule
    | PolicyCreateParams.AccessEveryoneRule
    | PolicyCreateParams.AccessIPRule
    | PolicyCreateParams.AccessIPListRule
    | PolicyCreateParams.AccessCertificateRule
    | PolicyCreateParams.AccessAccessGroupRule
    | PolicyCreateParams.AccessAzureGroupRule
    | PolicyCreateParams.AccessGitHubOrganizationRule
    | PolicyCreateParams.AccessGsuiteGroupRule
    | PolicyCreateParams.AccessOktaGroupRule
    | PolicyCreateParams.AccessSamlGroupRule
    | PolicyCreateParams.AccessServiceTokenRule
    | PolicyCreateParams.AccessAnyValidServiceTokenRule
    | PolicyCreateParams.AccessExternalEvaluationRule
    | PolicyCreateParams.AccessCountryRule
    | PolicyCreateParams.AccessAuthenticationMethodRule
    | PolicyCreateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: The name of the Access policy.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<PolicyCreateParams.ApprovalGroup>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match the policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<
    | PolicyCreateParams.AccessEmailRule
    | PolicyCreateParams.AccessEmailListRule
    | PolicyCreateParams.AccessDomainRule
    | PolicyCreateParams.AccessEveryoneRule
    | PolicyCreateParams.AccessIPRule
    | PolicyCreateParams.AccessIPListRule
    | PolicyCreateParams.AccessCertificateRule
    | PolicyCreateParams.AccessAccessGroupRule
    | PolicyCreateParams.AccessAzureGroupRule
    | PolicyCreateParams.AccessGitHubOrganizationRule
    | PolicyCreateParams.AccessGsuiteGroupRule
    | PolicyCreateParams.AccessOktaGroupRule
    | PolicyCreateParams.AccessSamlGroupRule
    | PolicyCreateParams.AccessServiceTokenRule
    | PolicyCreateParams.AccessAnyValidServiceTokenRule
    | PolicyCreateParams.AccessExternalEvaluationRule
    | PolicyCreateParams.AccessCountryRule
    | PolicyCreateParams.AccessAuthenticationMethodRule
    | PolicyCreateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: Require this application to be served in an isolated browser for
   * users matching this policy. 'Client Web Isolation' must be on for the account in
   * order to use this feature.
   */
  isolation_required?: boolean;

  /**
   * Body param: The order of execution for this policy. Must be unique for each
   * policy.
   */
  precedence?: number;

  /**
   * Body param: A custom message that will appear on the purpose justification
   * screen.
   */
  purpose_justification_prompt?: string;

  /**
   * Body param: Require users to enter a justification when they log in to the
   * application.
   */
  purpose_justification_required?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match the policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<
    | PolicyCreateParams.AccessEmailRule
    | PolicyCreateParams.AccessEmailListRule
    | PolicyCreateParams.AccessDomainRule
    | PolicyCreateParams.AccessEveryoneRule
    | PolicyCreateParams.AccessIPRule
    | PolicyCreateParams.AccessIPListRule
    | PolicyCreateParams.AccessCertificateRule
    | PolicyCreateParams.AccessAccessGroupRule
    | PolicyCreateParams.AccessAzureGroupRule
    | PolicyCreateParams.AccessGitHubOrganizationRule
    | PolicyCreateParams.AccessGsuiteGroupRule
    | PolicyCreateParams.AccessOktaGroupRule
    | PolicyCreateParams.AccessSamlGroupRule
    | PolicyCreateParams.AccessServiceTokenRule
    | PolicyCreateParams.AccessAnyValidServiceTokenRule
    | PolicyCreateParams.AccessExternalEvaluationRule
    | PolicyCreateParams.AccessCountryRule
    | PolicyCreateParams.AccessAuthenticationMethodRule
    | PolicyCreateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: The amount of time that tokens issued for the application will be
   * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
   * (or µs), ms, s, m, h.
   */
  session_duration?: string;
}

export namespace PolicyCreateParams {
  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * A group of email addresses that can approve a temporary authentication request.
   */
  export interface ApprovalGroup {
    /**
     * The number of approvals needed to obtain access.
     */
    approvals_needed: number;

    /**
     * A list of emails that can approve the access request.
     */
    email_addresses?: Array<unknown>;

    /**
     * The UUID of an re-usable email list.
     */
    email_list_uuid?: string;
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export interface PolicyUpdateParams {
  /**
   * Body param: The action Access will take if a user matches this policy.
   */
  decision: 'allow' | 'deny' | 'non_identity' | 'bypass';

  /**
   * Body param: Rules evaluated with an OR logical operator. A user needs to meet
   * only one of the Include rules.
   */
  include: Array<
    | PolicyUpdateParams.AccessEmailRule
    | PolicyUpdateParams.AccessEmailListRule
    | PolicyUpdateParams.AccessDomainRule
    | PolicyUpdateParams.AccessEveryoneRule
    | PolicyUpdateParams.AccessIPRule
    | PolicyUpdateParams.AccessIPListRule
    | PolicyUpdateParams.AccessCertificateRule
    | PolicyUpdateParams.AccessAccessGroupRule
    | PolicyUpdateParams.AccessAzureGroupRule
    | PolicyUpdateParams.AccessGitHubOrganizationRule
    | PolicyUpdateParams.AccessGsuiteGroupRule
    | PolicyUpdateParams.AccessOktaGroupRule
    | PolicyUpdateParams.AccessSamlGroupRule
    | PolicyUpdateParams.AccessServiceTokenRule
    | PolicyUpdateParams.AccessAnyValidServiceTokenRule
    | PolicyUpdateParams.AccessExternalEvaluationRule
    | PolicyUpdateParams.AccessCountryRule
    | PolicyUpdateParams.AccessAuthenticationMethodRule
    | PolicyUpdateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: The name of the Access policy.
   */
  name: string;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: Administrators who can approve a temporary authentication request.
   */
  approval_groups?: Array<PolicyUpdateParams.ApprovalGroup>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: Rules evaluated with a NOT logical operator. To match the policy, a
   * user cannot meet any of the Exclude rules.
   */
  exclude?: Array<
    | PolicyUpdateParams.AccessEmailRule
    | PolicyUpdateParams.AccessEmailListRule
    | PolicyUpdateParams.AccessDomainRule
    | PolicyUpdateParams.AccessEveryoneRule
    | PolicyUpdateParams.AccessIPRule
    | PolicyUpdateParams.AccessIPListRule
    | PolicyUpdateParams.AccessCertificateRule
    | PolicyUpdateParams.AccessAccessGroupRule
    | PolicyUpdateParams.AccessAzureGroupRule
    | PolicyUpdateParams.AccessGitHubOrganizationRule
    | PolicyUpdateParams.AccessGsuiteGroupRule
    | PolicyUpdateParams.AccessOktaGroupRule
    | PolicyUpdateParams.AccessSamlGroupRule
    | PolicyUpdateParams.AccessServiceTokenRule
    | PolicyUpdateParams.AccessAnyValidServiceTokenRule
    | PolicyUpdateParams.AccessExternalEvaluationRule
    | PolicyUpdateParams.AccessCountryRule
    | PolicyUpdateParams.AccessAuthenticationMethodRule
    | PolicyUpdateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: Require this application to be served in an isolated browser for
   * users matching this policy. 'Client Web Isolation' must be on for the account in
   * order to use this feature.
   */
  isolation_required?: boolean;

  /**
   * Body param: The order of execution for this policy. Must be unique for each
   * policy.
   */
  precedence?: number;

  /**
   * Body param: A custom message that will appear on the purpose justification
   * screen.
   */
  purpose_justification_prompt?: string;

  /**
   * Body param: Require users to enter a justification when they log in to the
   * application.
   */
  purpose_justification_required?: boolean;

  /**
   * Body param: Rules evaluated with an AND logical operator. To match the policy, a
   * user must meet all of the Require rules.
   */
  require?: Array<
    | PolicyUpdateParams.AccessEmailRule
    | PolicyUpdateParams.AccessEmailListRule
    | PolicyUpdateParams.AccessDomainRule
    | PolicyUpdateParams.AccessEveryoneRule
    | PolicyUpdateParams.AccessIPRule
    | PolicyUpdateParams.AccessIPListRule
    | PolicyUpdateParams.AccessCertificateRule
    | PolicyUpdateParams.AccessAccessGroupRule
    | PolicyUpdateParams.AccessAzureGroupRule
    | PolicyUpdateParams.AccessGitHubOrganizationRule
    | PolicyUpdateParams.AccessGsuiteGroupRule
    | PolicyUpdateParams.AccessOktaGroupRule
    | PolicyUpdateParams.AccessSamlGroupRule
    | PolicyUpdateParams.AccessServiceTokenRule
    | PolicyUpdateParams.AccessAnyValidServiceTokenRule
    | PolicyUpdateParams.AccessExternalEvaluationRule
    | PolicyUpdateParams.AccessCountryRule
    | PolicyUpdateParams.AccessAuthenticationMethodRule
    | PolicyUpdateParams.AccessDevicePostureRule
  >;

  /**
   * Body param: The amount of time that tokens issued for the application will be
   * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
   * (or µs), ms, s, m, h.
   */
  session_duration?: string;
}

export namespace PolicyUpdateParams {
  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * A group of email addresses that can approve a temporary authentication request.
   */
  export interface ApprovalGroup {
    /**
     * The number of approvals needed to obtain access.
     */
    approvals_needed: number;

    /**
     * A list of emails that can approve the access request.
     */
    email_addresses?: Array<unknown>;

    /**
     * The UUID of an re-usable email list.
     */
    email_list_uuid?: string;
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface AccessEmailRule {
    email: AccessEmailRule.Email;
  }

  export namespace AccessEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface AccessEmailListRule {
    email_list: AccessEmailListRule.EmailList;
  }

  export namespace AccessEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface AccessDomainRule {
    email_domain: AccessDomainRule.EmailDomain;
  }

  export namespace AccessDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface AccessEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface AccessIPRule {
    ip: AccessIPRule.IP;
  }

  export namespace AccessIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface AccessIPListRule {
    ip_list: AccessIPListRule.IPList;
  }

  export namespace AccessIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface AccessCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface AccessAccessGroupRule {
    group: AccessAccessGroupRule.Group;
  }

  export namespace AccessAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface AccessAzureGroupRule {
    azureAD: AccessAzureGroupRule.AzureAd;
  }

  export namespace AccessAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface AccessGitHubOrganizationRule {
    'github-organization': AccessGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace AccessGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface AccessGsuiteGroupRule {
    gsuite: AccessGsuiteGroupRule.Gsuite;
  }

  export namespace AccessGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface AccessOktaGroupRule {
    okta: AccessOktaGroupRule.Okta;
  }

  export namespace AccessOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface AccessSamlGroupRule {
    saml: AccessSamlGroupRule.Saml;
  }

  export namespace AccessSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface AccessServiceTokenRule {
    service_token: AccessServiceTokenRule.ServiceToken;
  }

  export namespace AccessServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface AccessAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface AccessExternalEvaluationRule {
    external_evaluation: AccessExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace AccessExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface AccessCountryRule {
    geo: AccessCountryRule.Geo;
  }

  export namespace AccessCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface AccessAuthenticationMethodRule {
    auth_method: AccessAuthenticationMethodRule.AuthMethod;
  }

  export namespace AccessAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface AccessDevicePostureRule {
    device_posture: AccessDevicePostureRule.DevicePosture;
  }

  export namespace AccessDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export interface PolicyListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface PolicyDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface PolicyGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Policies {
  export import ZeroTrustPolicies = PoliciesAPI.ZeroTrustPolicies;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import ZeroTrustPoliciesSinglePage = PoliciesAPI.ZeroTrustPoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
