// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseWebhooks extends APIResource {
  static override readonly _key: readonly ['stream', 'webhooks'] = Object.freeze([
    'stream',
    'webhooks',
  ] as const);

  /**
   * Creates a webhook notification.
   *
   * @example
   * ```ts
   * const webhook = await client.stream.webhooks.update({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  update(
    params: WebhookUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    const { account_id = this._client.accountID, ...body } = params ?? {};
    return (
      this._client.put(path`/accounts/${account_id}/stream/webhook`, { body, ...options }) as APIPromise<{
        result: WebhookUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.stream.webhooks.delete({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  delete(
    params: WebhookDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookDeleteResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.delete(path`/accounts/${account_id}/stream/webhook`, options) as APIPromise<{
        result: WebhookDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of webhooks.
   *
   * @example
   * ```ts
   * const webhook = await client.stream.webhooks.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: WebhookGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookGetResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/stream/webhook`, options) as APIPromise<{
        result: WebhookGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Webhooks extends BaseWebhooks {}

export interface WebhookUpdateResponse {
  /**
   * The date and time the webhook was last modified.
   */
  modified?: string;

  /**
   * The URL where webhooks will be sent.
   */
  notification_url?: string;

  /**
   * The URL where webhooks will be sent.
   */
  notificationUrl?: string;

  /**
   * The secret used to verify webhook signatures.
   */
  secret?: string;
}

export type WebhookDeleteResponse = string;

export interface WebhookGetResponse {
  /**
   * The date and time the webhook was last modified.
   */
  modified?: string;

  /**
   * The URL where webhooks will be sent.
   */
  notification_url?: string;

  /**
   * The URL where webhooks will be sent.
   */
  notificationUrl?: string;

  /**
   * The secret used to verify webhook signatures.
   */
  secret?: string;
}

export interface WebhookUpdateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id?: string;

  /**
   * Body param: The URL where webhooks will be sent.
   */
  notification_url?: string;

  /**
   * Body param: The URL where webhooks will be sent.
   */
  notificationUrl?: string;
}

export interface WebhookDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id?: string;
}

export interface WebhookGetParams {
  /**
   * The account identifier tag.
   */
  account_id?: string;
}

export declare namespace Webhooks {
  export {
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookGetResponse as WebhookGetResponse,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookGetParams as WebhookGetParams,
  };
}
