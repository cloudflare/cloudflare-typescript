// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdvertisementsAPI from './advertisements';
import { Advertisements, BaseAdvertisements } from './advertisements';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['magicNetworkMonitoring', 'rules'] = Object.freeze([
    'magicNetworkMonitoring',
    'rules',
  ] as const);
}
export class Rules extends BaseRules {
  advertisements: AdvertisementsAPI.Advertisements = new AdvertisementsAPI.Advertisements(this._client);
}

Rules.Advertisements = Advertisements;
Rules.BaseAdvertisements = BaseAdvertisements;

export declare namespace Rules {
  export { Advertisements as Advertisements, BaseAdvertisements as BaseAdvertisements };
}
