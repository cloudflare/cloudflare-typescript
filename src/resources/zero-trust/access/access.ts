// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BookmarksAPI from './bookmarks';
import {
  Bookmark,
  BookmarkCreateParams,
  BookmarkDeleteParams,
  BookmarkDeleteResponse,
  BookmarkGetParams,
  BookmarkListParams,
  BookmarkUpdateParams,
  Bookmarks,
  BookmarksSinglePage,
} from './bookmarks';
import * as CustomPagesAPI from './custom-pages';
import {
  CustomPage,
  CustomPageCreateParams,
  CustomPageDeleteParams,
  CustomPageDeleteResponse,
  CustomPageGetParams,
  CustomPageListParams,
  CustomPageUpdateParams,
  CustomPageWithoutHTML,
  CustomPageWithoutHTMLsSinglePage,
  CustomPages,
} from './custom-pages';
import * as GatewayCAAPI from './gateway-ca';
import {
  GatewayCA,
  GatewayCACreateParams,
  GatewayCACreateResponse,
  GatewayCADeleteParams,
  GatewayCADeleteResponse,
  GatewayCAListParams,
  GatewayCAListResponse,
  GatewayCAListResponsesSinglePage,
} from './gateway-ca';
import * as GroupsAPI from './groups';
import {
  GroupCreateParams,
  GroupDeleteParams,
  GroupDeleteResponse,
  GroupGetParams,
  GroupListParams,
  GroupUpdateParams,
  Groups,
  ZeroTrustGroup,
  ZeroTrustGroupsSinglePage,
} from './groups';
import * as KeysAPI from './keys';
import {
  KeyGetParams,
  KeyGetResponse,
  KeyRotateParams,
  KeyRotateResponse,
  KeyUpdateParams,
  KeyUpdateResponse,
  Keys,
} from './keys';
import * as PoliciesAPI from './policies';
import {
  ApprovalGroup,
  Policies,
  Policy,
  PolicyCreateParams,
  PolicyCreateResponse,
  PolicyDeleteParams,
  PolicyDeleteResponse,
  PolicyGetParams,
  PolicyGetResponse,
  PolicyListParams,
  PolicyListResponse,
  PolicyListResponsesSinglePage,
  PolicyUpdateParams,
  PolicyUpdateResponse,
} from './policies';
import * as ServiceTokensAPI from './service-tokens';
import {
  ServiceToken as ServiceTokensAPIServiceToken,
  ServiceTokenCreateParams,
  ServiceTokenCreateResponse,
  ServiceTokenDeleteParams,
  ServiceTokenGetParams,
  ServiceTokenListParams,
  ServiceTokenRefreshParams,
  ServiceTokenRotateParams,
  ServiceTokenRotateResponse,
  ServiceTokenUpdateParams,
  ServiceTokens,
  ServiceTokensSinglePage,
} from './service-tokens';
import * as TagsAPI from './tags';
import {
  Tag,
  TagCreateParams,
  TagDeleteParams,
  TagDeleteResponse,
  TagGetParams,
  TagListParams,
  TagUpdateParams,
  Tags,
  TagsSinglePage,
} from './tags';
import * as ApplicationsAPI from './applications/applications';
import {
  AllowedHeaders,
  AllowedIdPs,
  AllowedMethods,
  AllowedOrigins,
  AppID,
  Application,
  ApplicationCreateParams,
  ApplicationCreateResponse,
  ApplicationDeleteParams,
  ApplicationDeleteResponse,
  ApplicationGetParams,
  ApplicationGetResponse,
  ApplicationListParams,
  ApplicationListResponse,
  ApplicationListResponsesSinglePage,
  ApplicationPolicy,
  ApplicationRevokeTokensParams,
  ApplicationRevokeTokensResponse,
  ApplicationSCIMConfig,
  ApplicationType,
  ApplicationUpdateParams,
  ApplicationUpdateResponse,
  Applications,
  CORSHeaders,
  Decision,
  OIDCSaaSApp,
  SAMLSaaSApp,
  SCIMConfigAuthenticationHTTPBasic,
  SCIMConfigAuthenticationOAuthBearerToken,
  SCIMConfigAuthenticationOauth2,
  SCIMConfigMapping,
  SaaSAppNameIDFormat,
  SelfHostedDomains,
} from './applications/applications';
import * as CertificatesAPI from './certificates/certificates';
import {
  AssociatedHostnames,
  Certificate as CertificatesAPICertificate,
  CertificateCreateParams,
  CertificateDeleteParams,
  CertificateDeleteResponse,
  CertificateGetParams,
  CertificateListParams,
  CertificateUpdateParams,
  Certificates,
  CertificatesSinglePage,
} from './certificates/certificates';
import * as InfrastructureAPI from './infrastructure/infrastructure';
import { Infrastructure } from './infrastructure/infrastructure';
import * as LogsAPI from './logs/logs';
import { Logs } from './logs/logs';
import * as UsersAPI from './users/users';
import { AccessUser, AccessUsersSinglePage, UserListParams, Users } from './users/users';

