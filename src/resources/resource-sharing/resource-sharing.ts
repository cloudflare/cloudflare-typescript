// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RecipientsAPI from './recipients';
import { Recipients } from './recipients';
import * as ResourcesAPI from './resources';
import { Resources } from './resources';
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

ResourceSharing.Recipients = Recipients;
ResourceSharing.Resources = Resources;

export declare namespace ResourceSharing {
  export { Recipients as Recipients };

  export { Resources as Resources };
}
