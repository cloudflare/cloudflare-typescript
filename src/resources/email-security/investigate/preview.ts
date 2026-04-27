// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Preview extends APIResource {
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
  create(params: PreviewCreateParams, options?: Core.RequestOptions): Core.APIPromise<PreviewCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/investigate/preview`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PreviewCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PreviewCreateResponse {
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
   * Body param: The identifier of the message
   */
  postfix_id: string;
}

export declare namespace Preview {
  export {
    type PreviewCreateResponse as PreviewCreateResponse,
    type PreviewCreateParams as PreviewCreateParams,
  };
}
