// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ZoneTags extends APIResource {
  /**
   * Creates or updates tags for a specific zone-level resource. Replaces all
   * existing tags for the resource.
   *
   * @example
   * ```ts
   * const zoneTag =
   *   await client.resourceTagging.zoneTags.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     resource_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     resource_type: 'zone',
   *   });
   * ```
   */
  update(params: ZoneTagUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ZoneTagUpdateResponse> {
    const { zone_id, 'If-Match': ifMatch, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/tags`, {
        body,
        ...options,
        headers: { ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined), ...options?.headers },
      }) as Core.APIPromise<{ result: ZoneTagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes all tags from a specific zone-level resource.
   */
  delete(params: ZoneTagDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { zone_id, 'If-Match': ifMatch } = params;
    return this._client.delete(`/zones/${zone_id}/tags`, {
      ...options,
      headers: {
        Accept: '*/*',
        ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves tags for a specific zone-level resource.
   */
  get(params: ZoneTagGetParams, options?: Core.RequestOptions): Core.APIPromise<ZoneTagGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/tags`, { query, ...options }) as Core.APIPromise<{
        result: ZoneTagGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Response for access_application resources
 */
export type ZoneTagUpdateResponse =
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccessApplication
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccessApplicationPolicy
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccessGroup
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAccount
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAIGateway
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAlertingPolicy
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAlertingWebhook
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectAPIGatewayOperation
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectCloudflaredTunnel
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectCustomCertificate
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectCustomHostname
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectD1Database
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectDNSRecord
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectDurableObjectNamespace
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectGatewayList
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectGatewayRule
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectImage
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectKVNamespace
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectManagedClientCertificate
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectQueue
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectR2Bucket
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectResourceShare
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectStreamLiveInput
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectStreamVideo
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectWorker
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectWorkerVersion
  | ZoneTagUpdateResponse.ResourceTaggingTaggedResourceObjectZone;

export namespace ZoneTagUpdateResponse {
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
export type ZoneTagGetResponse =
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAccessApplication
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAccessApplicationPolicy
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAccessGroup
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAccount
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAIGateway
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAlertingPolicy
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAlertingWebhook
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectAPIGatewayOperation
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectCloudflaredTunnel
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectCustomCertificate
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectCustomHostname
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectD1Database
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectDNSRecord
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectDurableObjectNamespace
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectGatewayList
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectGatewayRule
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectImage
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectKVNamespace
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectManagedClientCertificate
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectQueue
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectR2Bucket
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectResourceShare
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectStreamLiveInput
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectStreamVideo
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectWorker
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectWorkerVersion
  | ZoneTagGetResponse.ResourceTaggingTaggedResourceObjectZone;

export namespace ZoneTagGetResponse {
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

export type ZoneTagUpdateParams =
  | ZoneTagUpdateParams.ResourceTaggingSetTagsRequestZoneLevelBase
  | ZoneTagUpdateParams.ResourceTaggingSetTagsRequestZoneLevelAccessApplicationPolicy;

export declare namespace ZoneTagUpdateParams {
  export interface ResourceTaggingSetTagsRequestZoneLevelBase {
    /**
     * Path param: Zone ID is required only for zone-level resources
     */
    zone_id: string;

    /**
     * Body param: Identifies the unique resource.
     */
    resource_id: string;

    /**
     * Body param: Enum for base zone-level resource types (those with no extra
     * required fields).
     */
    resource_type:
      | 'api_gateway_operation'
      | 'custom_certificate'
      | 'custom_hostname'
      | 'dns_record'
      | 'managed_client_certificate'
      | 'zone';

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

  export interface ResourceTaggingSetTagsRequestZoneLevelAccessApplicationPolicy {
    /**
     * Path param: Zone ID is required only for zone-level resources
     */
    zone_id: string;

    /**
     * Body param: Access application ID is required only for access_application_policy
     * resources
     */
    access_application_id: string;

    /**
     * Body param: Identifies the unique resource.
     */
    resource_id: string;

    /**
     * Body param: Enum for base zone-level resource types (those with no extra
     * required fields).
     */
    resource_type:
      | 'api_gateway_operation'
      | 'custom_certificate'
      | 'custom_hostname'
      | 'dns_record'
      | 'managed_client_certificate'
      | 'zone'
      | 'access_application_policy';

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

export interface ZoneTagDeleteParams {
  /**
   * Path param: Zone ID is required only for zone-level resources
   */
  zone_id: string;

  /**
   * Header param: ETag value for optimistic concurrency control. When provided, the
   * server will verify the current resource ETag matches before applying the write.
   * Returns 412 Precondition Failed if the resource has been modified since the ETag
   * was obtained. Omit this header for unconditional writes.
   */
  'If-Match'?: string;
}

export interface ZoneTagGetParams {
  /**
   * Path param: Zone ID is required only for zone-level resources
   */
  zone_id: string;

  /**
   * Query param: The ID of the resource to retrieve tags for.
   */
  resource_id: string;

  /**
   * Query param: The type of the resource.
   */
  resource_type:
    | 'access_application_policy'
    | 'api_gateway_operation'
    | 'custom_certificate'
    | 'custom_hostname'
    | 'dns_record'
    | 'managed_client_certificate'
    | 'zone';

  /**
   * Query param: Access application ID identifier. Required for
   * access_application_policy resources.
   */
  access_application_id?: string;
}

export declare namespace ZoneTags {
  export {
    type ZoneTagUpdateResponse as ZoneTagUpdateResponse,
    type ZoneTagGetResponse as ZoneTagGetResponse,
    type ZoneTagUpdateParams as ZoneTagUpdateParams,
    type ZoneTagDeleteParams as ZoneTagDeleteParams,
    type ZoneTagGetParams as ZoneTagGetParams,
  };
}
