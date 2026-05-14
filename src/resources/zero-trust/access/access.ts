// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BookmarksAPI from './bookmarks';
import {
  BaseBookmarks,
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
  BaseCustomPages,
  CustomPage,
  CustomPageCreateParams,
  CustomPageDeleteParams,
  CustomPageDeleteResponse,
  CustomPageGetParams,
  CustomPageListParams,
  CustomPageUpdateParams,
  CustomPageWithoutHTML,
  CustomPageWithoutHTMLsV4PagePaginationArray,
  CustomPages,
} from './custom-pages';
import * as GatewayCAAPI from './gateway-ca';
import {
  BaseGatewayCA,
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
  BaseGroups,
  GroupCreateParams,
  GroupCreateResponse,
  GroupDeleteParams,
  GroupDeleteResponse,
  GroupGetParams,
  GroupGetResponse,
  GroupListParams,
  GroupListResponse,
  GroupListResponsesV4PagePaginationArray,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
  ZeroTrustGroup,
} from './groups';
import * as KeysAPI from './keys';
import {
  BaseKeys,
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
  BasePolicies,
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
  PolicyListResponsesV4PagePaginationArray,
  PolicyUpdateParams,
  PolicyUpdateResponse,
} from './policies';
import * as SAMLCertificatesAPI from './saml-certificates';
import { BaseSAMLCertificates, SAMLCertificates } from './saml-certificates';
import * as ServiceTokensAPI from './service-tokens';
import {
  BaseServiceTokens,
  ServiceToken,
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
  ServiceTokensV4PagePaginationArray,
} from './service-tokens';
import * as TagsAPI from './tags';
import {
  BaseTags,
  Tag,
  TagCreateParams,
  TagDeleteParams,
  TagDeleteResponse,
  TagGetParams,
  TagListParams,
  TagUpdateParams,
  Tags,
  TagsV4PagePaginationArray,
} from './tags';
import * as AIControlsAPI from './ai-controls/ai-controls';
import { AIControls, BaseAIControls } from './ai-controls/ai-controls';
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
  ApplicationListResponsesV4PagePaginationArray,
  ApplicationPolicy,
  ApplicationRevokeTokensParams,
  ApplicationRevokeTokensResponse,
  ApplicationSCIMConfig,
  ApplicationType,
  ApplicationUpdateParams,
  ApplicationUpdateResponse,
  Applications,
  BaseApplications,
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
  BaseCertificates,
  Certificate,
  CertificateCreateParams,
  CertificateDeleteParams,
  CertificateDeleteResponse,
  CertificateGetParams,
  CertificateListParams,
  CertificateUpdateParams,
  Certificates,
  CertificatesV4PagePaginationArray,
} from './certificates/certificates';
import * as InfrastructureAPI from './infrastructure/infrastructure';
import { BaseInfrastructure, Infrastructure } from './infrastructure/infrastructure';
import * as LogsAPI from './logs/logs';
import { BaseLogs, Logs } from './logs/logs';
import * as UsersAPI from './users/users';
import {
  AccessUser,
  BaseUsers,
  UserCreateParams,
  UserCreateResponse,
  UserDeleteParams,
  UserDeleteResponse,
  UserGetParams,
  UserGetResponse,
  UserListParams,
  UserListResponse,
  UserListResponsesV4PagePaginationArray,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users/users';

export class BaseAccess extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access'] = Object.freeze([
    'zeroTrust',
    'access',
  ] as const);
}
export class Access extends BaseAccess {
  aiControls: AIControlsAPI.AIControls = new AIControlsAPI.AIControls(this._client);
  gatewayCA: GatewayCAAPI.GatewayCA = new GatewayCAAPI.GatewayCA(this._client);
  samlCertificates: SAMLCertificatesAPI.SAMLCertificates = new SAMLCertificatesAPI.SAMLCertificates(
    this._client,
  );
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

Access.AIControls = AIControls;
Access.BaseAIControls = BaseAIControls;
Access.GatewayCA = GatewayCA;
Access.BaseGatewayCA = BaseGatewayCA;
Access.SAMLCertificates = SAMLCertificates;
Access.BaseSAMLCertificates = BaseSAMLCertificates;
Access.Infrastructure = Infrastructure;
Access.BaseInfrastructure = BaseInfrastructure;
Access.Applications = Applications;
Access.BaseApplications = BaseApplications;
Access.Certificates = Certificates;
Access.BaseCertificates = BaseCertificates;
Access.Groups = Groups;
Access.BaseGroups = BaseGroups;
Access.ServiceTokens = ServiceTokens;
Access.BaseServiceTokens = BaseServiceTokens;
Access.Bookmarks = Bookmarks;
Access.BaseBookmarks = BaseBookmarks;
Access.Keys = Keys;
Access.BaseKeys = BaseKeys;
Access.Logs = Logs;
Access.BaseLogs = BaseLogs;
Access.Users = Users;
Access.BaseUsers = BaseUsers;
Access.CustomPages = CustomPages;
Access.BaseCustomPages = BaseCustomPages;
Access.Tags = Tags;
Access.BaseTags = BaseTags;
Access.Policies = Policies;
Access.BasePolicies = BasePolicies;

export declare namespace Access {
  export { AIControls as AIControls, BaseAIControls as BaseAIControls };

