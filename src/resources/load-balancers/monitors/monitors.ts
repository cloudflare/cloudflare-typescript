// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PreviewsAPI from './previews';
import { BasePreviews, Previews } from './previews';
import * as ReferencesAPI from './references';
import { BaseReferences, References } from './references';

export class BaseMonitors extends APIResource {
  static override readonly _key: readonly ['loadBalancers', 'monitors'] = Object.freeze([
    'loadBalancers',
    'monitors',
  ] as const);
}
export class Monitors extends BaseMonitors {
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
}

Monitors.Previews = Previews;
Monitors.BasePreviews = BasePreviews;
Monitors.References = References;
Monitors.BaseReferences = BaseReferences;

export declare namespace Monitors {
  export { Previews as Previews, BasePreviews as BasePreviews };

  export { References as References, BaseReferences as BaseReferences };
}
