// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OAuthClientsAPI from './oauth-clients';
import {
  OAuthClientCreateParams,
  OAuthClientCreateResponse,
  OAuthClientDeleteParams,
  OAuthClientDeleteResponse,
  OAuthClientDeleteRotatedSecretParams,
  OAuthClientDeleteRotatedSecretResponse,
  OAuthClientGetParams,
  OAuthClientGetResponse,
  OAuthClientListParams,
  OAuthClientListResponse,
  OAuthClientListResponsesSinglePage,
  OAuthClientRotateSecretParams,
  OAuthClientRotateSecretResponse,
  OAuthClientUpdateParams,
  OAuthClientUpdateResponse,
  OAuthClients,
} from './oauth-clients';
import * as PermissionGroupsAPI from './permission-groups';
import {
  PermissionGroupGetParams,
  PermissionGroupGetResponse,
  PermissionGroupListParams,
  PermissionGroupListResponse,
  PermissionGroupListResponsesV4PagePaginationArray,
  PermissionGroups,
} from './permission-groups';
import * as ResourceGroupsAPI from './resource-groups';
import {
  ResourceGroupCreateParams,
  ResourceGroupCreateResponse,
  ResourceGroupDeleteParams,
  ResourceGroupDeleteResponse,
  ResourceGroupGetParams,
  ResourceGroupGetResponse,
  ResourceGroupListParams,
  ResourceGroupListResponse,
  ResourceGroupListResponsesSinglePage,
  ResourceGroupUpdateParams,
  ResourceGroupUpdateResponse,
  ResourceGroups,
} from './resource-groups';
import * as SSOAPI from './sso';
import {
  SSO,
  SSOBeginVerificationParams,
  SSOBeginVerificationResponse,
  SSOCreateParams,
  SSOCreateResponse,
  SSODeleteParams,
  SSODeleteResponse,
  SSOGetParams,
  SSOGetResponse,
  SSOListParams,
  SSOListResponse,
  SSOListResponsesSinglePage,
  SSOUpdateParams,
  SSOUpdateResponse,
} from './sso';
import * as OAuthScopesAPI from './oauth-scopes/oauth-scopes';
import {
  OAuthScopeListResponse,
  OAuthScopeListResponsesSinglePage,
  OAuthScopes,
} from './oauth-scopes/oauth-scopes';
import * as UserGroupsAPI from './user-groups/user-groups';
import {
  UserGroupCreateParams,
  UserGroupCreateResponse,
  UserGroupDeleteParams,
  UserGroupDeleteResponse,
  UserGroupGetParams,
  UserGroupGetResponse,
  UserGroupListParams,
  UserGroupListResponse,
  UserGroupListResponsesV4PagePaginationArray,
  UserGroupUpdateParams,
  UserGroupUpdateResponse,
  UserGroups,
} from './user-groups/user-groups';

export class IAM extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  resourceGroups: ResourceGroupsAPI.ResourceGroups = new ResourceGroupsAPI.ResourceGroups(this._client);
  userGroups: UserGroupsAPI.UserGroups = new UserGroupsAPI.UserGroups(this._client);
  sso: SSOAPI.SSO = new SSOAPI.SSO(this._client);
  oauthClients: OAuthClientsAPI.OAuthClients = new OAuthClientsAPI.OAuthClients(this._client);
  oauthScopes: OAuthScopesAPI.OAuthScopes = new OAuthScopesAPI.OAuthScopes(this._client);
}

IAM.PermissionGroups = PermissionGroups;
IAM.PermissionGroupListResponsesV4PagePaginationArray = PermissionGroupListResponsesV4PagePaginationArray;
IAM.ResourceGroups = ResourceGroups;
IAM.ResourceGroupListResponsesSinglePage = ResourceGroupListResponsesSinglePage;
IAM.UserGroups = UserGroups;
IAM.UserGroupListResponsesV4PagePaginationArray = UserGroupListResponsesV4PagePaginationArray;
IAM.SSO = SSO;
IAM.SSOListResponsesSinglePage = SSOListResponsesSinglePage;
IAM.OAuthClients = OAuthClients;
IAM.OAuthClientListResponsesSinglePage = OAuthClientListResponsesSinglePage;
IAM.OAuthScopes = OAuthScopes;
IAM.OAuthScopeListResponsesSinglePage = OAuthScopeListResponsesSinglePage;

