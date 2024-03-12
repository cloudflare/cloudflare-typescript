// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EnvironmentsAPI from 'cloudflare/resources/workers/services/environments/environments';

export class Services extends APIResource {
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
}

export namespace Services {
  export import Environments = EnvironmentsAPI.Environments;
}
