// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BookmarksAPI from 'cloudflare/resources/access/bookmarks';
import * as CustomPagesAPI from 'cloudflare/resources/access/custom-pages';
import * as GroupsAPI from 'cloudflare/resources/access/groups';
import * as IdentityProvidersAPI from 'cloudflare/resources/access/identity-providers';
import * as SeatsAPI from 'cloudflare/resources/access/seats';
import * as TagsAPI from 'cloudflare/resources/access/tags';
import * as AppsAPI from 'cloudflare/resources/access/apps/apps';
import * as CertificatesAPI from 'cloudflare/resources/access/certificates/certificates';
import * as KeysAPI from 'cloudflare/resources/access/keys/keys';
import * as LogsAPI from 'cloudflare/resources/access/logs/logs';
import * as OrganizationsAPI from 'cloudflare/resources/access/organizations/organizations';
import * as ServiceTokensAPI from 'cloudflare/resources/access/service-tokens/service-tokens';
import * as UsersAPI from 'cloudflare/resources/access/users/users';

export class Access extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  identityProviders: IdentityProvidersAPI.IdentityProviders = new IdentityProvidersAPI.IdentityProviders(
    this._client,
  );
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  serviceTokens: ServiceTokensAPI.ServiceTokens = new ServiceTokensAPI.ServiceTokens(this._client);
  bookmarks: BookmarksAPI.Bookmarks = new BookmarksAPI.Bookmarks(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  seats: SeatsAPI.Seats = new SeatsAPI.Seats(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  customPages: CustomPagesAPI.CustomPages = new CustomPagesAPI.CustomPages(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

export namespace Access {
  export import Apps = AppsAPI.Apps;
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export import AppListResponse = AppsAPI.AppListResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppGetResponse = AppsAPI.AppGetResponse;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import CertificateUpdateResponse = CertificatesAPI.CertificateUpdateResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse = CertificatesAPI.CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse;
  export import CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse = CertificatesAPI.CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateAccessMTLSAuthenticationAddAnMTLSCertificateParams = CertificatesAPI.CertificateAccessMTLSAuthenticationAddAnMTLSCertificateParams;
  export import Groups = GroupsAPI.Groups;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import GroupAccessGroupsCreateAnAccessGroupResponse = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupResponse;
  export import GroupAccessGroupsListAccessGroupsResponse = GroupsAPI.GroupAccessGroupsListAccessGroupsResponse;
  export import GroupGetResponse = GroupsAPI.GroupGetResponse;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupAccessGroupsCreateAnAccessGroupParams = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupParams;
  export import IdentityProviders = IdentityProvidersAPI.IdentityProviders;
  export import IdentityProviderUpdateResponse = IdentityProvidersAPI.IdentityProviderUpdateResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse;
  export import IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse;
  export import IdentityProviderGetResponse = IdentityProvidersAPI.IdentityProviderGetResponse;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
  export import IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams;
  export import Organizations = OrganizationsAPI.Organizations;
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams;
  export import ServiceTokens = ServiceTokensAPI.ServiceTokens;
  export import ServiceTokenUpdateResponse = ServiceTokensAPI.ServiceTokenUpdateResponse;
  export import ServiceTokenDeleteResponse = ServiceTokensAPI.ServiceTokenDeleteResponse;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenResponse;
  export import ServiceTokenAccessServiceTokensListServiceTokensResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensListServiceTokensResponse;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenParams = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenParams;
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import BookmarkUpdateResponse = BookmarksAPI.BookmarkUpdateResponse;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse = BookmarksAPI.BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse;
  export import BookmarkGetResponse = BookmarksAPI.BookmarkGetResponse;
  export import Keys = KeysAPI.Keys;
  export import KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams;
  export import Logs = LogsAPI.Logs;
  export import Seats = SeatsAPI.Seats;
  export import SeatZeroTrustSeatsUpdateAUserSeatResponse = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatResponse;
  export import SeatZeroTrustSeatsUpdateAUserSeatParams = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatParams;
  export import Users = UsersAPI.Users;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export import CustomPageCreateResponse = CustomPagesAPI.CustomPageCreateResponse;
  export import CustomPageUpdateResponse = CustomPagesAPI.CustomPageUpdateResponse;
  export import CustomPageListResponse = CustomPagesAPI.CustomPageListResponse;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageGetResponse = CustomPagesAPI.CustomPageGetResponse;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateParams = CustomPagesAPI.CustomPageUpdateParams;
  export import Tags = TagsAPI.Tags;
  export import TagListResponse = TagsAPI.TagListResponse;
}
