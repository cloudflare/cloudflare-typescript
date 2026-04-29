// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreviewsAPI from './previews';
import { BasePreviews, Previews } from './previews';

export class BaseHealthchecks extends APIResource {
  static override readonly _key: readonly ['healthchecks'] = Object.freeze(['healthchecks'] as const);
}
export class Healthchecks extends BaseHealthchecks {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
}

Healthchecks.Previews = Previews;
Healthchecks.BasePreviews = BasePreviews;

export declare namespace Healthchecks {
  export { Previews as Previews, BasePreviews as BasePreviews };
}
