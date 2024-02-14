// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ScriptsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts';

export class Namespaces extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
}

export namespace Namespaces {
  export import Scripts = ScriptsAPI.Scripts;
}
