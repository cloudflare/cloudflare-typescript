// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ResourceSharingAPI from './resource-sharing';
import * as RecipientsAPI from './recipients';
import * as ResourcesAPI from './resources';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class ResourceSharing extends APIResource {
  recipients: RecipientsAPI.Recipients = new RecipientsAPI.Recipients(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);

  /**
   * Create a new share
   */
  create(
    params: ResourceSharingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceSharingCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/shares`, { body, ...options }) as Core.APIPromise<{
        result: ResourceSharingCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updating is not immediate, an updated share object with a new status will be
   * returned.
   */
  update(
    shareIdentifier: string,
    params: ResourceSharingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceSharingUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/shares/${shareIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ResourceSharingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all account shares.
   */
  list(
    params: ResourceSharingListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceSharingListResponsesV4PagePaginationArray, ResourceSharingListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/shares`,
      ResourceSharingListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletion is not immediate, an updated share object with a new status will be
   * returned.
   */
  delete(
    shareIdentifier: string,
    params: ResourceSharingDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceSharingDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/shares/${shareIdentifier}`, options) as Core.APIPromise<{
        result: ResourceSharingDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches share by ID.
   */
  get(
    shareIdentifier: string,
    params: ResourceSharingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceSharingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/shares/${shareIdentifier}`, options) as Core.APIPromise<{
        result: ResourceSharingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ResourceSharingListResponsesV4PagePaginationArray extends V4PagePaginationArray<ResourceSharingListResponse> {}

export interface ResourceSharingCreateResponse {
  /**
   * Share identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * The display name of an account.
   */
  account_name: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * The name of the share.
   */
  name: string;

  /**
   * Organization identifier.
   */
  organization_id: string;

  status: 'active' | 'deleting' | 'deleted';

  target_type: 'account' | 'organization';

  kind?: 'sent' | 'received';
}

export interface ResourceSharingUpdateResponse {
  /**
   * Share identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * The display name of an account.
   */
  account_name: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * The name of the share.
   */
  name: string;

  /**
   * Organization identifier.
   */
  organization_id: string;

  status: 'active' | 'deleting' | 'deleted';

  target_type: 'account' | 'organization';

  kind?: 'sent' | 'received';
}

export interface ResourceSharingListResponse {
  /**
   * Share identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * The display name of an account.
   */
  account_name: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * The name of the share.
   */
  name: string;

  /**
   * Organization identifier.
   */
  organization_id: string;

  status: 'active' | 'deleting' | 'deleted';

  target_type: 'account' | 'organization';

  kind?: 'sent' | 'received';
}

export interface ResourceSharingDeleteResponse {
  /**
   * Share identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * The display name of an account.
   */
  account_name: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * The name of the share.
   */
  name: string;

  /**
   * Organization identifier.
   */
  organization_id: string;

  status: 'active' | 'deleting' | 'deleted';

  target_type: 'account' | 'organization';

  kind?: 'sent' | 'received';
}

export interface ResourceSharingGetResponse {
  /**
   * Share identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * The display name of an account.
   */
  account_name: string;

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * The name of the share.
   */
  name: string;

  /**
   * Organization identifier.
   */
  organization_id: string;

  status: 'active' | 'deleting' | 'deleted';

  target_type: 'account' | 'organization';

  kind?: 'sent' | 'received';
}

export interface ResourceSharingCreateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the share.
   */
  name: string;

  /**
   * Body param:
   */
  recipients: Array<ResourceSharingCreateParams.Recipient>;

  /**
   * Body param:
   */
  resources: Array<ResourceSharingCreateParams.Resource>;
}

export namespace ResourceSharingCreateParams {
  /**
   * Account or organization ID must be provided.
   */
  export interface Recipient {
    /**
     * Account identifier.
     */
    account_id?: string;

    /**
     * Organization identifier.
     */
    organization_id?: string;
  }

  export interface Resource {
    /**
     * Resource Metadata.
     */
    meta: unknown;

    /**
     * Account identifier.
     */
    resource_account_id: string;

    /**
     * Share Resource identifier.
     */
    resource_id: string;

    /**
     * Resource Type.
     */
    resource_type: 'custom-ruleset';
  }
}

export interface ResourceSharingUpdateParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the share.
   */
  name: string;
}

export interface ResourceSharingListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Query param: Direction to sort objects.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter shares by kind.
   */
  kind?: 'sent' | 'received';

  /**
   * Query param: Order shares by values in the given field.
   */
  order?: 'name' | 'created';

  /**
   * Query param: Filter shares by status.
   */
  status?: 'active' | 'deleting' | 'deleted';

  /**
   * Query param: Filter shares by target_type.
   */
  target_type?: 'account' | 'organization';
}

