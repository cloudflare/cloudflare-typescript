// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PoliciesAPI from '../policies';
import * as ApplicationsAPI from './applications';
import { APIPromise } from '../../../../core/api-promise';
import { CloudflareError } from '../../../../core/error';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Policies extends APIResource {
  /**
   * Creates a policy applying exclusive to a single application that defines the
   * users or groups who can reach it. We recommend creating a reusable policy
   * instead and subsequently referencing its ID in the application's 'policies'
   * array.
   */
  create(
    appID: string,
    params: PolicyCreateParams,
    options?: RequestOptions,
  ): APIPromise<PolicyCreateResponse> {
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
      this._client.post(path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/policies`, {
        body,
        ...options,
      }) as APIPromise<{ result: PolicyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Access policy specific to an application. To update a reusable
   * policy, use the /account or zones/{account or zone_id}/policies/{uid} endpoint.
   */
  update(
    policyID: string,
    params: PolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PolicyUpdateResponse> {
    const { app_id, account_id, zone_id, ...body } = params;
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
      this._client.put(
        path`/${accountOrZone}/${accountOrZoneId}/access/apps/${app_id}/policies/${policyID}`,
        { body, ...options },
      ) as APIPromise<{ result: PolicyUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Access policies configured for an application. Returns both exclusively
   * scoped and reusable policies used by the application.
   */
  list(
    appID: string,
    params: PolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PolicyListResponsesSinglePage, PolicyListResponse> {
    const { account_id, zone_id } = params ?? {};
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
      path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/policies`,
      SinglePage<PolicyListResponse>,
      options,
    );
  }

  /**
   * Deletes an Access policy specific to an application. To delete a reusable
   * policy, use the /account or zones/{account or zone_id}/policies/{uid} endpoint.
   */
  delete(
    policyID: string,
    params: PolicyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PolicyDeleteResponse> {
    const { app_id, account_id, zone_id } = params;
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
        path`/${accountOrZone}/${accountOrZoneId}/access/apps/${app_id}/policies/${policyID}`,
        options,
      ) as APIPromise<{ result: PolicyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Access policy configured for an application. Returns both
   * exclusively owned and reusable policies used by the application.
   */
  get(policyID: string, params: PolicyGetParams, options?: RequestOptions): APIPromise<PolicyGetResponse> {
    const { app_id, account_id, zone_id } = params;
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
        path`/${accountOrZone}/${accountOrZoneId}/access/apps/${app_id}/policies/${policyID}`,
        options,
      ) as APIPromise<{ result: PolicyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PolicyListResponsesSinglePage = SinglePage<PolicyListResponse>;

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
 * Enforces a device posture rule has run successfully
 */
export interface AccessDevicePostureRuleParam {
  device_posture: AccessDevicePostureRuleParam.DevicePosture;
}

export namespace AccessDevicePostureRuleParam {
  export interface DevicePosture {
    /**
     * The ID of a device posture integration.
     */
    integration_uid: string;
  }
}

/**
 * Matches an Access group.
 */
export type AccessRule =
  | GroupRule
  | AnyValidServiceTokenRule
  | AccessRule.AccessAuthContextRule
  | AuthenticationMethodRule
  | AzureGroupRule
  | CertificateRule
  | AccessRule.AccessCommonNameRule
  | CountryRule
  | AccessDevicePostureRule
  | DomainRule
  | EmailListRule
  | EmailRule
  | EveryoneRule
  | ExternalEvaluationRule
  | GitHubOrganizationRule
  | GSuiteGroupRule
  | AccessRule.AccessLoginMethodRule
  | IPListRule
  | IPRule
  | OktaGroupRule
  | SAMLGroupRule
  | ServiceTokenRule;

export namespace AccessRule {
  /**
   * Matches an Azure Authentication Context. Requires an Azure identity provider.
   */
  export interface AccessAuthContextRule {
    auth_context: AccessAuthContextRule.AuthContext;
  }

  export namespace AccessAuthContextRule {
    export interface AuthContext {
      /**
       * The ID of an Authentication context.
       */
      id: string;

      /**
       * The ACID of an Authentication context.
       */
      ac_id: string;

      /**
       * The ID of your Azure identity provider.
       */
      identity_provider_id: string;
    }
  }

  /**
   * Matches a specific common name.
   */
  export interface AccessCommonNameRule {
    common_name: AccessCommonNameRule.CommonName;
  }

  export namespace AccessCommonNameRule {
    export interface CommonName {
      /**
       * The common name to match.
       */
      common_name: string;
    }
  }

  /**
   * Matches a specific identity provider id.
   */
  export interface AccessLoginMethodRule {
    login_method: AccessLoginMethodRule.LoginMethod;
  }

  export namespace AccessLoginMethodRule {
    export interface LoginMethod {
      /**
       * The ID of an identity provider.
       */
      id: string;
    }
  }
}

/**
 * Matches an Access group.
 */
export type AccessRuleParam =
  | GroupRuleParam
  | AnyValidServiceTokenRuleParam
  | AccessRuleParam.AccessAuthContextRule
  | AuthenticationMethodRuleParam
  | AzureGroupRuleParam
  | CertificateRuleParam
  | AccessRuleParam.AccessCommonNameRule
  | CountryRuleParam
  | AccessDevicePostureRuleParam
  | DomainRuleParam
  | EmailListRuleParam
  | EmailRuleParam
  | EveryoneRuleParam
  | ExternalEvaluationRuleParam
  | GitHubOrganizationRuleParam
  | GSuiteGroupRuleParam
  | AccessRuleParam.AccessLoginMethodRule
  | IPListRuleParam
  | IPRuleParam
  | OktaGroupRuleParam
  | SAMLGroupRuleParam
  | ServiceTokenRuleParam;

export namespace AccessRuleParam {
  /**
   * Matches an Azure Authentication Context. Requires an Azure identity provider.
   */
  export interface AccessAuthContextRule {
    auth_context: AccessAuthContextRule.AuthContext;
  }

  export namespace AccessAuthContextRule {
    export interface AuthContext {
      /**
       * The ID of an Authentication context.
       */
      id: string;

      /**
       * The ACID of an Authentication context.
       */
      ac_id: string;

      /**
       * The ID of your Azure identity provider.
       */
      identity_provider_id: string;
    }
  }

  /**
   * Matches a specific common name.
   */
  export interface AccessCommonNameRule {
    common_name: AccessCommonNameRule.CommonName;
  }

  export namespace AccessCommonNameRule {
    export interface CommonName {
      /**
       * The common name to match.
       */
      common_name: string;
    }
  }

  /**
   * Matches a specific identity provider id.
   */
  export interface AccessLoginMethodRule {
    login_method: AccessLoginMethodRule.LoginMethod;
  }

  export namespace AccessLoginMethodRule {
    export interface LoginMethod {
      /**
       * The ID of an identity provider.
       */
      id: string;
    }
  }
}

/**
 * Matches any valid Access Service Token
 */
export interface AnyValidServiceTokenRule {
  /**
   * An empty object which matches on all service tokens.
   */
  any_valid_service_token: AnyValidServiceTokenRule.AnyValidServiceToken;
}

export namespace AnyValidServiceTokenRule {
  /**
   * An empty object which matches on all service tokens.
   */
  export interface AnyValidServiceToken {}
}

/**
 * Matches any valid Access Service Token
 */
export interface AnyValidServiceTokenRuleParam {
  /**
   * An empty object which matches on all service tokens.
   */
  any_valid_service_token: AnyValidServiceTokenRuleParam.AnyValidServiceToken;
}

export namespace AnyValidServiceTokenRuleParam {
  /**
   * An empty object which matches on all service tokens.
   */
  export interface AnyValidServiceToken {}
}

/**
 * Enforce different MFA options
 */
export interface AuthenticationMethodRule {
  auth_method: AuthenticationMethodRule.AuthMethod;
}

export namespace AuthenticationMethodRule {
  export interface AuthMethod {
    /**
     * The type of authentication method
     * https://datatracker.ietf.org/doc/html/rfc8176#section-2.
     */
    auth_method: string;
  }
}

/**
 * Enforce different MFA options
 */
export interface AuthenticationMethodRuleParam {
  auth_method: AuthenticationMethodRuleParam.AuthMethod;
}

export namespace AuthenticationMethodRuleParam {
  export interface AuthMethod {
    /**
     * The type of authentication method
     * https://datatracker.ietf.org/doc/html/rfc8176#section-2.
     */
    auth_method: string;
  }
}

/**
 * Matches an Azure group. Requires an Azure identity provider.
 */
export interface AzureGroupRule {
  azureAD: AzureGroupRule.AzureAD;
}

export namespace AzureGroupRule {
  export interface AzureAD {
    /**
     * The ID of an Azure group.
     */
    id: string;

    /**
     * The ID of your Azure identity provider.
     */
    identity_provider_id: string;
  }
}

/**
 * Matches an Azure group. Requires an Azure identity provider.
 */
export interface AzureGroupRuleParam {
  azureAD: AzureGroupRuleParam.AzureAD;
}

export namespace AzureGroupRuleParam {
  export interface AzureAD {
    /**
     * The ID of an Azure group.
     */
    id: string;

    /**
     * The ID of your Azure identity provider.
     */
    identity_provider_id: string;
  }
}

/**
 * Matches any valid client certificate.
 */
export interface CertificateRule {
  certificate: CertificateRule.Certificate;
}

export namespace CertificateRule {
  export interface Certificate {}
}

/**
 * Matches any valid client certificate.
 */
export interface CertificateRuleParam {
  certificate: CertificateRuleParam.Certificate;
}

export namespace CertificateRuleParam {
  export interface Certificate {}
}

/**
 * Matches a specific country
 */
export interface CountryRule {
  geo: CountryRule.Geo;
}

export namespace CountryRule {
  export interface Geo {
    /**
     * The country code that should be matched.
     */
    country_code: string;
  }
}

/**
 * Matches a specific country
 */
export interface CountryRuleParam {
  geo: CountryRuleParam.Geo;
}

export namespace CountryRuleParam {
  export interface Geo {
    /**
     * The country code that should be matched.
     */
    country_code: string;
  }
}

/**
 * Match an entire email domain.
 */
export interface DomainRule {
  email_domain: DomainRule.EmailDomain;
}

export namespace DomainRule {
  export interface EmailDomain {
    /**
     * The email domain to match.
     */
    domain: string;
  }
}

/**
 * Match an entire email domain.
 */
export interface DomainRuleParam {
  email_domain: DomainRuleParam.EmailDomain;
}

export namespace DomainRuleParam {
  export interface EmailDomain {
    /**
     * The email domain to match.
     */
    domain: string;
  }
}

/**
 * Matches an email address from a list.
 */
export interface EmailListRule {
  email_list: EmailListRule.EmailList;
}

export namespace EmailListRule {
  export interface EmailList {
    /**
     * The ID of a previously created email list.
     */
    id: string;
  }
}

/**
 * Matches an email address from a list.
 */
export interface EmailListRuleParam {
  email_list: EmailListRuleParam.EmailList;
}

export namespace EmailListRuleParam {
  export interface EmailList {
    /**
     * The ID of a previously created email list.
     */
    id: string;
  }
}

/**
 * Matches a specific email.
 */
export interface EmailRule {
  email: EmailRule.Email;
}

export namespace EmailRule {
  export interface Email {
    /**
     * The email of the user.
     */
    email: string;
  }
}

/**
 * Matches a specific email.
 */
export interface EmailRuleParam {
  email: EmailRuleParam.Email;
}

export namespace EmailRuleParam {
  export interface Email {
    /**
     * The email of the user.
     */
    email: string;
  }
}

/**
 * Matches everyone.
 */
export interface EveryoneRule {
  /**
   * An empty object which matches on all users.
   */
  everyone: EveryoneRule.Everyone;
}

export namespace EveryoneRule {
  /**
   * An empty object which matches on all users.
   */
  export interface Everyone {}
}

/**
 * Matches everyone.
 */
export interface EveryoneRuleParam {
  /**
   * An empty object which matches on all users.
   */
  everyone: EveryoneRuleParam.Everyone;
}

export namespace EveryoneRuleParam {
  /**
   * An empty object which matches on all users.
   */
  export interface Everyone {}
}

/**
 * Create Allow or Block policies which evaluate the user based on custom criteria.
 */
export interface ExternalEvaluationRule {
  external_evaluation: ExternalEvaluationRule.ExternalEvaluation;
}

export namespace ExternalEvaluationRule {
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
 * Create Allow or Block policies which evaluate the user based on custom criteria.
 */
export interface ExternalEvaluationRuleParam {
  external_evaluation: ExternalEvaluationRuleParam.ExternalEvaluation;
}

export namespace ExternalEvaluationRuleParam {
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
 * Matches a Github organization. Requires a Github identity provider.
 */
export interface GitHubOrganizationRule {
  'github-organization': GitHubOrganizationRule.GitHubOrganization;
}

export namespace GitHubOrganizationRule {
  export interface GitHubOrganization {
    /**
     * The ID of your Github identity provider.
     */
    identity_provider_id: string;

    /**
     * The name of the organization.
     */
    name: string;

    /**
     * The name of the team
     */
    team?: string;
  }
}

/**
 * Matches a Github organization. Requires a Github identity provider.
 */
export interface GitHubOrganizationRuleParam {
  'github-organization': GitHubOrganizationRuleParam.GitHubOrganization;
}

export namespace GitHubOrganizationRuleParam {
  export interface GitHubOrganization {
    /**
     * The ID of your Github identity provider.
     */
    identity_provider_id: string;

    /**
     * The name of the organization.
     */
    name: string;

    /**
     * The name of the team
     */
    team?: string;
  }
}

/**
 * Matches an Access group.
 */
export interface GroupRule {
  group: GroupRule.Group;
}

export namespace GroupRule {
  export interface Group {
    /**
     * The ID of a previously created Access group.
     */
    id: string;
  }
}

/**
 * Matches an Access group.
 */
export interface GroupRuleParam {
  group: GroupRuleParam.Group;
}

export namespace GroupRuleParam {
  export interface Group {
    /**
     * The ID of a previously created Access group.
     */
    id: string;
  }
}

/**
 * Matches a group in Google Workspace. Requires a Google Workspace identity
 * provider.
 */
export interface GSuiteGroupRule {
  gsuite: GSuiteGroupRule.GSuite;
}

export namespace GSuiteGroupRule {
  export interface GSuite {
    /**
     * The email of the Google Workspace group.
     */
    email: string;

    /**
     * The ID of your Google Workspace identity provider.
     */
    identity_provider_id: string;
  }
}

/**
 * Matches a group in Google Workspace. Requires a Google Workspace identity
 * provider.
 */
export interface GSuiteGroupRuleParam {
  gsuite: GSuiteGroupRuleParam.GSuite;
}

export namespace GSuiteGroupRuleParam {
  export interface GSuite {
    /**
     * The email of the Google Workspace group.
     */
    email: string;

    /**
     * The ID of your Google Workspace identity provider.
     */
    identity_provider_id: string;
  }
}

/**
 * Matches an IP address from a list.
 */
export interface IPListRule {
  ip_list: IPListRule.IPList;
}

export namespace IPListRule {
  export interface IPList {
    /**
     * The ID of a previously created IP list.
     */
    id: string;
  }
}

/**
 * Matches an IP address from a list.
 */
export interface IPListRuleParam {
  ip_list: IPListRuleParam.IPList;
}

export namespace IPListRuleParam {
  export interface IPList {
    /**
     * The ID of a previously created IP list.
     */
    id: string;
  }
}

/**
 * Matches an IP address block.
 */
export interface IPRule {
  ip: IPRule.IP;
}

export namespace IPRule {
  export interface IP {
    /**
     * An IPv4 or IPv6 CIDR block.
     */
    ip: string;
  }
}

/**
 * Matches an IP address block.
 */
export interface IPRuleParam {
  ip: IPRuleParam.IP;
}

export namespace IPRuleParam {
  export interface IP {
    /**
     * An IPv4 or IPv6 CIDR block.
     */
    ip: string;
  }
}

/**
 * Matches an Okta group. Requires an Okta identity provider.
 */
export interface OktaGroupRule {
  okta: OktaGroupRule.Okta;
}

export namespace OktaGroupRule {
  export interface Okta {
    /**
     * The ID of your Okta identity provider.
     */
    identity_provider_id: string;

    /**
     * The name of the Okta group.
     */
    name: string;
  }
}

/**
 * Matches an Okta group. Requires an Okta identity provider.
 */
export interface OktaGroupRuleParam {
  okta: OktaGroupRuleParam.Okta;
}

export namespace OktaGroupRuleParam {
  export interface Okta {
    /**
     * The ID of your Okta identity provider.
     */
    identity_provider_id: string;

    /**
     * The name of the Okta group.
     */
    name: string;
  }
}

/**
 * Matches a SAML group. Requires a SAML identity provider.
 */
export interface SAMLGroupRule {
  saml: SAMLGroupRule.SAML;
}

export namespace SAMLGroupRule {
  export interface SAML {
    /**
     * The name of the SAML attribute.
     */
    attribute_name: string;

    /**
     * The SAML attribute value to look for.
     */
    attribute_value: string;

    /**
     * The ID of your SAML identity provider.
     */
    identity_provider_id: string;
  }
}

/**
 * Matches a SAML group. Requires a SAML identity provider.
 */
export interface SAMLGroupRuleParam {
  saml: SAMLGroupRuleParam.SAML;
}

export namespace SAMLGroupRuleParam {
  export interface SAML {
    /**
     * The name of the SAML attribute.
     */
    attribute_name: string;

    /**
     * The SAML attribute value to look for.
     */
    attribute_value: string;

    /**
     * The ID of your SAML identity provider.
     */
    identity_provider_id: string;
  }
}

/**
 * Matches a specific Access Service Token
 */
export interface ServiceTokenRule {
  service_token: ServiceTokenRule.ServiceToken;
}

export namespace ServiceTokenRule {
  export interface ServiceToken {
    /**
     * The ID of a Service Token.
     */
    token_id: string;
  }
}

/**
 * Matches a specific Access Service Token
 */
export interface ServiceTokenRuleParam {
  service_token: ServiceTokenRuleParam.ServiceToken;
}

export namespace ServiceTokenRuleParam {
  export interface ServiceToken {
    /**
     * The ID of a Service Token.
     */
    token_id: string;
  }
}

export interface PolicyCreateResponse extends ApplicationsAPI.ApplicationPolicy {
  /**
   * The order of execution for this policy. Must be unique for each policy within an
   * app.
   */
  precedence?: number;
}

export interface PolicyUpdateResponse extends ApplicationsAPI.ApplicationPolicy {
  /**
   * The order of execution for this policy. Must be unique for each policy within an
   * app.
   */
  precedence?: number;
}

export interface PolicyListResponse extends ApplicationsAPI.ApplicationPolicy {
  /**
   * The order of execution for this policy. Must be unique for each policy within an
   * app.
   */
  precedence?: number;
}

export interface PolicyDeleteResponse {
  /**
   * UUID.
   */
  id?: string;
}

export interface PolicyGetResponse extends ApplicationsAPI.ApplicationPolicy {
  /**
   * The order of execution for this policy. Must be unique for each policy within an
   * app.
   */
  precedence?: number;
}

export interface PolicyCreateParams {
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
  approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: Require this application to be served in an isolated browser for
   * users matching this policy. 'Client Web Isolation' must be on for the account in
   * order to use this feature.
   */
  isolation_required?: boolean;

  /**
   * Body param: The order of execution for this policy. Must be unique for each
   * policy within an app.
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
   * Body param: The amount of time that tokens issued for the application will be
   * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
   * (or µs), ms, s, m, h.
   */
  session_duration?: string;
}

export interface PolicyUpdateParams {
  /**
   * Path param: UUID.
   */
  app_id: string;

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
  approval_groups?: Array<PoliciesAPI.ApprovalGroupParam>;

  /**
   * Body param: Requires the user to request access from an administrator at the
   * start of each session.
   */
  approval_required?: boolean;

  /**
   * Body param: Require this application to be served in an isolated browser for
   * users matching this policy. 'Client Web Isolation' must be on for the account in
   * order to use this feature.
   */
  isolation_required?: boolean;

  /**
   * Body param: The order of execution for this policy. Must be unique for each
   * policy within an app.
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
   * Body param: The amount of time that tokens issued for the application will be
   * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
   * (or µs), ms, s, m, h.
   */
  session_duration?: string;
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
   * UUID.
   */
  app_id: string;

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
   * UUID.
   */
  app_id: string;

  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export declare namespace Policies {
  export {
    type AccessDevicePostureRule as AccessDevicePostureRule,
    type AccessRule as AccessRule,
    type AnyValidServiceTokenRule as AnyValidServiceTokenRule,
    type AuthenticationMethodRule as AuthenticationMethodRule,
    type AzureGroupRule as AzureGroupRule,
    type CertificateRule as CertificateRule,
    type CountryRule as CountryRule,
    type DomainRule as DomainRule,
    type EmailListRule as EmailListRule,
    type EmailRule as EmailRule,
    type EveryoneRule as EveryoneRule,
    type ExternalEvaluationRule as ExternalEvaluationRule,
    type GitHubOrganizationRule as GitHubOrganizationRule,
    type GroupRule as GroupRule,
    type GSuiteGroupRule as GSuiteGroupRule,
    type IPListRule as IPListRule,
    type IPRule as IPRule,
    type OktaGroupRule as OktaGroupRule,
    type SAMLGroupRule as SAMLGroupRule,
    type ServiceTokenRule as ServiceTokenRule,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListResponsesSinglePage as PolicyListResponsesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
