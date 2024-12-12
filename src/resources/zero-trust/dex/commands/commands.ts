// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as DownloadsAPI from './downloads';
import { Downloads } from './downloads';
import * as QuotaAPI from './quota';
import { Quota } from './quota';

export class Commands extends APIResource {
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);
}

Commands.Downloads = Downloads;
Commands.Quota = Quota;

export declare namespace Commands {
  export { Downloads as Downloads };

  export { Quota as Quota };
}
