// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountTagsAPI from './account-tags';
import {
  AccountTagDeleteParams,
  AccountTagGetParams,
  AccountTagGetResponse,
  AccountTagUpdateParams,
  AccountTagUpdateResponse,
  AccountTags,
} from './account-tags';
import * as KeysAPI from './keys';
import { KeyListParams, KeyListResponse, KeyListResponsesCursorPaginationAfter, Keys } from './keys';
import * as ValuesAPI from './values';
import {
  ValueListParams,
  ValueListResponse,
  ValueListResponsesCursorPaginationAfter,
  Values,
} from './values';
import * as ZoneTagsAPI from './zone-tags';
import {
  ZoneTagDeleteParams,
  ZoneTagGetParams,
  ZoneTagGetResponse,
  ZoneTagUpdateParams,
  ZoneTagUpdateResponse,
  ZoneTags,
} from './zone-tags';
import { CursorPaginationAfter, type CursorPaginationAfterParams } from '../../pagination';

export class ResourceTagging extends APIResource {
  accountTags: AccountTagsAPI.AccountTags = new AccountTagsAPI.AccountTags(this._client);
  zoneTags: ZoneTagsAPI.ZoneTags = new ZoneTagsAPI.ZoneTags(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

  /**
   * Lists all tagged resources for an account.
   */
  list(
    params: ResourceTaggingListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceTaggingListResponsesCursorPaginationAfter, ResourceTaggingListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/tags/resources`,
      ResourceTaggingListResponsesCursorPaginationAfter,
      { query, ...options },
    );
  }
}

export class ResourceTaggingListResponsesCursorPaginationAfter extends CursorPaginationAfter<ResourceTaggingListResponse> {}

/**
 * Response for access_application resources
 */
export type ResourceTaggingListResponse =
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccessApplication
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccessApplicationPolicy
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccessGroup
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccount
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAIGateway
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAlertingPolicy
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAlertingWebhook
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAPIGatewayOperation
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectCloudflaredTunnel
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectCustomCertificate
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectCustomHostname
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectD1Database
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectDNSRecord
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectDurableObjectNamespace
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectGatewayList
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectGatewayRule
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectImage
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectKVNamespace
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectManagedClientCertificate
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectQueue
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectR2Bucket
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectResourceShare
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectStreamLiveInput
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectStreamVideo
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectWorker
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectWorkerVersion
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectZone;

export namespace ResourceTaggingListResponse {
  /**
   * Response for access_application resources
   */
  export interface ResourceTaggingTaggedResourceObjectAccessApplication {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'access_application';
  }

  /**
   * Response for access_application_policy resources
   */
  export interface ResourceTaggingTaggedResourceObjectAccessApplicationPolicy {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * Access application ID is required only for access_application_policy resources
     */
    access_application_id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'access_application_policy';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for access_group resources
   */
  export interface ResourceTaggingTaggedResourceObjectAccessGroup {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'access_group';
  }

  /**
   * Response for account resources
   */
  export interface ResourceTaggingTaggedResourceObjectAccount {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'account';
  }

  /**
   * Response for ai_gateway resources
   */
  export interface ResourceTaggingTaggedResourceObjectAIGateway {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'ai_gateway';
  }

  /**
   * Response for alerting_policy resources
   */
  export interface ResourceTaggingTaggedResourceObjectAlertingPolicy {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'alerting_policy';
  }

  /**
   * Response for alerting_webhook resources
   */
  export interface ResourceTaggingTaggedResourceObjectAlertingWebhook {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'alerting_webhook';
  }

  /**
   * Response for api_gateway_operation resources
   */
  export interface ResourceTaggingTaggedResourceObjectAPIGatewayOperation {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'api_gateway_operation';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for cloudflared_tunnel resources
   */
  export interface ResourceTaggingTaggedResourceObjectCloudflaredTunnel {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'cloudflared_tunnel';
  }

  /**
   * Response for custom_certificate resources
   */
  export interface ResourceTaggingTaggedResourceObjectCustomCertificate {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'custom_certificate';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for custom_hostname resources
   */
  export interface ResourceTaggingTaggedResourceObjectCustomHostname {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'custom_hostname';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for d1_database resources
   */
  export interface ResourceTaggingTaggedResourceObjectD1Database {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'd1_database';
  }

  /**
   * Response for dns_record resources
   */
  export interface ResourceTaggingTaggedResourceObjectDNSRecord {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'dns_record';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for durable_object_namespace resources
   */
  export interface ResourceTaggingTaggedResourceObjectDurableObjectNamespace {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'durable_object_namespace';
  }

  /**
   * Response for gateway_list resources
   */
  export interface ResourceTaggingTaggedResourceObjectGatewayList {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'gateway_list';
  }

  /**
   * Response for gateway_rule resources
   */
  export interface ResourceTaggingTaggedResourceObjectGatewayRule {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'gateway_rule';
  }

  /**
   * Response for image resources
   */
  export interface ResourceTaggingTaggedResourceObjectImage {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'image';
  }

  /**
   * Response for kv_namespace resources
   */
  export interface ResourceTaggingTaggedResourceObjectKVNamespace {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'kv_namespace';
  }

  /**
   * Response for managed_client_certificate resources
   */
  export interface ResourceTaggingTaggedResourceObjectManagedClientCertificate {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'managed_client_certificate';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for queue resources
   */
  export interface ResourceTaggingTaggedResourceObjectQueue {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'queue';
  }

  /**
   * Response for r2_bucket resources
   */
  export interface ResourceTaggingTaggedResourceObjectR2Bucket {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'r2_bucket';
  }

  /**
   * Response for resource_share resources
   */
  export interface ResourceTaggingTaggedResourceObjectResourceShare {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'resource_share';
  }

  /**
   * Response for stream_live_input resources
   */
  export interface ResourceTaggingTaggedResourceObjectStreamLiveInput {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'stream_live_input';
  }

  /**
   * Response for stream_video resources
   */
  export interface ResourceTaggingTaggedResourceObjectStreamVideo {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'stream_video';
  }

  /**
   * Response for worker resources
   */
  export interface ResourceTaggingTaggedResourceObjectWorker {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'worker';
  }

  /**
   * Response for worker_version resources
   */
  export interface ResourceTaggingTaggedResourceObjectWorkerVersion {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'worker_version';

    /**
     * Worker ID is required only for worker_version resources
     */
    worker_id: string;
  }

  /**
   * Response for zone resources
   */
  export interface ResourceTaggingTaggedResourceObjectZone {
    /**
     * Identifies the unique resource.
     */
    id: string;

    /**
     * ETag identifier for optimistic concurrency control. Formatted as "v1:<hash>"
     * where the hash is the base64url-encoded SHA-256 (truncated to 128 bits) of the
     * tags map canonicalized using RFC 8785 (JSON Canonicalization Scheme). Clients
     * should treat ETags as opaque strings and pass them back via the If-Match header
     * on write operations.
     */
    etag: string;

    /**
     * Human-readable name of the resource.
     */
    name: string;

    /**
     * Contains key-value pairs of tags.
     */
    tags: { [key: string]: string };

    type: 'zone';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }
}

export interface ResourceTaggingListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Filter resources by tag criteria. This parameter can be repeated
   * multiple times, with AND logic between parameters.
   *
   * Supported syntax:
   *
   * - **Key-only**: `tag=<key>` - Resource must have the tag key (e.g.,
   *   `tag=production`)
   * - **Key-value**: `tag=<key>=<value>` - Resource must have the tag with specific
   *   value (e.g., `tag=env=prod`)
   * - **Multiple values (OR)**: `tag=<key>=<v1>,<v2>` - Resource must have tag with
   *   any of the values (e.g., `tag=env=prod,staging`)
   * - **Negate key-only**: `tag=!<key>` - Resource must not have the tag key (e.g.,
   *   `tag=!archived`)
   * - **Negate key-value**: `tag=<key>!=<value>` - Resource must not have the tag
   *   with specific value (e.g., `tag=region!=us-west-1`)
   *
   * Multiple tag parameters are combined with AND logic.
   */
  tag?: Array<string>;

  /**
   * Query param: Filter by resource type. Can be repeated to filter by multiple
   * types (OR logic). Example: ?type=zone&type=worker
   */
  type?: Array<
    | 'access_application'
    | 'access_application_policy'
    | 'access_group'
    | 'account'
    | 'ai_gateway'
    | 'alerting_policy'
    | 'alerting_webhook'
    | 'api_gateway_operation'
    | 'cloudflared_tunnel'
    | 'custom_certificate'
    | 'custom_hostname'
    | 'd1_database'
    | 'dns_record'
    | 'durable_object_namespace'
    | 'gateway_list'
    | 'gateway_rule'
    | 'image'
    | 'kv_namespace'
    | 'managed_client_certificate'
    | 'queue'
    | 'r2_bucket'
    | 'resource_share'
    | 'stream_live_input'
    | 'stream_video'
    | 'worker'
    | 'worker_version'
    | 'zone'
  >;
}

ResourceTagging.ResourceTaggingListResponsesCursorPaginationAfter =
  ResourceTaggingListResponsesCursorPaginationAfter;
ResourceTagging.AccountTags = AccountTags;
ResourceTagging.ZoneTags = ZoneTags;
ResourceTagging.Keys = Keys;
ResourceTagging.KeyListResponsesCursorPaginationAfter = KeyListResponsesCursorPaginationAfter;
ResourceTagging.Values = Values;
ResourceTagging.ValueListResponsesCursorPaginationAfter = ValueListResponsesCursorPaginationAfter;

export declare namespace ResourceTagging {
  export {
    type ResourceTaggingListResponse as ResourceTaggingListResponse,
    ResourceTaggingListResponsesCursorPaginationAfter as ResourceTaggingListResponsesCursorPaginationAfter,
    type ResourceTaggingListParams as ResourceTaggingListParams,
  };

  export {
    AccountTags as AccountTags,
    type AccountTagUpdateResponse as AccountTagUpdateResponse,
    type AccountTagGetResponse as AccountTagGetResponse,
    type AccountTagUpdateParams as AccountTagUpdateParams,
    type AccountTagDeleteParams as AccountTagDeleteParams,
    type AccountTagGetParams as AccountTagGetParams,
  };

  export {
    ZoneTags as ZoneTags,
    type ZoneTagUpdateResponse as ZoneTagUpdateResponse,
    type ZoneTagGetResponse as ZoneTagGetResponse,
    type ZoneTagUpdateParams as ZoneTagUpdateParams,
    type ZoneTagDeleteParams as ZoneTagDeleteParams,
    type ZoneTagGetParams as ZoneTagGetParams,
  };

  export {
    Keys as Keys,
    type KeyListResponse as KeyListResponse,
    KeyListResponsesCursorPaginationAfter as KeyListResponsesCursorPaginationAfter,
    type KeyListParams as KeyListParams,
  };

  export {
    Values as Values,
    type ValueListResponse as ValueListResponse,
    ValueListResponsesCursorPaginationAfter as ValueListResponsesCursorPaginationAfter,
    type ValueListParams as ValueListParams,
  };
}