export class Access extends APIResource {
  gatewayCA: GatewayCAAPI.GatewayCA = new GatewayCAAPI.GatewayCA(this._client);
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

Access.GatewayCA = GatewayCA;
Access.GatewayCAListResponsesSinglePage = GatewayCAListResponsesSinglePage;
Access.Infrastructure = Infrastructure;
Access.Applications = Applications;
Access.ApplicationListResponsesSinglePage = ApplicationListResponsesSinglePage;
Access.Certificates = Certificates;
Access.CertificatesSinglePage = CertificatesSinglePage;
Access.Groups = Groups;
Access.ZeroTrustGroupsSinglePage = ZeroTrustGroupsSinglePage;
Access.ServiceTokens = ServiceTokens;
Access.ServiceTokensSinglePage = ServiceTokensSinglePage;
Access.Bookmarks = Bookmarks;
Access.BookmarksSinglePage = BookmarksSinglePage;
Access.Keys = Keys;
Access.Logs = Logs;
Access.Users = Users;
Access.AccessUsersSinglePage = AccessUsersSinglePage;
Access.CustomPages = CustomPages;
Access.CustomPageWithoutHTMLsSinglePage = CustomPageWithoutHTMLsSinglePage;
Access.Tags = Tags;
Access.TagsSinglePage = TagsSinglePage;
Access.Policies = Policies;
Access.PolicyListResponsesSinglePage = PolicyListResponsesSinglePage;

export declare namespace Access {
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
  };

  export {
    GatewayCA as GatewayCA,
    type GatewayCACreateResponse as GatewayCACreateResponse,
    type GatewayCAListResponse as GatewayCAListResponse,
    type GatewayCADeleteResponse as GatewayCADeleteResponse,
    GatewayCAListResponsesSinglePage as GatewayCAListResponsesSinglePage,
    type GatewayCACreateParams as GatewayCACreateParams,
    type GatewayCAListParams as GatewayCAListParams,
    type GatewayCADeleteParams as GatewayCADeleteParams,
  };

  export { Infrastructure as Infrastructure };

  export {
    Applications as Applications,
    type AllowedHeaders as AllowedHeaders,
    type AllowedIdPs as AllowedIdPs,
    type AllowedMethods as AllowedMethods,
    type AllowedOrigins as AllowedOrigins,
    type AppID as AppID,
    type Application as Application,
    type ApplicationPolicy as ApplicationPolicy,
    type ApplicationSCIMConfig as ApplicationSCIMConfig,
    type ApplicationType as ApplicationType,
    type CORSHeaders as CORSHeaders,
    type Decision as Decision,
    type OIDCSaaSApp as OIDCSaaSApp,
    type SaaSAppNameIDFormat as SaaSAppNameIDFormat,
    type SAMLSaaSApp as SAMLSaaSApp,
    type SCIMConfigAuthenticationHTTPBasic as SCIMConfigAuthenticationHTTPBasic,
    type SCIMConfigAuthenticationOAuthBearerToken as SCIMConfigAuthenticationOAuthBearerToken,
    type SCIMConfigAuthenticationOauth2 as SCIMConfigAuthenticationOauth2,
    type SCIMConfigMapping as SCIMConfigMapping,
    type SelfHostedDomains as SelfHostedDomains,
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationRevokeTokensResponse as ApplicationRevokeTokensResponse,
    ApplicationListResponsesSinglePage as ApplicationListResponsesSinglePage,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationDeleteParams as ApplicationDeleteParams,
    type ApplicationGetParams as ApplicationGetParams,
    type ApplicationRevokeTokensParams as ApplicationRevokeTokensParams,
  };

