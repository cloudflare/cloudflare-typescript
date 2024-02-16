// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValidatesAPI from 'cloudflare/resources/dlps/patterns/validates';

export class Validates extends APIResource {
  /**
   * Validates whether this pattern is a valid regular expression. Rejects it if the
   * regular expression is too complex or can match an unbounded-length string. Your
   * regex will be rejected if it uses the Kleene Star -- be sure to bound the
   * maximum number of characters that can be matched.
   */
  dlpPatternValidationValidatePattern(
    accountId: string,
    body: ValidateDLPPatternValidationValidatePatternParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidateDLPPatternValidationValidatePatternResponse> {
    return (
      this._client.post(`/accounts/${accountId}/dlp/patterns/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ValidateDLPPatternValidationValidatePatternResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ValidateDLPPatternValidationValidatePatternResponse {
  valid?: boolean;
}

export interface ValidateDLPPatternValidationValidatePatternParams {
  /**
   * The regex pattern.
   */
  regex: string;
}

export namespace Validates {
  export import ValidateDLPPatternValidationValidatePatternResponse = ValidatesAPI.ValidateDLPPatternValidationValidatePatternResponse;
  export import ValidateDLPPatternValidationValidatePatternParams = ValidatesAPI.ValidateDLPPatternValidationValidatePatternParams;
}
