// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ZonesAPI from './zones/zones';
import { BaseZones, Zones } from './zones/zones';

export class BaseSpectrumAnalytics extends APIResource {
  static override readonly _key: readonly ['user', 'spectrumAnalytics'] = Object.freeze([
    'user',
    'spectrumAnalytics',
  ] as const);
}
export class SpectrumAnalytics extends BaseSpectrumAnalytics {
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);
}

SpectrumAnalytics.Zones = Zones;
SpectrumAnalytics.BaseZones = BaseZones;

export declare namespace SpectrumAnalytics {
  export { Zones as Zones, BaseZones as BaseZones };
}
