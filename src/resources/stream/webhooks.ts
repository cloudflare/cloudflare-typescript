// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a webhook notification.
   */
  update(params: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/stream/webhook`, { body, ...options }) as APIPromise<{
        result: WebhookUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a webhook.
   */
  delete(params: WebhookDeleteParams, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/stream/webhook`, options) as APIPromise<{
        result: WebhookDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a list of webhooks.
   */
  get(params: WebhookGetParams, options?: RequestOptions): APIPromise<WebhookGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/stream/webhook`, options) as APIPromise<{
        result: WebhookGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WebhookUpdateResponse = unknown;

export type WebhookDeleteResponse = string;

export type WebhookGetResponse = unknown;

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
