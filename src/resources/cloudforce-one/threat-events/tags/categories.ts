// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'tags', 'categories'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'tags', 'categories'] as const);

  /**
   * Creates a new Source-of-Truth tag category for an account.
   *
   * @example
   * ```ts
   * const category =
   *   await client.cloudforceOne.threatEvents.tags.categories.create(
   *     { account_id: 'account_id', name: 'Actor' },
   *   );
   * ```
   */
  create(params: CategoryCreateParams, options?: RequestOptions): APIPromise<CategoryCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/tags/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Returns all Source-of-Truth tag categories for an account.
   *
   * @example
   * ```ts
   * const categories =
   *   await client.cloudforceOne.threatEvents.tags.categories.list(
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(params: CategoryListParams, options?: RequestOptions): APIPromise<CategoryListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/tags/categories`, {
      query,
      ...options,
    });
  }

  /**
   * Deprecated; use DELETE /events/tag-categories/{category_uuid}. Available through
   * 2026-11-28.
   *
   * @deprecated Use DELETE /events/tag-categories/{category_uuid} before 2026-11-28.
   */
  delete(
    categoryUUID: string,
    params: CategoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CategoryDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/cloudforce-one/events/tags/categories/${categoryUUID}`,
      options,
    );
  }

  /**
   * Deprecated; use PATCH /events/tag-categories/{category_uuid}. Available through
   * 2026-11-28.
   *
   * @deprecated Use PATCH /events/tag-categories/{category_uuid} before 2026-11-28.
   */
  edit(
    categoryUUID: string,
    params: CategoryEditParams,
    options?: RequestOptions,
  ): APIPromise<CategoryEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(
      path`/accounts/${account_id}/cloudforce-one/events/tags/categories/${categoryUUID}`,
      { body, ...options },
    );
  }
}
export class Categories extends BaseCategories {}

export interface CategoryCreateResponse {
  name: string;

  uuid: string;

  createdAt?: string;

  description?: string;

  /**
   * Parsed FieldDefinition[] defining custom fields for this category, or null if
   * none.
   */
  schema?: Array<CategoryCreateResponse.Schema> | null;

  updatedAt?: string;
}

export namespace CategoryCreateResponse {
  export interface Schema {
    key: string;

    kind: 'string' | 'number' | 'enum' | 'date' | 'array' | 'object';

    allowedValues?: Array<string>;

    annotations?: Schema.Annotations;

    /**
     * Marks a field as unavailable for new values while retaining its definition for
     * historical values.
     */
    deprecated?: boolean;

    /**
     * Enum values unavailable for new writes but retained in allowedValues for
     * historical display.
     */
    deprecatedValues?: Array<string>;

    element?: unknown;

    enforcement?: 'error' | 'warn' | 'off';

    format?: 'date' | 'url' | 'duration' | 'country';

    label?: string;

    maxLength?: number;

    numberConstraint?: Schema.NumberConstraint;

    /**
     * Map of property key to FieldDefinition for object fields. Required when kind is
     * 'object'. See FieldDefinition (recursive).
     */
    properties?: { [key: string]: unknown };

    required?: boolean;
  }

  export namespace Schema {
    export interface Annotations {
      confidence?: boolean;

      tlp?: boolean;
    }

    export interface NumberConstraint {
      integer?: boolean;

      max?: number;

      min?: number;
    }
  }
}

export interface CategoryListResponse {
  categories: Array<CategoryListResponse.Category>;
}

export namespace CategoryListResponse {
  export interface Category {
    name: string;

    uuid: string;

    createdAt?: string;

    description?: string;

    /**
     * Parsed FieldDefinition[] defining custom fields for this category, or null if
     * none.
     */
    schema?: Array<Category.Schema> | null;

    updatedAt?: string;
  }

  export namespace Category {
    export interface Schema {
      key: string;

      kind: 'string' | 'number' | 'enum' | 'date' | 'array' | 'object';

      allowedValues?: Array<string>;

      annotations?: Schema.Annotations;

      /**
       * Marks a field as unavailable for new values while retaining its definition for
       * historical values.
       */
      deprecated?: boolean;

      /**
       * Enum values unavailable for new writes but retained in allowedValues for
       * historical display.
       */
      deprecatedValues?: Array<string>;

      element?: unknown;

      enforcement?: 'error' | 'warn' | 'off';

      format?: 'date' | 'url' | 'duration' | 'country';

      label?: string;

      maxLength?: number;

      numberConstraint?: Schema.NumberConstraint;

      /**
       * Map of property key to FieldDefinition for object fields. Required when kind is
       * 'object'. See FieldDefinition (recursive).
       */
      properties?: { [key: string]: unknown };

      required?: boolean;
    }

    export namespace Schema {
      export interface Annotations {
        confidence?: boolean;

        tlp?: boolean;
      }

      export interface NumberConstraint {
        integer?: boolean;

        max?: number;

        min?: number;
      }
    }
  }
}

export interface CategoryDeleteResponse {
  uuid: string;
}

export interface CategoryEditResponse {
  name: string;

  uuid: string;

  createdAt?: string;

  description?: string;

  /**
   * Parsed FieldDefinition[] defining custom fields for this category, or null if
   * none.
   */
  schema?: Array<CategoryEditResponse.Schema> | null;

  updatedAt?: string;
}

export namespace CategoryEditResponse {
  export interface Schema {
    key: string;

    kind: 'string' | 'number' | 'enum' | 'date' | 'array' | 'object';

    allowedValues?: Array<string>;

    annotations?: Schema.Annotations;

    /**
     * Marks a field as unavailable for new values while retaining its definition for
     * historical values.
     */
    deprecated?: boolean;

    /**
     * Enum values unavailable for new writes but retained in allowedValues for
     * historical display.
     */
    deprecatedValues?: Array<string>;

    element?: unknown;

    enforcement?: 'error' | 'warn' | 'off';

    format?: 'date' | 'url' | 'duration' | 'country';

    label?: string;

    maxLength?: number;

    numberConstraint?: Schema.NumberConstraint;

    /**
     * Map of property key to FieldDefinition for object fields. Required when kind is
     * 'object'. See FieldDefinition (recursive).
     */
    properties?: { [key: string]: unknown };

    required?: boolean;
  }

  export namespace Schema {
    export interface Annotations {
      confidence?: boolean;

      tlp?: boolean;
    }

    export interface NumberConstraint {
      integer?: boolean;

      max?: number;

      min?: number;
    }
  }
}

export interface CategoryCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param: Optional array of FieldDefinition objects defining custom fields for
   * tags in this category. Persisted as JSON; returned as a parsed array.
   */
  schema?: Array<CategoryCreateParams.Schema>;
}

export namespace CategoryCreateParams {
  export interface Schema {
    key: string;

    kind: 'string' | 'number' | 'enum' | 'date' | 'array' | 'object';

    allowedValues?: Array<string>;

    annotations?: Schema.Annotations;

    /**
     * Marks a field as unavailable for new values while retaining its definition for
     * historical values.
     */
    deprecated?: boolean;

    /**
     * Enum values unavailable for new writes but retained in allowedValues for
     * historical display.
     */
    deprecatedValues?: Array<string>;

    element?: unknown;

    enforcement?: 'error' | 'warn' | 'off';

    format?: 'date' | 'url' | 'duration' | 'country';

    label?: string;

    maxLength?: number;

    numberConstraint?: Schema.NumberConstraint;

    /**
     * Map of property key to FieldDefinition for object fields. Required when kind is
     * 'object'. See FieldDefinition (recursive).
     */
    properties?: { [key: string]: unknown };

    required?: boolean;
  }

  export namespace Schema {
    export interface Annotations {
      confidence?: boolean;

      tlp?: boolean;
    }

    export interface NumberConstraint {
      integer?: boolean;

      max?: number;

      min?: number;
    }
  }
}

export interface CategoryListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param
   */
  search?: string;
}

export interface CategoryDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface CategoryEditParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param: Optional array of FieldDefinition objects. When provided, replaces
   * the existing field schema. When omitted, the existing schema is preserved.
   */
  schema?: Array<CategoryEditParams.Schema>;
}

export namespace CategoryEditParams {
  export interface Schema {
    key: string;

    kind: 'string' | 'number' | 'enum' | 'date' | 'array' | 'object';

    allowedValues?: Array<string>;

    annotations?: Schema.Annotations;

    /**
     * Marks a field as unavailable for new values while retaining its definition for
     * historical values.
     */
    deprecated?: boolean;

    /**
     * Enum values unavailable for new writes but retained in allowedValues for
     * historical display.
     */
    deprecatedValues?: Array<string>;

    element?: unknown;

    enforcement?: 'error' | 'warn' | 'off';

    format?: 'date' | 'url' | 'duration' | 'country';

    label?: string;

    maxLength?: number;

    numberConstraint?: Schema.NumberConstraint;

    /**
     * Map of property key to FieldDefinition for object fields. Required when kind is
     * 'object'. See FieldDefinition (recursive).
     */
    properties?: { [key: string]: unknown };

    required?: boolean;
  }

  export namespace Schema {
    export interface Annotations {
      confidence?: boolean;

      tlp?: boolean;
    }

    export interface NumberConstraint {
      integer?: boolean;

      max?: number;

      min?: number;
    }
  }
}

export declare namespace Categories {
  export {
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryEditResponse as CategoryEditResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryEditParams as CategoryEditParams,
  };
}
