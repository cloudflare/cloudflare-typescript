// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ItemsAPI from './items';
import { Items } from './items';
import * as JobsAPI from './jobs';
import { Jobs } from './jobs';

export class Instances extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Instances.Jobs = Jobs;
Instances.Items = Items;

export declare namespace Instances {
  export { Jobs as Jobs };

  export { Items as Items };
}
