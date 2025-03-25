// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RecipientsAPI from './recipients';
import {
  RecipientCreateParams,
  RecipientCreateResponse,
  RecipientDeleteParams,
  RecipientDeleteResponse,
  RecipientGetParams,
  RecipientGetResponse,
  RecipientListParams,
  RecipientListResponse,
  RecipientListResponsesV4PagePaginationArray,
  Recipients,
} from './recipients';
import * as ResourcesAPI from './resources';
import {
  ResourceCreateParams,
  ResourceCreateResponse,
  ResourceDeleteParams,
  ResourceDeleteResponse,
  ResourceGetParams,
  ResourceGetResponse,
  ResourceListParams,
  ResourceListResponse,
  ResourceListResponsesV4PagePaginationArray,
  ResourceUpdateParams,
  ResourceUpdateResponse,
  Resources,
} from './resources';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ResourceSharing extends APIResource {
  recipients: RecipientsAPI.Recipients = new RecipientsAPI.Recipients(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);

  /**
   * Create a new share
   */
  create(
    params: ResourceSharingCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceSharingCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/shares`, { body, ...options }) as APIPromise<{
        result: ResourceSharingCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updating is not immediate, an updated share object with a new status will be
   * returned.
   */
  update(
    shareID: string,
    params: ResourceSharingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceSharingUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/shares/${shareID}`, { body, ...options }) as APIPromise<{
        result: ResourceSharingUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all account shares.
   */
  list(
    params: ResourceSharingListParams,
    options?: RequestOptions,
  ): PagePromise<ResourceSharingListResponsesV4PagePaginationArray, ResourceSharingListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/shares`,
      V4PagePaginationArray<ResourceSharingListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletion is not immediate, an updated share object with a new status will be
   * returned.
   */
  delete(
    shareID: string,
    params: ResourceSharingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ResourceSharingDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/shares/${shareID}`, options) as APIPromise<{
        result: ResourceSharingDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches share by ID.
   */
  get(
    shareID: string,
    params: ResourceSharingGetParams,
    options?: RequestOptions,
  ): APIPromise<ResourceSharingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/shares/${shareID}`, options) as APIPromise<{
        result: ResourceSharingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ResourceSharingListResponsesV4PagePaginationArray =
  V4PagePaginationArray<ResourceSharingListResponse>;

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
    resource_type: 'custom-ruleset' | 'widget';
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

ResourceSharing.Recipients = Recipients;
ResourceSharing.Resources = Resources;

export declare namespace ResourceSharing {
  export {
    type ResourceSharingCreateResponse as ResourceSharingCreateResponse,
    type ResourceSharingUpdateResponse as ResourceSharingUpdateResponse,
    type ResourceSharingListResponse as ResourceSharingListResponse,
    type ResourceSharingDeleteResponse as ResourceSharingDeleteResponse,
    type ResourceSharingGetResponse as ResourceSharingGetResponse,
    type ResourceSharingListResponsesV4PagePaginationArray as ResourceSharingListResponsesV4PagePaginationArray,
    type ResourceSharingCreateParams as ResourceSharingCreateParams,
    type ResourceSharingUpdateParams as ResourceSharingUpdateParams,
    type ResourceSharingListParams as ResourceSharingListParams,
    type ResourceSharingDeleteParams as ResourceSharingDeleteParams,
    type ResourceSharingGetParams as ResourceSharingGetParams,
  };

  export {
    Recipients as Recipients,
    type RecipientCreateResponse as RecipientCreateResponse,
    type RecipientListResponse as RecipientListResponse,
    type RecipientDeleteResponse as RecipientDeleteResponse,
    type RecipientGetResponse as RecipientGetResponse,
    type RecipientListResponsesV4PagePaginationArray as RecipientListResponsesV4PagePaginationArray,
    type RecipientCreateParams as RecipientCreateParams,
    type RecipientListParams as RecipientListParams,
    type RecipientDeleteParams as RecipientDeleteParams,
    type RecipientGetParams as RecipientGetParams,
  };

  export {
    Resources as Resources,
    type ResourceCreateResponse as ResourceCreateResponse,
    type ResourceUpdateResponse as ResourceUpdateResponse,
    type ResourceListResponse as ResourceListResponse,
    type ResourceDeleteResponse as ResourceDeleteResponse,
    type ResourceGetResponse as ResourceGetResponse,
    type ResourceListResponsesV4PagePaginationArray as ResourceListResponsesV4PagePaginationArray,
    type ResourceCreateParams as ResourceCreateParams,
    type ResourceUpdateParams as ResourceUpdateParams,
    type ResourceListParams as ResourceListParams,
    type ResourceDeleteParams as ResourceDeleteParams,
    type ResourceGetParams as ResourceGetParams,
  };
}
