// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Reclassify extends APIResource {
  /**
   * Submits a request to reclassify an email's disposition. Use for reporting false
   * positives or false negatives. Optionally provide the raw EML content for
   * reanalysis. The reclassification is processed asynchronously.
   *
   * @example
   * ```ts
   * const reclassify =
   *   await client.emailSecurity.investigate.reclassify.create(
   *     '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       expected_disposition: 'NONE',
   *     },
   *   );
   * ```
   */
  create(
    investigateId: string,
    params: ReclassifyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReclassifyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email-security/investigate/${investigateId}/reclassify`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ReclassifyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ReclassifyCreateResponse = unknown;

export interface ReclassifyCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param
   */
  expected_disposition: 'NONE' | 'BULK' | 'MALICIOUS' | 'SPAM' | 'SPOOF' | 'SUSPICIOUS';

  /**
   * Body param: Base64 encoded content of the EML file.
   */
  eml_content?: string;

  /**
   * Body param
   */
  escalated_submission_id?: string;
}

export declare namespace Reclassify {
  export {
    type ReclassifyCreateResponse as ReclassifyCreateResponse,
    type ReclassifyCreateParams as ReclassifyCreateParams,
  };
}
