// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Preview extends APIResource {
  /**
   * Preview for non-detection messages
   */
  create(params: PreviewCreateParams, options?: RequestOptions): APIPromise<PreviewCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/investigate/preview`, {
        body,
        ...options,
      }) as APIPromise<{ result: PreviewCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a preview of the message body as a base64 encoded PNG image for
   * non-benign messages.
   */
  get(postfixID: string, params: PreviewGetParams, options?: RequestOptions): APIPromise<PreviewGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/investigate/${postfixID}/preview`,
        options,
      ) as APIPromise<{ result: PreviewGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PreviewCreateResponse {
  /**
   * A base64 encoded PNG image of the email.
   */
  screenshot: string;
}

export interface PreviewGetResponse {
  /**
   * A base64 encoded PNG image of the email.
   */
  screenshot: string;
}

export interface PreviewCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param: The identifier of the message.
   */
  postfix_id: string;
}

export interface PreviewGetParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export declare namespace Preview {
  export {
    type PreviewCreateResponse as PreviewCreateResponse,
    type PreviewGetResponse as PreviewGetResponse,
    type PreviewCreateParams as PreviewCreateParams,
    type PreviewGetParams as PreviewGetParams,
  };
}
