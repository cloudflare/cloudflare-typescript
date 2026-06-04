// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RegionsAPI from './regions';
import { Regions } from './regions';

export class RegionalHostnames extends APIResource {
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
}

RegionalHostnames.Regions = Regions;

export declare namespace RegionalHostnames {
  export { Regions as Regions };
}
