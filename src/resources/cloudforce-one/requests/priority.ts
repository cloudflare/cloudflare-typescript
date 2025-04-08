// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as RequestsAPI from './requests';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PriorityResource extends APIResource {
  /**
   * Create a New Priority Intelligence Requirement
   */
  create(
    accountIdentifier: string,
    body: PriorityCreateParams,
    options?: RequestOptions,
  ): APIPromise<Priority> {
    return (
      this._client.post(path`/accounts/${accountIdentifier}/cloudforce-one/requests/priority/new`, {
        body,
        ...options,
      }) as APIPromise<{ result: Priority }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Priority Intelligence Requirement
   */
  update(
    priorityIdentifer: string,
    params: PriorityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RequestsAPI.Item> {
    const { account_identifier, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_identifier}/cloudforce-one/requests/priority/${priorityIdentifer}`,
        { body, ...options },
      ) as APIPromise<{ result: RequestsAPI.Item }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Priority Intelligence Requirement
   */
  delete(
    priorityIdentifer: string,
    params: PriorityDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PriorityDeleteResponse> {
    const { account_identifier } = params;
    return this._client.delete(
      path`/accounts/${account_identifier}/cloudforce-one/requests/priority/${priorityIdentifer}`,
      options,
    );
  }

  /**
   * Get a Priority Intelligence Requirement
   */
  get(
    priorityIdentifer: string,
    params: PriorityGetParams,
    options?: RequestOptions,
  ): APIPromise<RequestsAPI.Item> {
    const { account_identifier } = params;
    return (
      this._client.get(
        path`/accounts/${account_identifier}/cloudforce-one/requests/priority/${priorityIdentifer}`,
        options,
      ) as APIPromise<{ result: RequestsAPI.Item }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Priority Intelligence Requirement Quota
   */
  quota(accountIdentifier: string, options?: RequestOptions): APIPromise<RequestsAPI.Quota> {
    return (
      this._client.get(
        path`/accounts/${accountIdentifier}/cloudforce-one/requests/priority/quota`,
        options,
      ) as APIPromise<{ result: RequestsAPI.Quota }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type Label = string;

export type LabelParam = string;

export interface Priority {
  /**
   * UUID
   */
  id: string;

  /**
   * Priority creation time
   */
  created: string;

  /**
   * List of labels
   */
  labels: Array<Label>;

  /**
   * Priority
   */
  priority: number;

  /**
   * Requirement
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  /**
   * Priority last updated time
   */
  updated: string;
}

export interface PriorityEdit {
  /**
   * List of labels
   */
  labels: Array<Label>;

  /**
   * Priority
   */
  priority: number;

  /**
   * Requirement
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface PriorityDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface PriorityCreateParams {
  /**
   * List of labels
   */
  labels: Array<LabelParam>;

  /**
   * Priority
   */
  priority: number;

  /**
   * Requirement
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface PriorityUpdateParams {
  /**
   * Path param: Identifier
   */
  account_identifier: string;

  /**
   * Body param: List of labels
   */
  labels: Array<LabelParam>;

  /**
   * Body param: Priority
   */
  priority: number;

  /**
   * Body param: Requirement
   */
  requirement: string;

  /**
   * Body param: The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface PriorityDeleteParams {
  /**
   * Identifier
   */
  account_identifier: string;
}

export interface PriorityGetParams {
  /**
   * Identifier
   */
  account_identifier: string;
}

export declare namespace PriorityResource {
  export {
    type Label as Label,
    type Priority as Priority,
    type PriorityEdit as PriorityEdit,
    type PriorityDeleteResponse as PriorityDeleteResponse,
    type PriorityCreateParams as PriorityCreateParams,
    type PriorityUpdateParams as PriorityUpdateParams,
    type PriorityDeleteParams as PriorityDeleteParams,
    type PriorityGetParams as PriorityGetParams,
  };
}
