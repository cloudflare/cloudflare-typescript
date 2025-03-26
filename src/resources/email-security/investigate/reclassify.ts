// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Reclassify extends APIResource {
  /**
   * Change email classfication
   */
  create(
    postfixID: string,
    params: ReclassifyCreateParams,
    options?: RequestOptions,
  ): APIPromise<ReclassifyCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/email-security/investigate/${postfixID}/reclassify`, {
        body,
        ...options,
      }) as APIPromise<{ result: ReclassifyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ReclassifyCreateResponse = unknown;

export interface ReclassifyCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  expected_disposition: 'NONE' | 'BULK' | 'MALICIOUS' | 'SPAM' | 'SPOOF' | 'SUSPICIOUS';

  /**
   * Body param: Base64 encoded content of the EML file
   */
  eml_content?: string | null;
}

export declare namespace Reclassify {
  export {
    type ReclassifyCreateResponse as ReclassifyCreateResponse,
    type ReclassifyCreateParams as ReclassifyCreateParams,
  };
}