  export {
    Certificates as Certificates,
    type AssociatedHostnames as AssociatedHostnames,
    type CertificatesAPICertificate as Certificate,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    CertificatesSinglePage as CertificatesSinglePage,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateDeleteParams as CertificateDeleteParams,
    type CertificateGetParams as CertificateGetParams,
  };

  export {
    Groups as Groups,
    type ZeroTrustGroup as ZeroTrustGroup,
    type GroupDeleteResponse as GroupDeleteResponse,
    ZeroTrustGroupsSinglePage as ZeroTrustGroupsSinglePage,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };

  export {
    ServiceTokens as ServiceTokens,
    type ServiceTokensAPIServiceToken as ServiceToken,
    type ServiceTokenCreateResponse as ServiceTokenCreateResponse,
    type ServiceTokenRotateResponse as ServiceTokenRotateResponse,
    ServiceTokensSinglePage as ServiceTokensSinglePage,
    type ServiceTokenCreateParams as ServiceTokenCreateParams,
    type ServiceTokenUpdateParams as ServiceTokenUpdateParams,
    type ServiceTokenListParams as ServiceTokenListParams,
    type ServiceTokenDeleteParams as ServiceTokenDeleteParams,
    type ServiceTokenGetParams as ServiceTokenGetParams,
    type ServiceTokenRefreshParams as ServiceTokenRefreshParams,
    type ServiceTokenRotateParams as ServiceTokenRotateParams,
  };

  export {
    Bookmarks as Bookmarks,
    type Bookmark as Bookmark,
    type BookmarkDeleteResponse as BookmarkDeleteResponse,
    BookmarksSinglePage as BookmarksSinglePage,
    type BookmarkCreateParams as BookmarkCreateParams,
    type BookmarkUpdateParams as BookmarkUpdateParams,
    type BookmarkListParams as BookmarkListParams,
    type BookmarkDeleteParams as BookmarkDeleteParams,
    type BookmarkGetParams as BookmarkGetParams,
  };

  export {
    Keys as Keys,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyGetResponse as KeyGetResponse,
    type KeyRotateResponse as KeyRotateResponse,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyGetParams as KeyGetParams,
    type KeyRotateParams as KeyRotateParams,
  };

  export { Logs as Logs };

  export {
    Users as Users,
    type AccessUser as AccessUser,
    AccessUsersSinglePage as AccessUsersSinglePage,
    type UserListParams as UserListParams,
  };

  export {
    CustomPages as CustomPages,
    type CustomPage as CustomPage,
    type CustomPageWithoutHTML as CustomPageWithoutHTML,
    type CustomPageDeleteResponse as CustomPageDeleteResponse,
    CustomPageWithoutHTMLsSinglePage as CustomPageWithoutHTMLsSinglePage,
    type CustomPageCreateParams as CustomPageCreateParams,
    type CustomPageUpdateParams as CustomPageUpdateParams,
    type CustomPageListParams as CustomPageListParams,
    type CustomPageDeleteParams as CustomPageDeleteParams,
    type CustomPageGetParams as CustomPageGetParams,
  };

  export {
    Tags as Tags,
    type Tag as Tag,
    type TagDeleteResponse as TagDeleteResponse,
    TagsSinglePage as TagsSinglePage,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagGetParams as TagGetParams,
  };

  export {
    Policies as Policies,
    type ApprovalGroup as ApprovalGroup,
    type Policy as Policy,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PolicyGetResponse as PolicyGetResponse,
    PolicyListResponsesSinglePage as PolicyListResponsesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
