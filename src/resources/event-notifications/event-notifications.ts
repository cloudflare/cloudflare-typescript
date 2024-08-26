// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { R2 } from './r2/r2';
import * as R2API from './r2/r2';

export class EventNotifications extends APIResource {
  r2: R2API.R2 = new R2API.R2(this._client);
}

export namespace EventNotifications {
  export import R2 = R2API.R2;
}