export interface ResourceSharingDeleteParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export interface ResourceSharingGetParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export namespace ResourceSharing {
  export import ResourceSharingCreateResponse = ResourceSharingAPI.ResourceSharingCreateResponse;
  export import ResourceSharingUpdateResponse = ResourceSharingAPI.ResourceSharingUpdateResponse;
  export import ResourceSharingListResponse = ResourceSharingAPI.ResourceSharingListResponse;
  export import ResourceSharingDeleteResponse = ResourceSharingAPI.ResourceSharingDeleteResponse;
  export import ResourceSharingGetResponse = ResourceSharingAPI.ResourceSharingGetResponse;
  export import ResourceSharingListResponsesV4PagePaginationArray = ResourceSharingAPI.ResourceSharingListResponsesV4PagePaginationArray;
  export import ResourceSharingCreateParams = ResourceSharingAPI.ResourceSharingCreateParams;
  export import ResourceSharingUpdateParams = ResourceSharingAPI.ResourceSharingUpdateParams;
  export import ResourceSharingListParams = ResourceSharingAPI.ResourceSharingListParams;
  export import ResourceSharingDeleteParams = ResourceSharingAPI.ResourceSharingDeleteParams;
  export import ResourceSharingGetParams = ResourceSharingAPI.ResourceSharingGetParams;
  export import Recipients = RecipientsAPI.Recipients;
  export import RecipientCreateResponse = RecipientsAPI.RecipientCreateResponse;
  export import RecipientListResponse = RecipientsAPI.RecipientListResponse;
  export import RecipientDeleteResponse = RecipientsAPI.RecipientDeleteResponse;
  export import RecipientGetResponse = RecipientsAPI.RecipientGetResponse;
  export import RecipientListResponsesV4PagePaginationArray = RecipientsAPI.RecipientListResponsesV4PagePaginationArray;
  export import RecipientCreateParams = RecipientsAPI.RecipientCreateParams;
  export import RecipientListParams = RecipientsAPI.RecipientListParams;
  export import RecipientDeleteParams = RecipientsAPI.RecipientDeleteParams;
  export import RecipientGetParams = RecipientsAPI.RecipientGetParams;
  export import Resources = ResourcesAPI.Resources;
  export import ResourceCreateResponse = ResourcesAPI.ResourceCreateResponse;
  export import ResourceUpdateResponse = ResourcesAPI.ResourceUpdateResponse;
  export import ResourceListResponse = ResourcesAPI.ResourceListResponse;
  export import ResourceDeleteResponse = ResourcesAPI.ResourceDeleteResponse;
  export import ResourceGetResponse = ResourcesAPI.ResourceGetResponse;
  export import ResourceListResponsesV4PagePaginationArray = ResourcesAPI.ResourceListResponsesV4PagePaginationArray;
  export import ResourceCreateParams = ResourcesAPI.ResourceCreateParams;
  export import ResourceUpdateParams = ResourcesAPI.ResourceUpdateParams;
  export import ResourceListParams = ResourcesAPI.ResourceListParams;
  export import ResourceDeleteParams = ResourcesAPI.ResourceDeleteParams;
  export import ResourceGetParams = ResourcesAPI.ResourceGetParams;
}
