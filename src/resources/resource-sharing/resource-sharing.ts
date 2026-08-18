// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecipientsAPI from './recipients';
import {
  BaseRecipients,
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
  BaseResources,
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
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseResourceSharing extends APIResource {
  static override readonly _key: readonly ['resourceSharing'] = Object.freeze(['resourceSharing'] as const);

  /**
   * Creates a new resource share for sharing Cloudflare resources with other
   * accounts or organizations.
   *
   * @example
   * ```ts
   * const resourceSharing = await client.resourceSharing.create(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'My Shared WAF Managed Rule',
   *     recipients: [{}],
   *     resources: [
   *       {
   *         meta: {},
   *         resource_account_id:
   *           '023e105f4ecef8ad9ca31a8372d0c353',
   *         resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *         resource_type: 'custom-ruleset',
   *       },
   *     ],
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const resourceSharing = await client.resourceSharing.update(
   *   '3fd85f74b32742f1bff64a85009dda07',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'My Shared WAF Managed Rule',
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const resourceSharingListResponse of client.resourceSharing.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const resourceSharing = await client.resourceSharing.delete(
   *   '3fd85f74b32742f1bff64a85009dda07',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const resourceSharing = await client.resourceSharing.get(
   *   '3fd85f74b32742f1bff64a85009dda07',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    shareID: string,
    params: ResourceSharingGetParams,
    options?: RequestOptions,
  ): APIPromise<ResourceSharingGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/shares/${shareID}`, { query, ...options }) as APIPromise<{
        result: ResourceSharingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class ResourceSharing extends BaseResourceSharing {
  recipients: RecipientsAPI.Recipients = new RecipientsAPI.Recipients(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
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

  /**
   * The number of recipients in the 'associated' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associated_recipient_count?: number;

  /**
   * The number of recipients in the 'associating' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associating_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociated' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociated_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociating' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociating_recipient_count?: number;

  kind?: 'sent' | 'received';

  /**
   * A list of resources that are part of the share. This field is only included when
   * requested via the 'include_resources' parameter.
   */
  resources?: Array<ResourceSharingCreateResponse.Resource>;
}

export namespace ResourceSharingCreateResponse {
  export interface Resource {
    /**
     * Share Resource identifier.
     */
    id: string;

    /**
     * When the share was created.
     */
    created: string;

    /**
     * Resource Metadata.
     */
    meta: unknown;

    /**
     * When the share was modified.
     */
    modified: string;

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
    resource_type:
      | 'custom-ruleset'
      | 'gateway-policy'
      | 'gateway-destination-ip'
      | 'gateway-block-page-settings'
      | 'gateway-extended-email-matching'
      | 'idp-federation-grant';

    /**
     * Resource Version.
     */
    resource_version: number;

    /**
     * Resource Status.
     */
    status: 'active' | 'deleting' | 'deleted';
  }
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

  /**
   * The number of recipients in the 'associated' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associated_recipient_count?: number;

  /**
   * The number of recipients in the 'associating' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associating_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociated' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociated_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociating' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociating_recipient_count?: number;

  kind?: 'sent' | 'received';

  /**
   * A list of resources that are part of the share. This field is only included when
   * requested via the 'include_resources' parameter.
   */
  resources?: Array<ResourceSharingUpdateResponse.Resource>;
}

export namespace ResourceSharingUpdateResponse {
  export interface Resource {
    /**
     * Share Resource identifier.
     */
    id: string;

    /**
     * When the share was created.
     */
    created: string;

    /**
     * Resource Metadata.
     */
    meta: unknown;

    /**
     * When the share was modified.
     */
    modified: string;

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
    resource_type:
      | 'custom-ruleset'
      | 'gateway-policy'
      | 'gateway-destination-ip'
      | 'gateway-block-page-settings'
      | 'gateway-extended-email-matching'
      | 'idp-federation-grant';

    /**
     * Resource Version.
     */
    resource_version: number;

    /**
     * Resource Status.
     */
    status: 'active' | 'deleting' | 'deleted';
  }
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

  /**
   * The number of recipients in the 'associated' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associated_recipient_count?: number;

  /**
   * The number of recipients in the 'associating' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associating_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociated' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociated_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociating' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociating_recipient_count?: number;

  kind?: 'sent' | 'received';

  /**
   * A list of resources that are part of the share. This field is only included when
   * requested via the 'include_resources' parameter.
   */
  resources?: Array<ResourceSharingListResponse.Resource>;
}

export namespace ResourceSharingListResponse {
  export interface Resource {
    /**
     * Share Resource identifier.
     */
    id: string;

    /**
     * When the share was created.
     */
    created: string;

    /**
     * Resource Metadata.
     */
    meta: unknown;

    /**
     * When the share was modified.
     */
    modified: string;

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
    resource_type:
      | 'custom-ruleset'
      | 'gateway-policy'
      | 'gateway-destination-ip'
      | 'gateway-block-page-settings'
      | 'gateway-extended-email-matching'
      | 'idp-federation-grant';

    /**
     * Resource Version.
     */
    resource_version: number;

    /**
     * Resource Status.
     */
    status: 'active' | 'deleting' | 'deleted';
  }
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

  /**
   * The number of recipients in the 'associated' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associated_recipient_count?: number;

  /**
   * The number of recipients in the 'associating' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associating_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociated' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociated_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociating' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociating_recipient_count?: number;

  kind?: 'sent' | 'received';

  /**
   * A list of resources that are part of the share. This field is only included when
   * requested via the 'include_resources' parameter.
   */
  resources?: Array<ResourceSharingDeleteResponse.Resource>;
}

export namespace ResourceSharingDeleteResponse {
  export interface Resource {
    /**
     * Share Resource identifier.
     */
    id: string;

    /**
     * When the share was created.
     */
    created: string;

    /**
     * Resource Metadata.
     */
    meta: unknown;

    /**
     * When the share was modified.
     */
    modified: string;

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
    resource_type:
      | 'custom-ruleset'
      | 'gateway-policy'
      | 'gateway-destination-ip'
      | 'gateway-block-page-settings'
      | 'gateway-extended-email-matching'
      | 'idp-federation-grant';

    /**
     * Resource Version.
     */
    resource_version: number;

    /**
     * Resource Status.
     */
    status: 'active' | 'deleting' | 'deleted';
  }
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

  /**
   * The number of recipients in the 'associated' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associated_recipient_count?: number;

  /**
   * The number of recipients in the 'associating' state. This field is only included
   * when requested via the 'include_recipient_counts' parameter.
   */
  associating_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociated' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociated_recipient_count?: number;

  /**
   * The number of recipients in the 'disassociating' state. This field is only
   * included when requested via the 'include_recipient_counts' parameter.
   */
  disassociating_recipient_count?: number;

  kind?: 'sent' | 'received';

  /**
   * A list of resources that are part of the share. This field is only included when
   * requested via the 'include_resources' parameter.
   */
  resources?: Array<ResourceSharingGetResponse.Resource>;
}

export namespace ResourceSharingGetResponse {
  export interface Resource {
    /**
     * Share Resource identifier.
     */
    id: string;

    /**
     * When the share was created.
     */
    created: string;

    /**
     * Resource Metadata.
     */
    meta: unknown;

    /**
     * When the share was modified.
     */
    modified: string;

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
    resource_type:
      | 'custom-ruleset'
      | 'gateway-policy'
      | 'gateway-destination-ip'
      | 'gateway-block-page-settings'
      | 'gateway-extended-email-matching'
      | 'idp-federation-grant';

    /**
     * Resource Version.
     */
    resource_version: number;

    /**
     * Resource Status.
     */
    status: 'active' | 'deleting' | 'deleted';
  }
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
   * Body param
   */
  recipients: Array<ResourceSharingCreateParams.Recipient>;

  /**
   * Body param
   */
  resources: Array<ResourceSharingCreateParams.Resource>;
}

export namespace ResourceSharingCreateParams {
  /**
   * Optionally specify `recipient_account_id` to target a specific account, or
   * `organization_id` to target the caller's whole organization. If neither is
   * provided, the caller's organization is used. The legacy field `account_id` is
   * accepted as a synonym for `recipient_account_id` during the deprecation period
   * (see `x-sunset` on that field).
   */
  export interface Recipient {
    /**
     * @deprecated This field has been renamed to `recipient_account_id`. Both names
     * are accepted during the deprecation period.
     */
    account_id?: string;

    /**
     * Organization identifier.
     */
    organization_id?: string;

    /**
     * The account that will receive the share.
     */
    recipient_account_id?: string;
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
    resource_type:
      | 'custom-ruleset'
      | 'gateway-policy'
      | 'gateway-destination-ip'
      | 'gateway-block-page-settings'
      | 'gateway-extended-email-matching'
      | 'idp-federation-grant';
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
   * Query param: Include recipient counts in the response.
   */
  include_recipient_counts?: boolean;

  /**
   * Query param: Include resources in the response.
   */
  include_resources?: boolean;

  /**
   * Query param: Filter shares by kind.
   */
  kind?: 'sent' | 'received';

  /**
   * Query param: Order shares by values in the given field.
   */
  order?: 'name' | 'created';

  /**
   * Query param: Filter share resources by resource_types.
   */
  resource_types?: Array<
    | 'custom-ruleset'
    | 'gateway-policy'
    | 'gateway-destination-ip'
    | 'gateway-block-page-settings'
    | 'gateway-extended-email-matching'
    | 'idp-federation-grant'
  >;

  /**
   * Query param: Filter shares by status.
   */
  status?: 'active' | 'deleting' | 'deleted';

  /**
   * Query param: Filter shares by tag. Each value is either `key=value` (matches
   * shares whose tags contain that key/value pair) or `key` alone (matches shares
   * that have any value for that key). May be repeated; multiple `tag` parameters
   * are ANDed together. Maximum 20 `tag` parameters per request.
   */
  tag?: Array<string>;

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
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Query param: Include recipient counts in the response.
   */
  include_recipient_counts?: boolean;

  /**
   * Query param: Include resources in the response.
   */
  include_resources?: boolean;
}

ResourceSharing.Recipients = Recipients;
ResourceSharing.BaseRecipients = BaseRecipients;
ResourceSharing.Resources = Resources;
ResourceSharing.BaseResources = BaseResources;

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
    BaseRecipients as BaseRecipients,
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
    BaseResources as BaseResources,
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
