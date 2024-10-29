// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RecipientsAPI from './recipients';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Recipients extends APIResource {
  /**
   * Create a new share recipient
   */
  create(
    shareIdentifier: string,
    params: RecipientCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecipientCreateResponse> {
    const { path_account_id, body_account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${path_account_id}/shares/${shareIdentifier}/recipients`, {
        body: { account_id: body_account_id, ...body },
        ...options,
      }) as Core.APIPromise<{ result: RecipientCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List share recipients by share ID.
   */
  list(
    shareIdentifier: string,
    params: RecipientListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RecipientListResponsesV4PagePaginationArray, RecipientListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/shares/${shareIdentifier}/recipients`,
      RecipientListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletion is not immediate, an updated share recipient object with a new status
   * will be returned.
   */
  delete(
    shareIdentifier: string,
    recipientIdentifier: string,
    params: RecipientDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecipientDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/shares/${shareIdentifier}/recipients/${recipientIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RecipientDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get share recipient by ID.
   */
  get(
    shareIdentifier: string,
    recipientIdentifier: string,
    params: RecipientGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecipientGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/shares/${shareIdentifier}/recipients/${recipientIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RecipientGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RecipientListResponsesV4PagePaginationArray extends V4PagePaginationArray<RecipientListResponse> {}

export interface RecipientCreateResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientListResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientDeleteResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientGetResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientCreateParams {
  /**
   * Path param: Account identifier.
   */
  path_account_id: string;

  /**
   * Body param: Account identifier.
   */
  body_account_id?: string;

  /**
   * Body param: Organization identifier.
   */
  organization_id?: string;
}

export interface RecipientListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;
}

export interface RecipientDeleteParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export interface RecipientGetParams {
  /**
   * Account identifier.
   */
  account_id: string;
}

export namespace Recipients {
  export import RecipientCreateResponse = RecipientsAPI.RecipientCreateResponse;
  export import RecipientListResponse = RecipientsAPI.RecipientListResponse;
  export import RecipientDeleteResponse = RecipientsAPI.RecipientDeleteResponse;
  export import RecipientGetResponse = RecipientsAPI.RecipientGetResponse;
  export import RecipientListResponsesV4PagePaginationArray = RecipientsAPI.RecipientListResponsesV4PagePaginationArray;
  export import RecipientCreateParams = RecipientsAPI.RecipientCreateParams;
  export import RecipientListParams = RecipientsAPI.RecipientListParams;
  export import RecipientDeleteParams = RecipientsAPI.RecipientDeleteParams;
  export import RecipientGetParams = RecipientsAPI.RecipientGetParams;
}
