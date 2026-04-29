// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CustomAPI from './custom';
import { Custom } from './custom';
import * as ManagedAPI from './managed';
import { Managed } from './managed';

export class Domains extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  managed: ManagedAPI.Managed = new ManagedAPI.Managed(this._client);
}

Domains.Custom = Custom;
Domains.Managed = Managed;

export declare namespace Domains {
  export { Custom as Custom };

  export { Managed as Managed };
}
