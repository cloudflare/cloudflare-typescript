// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PatternsAPI from 'cloudflare/resources/dlp/patterns';

export class Patterns extends APIResource {
  /**
   * Validates whether this pattern is a valid regular expression. Rejects it if the
   * regular expression is too complex or can match an unbounded-length string. Your
   * regex will be rejected if it uses the Kleene Star -- be sure to bound the
   * maximum number of characters that can be matched.
   */
  validate(
    accountId: string,
    body: PatternValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PatternValidateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/dlp/patterns/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PatternValidateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PatternValidateResponse {
  valid?: boolean;
}

export interface PatternValidateParams {
  /**
   * The regex pattern.
   */
  regex: string;
}

export namespace Patterns {
  export import PatternValidateResponse = PatternsAPI.PatternValidateResponse;
  export import PatternValidateParams = PatternsAPI.PatternValidateParams;
}
