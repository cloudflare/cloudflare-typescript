// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OutagesAPI from './outages';
import { BaseOutages, Outages } from './outages';

export class BaseAnnotations extends APIResource {
  static override readonly _key: readonly ['radar', 'annotations'] = Object.freeze([
    'radar',
    'annotations',
  ] as const);
}
export class Annotations extends BaseAnnotations {
  outages: OutagesAPI.Outages = new OutagesAPI.Outages(this._client);
}

Annotations.Outages = Outages;
Annotations.BaseOutages = BaseOutages;

export declare namespace Annotations {
  export { Outages as Outages, BaseOutages as BaseOutages };
}
