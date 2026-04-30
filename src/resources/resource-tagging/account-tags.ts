// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class AccountTags extends APIResource {
  /**
   * Creates or updates tags for a specific account-level resource.
   *
   * @example
   * ```ts
   * const accountTag =
   *   await client.resourceTagging.accountTags.update({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     resource_type: 'worker',
   *     worker_id: '3f72a691-44b3-4c11-8642-c18a88ddaa5e',
   *   });
   * ```
   */
  update(
    params: AccountTagUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountTagUpdateResponse> {
    const { account_id, 'If-Match': ifMatch, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/tags`, {
        body,
        ...options,
        headers: { ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined), ...options?.headers },
      }) as Core.APIPromise<{ result: AccountTagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes all tags from a specific account-level resource.
   */
  delete(params: AccountTagDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id, 'If-Match': ifMatch } = params;
    return this._client.delete(`/accounts/${account_id}/tags`, {
      ...options,
      headers: {
        Accept: '*/*',
        ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves tags for a specific account-level resource.
   */
  get(params: AccountTagGetParams, options?: Core.RequestOptions): Core.APIPromise<AccountTagGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/tags`, { query, ...options }) as Core.APIPromise<{
        result: AccountTagGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Response for access_application resources
 */
export type AccountTagUpdateResponse =
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccessApplication
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccessApplicationPolicy
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccessGroup
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccount
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAIGateway
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAlertingPolicy
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAlertingWebhook
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectAPIGatewayOperation
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectCloudflaredTunnel
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectCustomCertificate
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectCustomHostname
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectD1Database
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectDNSRecord
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectDurableObjectNamespace
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectGatewayList
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectGatewayRule
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectImage
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectKVNamespace
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectManagedClientCertificate
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectQueue
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectR2Bucket
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectResourceShare
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectStreamLiveInput
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectStreamVideo
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectWorker
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectWorkerVersion
  | AccountTagUpdateResponse.ResourceTaggingTaggedResourceObjectZone;

export namespace AccountTagUpdateResponse {
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

/**
 * Response for access_application resources
 */
export type AccountTagGetResponse =
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAccessApplication
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAccessApplicationPolicy
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAccessGroup
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAccount
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAIGateway
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAlertingPolicy
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAlertingWebhook
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectAPIGatewayOperation
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectCloudflaredTunnel
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectCustomCertificate
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectCustomHostname
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectD1Database
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectDNSRecord
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectDurableObjectNamespace
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectGatewayList
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectGatewayRule
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectImage
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectKVNamespace
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectManagedClientCertificate
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectQueue
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectR2Bucket
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectResourceShare
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectStreamLiveInput
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectStreamVideo
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectWorker
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectWorkerVersion
  | AccountTagGetResponse.ResourceTaggingTaggedResourceObjectZone;

export namespace AccountTagGetResponse {
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

export type AccountTagUpdateParams =
  | AccountTagUpdateParams.ResourceTaggingSetTagsRequestAccountLevelWorkerVersion
  | AccountTagUpdateParams.ResourceTaggingSetTagsRequestAccountLevelBase;

export declare namespace AccountTagUpdateParams {
  export interface ResourceTaggingSetTagsRequestAccountLevelWorkerVersion {
    /**
     * Path param: Identifier.
     */
    account_id: string;

    /**
     * Body param: Identifies the unique resource.
     */
    resource_id: string;

    /**
     * Body param: Enum for base account-level resource types (those with no extra
     * required fields).
     */
    resource_type:
      | 'access_application'
      | 'access_group'
      | 'account'
      | 'ai_gateway'
      | 'alerting_policy'
      | 'alerting_webhook'
      | 'cloudflared_tunnel'
      | 'd1_database'
      | 'durable_object_namespace'
      | 'gateway_list'
      | 'gateway_rule'
      | 'image'
      | 'kv_namespace'
      | 'queue'
      | 'r2_bucket'
      | 'resource_share'
      | 'stream_live_input'
      | 'stream_video'
      | 'worker'
      | 'worker_version';

    /**
     * Body param: Worker ID is required only for worker_version resources
     */
    worker_id: string;

    /**
     * Body param: Contains key-value pairs of tags.
     */
    tags?: { [key: string]: string };

    /**
     * Header param: ETag value for optimistic concurrency control. When provided, the
     * server will verify the current resource ETag matches before applying the write.
     * Returns 412 Precondition Failed if the resource has been modified since the ETag
     * was obtained. Omit this header for unconditional writes.
     */
    'If-Match'?: string;
  }

  export interface ResourceTaggingSetTagsRequestAccountLevelBase {
    /**
     * Path param: Identifier.
     */
    account_id: string;

    /**
     * Body param: Identifies the unique resource.
     */
    resource_id: string;

    /**
     * Body param: Enum for base account-level resource types (those with no extra
     * required fields).
     */
    resource_type:
      | 'access_application'
      | 'access_group'
      | 'account'
      | 'ai_gateway'
      | 'alerting_policy'
      | 'alerting_webhook'
      | 'cloudflared_tunnel'
      | 'd1_database'
      | 'durable_object_namespace'
      | 'gateway_list'
      | 'gateway_rule'
      | 'image'
      | 'kv_namespace'
      | 'queue'
      | 'r2_bucket'
      | 'resource_share'
      | 'stream_live_input'
      | 'stream_video'
      | 'worker';

    /**
     * Body param: Contains key-value pairs of tags.
     */
    tags?: { [key: string]: string };

    /**
     * Header param: ETag value for optimistic concurrency control. When provided, the
     * server will verify the current resource ETag matches before applying the write.
     * Returns 412 Precondition Failed if the resource has been modified since the ETag
     * was obtained. Omit this header for unconditional writes.
     */
    'If-Match'?: string;
  }
}

export interface AccountTagDeleteParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Header param: ETag value for optimistic concurrency control. When provided, the
   * server will verify the current resource ETag matches before applying the write.
   * Returns 412 Precondition Failed if the resource has been modified since the ETag
   * was obtained. Omit this header for unconditional writes.
   */
  'If-Match'?: string;
}

export interface AccountTagGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The ID of the resource to retrieve tags for.
   */
  resource_id: string;

  /**
   * Query param: The type of the resource.
   */
  resource_type:
    | 'access_application'
    | 'access_group'
    | 'account'
    | 'ai_gateway'
    | 'alerting_policy'
    | 'alerting_webhook'
    | 'cloudflared_tunnel'
    | 'd1_database'
    | 'durable_object_namespace'
    | 'gateway_list'
    | 'gateway_rule'
    | 'image'
    | 'kv_namespace'
    | 'queue'
    | 'r2_bucket'
    | 'resource_share'
    | 'stream_live_input'
    | 'stream_video'
    | 'worker'
    | 'worker_version';

  /**
   * Query param: Worker identifier. Required for worker_version resources.
   */
  worker_id?: string;
}

export declare namespace AccountTags {
  export {
    type AccountTagUpdateResponse as AccountTagUpdateResponse,
    type AccountTagGetResponse as AccountTagGetResponse,
    type AccountTagUpdateParams as AccountTagUpdateParams,
    type AccountTagDeleteParams as AccountTagDeleteParams,
    type AccountTagGetParams as AccountTagGetParams,
  };
}
