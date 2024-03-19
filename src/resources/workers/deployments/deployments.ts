// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ByScriptsAPI from 'cloudflare/resources/workers/deployments/by-scripts/by-scripts';

export class Deployments extends APIResource {
  byScripts: ByScriptsAPI.ByScripts = new ByScriptsAPI.ByScripts(this._client);
}

export namespace Deployments {
  export import ByScripts = ByScriptsAPI.ByScripts;
  export import ByScriptGetResponse = ByScriptsAPI.ByScriptGetResponse;
  export import ByScriptGetParams = ByScriptsAPI.ByScriptGetParams;
}
