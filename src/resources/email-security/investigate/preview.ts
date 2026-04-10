// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Preview extends APIResource {
  /**
   * Generates a preview of an email message for safe viewing without executing any
   * embedded content.
   *
   * @example
   * ```ts
   * const preview =
   *   await client.emailSecurity.investigate.preview.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     postfix_id: '4Njp3P0STMz2c02Q',
   *   });
   * ```
   */
  create(params: PreviewCreateParams, options?: RequestOptions): APIPromise<PreviewCreateResponse> {
    const { account_id, submission, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/investigate/preview`, {
        query: { submission },
        body,
        ...options,
      }) as APIPromise<{ result: PreviewCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a preview of the message body as a base64 encoded PNG image for
   * non-benign messages.
   *
   * @example
   * ```ts
   * const preview =
   *   await client.emailSecurity.investigate.preview.get(
   *     '4Njp3P0STMz2c02Q',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
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

  /**
   * Query param: When true, search the submissions datastore only. When false or
   * omitted, search the regular datastore only.
   */
  submission?: boolean;
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
