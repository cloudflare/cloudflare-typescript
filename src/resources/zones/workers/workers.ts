// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ScriptAPI from 'cloudflare/resources/zones/workers/script';

export class Workers extends APIResource {
  script: ScriptAPI.Script = new ScriptAPI.Script(this._client);
}

export namespace Workers {
  export import Script = ScriptAPI.Script;
  export import ScriptUpdateResponse = ScriptAPI.ScriptUpdateResponse;
  export import ScriptUpdateParams = ScriptAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptAPI.ScriptGetParams;
}
