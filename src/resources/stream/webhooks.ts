// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/stream/webhooks';
import * as Shared from 'cloudflare/resources/shared';

export class Webhooks extends APIResource {
  /**
   * Creates a webhook notification.
   */
  update(
    params: WebhookUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/stream/webhook`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a webhook.
   */
  delete(
    params: WebhookDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/stream/webhook`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of webhooks.
   */
  get(
    params: WebhookGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/webhook`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface WebhookGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Webhooks {
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import WebhookDeleteParams = WebhooksAPI.WebhookDeleteParams;
  export import WebhookGetParams = WebhooksAPI.WebhookGetParams;
}
