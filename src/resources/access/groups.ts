// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GroupsAPI from 'cloudflare/resources/access/groups';

export class Groups extends APIResource {
  /**
   * Creates a new Access group.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    body: GroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupCreateResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/groups`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GroupCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Access group.
   */
  update(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    body: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupUpdateResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/groups/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GroupUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access groups.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupListResponse | null> {
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/access/groups`, options) as Core.APIPromise<{
        result: GroupListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an Access group.
   */
  delete(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupDeleteResponse> {
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/groups/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: GroupDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access group.
   */
  get(
    accountOrZone: string,
    accountOrZoneId: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupGetResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/groups/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: GroupGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GroupCreateResponse {
  /**
   * UUID
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupCreateResponse.AccessEmailRule
    | GroupCreateResponse.AccessEmailListRule
    | GroupCreateResponse.AccessDomainRule
    | GroupCreateResponse.AccessEveryoneRule
    | GroupCreateResponse.AccessIPRule
    | GroupCreateResponse.AccessIPListRule
    | GroupCreateResponse.AccessCertificateRule
    | GroupCreateResponse.AccessAccessGroupRule
    | GroupCreateResponse.AccessAzureGroupRule
    | GroupCreateResponse.AccessGitHubOrganizationRule
    | GroupCreateResponse.AccessGsuiteGroupRule
    | GroupCreateResponse.AccessOktaGroupRule
    | GroupCreateResponse.AccessSamlGroupRule
    | GroupCreateResponse.AccessServiceTokenRule
    | GroupCreateResponse.AccessAnyValidServiceTokenRule
    | GroupCreateResponse.AccessExternalEvaluationRule
    | GroupCreateResponse.AccessCountryRule
    | GroupCreateResponse.AccessAuthenticationMethodRule
    | GroupCreateResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<
    | GroupCreateResponse.AccessEmailRule
    | GroupCreateResponse.AccessEmailListRule
    | GroupCreateResponse.AccessDomainRule
    | GroupCreateResponse.AccessEveryoneRule
    | GroupCreateResponse.AccessIPRule
    | GroupCreateResponse.AccessIPListRule
    | GroupCreateResponse.AccessCertificateRule
    | GroupCreateResponse.AccessAccessGroupRule
    | GroupCreateResponse.AccessAzureGroupRule
    | GroupCreateResponse.AccessGitHubOrganizationRule
    | GroupCreateResponse.AccessGsuiteGroupRule
    | GroupCreateResponse.AccessOktaGroupRule
    | GroupCreateResponse.AccessSamlGroupRule
    | GroupCreateResponse.AccessServiceTokenRule
    | GroupCreateResponse.AccessAnyValidServiceTokenRule
    | GroupCreateResponse.AccessExternalEvaluationRule
    | GroupCreateResponse.AccessCountryRule
    | GroupCreateResponse.AccessAuthenticationMethodRule
    | GroupCreateResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<
    | GroupCreateResponse.AccessEmailRule
    | GroupCreateResponse.AccessEmailListRule
    | GroupCreateResponse.AccessDomainRule
    | GroupCreateResponse.AccessEveryoneRule
    | GroupCreateResponse.AccessIPRule
    | GroupCreateResponse.AccessIPListRule
    | GroupCreateResponse.AccessCertificateRule
    | GroupCreateResponse.AccessAccessGroupRule
    | GroupCreateResponse.AccessAzureGroupRule
    | GroupCreateResponse.AccessGitHubOrganizationRule
    | GroupCreateResponse.AccessGsuiteGroupRule
    | GroupCreateResponse.AccessOktaGroupRule
    | GroupCreateResponse.AccessSamlGroupRule
    | GroupCreateResponse.AccessServiceTokenRule
    | GroupCreateResponse.AccessAnyValidServiceTokenRule
    | GroupCreateResponse.AccessExternalEvaluationRule
    | GroupCreateResponse.AccessCountryRule
    | GroupCreateResponse.AccessAuthenticationMethodRule
    | GroupCreateResponse.AccessDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | GroupCreateResponse.AccessEmailRule
    | GroupCreateResponse.AccessEmailListRule
    | GroupCreateResponse.AccessDomainRule
    | GroupCreateResponse.AccessEveryoneRule
    | GroupCreateResponse.AccessIPRule
    | GroupCreateResponse.AccessIPListRule
    | GroupCreateResponse.AccessCertificateRule
    | GroupCreateResponse.AccessAccessGroupRule
    | GroupCreateResponse.AccessAzureGroupRule
    | GroupCreateResponse.AccessGitHubOrganizationRule
    | GroupCreateResponse.AccessGsuiteGroupRule
    | GroupCreateResponse.AccessOktaGroupRule
    | GroupCreateResponse.AccessSamlGroupRule
    | GroupCreateResponse.AccessServiceTokenRule
    | GroupCreateResponse.AccessAnyValidServiceTokenRule
    | GroupCreateResponse.AccessExternalEvaluationRule
    | GroupCreateResponse.AccessCountryRule
    | GroupCreateResponse.AccessAuthenticationMethodRule
    | GroupCreateResponse.AccessDevicePostureRule
  >;

  updated_at?: string;
}

export namespace GroupCreateResponse {
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

export interface GroupUpdateResponse {
  /**
   * UUID
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupUpdateResponse.AccessEmailRule
    | GroupUpdateResponse.AccessEmailListRule
    | GroupUpdateResponse.AccessDomainRule
    | GroupUpdateResponse.AccessEveryoneRule
    | GroupUpdateResponse.AccessIPRule
    | GroupUpdateResponse.AccessIPListRule
    | GroupUpdateResponse.AccessCertificateRule
    | GroupUpdateResponse.AccessAccessGroupRule
    | GroupUpdateResponse.AccessAzureGroupRule
    | GroupUpdateResponse.AccessGitHubOrganizationRule
    | GroupUpdateResponse.AccessGsuiteGroupRule
    | GroupUpdateResponse.AccessOktaGroupRule
    | GroupUpdateResponse.AccessSamlGroupRule
    | GroupUpdateResponse.AccessServiceTokenRule
    | GroupUpdateResponse.AccessAnyValidServiceTokenRule
    | GroupUpdateResponse.AccessExternalEvaluationRule
    | GroupUpdateResponse.AccessCountryRule
    | GroupUpdateResponse.AccessAuthenticationMethodRule
    | GroupUpdateResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<
    | GroupUpdateResponse.AccessEmailRule
    | GroupUpdateResponse.AccessEmailListRule
    | GroupUpdateResponse.AccessDomainRule
    | GroupUpdateResponse.AccessEveryoneRule
    | GroupUpdateResponse.AccessIPRule
    | GroupUpdateResponse.AccessIPListRule
    | GroupUpdateResponse.AccessCertificateRule
    | GroupUpdateResponse.AccessAccessGroupRule
    | GroupUpdateResponse.AccessAzureGroupRule
    | GroupUpdateResponse.AccessGitHubOrganizationRule
    | GroupUpdateResponse.AccessGsuiteGroupRule
    | GroupUpdateResponse.AccessOktaGroupRule
    | GroupUpdateResponse.AccessSamlGroupRule
    | GroupUpdateResponse.AccessServiceTokenRule
    | GroupUpdateResponse.AccessAnyValidServiceTokenRule
    | GroupUpdateResponse.AccessExternalEvaluationRule
    | GroupUpdateResponse.AccessCountryRule
    | GroupUpdateResponse.AccessAuthenticationMethodRule
    | GroupUpdateResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<
    | GroupUpdateResponse.AccessEmailRule
    | GroupUpdateResponse.AccessEmailListRule
    | GroupUpdateResponse.AccessDomainRule
    | GroupUpdateResponse.AccessEveryoneRule
    | GroupUpdateResponse.AccessIPRule
    | GroupUpdateResponse.AccessIPListRule
    | GroupUpdateResponse.AccessCertificateRule
    | GroupUpdateResponse.AccessAccessGroupRule
    | GroupUpdateResponse.AccessAzureGroupRule
    | GroupUpdateResponse.AccessGitHubOrganizationRule
    | GroupUpdateResponse.AccessGsuiteGroupRule
    | GroupUpdateResponse.AccessOktaGroupRule
    | GroupUpdateResponse.AccessSamlGroupRule
    | GroupUpdateResponse.AccessServiceTokenRule
    | GroupUpdateResponse.AccessAnyValidServiceTokenRule
    | GroupUpdateResponse.AccessExternalEvaluationRule
    | GroupUpdateResponse.AccessCountryRule
    | GroupUpdateResponse.AccessAuthenticationMethodRule
    | GroupUpdateResponse.AccessDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | GroupUpdateResponse.AccessEmailRule
    | GroupUpdateResponse.AccessEmailListRule
    | GroupUpdateResponse.AccessDomainRule
    | GroupUpdateResponse.AccessEveryoneRule
    | GroupUpdateResponse.AccessIPRule
    | GroupUpdateResponse.AccessIPListRule
    | GroupUpdateResponse.AccessCertificateRule
    | GroupUpdateResponse.AccessAccessGroupRule
    | GroupUpdateResponse.AccessAzureGroupRule
    | GroupUpdateResponse.AccessGitHubOrganizationRule
    | GroupUpdateResponse.AccessGsuiteGroupRule
    | GroupUpdateResponse.AccessOktaGroupRule
    | GroupUpdateResponse.AccessSamlGroupRule
    | GroupUpdateResponse.AccessServiceTokenRule
    | GroupUpdateResponse.AccessAnyValidServiceTokenRule
    | GroupUpdateResponse.AccessExternalEvaluationRule
    | GroupUpdateResponse.AccessCountryRule
    | GroupUpdateResponse.AccessAuthenticationMethodRule
    | GroupUpdateResponse.AccessDevicePostureRule
  >;

  updated_at?: string;
}

export namespace GroupUpdateResponse {
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

export type GroupListResponse = Array<GroupListResponse.GroupListResponseItem>;

export namespace GroupListResponse {
  export interface GroupListResponseItem {
    /**
     * UUID
     */
    id?: string;

    created_at?: string;

    /**
     * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
     * meet any of the Exclude rules.
     */
    exclude?: Array<
      | GroupListResponseItem.AccessEmailRule
      | GroupListResponseItem.AccessEmailListRule
      | GroupListResponseItem.AccessDomainRule
      | GroupListResponseItem.AccessEveryoneRule
      | GroupListResponseItem.AccessIPRule
      | GroupListResponseItem.AccessIPListRule
      | GroupListResponseItem.AccessCertificateRule
      | GroupListResponseItem.AccessAccessGroupRule
      | GroupListResponseItem.AccessAzureGroupRule
      | GroupListResponseItem.AccessGitHubOrganizationRule
      | GroupListResponseItem.AccessGsuiteGroupRule
      | GroupListResponseItem.AccessOktaGroupRule
      | GroupListResponseItem.AccessSamlGroupRule
      | GroupListResponseItem.AccessServiceTokenRule
      | GroupListResponseItem.AccessAnyValidServiceTokenRule
      | GroupListResponseItem.AccessExternalEvaluationRule
      | GroupListResponseItem.AccessCountryRule
      | GroupListResponseItem.AccessAuthenticationMethodRule
      | GroupListResponseItem.AccessDevicePostureRule
    >;

    /**
     * Rules evaluated with an OR logical operator. A user needs to meet only one of
     * the Include rules.
     */
    include?: Array<
      | GroupListResponseItem.AccessEmailRule
      | GroupListResponseItem.AccessEmailListRule
      | GroupListResponseItem.AccessDomainRule
      | GroupListResponseItem.AccessEveryoneRule
      | GroupListResponseItem.AccessIPRule
      | GroupListResponseItem.AccessIPListRule
      | GroupListResponseItem.AccessCertificateRule
      | GroupListResponseItem.AccessAccessGroupRule
      | GroupListResponseItem.AccessAzureGroupRule
      | GroupListResponseItem.AccessGitHubOrganizationRule
      | GroupListResponseItem.AccessGsuiteGroupRule
      | GroupListResponseItem.AccessOktaGroupRule
      | GroupListResponseItem.AccessSamlGroupRule
      | GroupListResponseItem.AccessServiceTokenRule
      | GroupListResponseItem.AccessAnyValidServiceTokenRule
      | GroupListResponseItem.AccessExternalEvaluationRule
      | GroupListResponseItem.AccessCountryRule
      | GroupListResponseItem.AccessAuthenticationMethodRule
      | GroupListResponseItem.AccessDevicePostureRule
    >;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    is_default?: Array<
      | GroupListResponseItem.AccessEmailRule
      | GroupListResponseItem.AccessEmailListRule
      | GroupListResponseItem.AccessDomainRule
      | GroupListResponseItem.AccessEveryoneRule
      | GroupListResponseItem.AccessIPRule
      | GroupListResponseItem.AccessIPListRule
      | GroupListResponseItem.AccessCertificateRule
      | GroupListResponseItem.AccessAccessGroupRule
      | GroupListResponseItem.AccessAzureGroupRule
      | GroupListResponseItem.AccessGitHubOrganizationRule
      | GroupListResponseItem.AccessGsuiteGroupRule
      | GroupListResponseItem.AccessOktaGroupRule
      | GroupListResponseItem.AccessSamlGroupRule
      | GroupListResponseItem.AccessServiceTokenRule
      | GroupListResponseItem.AccessAnyValidServiceTokenRule
      | GroupListResponseItem.AccessExternalEvaluationRule
      | GroupListResponseItem.AccessCountryRule
      | GroupListResponseItem.AccessAuthenticationMethodRule
      | GroupListResponseItem.AccessDevicePostureRule
    >;

    /**
     * The name of the Access group.
     */
    name?: string;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    require?: Array<
      | GroupListResponseItem.AccessEmailRule
      | GroupListResponseItem.AccessEmailListRule
      | GroupListResponseItem.AccessDomainRule
      | GroupListResponseItem.AccessEveryoneRule
      | GroupListResponseItem.AccessIPRule
      | GroupListResponseItem.AccessIPListRule
      | GroupListResponseItem.AccessCertificateRule
      | GroupListResponseItem.AccessAccessGroupRule
      | GroupListResponseItem.AccessAzureGroupRule
      | GroupListResponseItem.AccessGitHubOrganizationRule
      | GroupListResponseItem.AccessGsuiteGroupRule
      | GroupListResponseItem.AccessOktaGroupRule
      | GroupListResponseItem.AccessSamlGroupRule
      | GroupListResponseItem.AccessServiceTokenRule
      | GroupListResponseItem.AccessAnyValidServiceTokenRule
      | GroupListResponseItem.AccessExternalEvaluationRule
      | GroupListResponseItem.AccessCountryRule
      | GroupListResponseItem.AccessAuthenticationMethodRule
      | GroupListResponseItem.AccessDevicePostureRule
    >;

    updated_at?: string;
  }

  export namespace GroupListResponseItem {
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
}

export interface GroupDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface GroupGetResponse {
  /**
   * UUID
   */
  id?: string;

  created_at?: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupGetResponse.AccessEmailRule
    | GroupGetResponse.AccessEmailListRule
    | GroupGetResponse.AccessDomainRule
    | GroupGetResponse.AccessEveryoneRule
    | GroupGetResponse.AccessIPRule
    | GroupGetResponse.AccessIPListRule
    | GroupGetResponse.AccessCertificateRule
    | GroupGetResponse.AccessAccessGroupRule
    | GroupGetResponse.AccessAzureGroupRule
    | GroupGetResponse.AccessGitHubOrganizationRule
    | GroupGetResponse.AccessGsuiteGroupRule
    | GroupGetResponse.AccessOktaGroupRule
    | GroupGetResponse.AccessSamlGroupRule
    | GroupGetResponse.AccessServiceTokenRule
    | GroupGetResponse.AccessAnyValidServiceTokenRule
    | GroupGetResponse.AccessExternalEvaluationRule
    | GroupGetResponse.AccessCountryRule
    | GroupGetResponse.AccessAuthenticationMethodRule
    | GroupGetResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<
    | GroupGetResponse.AccessEmailRule
    | GroupGetResponse.AccessEmailListRule
    | GroupGetResponse.AccessDomainRule
    | GroupGetResponse.AccessEveryoneRule
    | GroupGetResponse.AccessIPRule
    | GroupGetResponse.AccessIPListRule
    | GroupGetResponse.AccessCertificateRule
    | GroupGetResponse.AccessAccessGroupRule
    | GroupGetResponse.AccessAzureGroupRule
    | GroupGetResponse.AccessGitHubOrganizationRule
    | GroupGetResponse.AccessGsuiteGroupRule
    | GroupGetResponse.AccessOktaGroupRule
    | GroupGetResponse.AccessSamlGroupRule
    | GroupGetResponse.AccessServiceTokenRule
    | GroupGetResponse.AccessAnyValidServiceTokenRule
    | GroupGetResponse.AccessExternalEvaluationRule
    | GroupGetResponse.AccessCountryRule
    | GroupGetResponse.AccessAuthenticationMethodRule
    | GroupGetResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<
    | GroupGetResponse.AccessEmailRule
    | GroupGetResponse.AccessEmailListRule
    | GroupGetResponse.AccessDomainRule
    | GroupGetResponse.AccessEveryoneRule
    | GroupGetResponse.AccessIPRule
    | GroupGetResponse.AccessIPListRule
    | GroupGetResponse.AccessCertificateRule
    | GroupGetResponse.AccessAccessGroupRule
    | GroupGetResponse.AccessAzureGroupRule
    | GroupGetResponse.AccessGitHubOrganizationRule
    | GroupGetResponse.AccessGsuiteGroupRule
    | GroupGetResponse.AccessOktaGroupRule
    | GroupGetResponse.AccessSamlGroupRule
    | GroupGetResponse.AccessServiceTokenRule
    | GroupGetResponse.AccessAnyValidServiceTokenRule
    | GroupGetResponse.AccessExternalEvaluationRule
    | GroupGetResponse.AccessCountryRule
    | GroupGetResponse.AccessAuthenticationMethodRule
    | GroupGetResponse.AccessDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name?: string;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | GroupGetResponse.AccessEmailRule
    | GroupGetResponse.AccessEmailListRule
    | GroupGetResponse.AccessDomainRule
    | GroupGetResponse.AccessEveryoneRule
    | GroupGetResponse.AccessIPRule
    | GroupGetResponse.AccessIPListRule
    | GroupGetResponse.AccessCertificateRule
    | GroupGetResponse.AccessAccessGroupRule
    | GroupGetResponse.AccessAzureGroupRule
    | GroupGetResponse.AccessGitHubOrganizationRule
    | GroupGetResponse.AccessGsuiteGroupRule
    | GroupGetResponse.AccessOktaGroupRule
    | GroupGetResponse.AccessSamlGroupRule
    | GroupGetResponse.AccessServiceTokenRule
    | GroupGetResponse.AccessAnyValidServiceTokenRule
    | GroupGetResponse.AccessExternalEvaluationRule
    | GroupGetResponse.AccessCountryRule
    | GroupGetResponse.AccessAuthenticationMethodRule
    | GroupGetResponse.AccessDevicePostureRule
  >;

  updated_at?: string;
}

export namespace GroupGetResponse {
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

export interface GroupCreateParams {
  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include: Array<
    | GroupCreateParams.AccessEmailRule
    | GroupCreateParams.AccessEmailListRule
    | GroupCreateParams.AccessDomainRule
    | GroupCreateParams.AccessEveryoneRule
    | GroupCreateParams.AccessIPRule
    | GroupCreateParams.AccessIPListRule
    | GroupCreateParams.AccessCertificateRule
    | GroupCreateParams.AccessAccessGroupRule
    | GroupCreateParams.AccessAzureGroupRule
    | GroupCreateParams.AccessGitHubOrganizationRule
    | GroupCreateParams.AccessGsuiteGroupRule
    | GroupCreateParams.AccessOktaGroupRule
    | GroupCreateParams.AccessSamlGroupRule
    | GroupCreateParams.AccessServiceTokenRule
    | GroupCreateParams.AccessAnyValidServiceTokenRule
    | GroupCreateParams.AccessExternalEvaluationRule
    | GroupCreateParams.AccessCountryRule
    | GroupCreateParams.AccessAuthenticationMethodRule
    | GroupCreateParams.AccessDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupCreateParams.AccessEmailRule
    | GroupCreateParams.AccessEmailListRule
    | GroupCreateParams.AccessDomainRule
    | GroupCreateParams.AccessEveryoneRule
    | GroupCreateParams.AccessIPRule
    | GroupCreateParams.AccessIPListRule
    | GroupCreateParams.AccessCertificateRule
    | GroupCreateParams.AccessAccessGroupRule
    | GroupCreateParams.AccessAzureGroupRule
    | GroupCreateParams.AccessGitHubOrganizationRule
    | GroupCreateParams.AccessGsuiteGroupRule
    | GroupCreateParams.AccessOktaGroupRule
    | GroupCreateParams.AccessSamlGroupRule
    | GroupCreateParams.AccessServiceTokenRule
    | GroupCreateParams.AccessAnyValidServiceTokenRule
    | GroupCreateParams.AccessExternalEvaluationRule
    | GroupCreateParams.AccessCountryRule
    | GroupCreateParams.AccessAuthenticationMethodRule
    | GroupCreateParams.AccessDevicePostureRule
  >;

  /**
   * Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | GroupCreateParams.AccessEmailRule
    | GroupCreateParams.AccessEmailListRule
    | GroupCreateParams.AccessDomainRule
    | GroupCreateParams.AccessEveryoneRule
    | GroupCreateParams.AccessIPRule
    | GroupCreateParams.AccessIPListRule
    | GroupCreateParams.AccessCertificateRule
    | GroupCreateParams.AccessAccessGroupRule
    | GroupCreateParams.AccessAzureGroupRule
    | GroupCreateParams.AccessGitHubOrganizationRule
    | GroupCreateParams.AccessGsuiteGroupRule
    | GroupCreateParams.AccessOktaGroupRule
    | GroupCreateParams.AccessSamlGroupRule
    | GroupCreateParams.AccessServiceTokenRule
    | GroupCreateParams.AccessAnyValidServiceTokenRule
    | GroupCreateParams.AccessExternalEvaluationRule
    | GroupCreateParams.AccessCountryRule
    | GroupCreateParams.AccessAuthenticationMethodRule
    | GroupCreateParams.AccessDevicePostureRule
  >;
}

export namespace GroupCreateParams {
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

export interface GroupUpdateParams {
  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include: Array<
    | GroupUpdateParams.AccessEmailRule
    | GroupUpdateParams.AccessEmailListRule
    | GroupUpdateParams.AccessDomainRule
    | GroupUpdateParams.AccessEveryoneRule
    | GroupUpdateParams.AccessIPRule
    | GroupUpdateParams.AccessIPListRule
    | GroupUpdateParams.AccessCertificateRule
    | GroupUpdateParams.AccessAccessGroupRule
    | GroupUpdateParams.AccessAzureGroupRule
    | GroupUpdateParams.AccessGitHubOrganizationRule
    | GroupUpdateParams.AccessGsuiteGroupRule
    | GroupUpdateParams.AccessOktaGroupRule
    | GroupUpdateParams.AccessSamlGroupRule
    | GroupUpdateParams.AccessServiceTokenRule
    | GroupUpdateParams.AccessAnyValidServiceTokenRule
    | GroupUpdateParams.AccessExternalEvaluationRule
    | GroupUpdateParams.AccessCountryRule
    | GroupUpdateParams.AccessAuthenticationMethodRule
    | GroupUpdateParams.AccessDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupUpdateParams.AccessEmailRule
    | GroupUpdateParams.AccessEmailListRule
    | GroupUpdateParams.AccessDomainRule
    | GroupUpdateParams.AccessEveryoneRule
    | GroupUpdateParams.AccessIPRule
    | GroupUpdateParams.AccessIPListRule
    | GroupUpdateParams.AccessCertificateRule
    | GroupUpdateParams.AccessAccessGroupRule
    | GroupUpdateParams.AccessAzureGroupRule
    | GroupUpdateParams.AccessGitHubOrganizationRule
    | GroupUpdateParams.AccessGsuiteGroupRule
    | GroupUpdateParams.AccessOktaGroupRule
    | GroupUpdateParams.AccessSamlGroupRule
    | GroupUpdateParams.AccessServiceTokenRule
    | GroupUpdateParams.AccessAnyValidServiceTokenRule
    | GroupUpdateParams.AccessExternalEvaluationRule
    | GroupUpdateParams.AccessCountryRule
    | GroupUpdateParams.AccessAuthenticationMethodRule
    | GroupUpdateParams.AccessDevicePostureRule
  >;

  /**
   * Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | GroupUpdateParams.AccessEmailRule
    | GroupUpdateParams.AccessEmailListRule
    | GroupUpdateParams.AccessDomainRule
    | GroupUpdateParams.AccessEveryoneRule
    | GroupUpdateParams.AccessIPRule
    | GroupUpdateParams.AccessIPListRule
    | GroupUpdateParams.AccessCertificateRule
    | GroupUpdateParams.AccessAccessGroupRule
    | GroupUpdateParams.AccessAzureGroupRule
    | GroupUpdateParams.AccessGitHubOrganizationRule
    | GroupUpdateParams.AccessGsuiteGroupRule
    | GroupUpdateParams.AccessOktaGroupRule
    | GroupUpdateParams.AccessSamlGroupRule
    | GroupUpdateParams.AccessServiceTokenRule
    | GroupUpdateParams.AccessAnyValidServiceTokenRule
    | GroupUpdateParams.AccessExternalEvaluationRule
    | GroupUpdateParams.AccessCountryRule
    | GroupUpdateParams.AccessAuthenticationMethodRule
    | GroupUpdateParams.AccessDevicePostureRule
  >;
}

export namespace GroupUpdateParams {
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

export namespace Groups {
  export import GroupCreateResponse = GroupsAPI.GroupCreateResponse;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupListResponse = GroupsAPI.GroupListResponse;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupCreateParams = GroupsAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
}
