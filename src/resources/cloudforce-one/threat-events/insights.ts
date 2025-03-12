// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Insights extends APIResource {
  /**
   * Deletes an event insight
   */
  delete(
    insightID: string,
    params: InsightDeleteParams,
    options?: RequestOptions,
  ): APIPromise<InsightDeleteResponse> {
    const { account_id, event_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/events/${event_id}/insight/${insightID}`,
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
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/events/${eventID}/insight/create`, {
        body,
        ...options,
      }) as APIPromise<{ result: InsightCreatResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an event insight
   */
  edit(
    insightID: string,
    params: InsightEditParams,
    options?: RequestOptions,
  ): APIPromise<InsightEditResponse> {
    const { account_id, event_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/cloudforce-one/events/${event_id}/insight/${insightID}`,
        { body, ...options },
      ) as APIPromise<{ result: InsightEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Reads an event insight
   */
  get(insightID: string, params: InsightGetParams, options?: RequestOptions): APIPromise<InsightGetResponse> {
    const { account_id, event_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/events/${event_id}/insight/${insightID}`,
        options,
      ) as APIPromise<{ result: InsightGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface InsightDeleteResponse {
  success: boolean;
}

export interface InsightCreatResponse {
  content: string;

  uuid: string;
}

export interface InsightEditResponse {
  content: string;

  uuid: string;
}

export interface InsightGetResponse {
  content: string;

  uuid: string;
}

export interface InsightDeleteParams {
  /**
   * Account ID
   */
  account_id: number;

  /**
   * Event UUID
   */
  event_id: string;
}

export interface InsightCreatParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Body param:
   */
  content: string;
}

export interface InsightEditParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Path param: Event UUID
   */
  event_id: string;

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

  /**
   * Event UUID
   */
  event_id: string;
}

export declare namespace Insights {
  export {
    type InsightDeleteResponse as InsightDeleteResponse,
    type InsightCreatResponse as InsightCreatResponse,
    type InsightEditResponse as InsightEditResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightDeleteParams as InsightDeleteParams,
    type InsightCreatParams as InsightCreatParams,
    type InsightEditParams as InsightEditParams,
    type InsightGetParams as InsightGetParams,
  };
}
