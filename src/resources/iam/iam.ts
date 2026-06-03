// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OAuthClientsAPI from './oauth-clients';
import {
  BaseOAuthClients,
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
  BasePermissionGroups,
  PermissionGroupGetParams,
  PermissionGroupGetResponse,
  PermissionGroupListParams,
  PermissionGroupListResponse,
  PermissionGroupListResponsesV4PagePaginationArray,
  PermissionGroups,
} from './permission-groups';
import * as ResourceGroupsAPI from './resource-groups';
import {
  BaseResourceGroups,
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
  BaseSSO,
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
  BaseOAuthScopes,
  OAuthScopeListResponse,
  OAuthScopeListResponsesSinglePage,
  OAuthScopes,
} from './oauth-scopes/oauth-scopes';
import * as UserGroupsAPI from './user-groups/user-groups';
import {
  BaseUserGroups,
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

export class BaseIAM extends APIResource {
  static override readonly _key: readonly ['iam'] = Object.freeze(['iam'] as const);
}
export class IAM extends BaseIAM {
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
IAM.BasePermissionGroups = BasePermissionGroups;
IAM.ResourceGroups = ResourceGroups;
IAM.BaseResourceGroups = BaseResourceGroups;
IAM.UserGroups = UserGroups;
IAM.BaseUserGroups = BaseUserGroups;
IAM.SSO = SSO;
IAM.BaseSSO = BaseSSO;
IAM.OAuthClients = OAuthClients;
IAM.BaseOAuthClients = BaseOAuthClients;
IAM.OAuthScopes = OAuthScopes;
IAM.BaseOAuthScopes = BaseOAuthScopes;

export declare namespace IAM {
  export {
    PermissionGroups as PermissionGroups,
    BasePermissionGroups as BasePermissionGroups,
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupGetResponse as PermissionGroupGetResponse,
    type PermissionGroupListResponsesV4PagePaginationArray as PermissionGroupListResponsesV4PagePaginationArray,
    type PermissionGroupListParams as PermissionGroupListParams,
    type PermissionGroupGetParams as PermissionGroupGetParams,
  };

  export {
    ResourceGroups as ResourceGroups,
    BaseResourceGroups as BaseResourceGroups,
    type ResourceGroupCreateResponse as ResourceGroupCreateResponse,
    type ResourceGroupUpdateResponse as ResourceGroupUpdateResponse,
    type ResourceGroupListResponse as ResourceGroupListResponse,
    type ResourceGroupDeleteResponse as ResourceGroupDeleteResponse,
    type ResourceGroupGetResponse as ResourceGroupGetResponse,
    type ResourceGroupListResponsesSinglePage as ResourceGroupListResponsesSinglePage,
    type ResourceGroupCreateParams as ResourceGroupCreateParams,
    type ResourceGroupUpdateParams as ResourceGroupUpdateParams,
    type ResourceGroupListParams as ResourceGroupListParams,
    type ResourceGroupDeleteParams as ResourceGroupDeleteParams,
    type ResourceGroupGetParams as ResourceGroupGetParams,
  };

  export {
    UserGroups as UserGroups,
    BaseUserGroups as BaseUserGroups,
    type UserGroupCreateResponse as UserGroupCreateResponse,
    type UserGroupUpdateResponse as UserGroupUpdateResponse,
    type UserGroupListResponse as UserGroupListResponse,
    type UserGroupDeleteResponse as UserGroupDeleteResponse,
    type UserGroupGetResponse as UserGroupGetResponse,
    type UserGroupListResponsesV4PagePaginationArray as UserGroupListResponsesV4PagePaginationArray,
    type UserGroupCreateParams as UserGroupCreateParams,
    type UserGroupUpdateParams as UserGroupUpdateParams,
    type UserGroupListParams as UserGroupListParams,
    type UserGroupDeleteParams as UserGroupDeleteParams,
    type UserGroupGetParams as UserGroupGetParams,
  };

  export {
    SSO as SSO,
    BaseSSO as BaseSSO,
    type SSOCreateResponse as SSOCreateResponse,
    type SSOUpdateResponse as SSOUpdateResponse,
    type SSOListResponse as SSOListResponse,
    type SSODeleteResponse as SSODeleteResponse,
    type SSOBeginVerificationResponse as SSOBeginVerificationResponse,
    type SSOGetResponse as SSOGetResponse,
    type SSOListResponsesSinglePage as SSOListResponsesSinglePage,
    type SSOCreateParams as SSOCreateParams,
    type SSOUpdateParams as SSOUpdateParams,
    type SSOListParams as SSOListParams,
    type SSODeleteParams as SSODeleteParams,
    type SSOBeginVerificationParams as SSOBeginVerificationParams,
    type SSOGetParams as SSOGetParams,
  };

  export {
    OAuthClients as OAuthClients,
    BaseOAuthClients as BaseOAuthClients,
    type OAuthClientCreateResponse as OAuthClientCreateResponse,
    type OAuthClientUpdateResponse as OAuthClientUpdateResponse,
    type OAuthClientListResponse as OAuthClientListResponse,
    type OAuthClientDeleteResponse as OAuthClientDeleteResponse,
    type OAuthClientDeleteRotatedSecretResponse as OAuthClientDeleteRotatedSecretResponse,
    type OAuthClientGetResponse as OAuthClientGetResponse,
    type OAuthClientRotateSecretResponse as OAuthClientRotateSecretResponse,
    type OAuthClientListResponsesSinglePage as OAuthClientListResponsesSinglePage,
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
    BaseOAuthScopes as BaseOAuthScopes,
    type OAuthScopeListResponse as OAuthScopeListResponse,
    type OAuthScopeListResponsesSinglePage as OAuthScopeListResponsesSinglePage,
  };
}
