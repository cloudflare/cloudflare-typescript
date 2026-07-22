// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransformationsAPI from './transformations';
import { BaseTransformations, Transformations } from './transformations';

export class BaseSpeedSettings extends APIResource {
  static override readonly _key: readonly ['accounts', 'speedSettings'] = Object.freeze([
    'accounts',
    'speedSettings',
  ] as const);
}
export class SpeedSettings extends BaseSpeedSettings {
  transformations: TransformationsAPI.Transformations = new TransformationsAPI.Transformations(this._client);
}

SpeedSettings.Transformations = Transformations;
SpeedSettings.BaseTransformations = BaseTransformations;

export declare namespace SpeedSettings {
  export { Transformations as Transformations, BaseTransformations as BaseTransformations };
}
