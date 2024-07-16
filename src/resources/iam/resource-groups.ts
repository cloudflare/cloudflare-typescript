// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ResourceGroupsAPI from './resource-groups';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class ResourceGroups extends APIResource {
  /**
   * Create a new Resource Group under the specified account.
   */
  create(
    params: ResourceGroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/iam/resource_groups`, { body, ...options });
  }

  /**
   * Modify an existing resource group.
   */
  update(
    resourceGroupId: string,
    params: ResourceGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/iam/resource_groups/${resourceGroupId}`, {
      body,
      ...options,
    });
  }

  /**
   * List all the resource groups for an account.
   */
  list(
    params: ResourceGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceGroupListResponsesV4PagePaginationArray, ResourceGroupListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/iam/resource_groups`,
      ResourceGroupListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Remove a resource group from an account.
   */
  delete(
    resourceGroupId: string,
    params: ResourceGroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/iam/resource_groups/${resourceGroupId}`,
        options,
      ) as Core.APIPromise<{ result: ResourceGroupDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific resource group in an account.
   */
  get(
    resourceGroupId: string,
    params: ResourceGroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/iam/resource_groups/${resourceGroupId}`, options);
  }
}

export class ResourceGroupListResponsesV4PagePaginationArray extends V4PagePaginationArray<ResourceGroupListResponse> {}

/**
 * A group of scoped resources.
 */
export interface ResourceGroupCreateResponse {
  /**
   * Identifier of the group.
   */
  id?: string;

  /**
   * Attributes associated to the resource group.
   */
  meta?: unknown;

  /**
   * A scope is a combination of scope objects which provides additional context.
   */
  scope?: ResourceGroupCreateResponse.Scope;
}

export namespace ResourceGroupCreateResponse {
  /**
   * A scope is a combination of scope objects which provides additional context.
   */
  export interface Scope {
    /**
     * This is a combination of pre-defined resource name and identifier (like Account
     * ID etc.)
     */
    key: string;

    /**
     * A list of scope objects for additional context. The number of Scope objects
     * should not be zero.
     */
    objects: Array<Scope.Object>;
  }

  export namespace Scope {
    /**
     * A scope object represents any resource that can have actions applied against
     * invite.
     */
    export interface Object {
      /**
       * This is a combination of pre-defined resource name and identifier (like Zone ID
       * etc.)
       */
      key: string;
    }
  }
}

/**
 * A group of scoped resources.
 */
export interface ResourceGroupUpdateResponse {
  /**
   * Identifier of the group.
   */
  id: string;

  /**
   * The scope associated to the resource group
   */
  scope: Array<ResourceGroupUpdateResponse.Scope>;

  /**
   * Attributes associated to the resource group.
   */
  meta?: unknown;

  /**
   * Name of the resource group.
   */
  name?: string;
}

export namespace ResourceGroupUpdateResponse {
  /**
   * A scope is a combination of scope objects which provides additional context.
   */
  export interface Scope {
    /**
     * This is a combination of pre-defined resource name and identifier (like Account
     * ID etc.)
     */
    key: string;

    /**
     * A list of scope objects for additional context.
     */
    objects: Array<Scope.Object>;
  }

  export namespace Scope {
    /**
     * A scope object represents any resource that can have actions applied against
     * invite.
     */
    export interface Object {
      /**
       * This is a combination of pre-defined resource name and identifier (like Zone ID
       * etc.)
       */
      key: string;
    }
  }
}

export type ResourceGroupListResponse = unknown;

export interface ResourceGroupDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

/**
 * A group of scoped resources.
 */
export interface ResourceGroupGetResponse {
  /**
   * Identifier of the group.
   */
  id: string;

  /**
   * The scope associated to the resource group
   */
  scope: Array<ResourceGroupGetResponse.Scope>;

  /**
   * Attributes associated to the resource group.
   */
  meta?: unknown;

  /**
   * Name of the resource group.
   */
  name?: string;
}

export namespace ResourceGroupGetResponse {
  /**
   * A scope is a combination of scope objects which provides additional context.
   */
  export interface Scope {
    /**
     * This is a combination of pre-defined resource name and identifier (like Account
     * ID etc.)
     */
    key: string;

    /**
     * A list of scope objects for additional context.
     */
    objects: Array<Scope.Object>;
  }

  export namespace Scope {
    /**
     * A scope object represents any resource that can have actions applied against
     * invite.
     */
    export interface Object {
      /**
       * This is a combination of pre-defined resource name and identifier (like Zone ID
       * etc.)
       */
      key: string;
    }
  }
}

export interface ResourceGroupCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A scope is a combination of scope objects which provides additional
   * context.
   */
  scope: ResourceGroupCreateParams.Scope;

  /**
   * Body param: Attributes associated to the resource group.
   */
  meta?: unknown;
}

export namespace ResourceGroupCreateParams {
  /**
   * A scope is a combination of scope objects which provides additional context.
   */
  export interface Scope {
    /**
     * This is a combination of pre-defined resource name and identifier (like Account
     * ID etc.)
     */
    key: string;

    /**
     * A list of scope objects for additional context. The number of Scope objects
     * should not be zero.
     */
    objects: Array<Scope.Object>;
  }

  export namespace Scope {
    /**
     * A scope object represents any resource that can have actions applied against
     * invite.
     */
    export interface Object {
      /**
       * This is a combination of pre-defined resource name and identifier (like Zone ID
       * etc.)
       */
      key: string;
    }
  }
}

export interface ResourceGroupUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: A scope is a combination of scope objects which provides additional
   * context.
   */
  scope: ResourceGroupUpdateParams.Scope;

  /**
   * Body param: Attributes associated to the resource group.
   */
  meta?: unknown;
}

export namespace ResourceGroupUpdateParams {
  /**
   * A scope is a combination of scope objects which provides additional context.
   */
  export interface Scope {
    /**
     * This is a combination of pre-defined resource name and identifier (like Account
     * ID etc.)
     */
    key: string;

    /**
     * A list of scope objects for additional context. The number of Scope objects
     * should not be zero.
     */
    objects: Array<Scope.Object>;
  }

  export namespace Scope {
    /**
     * A scope object represents any resource that can have actions applied against
     * invite.
     */
    export interface Object {
      /**
       * This is a combination of pre-defined resource name and identifier (like Zone ID
       * etc.)
       */
      key: string;
    }
  }
}

export interface ResourceGroupListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: ID of the resource group to be fetched.
   */
  id?: string;

  /**
   * Query param: Name of the resource group to be fetched.
   */
  name?: string;
}

export interface ResourceGroupDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface ResourceGroupGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace ResourceGroups {
  export import ResourceGroupCreateResponse = ResourceGroupsAPI.ResourceGroupCreateResponse;
  export import ResourceGroupUpdateResponse = ResourceGroupsAPI.ResourceGroupUpdateResponse;
  export import ResourceGroupListResponse = ResourceGroupsAPI.ResourceGroupListResponse;
  export import ResourceGroupDeleteResponse = ResourceGroupsAPI.ResourceGroupDeleteResponse;
  export import ResourceGroupGetResponse = ResourceGroupsAPI.ResourceGroupGetResponse;
  export import ResourceGroupListResponsesV4PagePaginationArray = ResourceGroupsAPI.ResourceGroupListResponsesV4PagePaginationArray;
  export import ResourceGroupCreateParams = ResourceGroupsAPI.ResourceGroupCreateParams;
  export import ResourceGroupUpdateParams = ResourceGroupsAPI.ResourceGroupUpdateParams;
  export import ResourceGroupListParams = ResourceGroupsAPI.ResourceGroupListParams;
  export import ResourceGroupDeleteParams = ResourceGroupsAPI.ResourceGroupDeleteParams;
  export import ResourceGroupGetParams = ResourceGroupsAPI.ResourceGroupGetParams;
}
