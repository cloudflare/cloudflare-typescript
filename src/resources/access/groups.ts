// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GroupsAPI from 'cloudflare/resources/access/groups';

export class Groups extends APIResource {
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
   * Creates a new Access group.
   */
  accessGroupsCreateAnAccessGroup(
    accountOrZone: string,
    accountOrZoneId: string,
    body: GroupAccessGroupsCreateAnAccessGroupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupAccessGroupsCreateAnAccessGroupResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/groups`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GroupAccessGroupsCreateAnAccessGroupResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access groups.
   */
  accessGroupsListAccessGroups(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupAccessGroupsListAccessGroupsResponse | null> {
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/access/groups`, options) as Core.APIPromise<{
        result: GroupAccessGroupsListAccessGroupsResponse | null;
      }>
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

export interface GroupDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface GroupAccessGroupsCreateAnAccessGroupResponse {
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
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDomainRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCountryRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include?: Array<
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDomainRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCountryRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDevicePostureRule
  >;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  is_default?: Array<
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDomainRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCountryRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDevicePostureRule
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
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDomainRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessIPListRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessCountryRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupResponse.AccessDevicePostureRule
  >;

  updated_at?: string;
}

export namespace GroupAccessGroupsCreateAnAccessGroupResponse {
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

export type GroupAccessGroupsListAccessGroupsResponse =
  Array<GroupAccessGroupsListAccessGroupsResponse.GroupAccessGroupsListAccessGroupsResponseItem>;

export namespace GroupAccessGroupsListAccessGroupsResponse {
  export interface GroupAccessGroupsListAccessGroupsResponseItem {
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
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDomainRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEveryoneRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCertificateRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAccessGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAzureGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGitHubOrganizationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGsuiteGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessOktaGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessSamlGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAnyValidServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessExternalEvaluationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCountryRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAuthenticationMethodRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDevicePostureRule
    >;

    /**
     * Rules evaluated with an OR logical operator. A user needs to meet only one of
     * the Include rules.
     */
    include?: Array<
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDomainRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEveryoneRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCertificateRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAccessGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAzureGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGitHubOrganizationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGsuiteGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessOktaGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessSamlGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAnyValidServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessExternalEvaluationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCountryRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAuthenticationMethodRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDevicePostureRule
    >;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    is_default?: Array<
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDomainRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEveryoneRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCertificateRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAccessGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAzureGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGitHubOrganizationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGsuiteGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessOktaGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessSamlGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAnyValidServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessExternalEvaluationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCountryRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAuthenticationMethodRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDevicePostureRule
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
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEmailListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDomainRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessEveryoneRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessIPListRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCertificateRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAccessGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAzureGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGitHubOrganizationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessGsuiteGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessOktaGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessSamlGroupRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAnyValidServiceTokenRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessExternalEvaluationRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessCountryRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessAuthenticationMethodRule
      | GroupAccessGroupsListAccessGroupsResponseItem.AccessDevicePostureRule
    >;

    updated_at?: string;
  }

  export namespace GroupAccessGroupsListAccessGroupsResponseItem {
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

export interface GroupAccessGroupsCreateAnAccessGroupParams {
  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include: Array<
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEmailRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessDomainRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessIPRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessIPListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessCountryRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessDevicePostureRule
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
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEmailRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessDomainRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessIPRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessIPListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessCountryRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessDevicePostureRule
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
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEmailRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessDomainRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessIPRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessIPListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessCountryRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupParams.AccessDevicePostureRule
  >;
}

export namespace GroupAccessGroupsCreateAnAccessGroupParams {
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
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import GroupAccessGroupsCreateAnAccessGroupResponse = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupResponse;
  export import GroupAccessGroupsListAccessGroupsResponse = GroupsAPI.GroupAccessGroupsListAccessGroupsResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupAccessGroupsCreateAnAccessGroupParams = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupParams;
}
