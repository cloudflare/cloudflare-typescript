// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
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

export namespace Access {
  export import Applications = ApplicationsAPI.Applications;
  export import AccessApps = ApplicationsAPI.AccessApps;
  export import ApplicationListResponse = ApplicationsAPI.ApplicationListResponse;
  export import ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export import ApplicationRevokeTokensResponse = ApplicationsAPI.ApplicationRevokeTokensResponse;
  export import ApplicationCreateParams = ApplicationsAPI.ApplicationCreateParams;
  export import ApplicationUpdateParams = ApplicationsAPI.ApplicationUpdateParams;
  export import ApplicationListParams = ApplicationsAPI.ApplicationListParams;
  export import ApplicationDeleteParams = ApplicationsAPI.ApplicationDeleteParams;
  export import ApplicationGetParams = ApplicationsAPI.ApplicationGetParams;
  export import ApplicationRevokeTokensParams = ApplicationsAPI.ApplicationRevokeTokensParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import AccessCertificates = CertificatesAPI.AccessCertificates;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
  export import Groups = GroupsAPI.Groups;
  export import AccessGroups = GroupsAPI.AccessGroups;
  export import GroupListResponse = GroupsAPI.GroupListResponse;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import GroupCreateParams = GroupsAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupListParams = GroupsAPI.GroupListParams;
  export import GroupDeleteParams = GroupsAPI.GroupDeleteParams;
  export import GroupGetParams = GroupsAPI.GroupGetParams;
  export import ServiceTokens = ServiceTokensAPI.ServiceTokens;
  export import AccessServiceTokens = ServiceTokensAPI.AccessServiceTokens;
  export import ServiceTokenCreateResponse = ServiceTokensAPI.ServiceTokenCreateResponse;
  export import ServiceTokenListResponse = ServiceTokensAPI.ServiceTokenListResponse;
  export import ServiceTokenRotateResponse = ServiceTokensAPI.ServiceTokenRotateResponse;
  export import ServiceTokenCreateParams = ServiceTokensAPI.ServiceTokenCreateParams;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenListParams = ServiceTokensAPI.ServiceTokenListParams;
  export import ServiceTokenDeleteParams = ServiceTokensAPI.ServiceTokenDeleteParams;
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import AccessBookmarks = BookmarksAPI.AccessBookmarks;
  export import BookmarkListResponse = BookmarksAPI.BookmarkListResponse;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import Keys = KeysAPI.Keys;
  export import KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyRotateResponse = KeysAPI.KeyRotateResponse;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import Logs = LogsAPI.Logs;
  export import Users = UsersAPI.Users;
  export import AccessUsers = UsersAPI.AccessUsers;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export import AccessCustomPage = CustomPagesAPI.AccessCustomPage;
  export import AccessCustomPageWithoutHTML = CustomPagesAPI.AccessCustomPageWithoutHTML;
  export import CustomPageListResponse = CustomPagesAPI.CustomPageListResponse;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export import Tags = TagsAPI.Tags;
  export import AccessTag = TagsAPI.AccessTag;
  export import TagListResponse = TagsAPI.TagListResponse;
  export import TagDeleteResponse = TagsAPI.TagDeleteResponse;
  export import TagCreateParams = TagsAPI.TagCreateParams;
  export import TagUpdateParams = TagsAPI.TagUpdateParams;
}
