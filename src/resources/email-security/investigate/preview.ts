// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BasePreview extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'preview'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'preview',
  ] as const);

  /**
   * Generates a preview image for a message that was not flagged as a detection.
   * Useful for investigating benign messages. Returns a base64-encoded PNG
   * screenshot of the email body.
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
   *
   * @example
   * ```ts
   * const preview =
   *   await client.emailSecurity.investigate.preview.get(
   *     '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    investigateID: string,
    params: PreviewGetParams,
    options?: RequestOptions,
  ): APIPromise<PreviewGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/investigate/${investigateID}/preview`,
        options,
      ) as APIPromise<{ result: PreviewGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Preview extends BasePreview {}

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
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The identifier of the message.
   */
  postfix_id: string;
}

export interface PreviewGetParams {
  /**
   * Identifier.
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
