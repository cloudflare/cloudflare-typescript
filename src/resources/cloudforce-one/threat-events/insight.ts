// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Insight extends APIResource {
  /**
   * Updates an event insight
   */
  update(
    accountId: number,
    eventId: string,
    insightId: string,
    body: InsightUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightUpdateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/cloudforce-one/events/${eventId}/insight/${insightId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InsightUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an event insight
   */
  delete(
    accountId: number,
    eventId: string,
    insightId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/cloudforce-one/events/${eventId}/insight/${insightId}`,
        options,
      ) as Core.APIPromise<{ result: InsightDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds an insight to an event
   */
  creat(
    accountId: number,
    eventId: string,
    body: InsightCreatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightCreatResponse> {
    return (
      this._client.post(`/accounts/${accountId}/cloudforce-one/events/${eventId}/insight/create`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InsightCreatResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Reads an event insight
   */
  get(
    accountId: number,
    eventId: string,
    insightId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/cloudforce-one/events/${eventId}/insight/${insightId}`,
        options,
      ) as Core.APIPromise<{ result: InsightGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface InsightUpdateResponse {
  content: string;

  uuid: string;
}

export interface InsightDeleteResponse {
  success: boolean;
}

export interface InsightCreatResponse {
  content: string;

  uuid: string;
}

export interface InsightGetResponse {
  content: string;

  uuid: string;
}

export interface InsightUpdateParams {
  content: string;
}

export interface InsightCreatParams {
  content: string;
}

export declare namespace Insight {
  export {
    type InsightUpdateResponse as InsightUpdateResponse,
    type InsightDeleteResponse as InsightDeleteResponse,
    type InsightCreatResponse as InsightCreatResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightUpdateParams as InsightUpdateParams,
    type InsightCreatParams as InsightCreatParams,
  };
}
