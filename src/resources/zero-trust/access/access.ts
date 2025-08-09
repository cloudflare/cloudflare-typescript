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
  CustomPageWithoutHTMLsV4PagePaginationArray,
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
  PolicyListResponsesV4PagePaginationArray,
  PolicyUpdateParams,
  PolicyUpdateResponse,
} from './policies';
import * as ServiceTokensAPI from './service-tokens';
import {
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
import { Infrastructure } from './infrastructure/infrastructure';
import * as LogsAPI from './logs/logs';
import { Logs } from './logs/logs';
import * as UsersAPI from './users/users';
import {
  AccessUser,
  UserListParams,
  UserListResponse,
  UserListResponsesV4PagePaginationArray,
  Users,
} from './users/users';

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

Access.GatewayCA = GatewayCA;
Access.GatewayCAListResponsesSinglePage = GatewayCAListResponsesSinglePage;
Access.Infrastructure = Infrastructure;
Access.Applications = Applications;
Access.ApplicationListResponsesV4PagePaginationArray = ApplicationListResponsesV4PagePaginationArray;
Access.Certificates = Certificates;
Access.CertificatesV4PagePaginationArray = CertificatesV4PagePaginationArray;
Access.Groups = Groups;
Access.GroupListResponsesV4PagePaginationArray = GroupListResponsesV4PagePaginationArray;
Access.ServiceTokens = ServiceTokens;
Access.ServiceTokensV4PagePaginationArray = ServiceTokensV4PagePaginationArray;
Access.Bookmarks = Bookmarks;
Access.BookmarksSinglePage = BookmarksSinglePage;
Access.Keys = Keys;
Access.Logs = Logs;
Access.Users = Users;
Access.UserListResponsesV4PagePaginationArray = UserListResponsesV4PagePaginationArray;
Access.CustomPages = CustomPages;
Access.CustomPageWithoutHTMLsV4PagePaginationArray = CustomPageWithoutHTMLsV4PagePaginationArray;
Access.Tags = Tags;
Access.TagsV4PagePaginationArray = TagsV4PagePaginationArray;
Access.Policies = Policies;
Access.PolicyListResponsesV4PagePaginationArray = PolicyListResponsesV4PagePaginationArray;

export declare namespace Access {
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
    ApplicationListResponsesV4PagePaginationArray as ApplicationListResponsesV4PagePaginationArray,
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
    type Certificate as Certificate,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    CertificatesV4PagePaginationArray as CertificatesV4PagePaginationArray,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateDeleteParams as CertificateDeleteParams,
    type CertificateGetParams as CertificateGetParams,
  };

  export {
    Groups as Groups,
    type ZeroTrustGroup as ZeroTrustGroup,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupGetResponse as GroupGetResponse,
    GroupListResponsesV4PagePaginationArray as GroupListResponsesV4PagePaginationArray,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
    type GroupGetParams as GroupGetParams,
  };

  export {
    ServiceTokens as ServiceTokens,
    type ServiceToken as ServiceToken,
    type ServiceTokenCreateResponse as ServiceTokenCreateResponse,
    type ServiceTokenRotateResponse as ServiceTokenRotateResponse,
    ServiceTokensV4PagePaginationArray as ServiceTokensV4PagePaginationArray,
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
    type UserListResponse as UserListResponse,
    UserListResponsesV4PagePaginationArray as UserListResponsesV4PagePaginationArray,
    type UserListParams as UserListParams,
  };

  export {
    CustomPages as CustomPages,
    type CustomPage as CustomPage,
    type CustomPageWithoutHTML as CustomPageWithoutHTML,
    type CustomPageDeleteResponse as CustomPageDeleteResponse,
    CustomPageWithoutHTMLsV4PagePaginationArray as CustomPageWithoutHTMLsV4PagePaginationArray,
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
    TagsV4PagePaginationArray as TagsV4PagePaginationArray,
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
    PolicyListResponsesV4PagePaginationArray as PolicyListResponsesV4PagePaginationArray,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };
}
