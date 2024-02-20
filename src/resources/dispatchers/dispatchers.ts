// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ScriptsAPI from 'cloudflare/resources/dispatchers/scripts';

export class Dispatchers extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
}

export namespace Dispatchers {
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptGetResponse = ScriptsAPI.ScriptGetResponse;
  export import ScriptReplaceResponse = ScriptsAPI.ScriptReplaceResponse;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptReplaceParams = ScriptsAPI.ScriptReplaceParams;
}
