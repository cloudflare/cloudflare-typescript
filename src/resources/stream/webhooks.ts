// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/stream/webhooks';

export class Webhooks extends APIResource {
  /**
   * Deletes a webhook.
   */
  delete(accountId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/stream/webhook`, options) as Core.APIPromise<{
        result: WebhookDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a webhook notification.
   */
  streamWebhookCreateWebhooks(
    accountId: string,
    body: WebhookStreamWebhookCreateWebhooksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookStreamWebhookCreateWebhooksResponse> {
    return (
      this._client.put(`/accounts/${accountId}/stream/webhook`, { body, ...options }) as Core.APIPromise<{
        result: WebhookStreamWebhookCreateWebhooksResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of webhooks.
   */
  streamWebhookViewWebhooks(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookStreamWebhookViewWebhooksResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/webhook`, options) as Core.APIPromise<{
        result: WebhookStreamWebhookViewWebhooksResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WebhookDeleteResponse = unknown | string;

export type WebhookStreamWebhookCreateWebhooksResponse = unknown | string;

export type WebhookStreamWebhookViewWebhooksResponse = unknown | string;

export interface WebhookStreamWebhookCreateWebhooksParams {
  /**
   * The URL where webhooks will be sent.
   */
  notificationUrl: string;
}

export namespace Webhooks {
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookStreamWebhookCreateWebhooksResponse = WebhooksAPI.WebhookStreamWebhookCreateWebhooksResponse;
  export import WebhookStreamWebhookViewWebhooksResponse = WebhooksAPI.WebhookStreamWebhookViewWebhooksResponse;
  export import WebhookStreamWebhookCreateWebhooksParams = WebhooksAPI.WebhookStreamWebhookCreateWebhooksParams;
}
