// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Applications } from './applications/applications';
import { Certificates } from './certificates/certificates';
import { Groups } from './groups';
import { ServiceTokens } from './service-tokens';
import { Bookmarks } from './bookmarks';
import { Keys } from './keys';
import { Logs } from './logs/logs';
import { Users } from './users/users';
import { CustomPages } from './custom-pages';
import { Tags } from './tags';
import { Policies } from './policies';
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
import * as LogsAPI from './logs/logs';
import * as UsersAPI from './users/users';

export class Access extends APIResource {
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
export type AccessRule = EmailRule | EmailListRule | DomainRule | EveryoneRule | IPRule | IPListRule | CertificateRule | GroupRule | AzureGroupRule | GitHubOrganizationRule | GSuiteGroupRule | OktaGroupRule | SAMLGroupRule | ServiceTokenRule | AnyValidServiceTokenRule | ExternalEvaluationRule | CountryRule | AuthenticationMethodRule | AccessDevicePostureRule

/**
 * Matches a specific email.
 */
export type AccessRuleParam = EmailRuleParam | EmailListRuleParam | DomainRuleParam | EveryoneRuleParam | IPRuleParam | IPListRuleParam | CertificateRuleParam | GroupRuleParam | AzureGroupRuleParam | GitHubOrganizationRuleParam | GSuiteGroupRuleParam | OktaGroupRuleParam | SAMLGroupRuleParam | ServiceTokenRuleParam | AnyValidServiceTokenRuleParam | ExternalEvaluationRuleParam | CountryRuleParam | AuthenticationMethodRuleParam | AccessDevicePostureRuleParam

/**
 * Matches any valid Access Service Token
 */
export interface AnyValidServiceTokenRule {
  /**
   * An empty object which matches on all service tokens.
   */
  any_valid_service_token: unknown;
}

/**
 * Matches any valid Access Service Token
 */
export interface AnyValidServiceTokenRuleParam {
  /**
   * An empty object which matches on all service tokens.
   */
  any_valid_service_token: unknown;
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
     * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
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
     * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
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
    connection_id: string;
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
    connection_id: string;
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
  everyone: unknown;
}

/**
 * Matches everyone.
 */
export interface EveryoneRuleParam {
  /**
   * An empty object which matches on all users.
   */
  everyone: unknown;
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
    connection_id: string;

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
    connection_id: string;

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
 * Matches a group in Google Workspace. Requires a Google Workspace identity
 * provider.
 */
export interface GSuiteGroupRuleParam {
  gsuite: GSuiteGroupRuleParam.GSuite;
}

export namespace GSuiteGroupRuleParam {
  export interface GSuite {
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
    connection_id: string;

