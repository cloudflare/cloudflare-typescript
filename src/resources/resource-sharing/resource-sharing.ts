// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RecipientsAPI from './recipients';
import { Recipients } from './recipients';
import * as ResourcesAPI from './resources';
import { Resources } from './resources';

export class ResourceSharing extends APIResource {
  recipients: RecipientsAPI.Recipients = new RecipientsAPI.Recipients(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

ResourceSharing.Recipients = Recipients;
ResourceSharing.Resources = Resources;

export declare namespace ResourceSharing {
  export { Recipients as Recipients };

  export { Resources as Resources };
}
