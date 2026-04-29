// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AdvertisementsAPI from './advertisements';
import { Advertisements } from './advertisements';

export class Rules extends APIResource {
  advertisements: AdvertisementsAPI.Advertisements = new AdvertisementsAPI.Advertisements(this._client);
}

Rules.Advertisements = Advertisements;

export declare namespace Rules {
  export { Advertisements as Advertisements };
}