export declare namespace IAM {
  export {
    PermissionGroups as PermissionGroups,
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    PermissionGroupListResponsesV4PagePaginationArray as PermissionGroupListResponsesV4PagePaginationArray,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };

  export {
    ResourceGroups as ResourceGroups,
    type ResourceGroupCreateResponse as ResourceGroupCreateResponse,
    type ResourceGroupUpdateResponse as ResourceGroupUpdateResponse,
    type ResourceGroupListResponse as ResourceGroupListResponse,
    type ResourceGroupDeleteResponse as ResourceGroupDeleteResponse,
    type ResourceGroupGetResponse as ResourceGroupGetResponse,
    ResourceGroupListResponsesSinglePage as ResourceGroupListResponsesSinglePage,
    type ResourceGroupCreateParams as ResourceGroupCreateParams,
    type ResourceGroupUpdateParams as ResourceGroupUpdateParams,
    type ResourceGroupListParams as ResourceGroupListParams,
    type ResourceGroupDeleteParams as ResourceGroupDeleteParams,
    type ResourceGroupGetParams as ResourceGroupGetParams,
  };

  export {
    UserGroups as UserGroups,
    type UserGroupCreateResponse as UserGroupCreateResponse,
    type UserGroupUpdateResponse as UserGroupUpdateResponse,
    type UserGroupListResponse as UserGroupListResponse,
    type UserGroupDeleteResponse as UserGroupDeleteResponse,
    type UserGroupGetResponse as UserGroupGetResponse,
    UserGroupListResponsesV4PagePaginationArray as UserGroupListResponsesV4PagePaginationArray,
    type UserGroupCreateParams as UserGroupCreateParams,
    type UserGroupUpdateParams as UserGroupUpdateParams,
    type UserGroupListParams as UserGroupListParams,
    type UserGroupDeleteParams as UserGroupDeleteParams,
    type UserGroupGetParams as UserGroupGetParams,
  };

  export {
    SSO as SSO,
    type SSOCreateResponse as SSOCreateResponse,
    type SSOUpdateResponse as SSOUpdateResponse,
    type SSOListResponse as SSOListResponse,
    type SSODeleteResponse as SSODeleteResponse,
    type SSOBeginVerificationResponse as SSOBeginVerificationResponse,
    type SSOGetResponse as SSOGetResponse,
    SSOListResponsesSinglePage as SSOListResponsesSinglePage,
    type SSOCreateParams as SSOCreateParams,
    type SSOUpdateParams as SSOUpdateParams,
    type SSOListParams as SSOListParams,
    type SSODeleteParams as SSODeleteParams,
    type SSOBeginVerificationParams as SSOBeginVerificationParams,
    type SSOGetParams as SSOGetParams,
  };

  export {
    OAuthClients as OAuthClients,
    type OAuthClientCreateResponse as OAuthClientCreateResponse,
    type OAuthClientUpdateResponse as OAuthClientUpdateResponse,
    type OAuthClientListResponse as OAuthClientListResponse,
    type OAuthClientDeleteResponse as OAuthClientDeleteResponse,
    type OAuthClientDeleteRotatedSecretResponse as OAuthClientDeleteRotatedSecretResponse,
    type OAuthClientGetResponse as OAuthClientGetResponse,
    type OAuthClientRotateSecretResponse as OAuthClientRotateSecretResponse,
    OAuthClientListResponsesSinglePage as OAuthClientListResponsesSinglePage,
    type OAuthClientCreateParams as OAuthClientCreateParams,
    type OAuthClientUpdateParams as OAuthClientUpdateParams,
    type OAuthClientListParams as OAuthClientListParams,
    type OAuthClientDeleteParams as OAuthClientDeleteParams,
    type OAuthClientDeleteRotatedSecretParams as OAuthClientDeleteRotatedSecretParams,
    type OAuthClientGetParams as OAuthClientGetParams,
    type OAuthClientRotateSecretParams as OAuthClientRotateSecretParams,
  };

  export {
    OAuthScopes as OAuthScopes,
    type OAuthScopeListResponse as OAuthScopeListResponse,
    OAuthScopeListResponsesSinglePage as OAuthScopeListResponsesSinglePage,
  };
}
