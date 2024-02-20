// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QueuesAPI from 'cloudflare/resources/workers/queues/queues';
import * as ConsumersAPI from 'cloudflare/resources/workers/queues/consumers';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);

  /**
   * Creates a new queue.
   */
  create(
    accountId: string,
    body: QueueCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/workers/queues`, { body, ...options }) as Core.APIPromise<{
        result: QueueCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a queue.
   */
  update(
    accountId: string,
    name: string,
    body: QueueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/workers/queues/${name}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: QueueUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the queues owned by an account.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<QueueListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/workers/queues`, options) as Core.APIPromise<{
        result: QueueListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a queue.
   */
  delete(
    accountId: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${accountId}/workers/queues/${name}`, options) as Core.APIPromise<{
        result: QueueDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific queue.
   */
  get(
    accountId: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueGetResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/workers/queues/${name}`, options) as Core.APIPromise<{
        result: QueueGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface QueueCreateResponse {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export interface QueueUpdateResponse {
  created_on?: unknown;

  modified_on?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export type QueueListResponse = Array<QueueListResponse.QueueListResponseItem>;

export namespace QueueListResponse {
  export interface QueueListResponseItem {
    consumers?: unknown;

    consumers_total_count?: unknown;

    created_on?: unknown;

    modified_on?: unknown;

    producers?: unknown;

    producers_total_count?: unknown;

    queue_id?: unknown;

    queue_name?: string;
  }
}

export type QueueDeleteResponse = unknown | Array<unknown> | string;

export interface QueueGetResponse {
  consumers?: unknown;

  consumers_total_count?: unknown;

  created_on?: unknown;

  modified_on?: unknown;

  producers?: unknown;

  producers_total_count?: unknown;

  queue_id?: unknown;

  queue_name?: string;
}

export type QueueCreateParams = unknown;

export type QueueUpdateParams = unknown;

export namespace Queues {
  export import QueueCreateResponse = QueuesAPI.QueueCreateResponse;
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueListResponse = QueuesAPI.QueueListResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueGetResponse = QueuesAPI.QueueGetResponse;
  export import QueueCreateParams = QueuesAPI.QueueCreateParams;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import Consumers = ConsumersAPI.Consumers;
  export import ConsumerCreateResponse = ConsumersAPI.ConsumerCreateResponse;
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
  export import ConsumerListResponse = ConsumersAPI.ConsumerListResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerCreateParams = ConsumersAPI.ConsumerCreateParams;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
}
