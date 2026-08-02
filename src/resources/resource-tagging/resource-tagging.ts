// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountTagsAPI from './account-tags';
import {
  AccountTagDeleteParams,
  AccountTagGetParams,
  AccountTagGetResponse,
  AccountTagUpdateParams,
  AccountTagUpdateResponse,
  AccountTags,
  BaseAccountTags,
} from './account-tags';
import * as KeysAPI from './keys';
import {
  BaseKeys,
  KeyListParams,
  KeyListResponse,
  KeyListResponsesCursorPaginationAfter,
  Keys,
} from './keys';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary, SummaryGetParams, SummaryGetResponse } from './summary';
import * as ValuesAPI from './values';
import {
  BaseValues,
  ValueListParams,
  ValueListResponse,
  ValueListResponsesCursorPaginationAfter,
  Values,
} from './values';
import * as ZoneTagsAPI from './zone-tags';
import {
  BaseZoneTags,
  ZoneTagDeleteParams,
  ZoneTagGetParams,
  ZoneTagGetResponse,
  ZoneTagUpdateParams,
  ZoneTagUpdateResponse,
  ZoneTags,
} from './zone-tags';
import { CursorPaginationAfter, type CursorPaginationAfterParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseResourceTagging extends APIResource {
  static override readonly _key: readonly ['resourceTagging'] = Object.freeze(['resourceTagging'] as const);

  /**
   * Lists all tagged resources for an account.
   */
  list(
    params: ResourceTaggingListParams,
    options?: RequestOptions,
  ): PagePromise<ResourceTaggingListResponsesCursorPaginationAfter, ResourceTaggingListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/tags/resources`,
      CursorPaginationAfter<ResourceTaggingListResponse>,
      { query, ...options },
    );
  }
}
export class ResourceTagging extends BaseResourceTagging {
  accountTags: AccountTagsAPI.AccountTags = new AccountTagsAPI.AccountTags(this._client);
  zoneTags: ZoneTagsAPI.ZoneTags = new ZoneTagsAPI.ZoneTags(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

export type ResourceTaggingListResponsesCursorPaginationAfter =
  CursorPaginationAfter<ResourceTaggingListResponse>;

/**
 * Response for access_application resources
 */
export type ResourceTaggingListResponse =
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccessApplication
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccessApplicationPolicy
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccessGroup
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccount
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectAccountRuleset
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
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectHealthcheck
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectImage
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectInfrastructureTarget
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectKVNamespace
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectLoadBalancer
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectLoadBalancerMonitor
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectLoadBalancerPool
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectManagedClientCertificate
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectPagesProject
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectQueue
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectR2Bucket
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectResourceShare
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectStreamLiveInput
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectStreamVideo
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectVectorizeIndex
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectWorker
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectWorkerRoute
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectWorkerVersion
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectZone
  | ResourceTaggingListResponse.ResourceTaggingTaggedResourceObjectZoneRuleset;

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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'account';
  }

  /**
   * Response for account_ruleset resources
   */
  export interface ResourceTaggingTaggedResourceObjectAccountRuleset {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'account_ruleset';
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'gateway_rule';
  }

  /**
   * Response for healthcheck resources
   */
  export interface ResourceTaggingTaggedResourceObjectHealthcheck {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'healthcheck';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'image';
  }

  /**
   * Response for infrastructure_target resources
   */
  export interface ResourceTaggingTaggedResourceObjectInfrastructureTarget {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'infrastructure_target';
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'kv_namespace';
  }

  /**
   * Response for load_balancer resources
   */
  export interface ResourceTaggingTaggedResourceObjectLoadBalancer {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'load_balancer';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for load_balancer_monitor resources
   */
  export interface ResourceTaggingTaggedResourceObjectLoadBalancerMonitor {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'load_balancer_monitor';
  }

  /**
   * Response for load_balancer_pool resources
   */
  export interface ResourceTaggingTaggedResourceObjectLoadBalancerPool {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'load_balancer_pool';
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'managed_client_certificate';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for pages_project resources
   */
  export interface ResourceTaggingTaggedResourceObjectPagesProject {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'pages_project';
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'stream_video';
  }

  /**
   * Response for vectorize_index resources
   */
  export interface ResourceTaggingTaggedResourceObjectVectorizeIndex {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'vectorize_index';
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'worker';
  }

  /**
   * Response for worker_route resources
   */
  export interface ResourceTaggingTaggedResourceObjectWorkerRoute {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'worker_route';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'zone';

    /**
     * Zone ID is required only for zone-level resources
     */
    zone_id: string;
  }

  /**
   * Response for zone_ruleset resources
   */
  export interface ResourceTaggingTaggedResourceObjectZoneRuleset {
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
     * Contains key-value pairs of tags. Keys may contain at most 256 characters.
     * Values may contain at most 1024 characters and may be empty for key-only tags.
     */
    tags: { [key: string]: string };

    type: 'zone_ruleset';

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
   * Query param: Filter by resource ID. Can be repeated up to 50 times to filter by
   * multiple IDs. Example: ?id=abc&id=def
   */
  id?: Array<string>;

  /**
   * Query param: Filter by resource name. Performs a case-insensitive substring
   * match. Example: ?name=my-zone
   */
  name?: string;

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
    | 'account_ruleset'
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
    | 'healthcheck'
    | 'image'
    | 'infrastructure_target'
    | 'kv_namespace'
    | 'load_balancer'
    | 'load_balancer_monitor'
    | 'load_balancer_pool'
    | 'managed_client_certificate'
    | 'pages_project'
    | 'queue'
    | 'r2_bucket'
    | 'resource_share'
    | 'stream_live_input'
    | 'stream_video'
    | 'vectorize_index'
    | 'worker'
    | 'worker_route'
    | 'worker_version'
    | 'zone'
    | 'zone_ruleset'
  >;
}

ResourceTagging.AccountTags = AccountTags;
ResourceTagging.BaseAccountTags = BaseAccountTags;
ResourceTagging.ZoneTags = ZoneTags;
ResourceTagging.BaseZoneTags = BaseZoneTags;
ResourceTagging.Keys = Keys;
ResourceTagging.BaseKeys = BaseKeys;
ResourceTagging.Values = Values;
ResourceTagging.BaseValues = BaseValues;
ResourceTagging.Summary = Summary;
ResourceTagging.BaseSummary = BaseSummary;

export declare namespace ResourceTagging {
  export {
    type ResourceTaggingListResponse as ResourceTaggingListResponse,
    type ResourceTaggingListResponsesCursorPaginationAfter as ResourceTaggingListResponsesCursorPaginationAfter,
    type ResourceTaggingListParams as ResourceTaggingListParams,
  };

  export {
    AccountTags as AccountTags,
    BaseAccountTags as BaseAccountTags,
    type AccountTagUpdateResponse as AccountTagUpdateResponse,
    type AccountTagGetResponse as AccountTagGetResponse,
    type AccountTagUpdateParams as AccountTagUpdateParams,
    type AccountTagDeleteParams as AccountTagDeleteParams,
    type AccountTagGetParams as AccountTagGetParams,
  };

  export {
    ZoneTags as ZoneTags,
    BaseZoneTags as BaseZoneTags,
    type ZoneTagUpdateResponse as ZoneTagUpdateResponse,
    type ZoneTagGetResponse as ZoneTagGetResponse,
    type ZoneTagUpdateParams as ZoneTagUpdateParams,
    type ZoneTagDeleteParams as ZoneTagDeleteParams,
    type ZoneTagGetParams as ZoneTagGetParams,
  };

  export {
    Keys as Keys,
    BaseKeys as BaseKeys,
    type KeyListResponse as KeyListResponse,
    type KeyListResponsesCursorPaginationAfter as KeyListResponsesCursorPaginationAfter,
    type KeyListParams as KeyListParams,
  };

  export {
    Values as Values,
    BaseValues as BaseValues,
    type ValueListResponse as ValueListResponse,
    type ValueListResponsesCursorPaginationAfter as ValueListResponsesCursorPaginationAfter,
    type ValueListParams as ValueListParams,
  };

  export {
    Summary as Summary,
    BaseSummary as BaseSummary,
    type SummaryGetResponse as SummaryGetResponse,
    type SummaryGetParams as SummaryGetParams,
  };
}
