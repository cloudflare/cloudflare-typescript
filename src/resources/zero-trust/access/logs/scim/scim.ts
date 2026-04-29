// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as UpdatesAPI from './updates';
import { Updates } from './updates';

export class SCIM extends APIResource {
  updates: UpdatesAPI.Updates = new UpdatesAPI.Updates(this._client);
}

SCIM.Updates = Updates;

export declare namespace SCIM {
  export { Updates as Updates };
}
