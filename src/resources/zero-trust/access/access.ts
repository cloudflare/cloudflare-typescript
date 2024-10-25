// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AccessAPI from './access';
import * as BookmarksAPI from './bookmarks';
import * as CustomPagesAPI from './custom-pages';
import * as GroupsAPI from './groups';
import * as KeysAPI from './keys';
import * as PoliciesAPI from './policies';
import * as ServiceTokensAPI from './service-tokens';
import * as TagsAPI from './tags';
import * as ApplicationsAPI from './applications/applications';
import * as CertificatesAPI from './certificates/certificates';
import * as InfrastructureAPI from './infrastructure/infrastructure';
import * as LogsAPI from './logs/logs';
import * as UsersAPI from './users/users';

export class Access extends APIResource {
  infrastructure: InfrastructureAPI.Infrastructure = new InfrastructureAPI.Infrastructure(this._client);
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  serviceTokens: ServiceTokensAPI.ServiceTokens = new ServiceTokensAPI.ServiceTokens(this._client);
  bookmarks: BookmarksAPI.Bookmarks = new BookmarksAPI.Bookmarks(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  customPages: CustomPagesAPI.CustomPages = new CustomPagesAPI.CustomPages(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
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
 * Matches a specific email.
 */
export type AccessRule =
  | EmailRule
  | EmailListRule
  | DomainRule
  | EveryoneRule
  | IPRule
  | IPListRule
  | CertificateRule
  | GroupRule
  | AzureGroupRule
  | GitHubOrganizationRule
  | GSuiteGroupRule
  | OktaGroupRule
  | SAMLGroupRule
  | ServiceTokenRule
  | AnyValidServiceTokenRule
  | ExternalEvaluationRule
  | CountryRule
  | AuthenticationMethodRule
  | AccessDevicePostureRule;

/**
 * Matches a specific email.
 */
export type AccessRuleParam =
  | EmailRuleParam
  | EmailListRuleParam
  | DomainRuleParam
  | EveryoneRuleParam
  | IPRuleParam
  | IPListRuleParam
  | CertificateRuleParam
  | GroupRuleParam
  | AzureGroupRuleParam
  | GitHubOrganizationRuleParam
  | GSuiteGroupRuleParam
  | OktaGroupRuleParam
  | SAMLGroupRuleParam
  | ServiceTokenRuleParam
  | AnyValidServiceTokenRuleParam
  | ExternalEvaluationRuleParam
  | CountryRuleParam
  | AuthenticationMethodRuleParam
  | AccessDevicePostureRuleParam;

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
  certificate: unknown;
}

/**
 * Matches any valid client certificate.
 */
export interface CertificateRuleParam {
  certificate: unknown;
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

export namespace Access {
  export type AccessDevicePostureRule = AccessAPI.AccessDevicePostureRule;
  export type AccessRule = AccessAPI.AccessRule;
  export type AnyValidServiceTokenRule = AccessAPI.AnyValidServiceTokenRule;
  export type AuthenticationMethodRule = AccessAPI.AuthenticationMethodRule;
  export type AzureGroupRule = AccessAPI.AzureGroupRule;
  export type CertificateRule = AccessAPI.CertificateRule;
  export type CountryRule = AccessAPI.CountryRule;
  export type DomainRule = AccessAPI.DomainRule;
  export type EmailListRule = AccessAPI.EmailListRule;
  export type EmailRule = AccessAPI.EmailRule;
  export type EveryoneRule = AccessAPI.EveryoneRule;
  export type ExternalEvaluationRule = AccessAPI.ExternalEvaluationRule;
  export type GitHubOrganizationRule = AccessAPI.GitHubOrganizationRule;
  export type GroupRule = AccessAPI.GroupRule;
  export type GSuiteGroupRule = AccessAPI.GSuiteGroupRule;
  export type IPListRule = AccessAPI.IPListRule;
  export type IPRule = AccessAPI.IPRule;
  export type OktaGroupRule = AccessAPI.OktaGroupRule;
  export type SAMLGroupRule = AccessAPI.SAMLGroupRule;
  export type ServiceTokenRule = AccessAPI.ServiceTokenRule;
  export import Infrastructure = InfrastructureAPI.Infrastructure;
  export import Applications = ApplicationsAPI.Applications;
  export type AllowedHeaders = ApplicationsAPI.AllowedHeaders;
  export type AllowedIdPs = ApplicationsAPI.AllowedIdPs;
  export type AllowedMethods = ApplicationsAPI.AllowedMethods;
  export type AllowedOrigins = ApplicationsAPI.AllowedOrigins;
  export type AppID = ApplicationsAPI.AppID;
  export type Application = ApplicationsAPI.Application;
  export type ApplicationPolicy = ApplicationsAPI.ApplicationPolicy;
  export type ApplicationSCIMConfig = ApplicationsAPI.ApplicationSCIMConfig;
  export type ApplicationType = ApplicationsAPI.ApplicationType;
  export type CORSHeaders = ApplicationsAPI.CORSHeaders;
  export type Decision = ApplicationsAPI.Decision;
  export type OIDCSaaSApp = ApplicationsAPI.OIDCSaaSApp;
  export type SaaSAppNameFormat = ApplicationsAPI.SaaSAppNameFormat;
  export type SaaSAppNameIDFormat = ApplicationsAPI.SaaSAppNameIDFormat;
  export type SaaSAppSource = ApplicationsAPI.SaaSAppSource;
  export type SAMLSaaSApp = ApplicationsAPI.SAMLSaaSApp;
  export type SCIMConfigAuthenticationHTTPBasic = ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic;
  export type SCIMConfigAuthenticationOAuthBearerToken =
    ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken;
  export type SCIMConfigAuthenticationOauth2 = ApplicationsAPI.SCIMConfigAuthenticationOauth2;
  export type SCIMConfigMapping = ApplicationsAPI.SCIMConfigMapping;
  export type SelfHostedDomains = ApplicationsAPI.SelfHostedDomains;
  export type ApplicationCreateResponse = ApplicationsAPI.ApplicationCreateResponse;
  export type ApplicationUpdateResponse = ApplicationsAPI.ApplicationUpdateResponse;
  export type ApplicationListResponse = ApplicationsAPI.ApplicationListResponse;
  export type ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export type ApplicationGetResponse = ApplicationsAPI.ApplicationGetResponse;
  export type ApplicationRevokeTokensResponse = ApplicationsAPI.ApplicationRevokeTokensResponse;
  export import ApplicationListResponsesSinglePage = ApplicationsAPI.ApplicationListResponsesSinglePage;
  export type ApplicationCreateParams = ApplicationsAPI.ApplicationCreateParams;
  export type ApplicationUpdateParams = ApplicationsAPI.ApplicationUpdateParams;
  export type ApplicationListParams = ApplicationsAPI.ApplicationListParams;
  export type ApplicationDeleteParams = ApplicationsAPI.ApplicationDeleteParams;
  export type ApplicationGetParams = ApplicationsAPI.ApplicationGetParams;
  export type ApplicationRevokeTokensParams = ApplicationsAPI.ApplicationRevokeTokensParams;
  export import Certificates = CertificatesAPI.Certificates;
  export type AssociatedHostnames = CertificatesAPI.AssociatedHostnames;
  export type Certificate = CertificatesAPI.Certificate;
  export type CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificatesSinglePage = CertificatesAPI.CertificatesSinglePage;
  export type CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export type CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export type CertificateListParams = CertificatesAPI.CertificateListParams;
  export type CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export type CertificateGetParams = CertificatesAPI.CertificateGetParams;
  export import Groups = GroupsAPI.Groups;
  export type ZeroTrustGroup = GroupsAPI.ZeroTrustGroup;
  export type GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import ZeroTrustGroupsSinglePage = GroupsAPI.ZeroTrustGroupsSinglePage;
  export type GroupCreateParams = GroupsAPI.GroupCreateParams;
  export type GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export type GroupListParams = GroupsAPI.GroupListParams;
  export type GroupDeleteParams = GroupsAPI.GroupDeleteParams;
  export type GroupGetParams = GroupsAPI.GroupGetParams;
  export import ServiceTokens = ServiceTokensAPI.ServiceTokens;
  export type ServiceToken = ServiceTokensAPI.ServiceToken;
  export type ServiceTokenCreateResponse = ServiceTokensAPI.ServiceTokenCreateResponse;
  export type ServiceTokenRotateResponse = ServiceTokensAPI.ServiceTokenRotateResponse;
  export import ServiceTokensSinglePage = ServiceTokensAPI.ServiceTokensSinglePage;
  export type ServiceTokenCreateParams = ServiceTokensAPI.ServiceTokenCreateParams;
  export type ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export type ServiceTokenListParams = ServiceTokensAPI.ServiceTokenListParams;
  export type ServiceTokenDeleteParams = ServiceTokensAPI.ServiceTokenDeleteParams;
  export type ServiceTokenGetParams = ServiceTokensAPI.ServiceTokenGetParams;
  export type ServiceTokenRefreshParams = ServiceTokensAPI.ServiceTokenRefreshParams;
  export type ServiceTokenRotateParams = ServiceTokensAPI.ServiceTokenRotateParams;
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export type Bookmark = BookmarksAPI.Bookmark;
  export type BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarksSinglePage = BookmarksAPI.BookmarksSinglePage;
  export type BookmarkCreateParams = BookmarksAPI.BookmarkCreateParams;
  export type BookmarkUpdateParams = BookmarksAPI.BookmarkUpdateParams;
  export type BookmarkListParams = BookmarksAPI.BookmarkListParams;
  export type BookmarkDeleteParams = BookmarksAPI.BookmarkDeleteParams;
  export type BookmarkGetParams = BookmarksAPI.BookmarkGetParams;
  export import Keys = KeysAPI.Keys;
  export type KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export type KeyGetResponse = KeysAPI.KeyGetResponse;
  export type KeyRotateResponse = KeysAPI.KeyRotateResponse;
  export type KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export type KeyGetParams = KeysAPI.KeyGetParams;
  export type KeyRotateParams = KeysAPI.KeyRotateParams;
  export import Logs = LogsAPI.Logs;
  export import Users = UsersAPI.Users;
  export type AccessUser = UsersAPI.AccessUser;
  export import AccessUsersSinglePage = UsersAPI.AccessUsersSinglePage;
  export type UserListParams = UsersAPI.UserListParams;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export type CustomPage = CustomPagesAPI.CustomPage;
  export type CustomPageWithoutHTML = CustomPagesAPI.CustomPageWithoutHTML;
  export type CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageWithoutHTMLsSinglePage = CustomPagesAPI.CustomPageWithoutHTMLsSinglePage;
  export type CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export type CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export type CustomPageListParams = CustomPagesAPI.CustomPageListParams;
  export type CustomPageDeleteParams = CustomPagesAPI.CustomPageDeleteParams;
  export type CustomPageGetParams = CustomPagesAPI.CustomPageGetParams;
  export import Tags = TagsAPI.Tags;
  export type Tag = TagsAPI.Tag;
  export type TagDeleteResponse = TagsAPI.TagDeleteResponse;
  export import TagsSinglePage = TagsAPI.TagsSinglePage;
  export type TagCreateParams = TagsAPI.TagCreateParams;
  export type TagUpdateParams = TagsAPI.TagUpdateParams;
  export type TagListParams = TagsAPI.TagListParams;
  export type TagDeleteParams = TagsAPI.TagDeleteParams;
  export type TagGetParams = TagsAPI.TagGetParams;
  export import Policies = PoliciesAPI.Policies;
  export type ApprovalGroup = PoliciesAPI.ApprovalGroup;
  export type Policy = PoliciesAPI.Policy;
  export type PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export type PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export type PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export type PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export type PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyListResponsesSinglePage = PoliciesAPI.PolicyListResponsesSinglePage;
  export type PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export type PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export type PolicyListParams = PoliciesAPI.PolicyListParams;
  export type PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export type PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
