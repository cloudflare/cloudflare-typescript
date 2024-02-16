// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ByScriptsAPI from 'cloudflare/resources/workers/deployments/by-scripts/by-scripts';

export class Deployments extends APIResource {
  byScripts: ByScriptsAPI.ByScripts = new ByScriptsAPI.ByScripts(this._client);
}

export namespace Deployments {
  export import ByScripts = ByScriptsAPI.ByScripts;
  export import ByScriptWorkerDeploymentsListDeploymentsResponse = ByScriptsAPI.ByScriptWorkerDeploymentsListDeploymentsResponse;
}