  export {
    GatewayCA as GatewayCA,
    BaseGatewayCA as BaseGatewayCA,
    type GatewayCACreateResponse as GatewayCACreateResponse,
    type GatewayCAListResponse as GatewayCAListResponse,
    type GatewayCADeleteResponse as GatewayCADeleteResponse,
    type GatewayCAListResponsesSinglePage as GatewayCAListResponsesSinglePage,
    type GatewayCACreateParams as GatewayCACreateParams,
    type GatewayCAListParams as GatewayCAListParams,
    type GatewayCADeleteParams as GatewayCADeleteParams,
  };

  export { SAMLCertificates as SAMLCertificates, BaseSAMLCertificates as BaseSAMLCertificates };

  export { Infrastructure as Infrastructure, BaseInfrastructure as BaseInfrastructure };

  export {
    Applications as Applications,
    BaseApplications as BaseApplications,
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
    type ApplicationListResponsesV4PagePaginationArray as ApplicationListResponsesV4PagePaginationArray,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationDeleteParams as ApplicationDeleteParams,
    type ApplicationGetParams as ApplicationGetParams,
    type ApplicationRevokeTokensParams as ApplicationRevokeTokensParams,
  };

  export {
    Certificates as Certificates,
    BaseCertificates as BaseCertificates,
    type AssociatedHostnames as AssociatedHostnames,
    type Certificate as Certificate,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    type CertificatesV4PagePaginationArray as CertificatesV4PagePaginationArray,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateDeleteParams as CertificateDeleteParams,
    type CertificateGetParams as CertificateGetParams,
  };

  export {
    Groups as Groups,
    BaseGroups as BaseGroups,
    type ZeroTrustGroup as ZeroTrustGroup,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupGetResponse as GroupGetResponse,
    type GroupListResponsesV4PagePaginationArray as GroupListResponsesV4PagePaginationArray,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };

  export {
    ServiceTokens as ServiceTokens,
    BaseServiceTokens as BaseServiceTokens,
    type ServiceToken as ServiceToken,
    type ServiceTokenCreateResponse as ServiceTokenCreateResponse,
    type ServiceTokenRotateResponse as ServiceTokenRotateResponse,
    type ServiceTokensV4PagePaginationArray as ServiceTokensV4PagePaginationArray,
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
    BaseBookmarks as BaseBookmarks,
    type Bookmark as Bookmark,
    type BookmarkDeleteResponse as BookmarkDeleteResponse,
    type BookmarksSinglePage as BookmarksSinglePage,
    type BookmarkCreateParams as BookmarkCreateParams,
    type BookmarkUpdateParams as BookmarkUpdateParams,
    type BookmarkListParams as BookmarkListParams,
    type BookmarkDeleteParams as BookmarkDeleteParams,
    type BookmarkGetParams as BookmarkGetParams,
  };

  export {
    Keys as Keys,
    BaseKeys as BaseKeys,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyGetResponse as KeyGetResponse,
    type KeyRotateResponse as KeyRotateResponse,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyGetParams as KeyGetParams,
    type KeyRotateParams as KeyRotateParams,
  };

  export { Logs as Logs, BaseLogs as BaseLogs };

  export {
    Users as Users,
    BaseUsers as BaseUsers,
    type AccessUser as AccessUser,
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserGetResponse as UserGetResponse,
    type UserListResponsesV4PagePaginationArray as UserListResponsesV4PagePaginationArray,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
  };

  export {
    CustomPages as CustomPages,
    BaseCustomPages as BaseCustomPages,
    type CustomPage as CustomPage,
    type CustomPageWithoutHTML as CustomPageWithoutHTML,
    type CustomPageDeleteResponse as CustomPageDeleteResponse,
    type CustomPageWithoutHTMLsV4PagePaginationArray as CustomPageWithoutHTMLsV4PagePaginationArray,
    type CustomPageCreateParams as CustomPageCreateParams,
    type CustomPageUpdateParams as CustomPageUpdateParams,
    type CustomPageListParams as CustomPageListParams,
    type CustomPageDeleteParams as CustomPageDeleteParams,
    type CustomPageGetParams as CustomPageGetParams,
  };

  export {
    Tags as Tags,
    BaseTags as BaseTags,
    type Tag as Tag,
    type TagDeleteResponse as TagDeleteResponse,
    type TagsV4PagePaginationArray as TagsV4PagePaginationArray,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagGetParams as TagGetParams,
  };

  export {
    Policies as Policies,
    BasePolicies as BasePolicies,
    type ApprovalGroup as ApprovalGroup,
    type Policy as Policy,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListResponsesV4PagePaginationArray as PolicyListResponsesV4PagePaginationArray,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
