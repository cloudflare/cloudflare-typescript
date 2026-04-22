// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RegionalServicesAPI from './regional-services/regional-services';
import { RegionalServices } from './regional-services/regional-services';

export class DLS extends APIResource {
  regionalServices: RegionalServicesAPI.RegionalServices = new RegionalServicesAPI.RegionalServices(
    this._client,
  );
}

DLS.RegionalServices = RegionalServices;

export declare namespace DLS {
  export { RegionalServices as RegionalServices };
}
