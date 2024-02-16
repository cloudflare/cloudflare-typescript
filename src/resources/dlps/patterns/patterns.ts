// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ValidatesAPI from 'cloudflare/resources/dlps/patterns/validates';

export class Patterns extends APIResource {
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);
}

export namespace Patterns {
  export import Validates = ValidatesAPI.Validates;
  export import ValidateDLPPatternValidationValidatePatternResponse = ValidatesAPI.ValidateDLPPatternValidationValidatePatternResponse;
  export import ValidateDLPPatternValidationValidatePatternParams = ValidatesAPI.ValidateDLPPatternValidationValidatePatternParams;
}
