// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecipientsAPI from './recipients';
import { BaseRecipients, Recipients } from './recipients';
import * as ResourcesAPI from './resources';
import { BaseResources, Resources } from './resources';

export class BaseResourceSharing extends APIResource {
  static override readonly _key: readonly ['resourceSharing'] = Object.freeze(['resourceSharing'] as const);
}
export class ResourceSharing extends BaseResourceSharing {
  recipients: RecipientsAPI.Recipients = new RecipientsAPI.Recipients(this._client);
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

ResourceSharing.Recipients = Recipients;
ResourceSharing.BaseRecipients = BaseRecipients;
ResourceSharing.Resources = Resources;
ResourceSharing.BaseResources = BaseResources;

export declare namespace ResourceSharing {
  export { Recipients as Recipients, BaseRecipients as BaseRecipients };

  export { Resources as Resources, BaseResources as BaseResources };
}
