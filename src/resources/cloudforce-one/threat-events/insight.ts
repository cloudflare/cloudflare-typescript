// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Insight extends APIResource {
  /**
   * Updates an event insight
   */
  update(
    insightID: string,
    params: InsightUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InsightUpdateResponse> {
    const { accountId, eventId, ...body } = params;
    return (
      this._client.post(path`/accounts/${accountId}/cloudforce-one/events/${eventId}/insight/${insightID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: InsightUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an event insight
   */
  delete(
    insightID: string,
    params: InsightDeleteParams,
    options?: RequestOptions,
  ): APIPromise<InsightDeleteResponse> {
    const { accountId, eventId } = params;
    return (
      this._client.delete(
        path`/accounts/${accountId}/cloudforce-one/events/${eventId}/insight/${insightID}`,
        options,
      ) as APIPromise<{ result: InsightDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds an insight to an event
   */
  creat(
    eventID: string,
    params: InsightCreatParams,
    options?: RequestOptions,
  ): APIPromise<InsightCreatResponse> {
    const { accountId, ...body } = params;
    return (
      this._client.post(path`/accounts/${accountId}/cloudforce-one/events/${eventID}/insight/create`, {
        body,
        ...options,
      }) as APIPromise<{ result: InsightCreatResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Reads an event insight
   */
  get(insightID: string, params: InsightGetParams, options?: RequestOptions): APIPromise<InsightGetResponse> {
    const { accountId, eventId } = params;
    return (
      this._client.get(
        path`/accounts/${accountId}/cloudforce-one/events/${eventId}/insight/${insightID}`,
        options,
      ) as APIPromise<{ result: InsightGetResponse }>
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
  /**
   * Path param: Account ID
   */
  accountId: number;

  /**
   * Path param: Event UUID
   */
  eventId: string;

  /**
   * Body param:
   */
  content: string;
}

export interface InsightDeleteParams {
  /**
   * Account ID
   */
  accountId: number;

  /**
   * Event UUID
   */
  eventId: string;
}

export interface InsightCreatParams {
  /**
   * Path param: Account ID
   */
  accountId: number;

  /**
   * Body param:
   */
  content: string;
}

export interface InsightGetParams {
  /**
   * Account ID
   */
  accountId: number;

  /**
   * Event UUID
   */
  eventId: string;
}

export declare namespace Insight {
  export {
    type InsightUpdateResponse as InsightUpdateResponse,
    type InsightDeleteResponse as InsightDeleteResponse,
    type InsightCreatResponse as InsightCreatResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightUpdateParams as InsightUpdateParams,
    type InsightDeleteParams as InsightDeleteParams,
    type InsightCreatParams as InsightCreatParams,
    type InsightGetParams as InsightGetParams,
  };
}
