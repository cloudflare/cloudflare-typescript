// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WebhooksAPI from './webhooks';

export class Webhooks extends APIResource {
  /**
   * Creates a webhook notification.
   */
  update(params: WebhookUpdateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/stream/webhook`, { body, ...options }) as Core.APIPromise<{
        result: WebhookUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a webhook.
   */
  delete(params: WebhookDeleteParams, options?: Core.RequestOptions): Core.APIPromise<WebhookDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/stream/webhook`, options) as Core.APIPromise<{
        result: WebhookDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of webhooks.
   */
  get(params: WebhookGetParams, options?: Core.RequestOptions): Core.APIPromise<WebhookGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/webhook`, options) as Core.APIPromise<{
        result: WebhookGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WebhookUpdateResponse = unknown | string | null;

export type WebhookDeleteResponse = unknown | string;

export type WebhookGetResponse = unknown | string | null;

export interface WebhookUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The URL where webhooks will be sent.
   */
  notificationUrl: string;
}

export interface WebhookDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface WebhookGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Webhooks {
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookGetResponse = WebhooksAPI.WebhookGetResponse;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import WebhookDeleteParams = WebhooksAPI.WebhookDeleteParams;
  export import WebhookGetParams = WebhooksAPI.WebhookGetParams;
}
