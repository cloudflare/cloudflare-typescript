// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as FieldsAPI from './fields';
import { Fields } from './fields';
import * as JobsAPI from './jobs';
import { Jobs } from './jobs';

export class Datasets extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Datasets.Fields = Fields;
Datasets.Jobs = Jobs;

export declare namespace Datasets {
  export { Fields as Fields };

  export { Jobs as Jobs };
}
