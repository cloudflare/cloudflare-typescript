// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/alerting/v3/destinations/webhooks';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook destination.
   */
  create(
    accountId: string,
    body: WebhookCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/alerting/v3/destinations/webhooks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WebhookCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a list of all configured webhook destinations.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/alerting/v3/destinations/webhooks`,
        options,
      ) as Core.APIPromise<{ result: WebhookListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a configured webhook destination.
   */
  delete(
    accountId: string,
    webhookId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`,
        options,
      ) as Core.APIPromise<{ result: WebhookDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details for a single webhooks destination.
   */
  get(
    accountId: string,
    webhookId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`,
        options,
      ) as Core.APIPromise<{ result: WebhookGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a webhook destination.
   */
  replace(
    accountId: string,
    webhookId: string,
    body: WebhookReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WebhookReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WebhookCreateResponse {
  /**
   * UUID
   */
  id?: string;
}

export type WebhookListResponse = Array<WebhookListResponse.WebhookListResponseItem>;

export namespace WebhookListResponse {
  export interface WebhookListResponseItem {
    /**
     * The unique identifier of a webhook
     */
    id?: string;

    /**
     * Timestamp of when the webhook destination was created.
     */
    created_at?: string;

    /**
     * Timestamp of the last time an attempt to dispatch a notification to this webhook
     * failed.
     */
    last_failure?: string;

    /**
     * Timestamp of the last time Cloudflare was able to successfully dispatch a
     * notification using this webhook.
     */
    last_success?: string;

    /**
     * The name of the webhook destination. This will be included in the request body
     * when you receive a webhook notification.
     */
    name?: string;

    /**
     * Optional secret that will be passed in the `cf-webhook-auth` header when
     * dispatching generic webhook notifications or formatted for supported
     * destinations. Secrets are not returned in any API response body.
     */
    secret?: string;

    /**
     * Type of webhook endpoint.
     */
    type?: 'slack' | 'generic' | 'gchat';

    /**
     * The POST endpoint to call when dispatching a notification.
     */
    url?: string;
  }
}

export type WebhookDeleteResponse = unknown | Array<unknown> | string;

export interface WebhookGetResponse {
  /**
   * The unique identifier of a webhook
   */
  id?: string;

  /**
   * Timestamp of when the webhook destination was created.
   */
  created_at?: string;

  /**
   * Timestamp of the last time an attempt to dispatch a notification to this webhook
   * failed.
   */
  last_failure?: string;

  /**
   * Timestamp of the last time Cloudflare was able to successfully dispatch a
   * notification using this webhook.
   */
  last_success?: string;

  /**
   * The name of the webhook destination. This will be included in the request body
   * when you receive a webhook notification.
   */
  name?: string;

  /**
   * Optional secret that will be passed in the `cf-webhook-auth` header when
   * dispatching generic webhook notifications or formatted for supported
   * destinations. Secrets are not returned in any API response body.
   */
  secret?: string;

  /**
   * Type of webhook endpoint.
   */
  type?: 'slack' | 'generic' | 'gchat';

  /**
   * The POST endpoint to call when dispatching a notification.
   */
  url?: string;
}

export interface WebhookReplaceResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface WebhookCreateParams {
  /**
   * The name of the webhook destination. This will be included in the request body
   * when you receive a webhook notification.
   */
  name: string;

  /**
   * The POST endpoint to call when dispatching a notification.
   */
  url: string;

  /**
   * Optional secret that will be passed in the `cf-webhook-auth` header when
   * dispatching generic webhook notifications or formatted for supported
   * destinations. Secrets are not returned in any API response body.
   */
  secret?: string;
}

export interface WebhookReplaceParams {
  /**
   * The name of the webhook destination. This will be included in the request body
   * when you receive a webhook notification.
   */
  name: string;

  /**
   * The POST endpoint to call when dispatching a notification.
   */
  url: string;

  /**
   * Optional secret that will be passed in the `cf-webhook-auth` header when
   * dispatching generic webhook notifications or formatted for supported
   * destinations. Secrets are not returned in any API response body.
   */
  secret?: string;
}

export namespace Webhooks {
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookGetResponse = WebhooksAPI.WebhookGetResponse;
  export import WebhookReplaceResponse = WebhooksAPI.WebhookReplaceResponse;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookReplaceParams = WebhooksAPI.WebhookReplaceParams;
}
