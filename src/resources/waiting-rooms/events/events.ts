// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DetailsAPI from './details';
import { Details } from './details';

export class Events extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);
}

Events.Details = Details;

export declare namespace Events {
  export { Details as Details };
}
