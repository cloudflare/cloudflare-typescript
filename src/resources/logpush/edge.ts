// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EdgeAPI from 'cloudflare/resources/logpush/edge';

export class Edge extends APIResource {
  /**
   * Creates a new Instant Logs job for a zone.
   */
  create(
    zoneId: string,
    body: EdgeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EdgeCreateResponse | null> {
    return (
      this._client.post(`/zones/${zoneId}/logpush/edge`, { body, ...options }) as Core.APIPromise<{
        result: EdgeCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Instant Logs jobs for a zone.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<EdgeGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/logpush/edge`, options) as Core.APIPromise<{
        result: EdgeGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EdgeCreateResponse {
  /**
   * Unique WebSocket address that will receive messages from Cloudflare’s edge.
   */
  destination_conf?: string;

  /**
   * Comma-separated list of fields.
   */
  fields?: string;

  /**
   * Filters to drill down into specific events.
   */
  filter?: string;

  /**
   * The sample parameter is the sample rate of the records set by the client:
   * "sample": 1 is 100% of records "sample": 10 is 10% and so on.
   */
  sample?: number;

  /**
   * Unique session id of the job.
   */
  session_id?: string;
}

export type EdgeGetResponse = Array<EdgeGetResponse.EdgeGetResponseItem | null>;

export namespace EdgeGetResponse {
  export interface EdgeGetResponseItem {
    /**
     * Unique WebSocket address that will receive messages from Cloudflare’s edge.
     */
    destination_conf?: string;

    /**
     * Comma-separated list of fields.
     */
    fields?: string;

    /**
     * Filters to drill down into specific events.
     */
    filter?: string;

    /**
     * The sample parameter is the sample rate of the records set by the client:
     * "sample": 1 is 100% of records "sample": 10 is 10% and so on.
     */
    sample?: number;

    /**
     * Unique session id of the job.
     */
    session_id?: string;
  }
}

export interface EdgeCreateParams {
  /**
   * Comma-separated list of fields.
   */
  fields?: string;

  /**
   * Filters to drill down into specific events.
   */
  filter?: string;

  /**
   * The sample parameter is the sample rate of the records set by the client:
   * "sample": 1 is 100% of records "sample": 10 is 10% and so on.
   */
  sample?: number;
}

export namespace Edge {
  export import EdgeCreateResponse = EdgeAPI.EdgeCreateResponse;
  export import EdgeGetResponse = EdgeAPI.EdgeGetResponse;
  export import EdgeCreateParams = EdgeAPI.EdgeCreateParams;
}
