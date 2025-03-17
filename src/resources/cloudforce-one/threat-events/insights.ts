// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Insights extends APIResource {
  /**
   * Adds an insight to an event
   */
  create(
    eventId: string,
    params: InsightCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/cloudforce-one/events/${eventId}/insight/create`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InsightCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an event insight
   */
  delete(
    eventId: string,
    insightId: string,
    params: InsightDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/cloudforce-one/events/${eventId}/insight/${insightId}`,
        options,
      ) as Core.APIPromise<{ result: InsightDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an event insight
   */
  edit(
    eventId: string,
    insightId: string,
    params: InsightEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/cloudforce-one/events/${eventId}/insight/${insightId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InsightEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Reads an event insight
   */
  get(
    eventId: string,
    insightId: string,
    params: InsightGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/cloudforce-one/events/${eventId}/insight/${insightId}`,
        options,
      ) as Core.APIPromise<{ result: InsightGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface InsightCreateResponse {
  content: string;

  uuid: string;
}

export interface InsightDeleteResponse {
  success: boolean;
}

export interface InsightEditResponse {
  content: string;

  uuid: string;
}

export interface InsightGetResponse {
  content: string;

  uuid: string;
}

export interface InsightCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param:
   */
  content: string;
}

export interface InsightDeleteParams {
  /**
   * Account ID
   */
  account_id: number;
}

export interface InsightEditParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param:
   */
  content: string;
}

export interface InsightGetParams {
  /**
   * Account ID
   */
  account_id: number;
}

export declare namespace Insights {
  export {
    type InsightCreateResponse as InsightCreateResponse,
    type InsightDeleteResponse as InsightDeleteResponse,
    type InsightEditResponse as InsightEditResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightCreateParams as InsightCreateParams,
    type InsightDeleteParams as InsightDeleteParams,
    type InsightEditParams as InsightEditParams,
    type InsightGetParams as InsightGetParams,
  };
}
