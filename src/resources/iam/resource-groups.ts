// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ResourceGroups extends APIResource {
  /**
   * Create a new Resource Group under the specified account.
   *
   * @example
   * ```ts
   * const resourceGroup =
   *   await client.iam.resourceGroups.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'NewResourceGroup',
   *     scope: {
   *       key: 'com.cloudflare.api.account.eb78d65290b24279ba6f44721b3ea3c4',
   *       objects: [
   *         {
   *           key: 'com.cloudflare.api.account.zone.23f8d65290b24279ba6f44721b3eaad5',
   *         },
   *       ],
   *     },
   *   });
   * ```
   */
  create(
    params: ResourceGroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/iam/resource_groups`, { body, ...options });
  }

  /**
   * Modify an existing resource group.
   *
   * @example
   * ```ts
   * const resourceGroup =
   *   await client.iam.resourceGroups.update(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    resourceGroupID: string,
    params: ResourceGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(path`/accounts/${account_id}/iam/resource_groups/${resourceGroupID}`, {
      body,
      ...options,
    });
  }

  /**
   * List all the resource groups for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const resourceGroupListResponse of client.iam.resourceGroups.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ResourceGroupListParams,
    options?: RequestOptions,
  ): PagePromise<ResourceGroupListResponsesSinglePage, ResourceGroupListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/iam/resource_groups`,
      SinglePage<ResourceGroupListResponse>,
      { query, ...options },
    );
  }

  /**
   * Remove a resource group from an account.
   *
   * @example
   * ```ts
   * const resourceGroup =
   *   await client.iam.resourceGroups.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    resourceGroupID: string,
    params: ResourceGroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/iam/resource_groups/${resourceGroupID}`,
        options,
      ) as APIPromise<{ result: ResourceGroupDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific resource group in an account.
   *
   * @example
   * ```ts
   * const resourceGroup = await client.iam.resourceGroups.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    resourceGroupID: string,
    params: ResourceGroupGetParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupGetResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/iam/resource_groups/${resourceGroupID}`, options);
  }
}

export type ResourceGroupListResponsesSinglePage = SinglePage<ResourceGroupListResponse>;

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
   * Identifier of the resource group.
   */
  id: string;

  /**
   * The scope associated to the resource group
   */
  scope: Array<ResourceGroupUpdateResponse.Scope>;

  /**
   * Attributes associated to the resource group.
   */
  meta?: ResourceGroupUpdateResponse.Meta;

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

  /**
   * Attributes associated to the resource group.
   */
  export interface Meta {
    key?: string;

    value?: string;
  }
}

/**
 * A group of scoped resources.
 */
export interface ResourceGroupListResponse {
  /**
   * Identifier of the resource group.
   */
  id: string;

  /**
   * The scope associated to the resource group
   */
  scope: Array<ResourceGroupListResponse.Scope>;

  /**
   * Attributes associated to the resource group.
   */
  meta?: ResourceGroupListResponse.Meta;

  /**
   * Name of the resource group.
   */
  name?: string;
}

export namespace ResourceGroupListResponse {
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

  /**
   * Attributes associated to the resource group.
   */
  export interface Meta {
    key?: string;

    value?: string;
  }
}

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
   * Identifier of the resource group.
   */
  id: string;

  /**
   * The scope associated to the resource group
   */
  scope: Array<ResourceGroupGetResponse.Scope>;

  /**
   * Attributes associated to the resource group.
   */
  meta?: ResourceGroupGetResponse.Meta;

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

  /**
   * Attributes associated to the resource group.
   */
  export interface Meta {
    key?: string;

    value?: string;
  }
}

export interface ResourceGroupCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Name of the resource group
   */
  name: string;

  /**
   * Body param: A scope is a combination of scope objects which provides additional
   * context.
   */
  scope: ResourceGroupCreateParams.Scope;
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
   * Body param: Name of the resource group
   */
  name?: string;

  /**
   * Body param: A scope is a combination of scope objects which provides additional
   * context.
   */
  scope?: ResourceGroupUpdateParams.Scope;
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

export interface ResourceGroupListParams {
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

export declare namespace ResourceGroups {
  export {
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
}