    /**
     * The email of the Okta group.
     */
    email: string;
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
  export import AccessDevicePostureRule = AccessAPI.AccessDevicePostureRule;
  export import AccessRule = AccessAPI.AccessRule;
  export import AnyValidServiceTokenRule = AccessAPI.AnyValidServiceTokenRule;
  export import AuthenticationMethodRule = AccessAPI.AuthenticationMethodRule;
  export import AzureGroupRule = AccessAPI.AzureGroupRule;
  export import CertificateRule = AccessAPI.CertificateRule;
  export import CountryRule = AccessAPI.CountryRule;
  export import DomainRule = AccessAPI.DomainRule;
  export import EmailListRule = AccessAPI.EmailListRule;
  export import EmailRule = AccessAPI.EmailRule;
  export import EveryoneRule = AccessAPI.EveryoneRule;
  export import ExternalEvaluationRule = AccessAPI.ExternalEvaluationRule;
  export import GitHubOrganizationRule = AccessAPI.GitHubOrganizationRule;
  export import GroupRule = AccessAPI.GroupRule;
  export import GSuiteGroupRule = AccessAPI.GSuiteGroupRule;
  export import IPListRule = AccessAPI.IPListRule;
  export import IPRule = AccessAPI.IPRule;
  export import OktaGroupRule = AccessAPI.OktaGroupRule;
  export import SAMLGroupRule = AccessAPI.SAMLGroupRule;
  export import ServiceTokenRule = AccessAPI.ServiceTokenRule;
  export import Applications = ApplicationsAPI.Applications;
  export import AllowedHeaders = ApplicationsAPI.AllowedHeaders;
  export import AllowedIdPs = ApplicationsAPI.AllowedIdPs;
  export import AllowedMethods = ApplicationsAPI.AllowedMethods;
  export import AllowedOrigins = ApplicationsAPI.AllowedOrigins;
  export import AppID = ApplicationsAPI.AppID;
  export import Application = ApplicationsAPI.Application;
  export import ApplicationPolicy = ApplicationsAPI.ApplicationPolicy;
  export import ApplicationSCIMConfig = ApplicationsAPI.ApplicationSCIMConfig;
  export import ApplicationType = ApplicationsAPI.ApplicationType;
  export import CORSHeaders = ApplicationsAPI.CORSHeaders;
  export import Decision = ApplicationsAPI.Decision;
  export import OIDCSaaSApp = ApplicationsAPI.OIDCSaaSApp;
  export import SaaSAppNameFormat = ApplicationsAPI.SaaSAppNameFormat;
  export import SaaSAppNameIDFormat = ApplicationsAPI.SaaSAppNameIDFormat;
  export import SaaSAppSource = ApplicationsAPI.SaaSAppSource;
  export import SAMLSaaSApp = ApplicationsAPI.SAMLSaaSApp;
  export import SCIMConfigAuthenticationHTTPBasic = ApplicationsAPI.SCIMConfigAuthenticationHTTPBasic;
  export import SCIMConfigAuthenticationOAuthBearerToken = ApplicationsAPI.SCIMConfigAuthenticationOAuthBearerToken;
  export import SCIMConfigAuthenticationOauth2 = ApplicationsAPI.SCIMConfigAuthenticationOauth2;
  export import SCIMConfigMapping = ApplicationsAPI.SCIMConfigMapping;
  export import SelfHostedDomains = ApplicationsAPI.SelfHostedDomains;
  export import ApplicationCreateResponse = ApplicationsAPI.ApplicationCreateResponse;
  export import ApplicationUpdateResponse = ApplicationsAPI.ApplicationUpdateResponse;
  export import ApplicationListResponse = ApplicationsAPI.ApplicationListResponse;
  export import ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export import ApplicationGetResponse = ApplicationsAPI.ApplicationGetResponse;
  export import ApplicationRevokeTokensResponse = ApplicationsAPI.ApplicationRevokeTokensResponse;
  export import ApplicationListResponsesSinglePage = ApplicationsAPI.ApplicationListResponsesSinglePage;
  export import ApplicationCreateParams = ApplicationsAPI.ApplicationCreateParams;
  export import ApplicationUpdateParams = ApplicationsAPI.ApplicationUpdateParams;
  export import ApplicationListParams = ApplicationsAPI.ApplicationListParams;
  export import ApplicationDeleteParams = ApplicationsAPI.ApplicationDeleteParams;
  export import ApplicationGetParams = ApplicationsAPI.ApplicationGetParams;
  export import ApplicationRevokeTokensParams = ApplicationsAPI.ApplicationRevokeTokensParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import AssociatedHostnames = CertificatesAPI.AssociatedHostnames;
  export import Certificate = CertificatesAPI.Certificate;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificatesSinglePage = CertificatesAPI.CertificatesSinglePage;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
  export import Groups = GroupsAPI.Groups;
  export import ZeroTrustGroup = GroupsAPI.ZeroTrustGroup;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import ZeroTrustGroupsSinglePage = GroupsAPI.ZeroTrustGroupsSinglePage;
  export import GroupCreateParams = GroupsAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import GroupDeleteParams = GroupsAPI.GroupDeleteParams;
  export import GroupGetParams = GroupsAPI.GroupGetParams;
  export import ServiceTokens = ServiceTokensAPI.ServiceTokens;
  export import ServiceToken = ServiceTokensAPI.ServiceToken;
  export import ServiceTokenCreateResponse = ServiceTokensAPI.ServiceTokenCreateResponse;
  export import ServiceTokenRotateResponse = ServiceTokensAPI.ServiceTokenRotateResponse;
  export import ServiceTokensSinglePage = ServiceTokensAPI.ServiceTokensSinglePage;
  export import ServiceTokenCreateParams = ServiceTokensAPI.ServiceTokenCreateParams;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenListParams = ServiceTokensAPI.ServiceTokenListParams;
  export import ServiceTokenDeleteParams = ServiceTokensAPI.ServiceTokenDeleteParams;
  export import ServiceTokenGetParams = ServiceTokensAPI.ServiceTokenGetParams;
  export import ServiceTokenRefreshParams = ServiceTokensAPI.ServiceTokenRefreshParams;
  export import ServiceTokenRotateParams = ServiceTokensAPI.ServiceTokenRotateParams;
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import Bookmark = BookmarksAPI.Bookmark;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarksSinglePage = BookmarksAPI.BookmarksSinglePage;
  export import BookmarkCreateParams = BookmarksAPI.BookmarkCreateParams;
  export import BookmarkUpdateParams = BookmarksAPI.BookmarkUpdateParams;
  export import BookmarkListParams = BookmarksAPI.BookmarkListParams;
  export import BookmarkDeleteParams = BookmarksAPI.BookmarkDeleteParams;
  export import BookmarkGetParams = BookmarksAPI.BookmarkGetParams;
  export import Keys = KeysAPI.Keys;
  export import KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export import KeyGetResponse = KeysAPI.KeyGetResponse;
  export import KeyRotateResponse = KeysAPI.KeyRotateResponse;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import KeyGetParams = KeysAPI.KeyGetParams;
  export import KeyRotateParams = KeysAPI.KeyRotateParams;
  export import Logs = LogsAPI.Logs;
  export import Users = UsersAPI.Users;
  export import AccessUser = UsersAPI.AccessUser;
  export import AccessUsersSinglePage = UsersAPI.AccessUsersSinglePage;
  export import UserListParams = UsersAPI.UserListParams;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export import CustomPage = CustomPagesAPI.CustomPage;
  export import CustomPageWithoutHTML = CustomPagesAPI.CustomPageWithoutHTML;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageWithoutHTMLsSinglePage = CustomPagesAPI.CustomPageWithoutHTMLsSinglePage;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export import CustomPageListParams = CustomPagesAPI.CustomPageListParams;
  export import CustomPageDeleteParams = CustomPagesAPI.CustomPageDeleteParams;
  export import CustomPageGetParams = CustomPagesAPI.CustomPageGetParams;
  export import Tags = TagsAPI.Tags;
  export import Tag = TagsAPI.Tag;
  export import TagDeleteResponse = TagsAPI.TagDeleteResponse;
  export import TagsSinglePage = TagsAPI.TagsSinglePage;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagUpdateParams = TagsAPI.TagUpdateParams;
  export import TagListParams = TagsAPI.TagListParams;
  export import TagDeleteParams = TagsAPI.TagDeleteParams;
  export import TagGetParams = TagsAPI.TagGetParams;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyListResponsesSinglePage = PoliciesAPI.PolicyListResponsesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
