// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as DirectiveAPI from './directive';

export class Top extends APIResource {
  directive: DirectiveAPI.Directive = new DirectiveAPI.Directive(this._client);
}

export namespace Top {
  export import Directive = DirectiveAPI.Directive;
  export import DirectiveGetResponse = DirectiveAPI.DirectiveGetResponse;
  export import DirectiveGetParams = DirectiveAPI.DirectiveGetParams;
}
