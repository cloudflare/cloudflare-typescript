// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AccessAPI from 'cloudflare/resources/zero-trust/access/access';
import * as BookmarksAPI from 'cloudflare/resources/zero-trust/access/bookmarks';
import * as CustomPagesAPI from 'cloudflare/resources/zero-trust/access/custom-pages';
import * as GroupsAPI from 'cloudflare/resources/zero-trust/access/groups';
import * as KeysAPI from 'cloudflare/resources/zero-trust/access/keys';
import * as ServiceTokensAPI from 'cloudflare/resources/zero-trust/access/service-tokens';
import * as TagsAPI from 'cloudflare/resources/zero-trust/access/tags';
import * as ApplicationsAPI from 'cloudflare/resources/zero-trust/access/applications/applications';
import * as CertificatesAPI from 'cloudflare/resources/zero-trust/access/certificates/certificates';
import * as LogsAPI from 'cloudflare/resources/zero-trust/access/logs/logs';
import * as UsersAPI from 'cloudflare/resources/zero-trust/access/users/users';

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
  | AccessRule.AccessAnyValidServiceTokenRule
  | ExternalEvaluationRule
  | CountryRule
  | AccessRule.AccessAuthenticationMethodRule
  | AccessRule.AccessDevicePostureRule;

export namespace AccessRule {
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
 * Matches any valid client certificate.
 */
export interface CertificateRule {
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
 * Matches everyone.
 */
export interface EveryoneRule {
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

export namespace Access {
  export import AccessRule = AccessAPI.AccessRule;
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
  export import AllowedHeadersh = ApplicationsAPI.AllowedHeadersh;
  export import AllowedIdpsh = ApplicationsAPI.AllowedIdpsh;
  export import AllowedMethodsh = ApplicationsAPI.AllowedMethodsh;
  export import AllowedOriginsh = ApplicationsAPI.AllowedOriginsh;
  export import AppID = ApplicationsAPI.AppID;
  export import Application = ApplicationsAPI.Application;
  export import CorsHeaders = ApplicationsAPI.CorsHeaders;
  export import CustomPagesh = ApplicationsAPI.CustomPagesh;
  export import SAMLSaasApp = ApplicationsAPI.SAMLSaasApp;
  export import SelfHostedDomainsh = ApplicationsAPI.SelfHostedDomainsh;
  export import ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export import ApplicationRevokeTokensResponse = ApplicationsAPI.ApplicationRevokeTokensResponse;
  export import ApplicationsSinglePage = ApplicationsAPI.ApplicationsSinglePage;
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
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import Bookmark = BookmarksAPI.Bookmark;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarksSinglePage = BookmarksAPI.BookmarksSinglePage;
  export import BookmarkCreateParams = BookmarksAPI.BookmarkCreateParams;
  export import BookmarkUpdateParams = BookmarksAPI.BookmarkUpdateParams;
  export import BookmarkDeleteParams = BookmarksAPI.BookmarkDeleteParams;
  export import Keys = KeysAPI.Keys;
  export import KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export import KeyGetResponse = KeysAPI.KeyGetResponse;
  export import KeyRotateResponse = KeysAPI.KeyRotateResponse;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import Logs = LogsAPI.Logs;
  export import Users = UsersAPI.Users;
  export import User = UsersAPI.User;
  export import UsersSinglePage = UsersAPI.UsersSinglePage;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export import CustomPage = CustomPagesAPI.CustomPage;
  export import CustomPageWithoutHTML = CustomPagesAPI.CustomPageWithoutHTML;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageWithoutHTMLsSinglePage = CustomPagesAPI.CustomPageWithoutHTMLsSinglePage;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export import Tags = TagsAPI.Tags;
  export import Tag = TagsAPI.Tag;
  export import TagDeleteResponse = TagsAPI.TagDeleteResponse;
  export import TagsSinglePage = TagsAPI.TagsSinglePage;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagUpdateParams = TagsAPI.TagUpdateParams;
}
