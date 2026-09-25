// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseContentPolicies extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'contentPolicies'] = Object.freeze([
    'emailSecurity',
    'settings',
    'contentPolicies',
  ] as const);

  /**
   * Creates a new content policy. Emails whose subject or body matches the pattern
   * will be subject to the configured action.
   *
   * @example
   * ```ts
   * const contentPolicy =
   *   await client.emailSecurity.settings.contentPolicies.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       enabled: true,
   *       name: 'Block phishing keywords',
   *       pattern: 'urgent.*verify.*account',
   *       targets: ['SUBJECT'],
   *     },
   *   );
   * ```
   */
  create(
    params: ContentPolicyCreateParams,
    options?: RequestOptions,
  ): APIPromise<ContentPolicyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/content_policies`, {
        body,
        ...options,
      }) as APIPromise<{ result: ContentPolicyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of content policies. These policies match against the
   * subject or body of emails using a pattern. Supports filtering by name or enabled
   * status, and searching across name and pattern fields.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const contentPolicyListResponse of client.emailSecurity.settings.contentPolicies.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ContentPolicyListParams,
    options?: RequestOptions,
  ): PagePromise<ContentPolicyListResponsesV4PagePaginationArray, ContentPolicyListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/email-security/settings/content_policies`,
      V4PagePaginationArray<ContentPolicyListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes a content policy. After deletion, emails will no longer be evaluated
   * against this pattern.
   *
   * @example
   * ```ts
   * const contentPolicy =
   *   await client.emailSecurity.settings.contentPolicies.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    policyID: string,
    params: ContentPolicyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ContentPolicyDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/email-security/settings/content_policies/${policyID}`,
        options,
      ) as APIPromise<{ result: ContentPolicyDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Executes multiple operations atomically. All four operation arrays (deletes,
   * patches, puts, posts) are required and executed in order. Send empty arrays for
   * unused operations.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.contentPolicies.batch(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       deletes: [
   *         { id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415' },
   *       ],
   *       patches: [{}],
   *       posts: [
   *         {
   *           enabled: true,
   *           name: 'Block phishing keywords',
   *           pattern: 'urgent.*verify.*account',
   *           targets: ['SUBJECT'],
   *         },
   *       ],
   *       puts: [
   *         {
   *           enabled: true,
   *           name: 'Block phishing keywords',
   *           pattern: 'urgent.*verify.*account',
   *           targets: ['SUBJECT'],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  batch(params: ContentPolicyBatchParams, options?: RequestOptions): APIPromise<ContentPolicyBatchResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/settings/content_policies/batch`, {
        body,
        ...options,
      }) as APIPromise<{ result: ContentPolicyBatchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing content policy. Only provided fields will be modified.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailSecurity.settings.contentPolicies.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    policyID: string,
    params: ContentPolicyEditParams,
    options?: RequestOptions,
  ): APIPromise<ContentPolicyEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/email-security/settings/content_policies/${policyID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ContentPolicyEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a specific content policy including its pattern, targets,
   * and metadata.
   *
   * @example
   * ```ts
   * const contentPolicy =
   *   await client.emailSecurity.settings.contentPolicies.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    policyID: string,
    params: ContentPolicyGetParams,
    options?: RequestOptions,
  ): APIPromise<ContentPolicyGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/settings/content_policies/${policyID}`,
        options,
      ) as APIPromise<{ result: ContentPolicyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class ContentPolicies extends BaseContentPolicies {}

export type ContentPolicyListResponsesV4PagePaginationArray =
  V4PagePaginationArray<ContentPolicyListResponse>;

/**
 * A content policy pattern that matches against the subject or body of an email.
 */
export interface ContentPolicyCreateResponse {
  /**
   * Content policy identifier.
   */
  id?: string;

  created_at?: string;

  enabled?: boolean;

  modified_at?: string;

  name?: string;

  notes?: string | null;

  pattern?: string;

  targets?: Array<'SUBJECT' | 'BODY'>;
}

/**
 * A content policy pattern that matches against the subject or body of an email.
 */
export interface ContentPolicyListResponse {
  /**
   * Content policy identifier.
   */
  id?: string;

  created_at?: string;

  enabled?: boolean;

  modified_at?: string;

  name?: string;

  notes?: string | null;

  pattern?: string;

  targets?: Array<'SUBJECT' | 'BODY'>;
}

export interface ContentPolicyDeleteResponse {
  /**
   * Content policy identifier.
   */
  id: string;
}

export interface ContentPolicyBatchResponse {
  deletes?: Array<ContentPolicyBatchResponse.Delete>;

  patches?: Array<ContentPolicyBatchResponse.Patch>;

  posts?: Array<ContentPolicyBatchResponse.Post>;

  puts?: Array<ContentPolicyBatchResponse.Put>;
}

export namespace ContentPolicyBatchResponse {
  export interface Delete {
    /**
     * Content policy identifier.
     */
    id: string;
  }

  /**
   * A content policy pattern that matches against the subject or body of an email.
   */
  export interface Patch {
    /**
     * Content policy identifier.
     */
    id?: string;

    created_at?: string;

    enabled?: boolean;

    modified_at?: string;

    name?: string;

    notes?: string | null;

    pattern?: string;

    targets?: Array<'SUBJECT' | 'BODY'>;
  }

  /**
   * A content policy pattern that matches against the subject or body of an email.
   */
  export interface Post {
    /**
     * Content policy identifier.
     */
    id?: string;

    created_at?: string;

    enabled?: boolean;

    modified_at?: string;

    name?: string;

    notes?: string | null;

    pattern?: string;

    targets?: Array<'SUBJECT' | 'BODY'>;
  }

  /**
   * A content policy pattern that matches against the subject or body of an email.
   */
  export interface Put {
    /**
     * Content policy identifier.
     */
    id?: string;

    created_at?: string;

    enabled?: boolean;

    modified_at?: string;

    name?: string;

    notes?: string | null;

    pattern?: string;

    targets?: Array<'SUBJECT' | 'BODY'>;
  }
}

/**
 * A content policy pattern that matches against the subject or body of an email.
 */
export interface ContentPolicyEditResponse {
  /**
   * Content policy identifier.
   */
  id?: string;

  created_at?: string;

  enabled?: boolean;

  modified_at?: string;

  name?: string;

  notes?: string | null;

  pattern?: string;

  targets?: Array<'SUBJECT' | 'BODY'>;
}

/**
 * A content policy pattern that matches against the subject or body of an email.
 */
export interface ContentPolicyGetResponse {
  /**
   * Content policy identifier.
   */
  id?: string;

  created_at?: string;

  enabled?: boolean;

  modified_at?: string;

  name?: string;

  notes?: string | null;

  pattern?: string;

  targets?: Array<'SUBJECT' | 'BODY'>;
}

export interface ContentPolicyCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  enabled: boolean;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  pattern: string;

  /**
   * Body param
   */
  targets: Array<'SUBJECT' | 'BODY'>;

  /**
   * Body param
   */
  notes?: string | null;
}

export interface ContentPolicyListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: The sorting direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by enabled status.
   */
  enabled?: boolean;

  /**
   * Query param: Filter by exact policy name.
   */
  name?: string;

  /**
   * Query param: Field to sort by.
   */
  order?: 'name' | 'created_at';

  /**
   * Query param: Search term for filtering records. Behavior may change.
   */
  search?: string;
}

export interface ContentPolicyDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface ContentPolicyBatchParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  deletes: Array<ContentPolicyBatchParams.Delete>;

  /**
   * Body param
   */
  patches: Array<ContentPolicyBatchParams.Patch>;

  /**
   * Body param
   */
  posts: Array<ContentPolicyBatchParams.Post>;

  /**
   * Body param
   */
  puts: Array<ContentPolicyBatchParams.Put>;
}

export namespace ContentPolicyBatchParams {
  export interface Delete {
    /**
     * Content policy identifier.
     */
    id: string;
  }

  /**
   * A content policy pattern that matches against the subject or body of an email.
   */
  export interface Patch {
    enabled?: boolean;

    name?: string;

    notes?: string | null;

    pattern?: string;

    targets?: Array<'SUBJECT' | 'BODY'>;
  }

  /**
   * Create a content policy.
   */
  export interface Post {
    enabled: boolean;

    name: string;

    pattern: string;

    targets: Array<'SUBJECT' | 'BODY'>;

    notes?: string | null;
  }

  /**
   * A content policy pattern that matches against the subject or body of an email.
   */
  export interface Put {
    enabled: boolean;

    name: string;

    pattern: string;

    targets: Array<'SUBJECT' | 'BODY'>;

    notes?: string | null;
  }
}

export interface ContentPolicyEditParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param
   */
  pattern?: string;

  /**
   * Body param
   */
  targets?: Array<'SUBJECT' | 'BODY'>;
}

export interface ContentPolicyGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace ContentPolicies {
  export {
    type ContentPolicyCreateResponse as ContentPolicyCreateResponse,
    type ContentPolicyListResponse as ContentPolicyListResponse,
    type ContentPolicyDeleteResponse as ContentPolicyDeleteResponse,
    type ContentPolicyBatchResponse as ContentPolicyBatchResponse,
    type ContentPolicyEditResponse as ContentPolicyEditResponse,
    type ContentPolicyGetResponse as ContentPolicyGetResponse,
    type ContentPolicyListResponsesV4PagePaginationArray as ContentPolicyListResponsesV4PagePaginationArray,
    type ContentPolicyCreateParams as ContentPolicyCreateParams,
    type ContentPolicyListParams as ContentPolicyListParams,
    type ContentPolicyDeleteParams as ContentPolicyDeleteParams,
    type ContentPolicyBatchParams as ContentPolicyBatchParams,
    type ContentPolicyEditParams as ContentPolicyEditParams,
    type ContentPolicyGetParams as ContentPolicyGetParams,
  };
}
