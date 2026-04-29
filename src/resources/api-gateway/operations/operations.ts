// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as LabelsAPI from './labels';
import { Labels } from './labels';
import * as SchemaValidationAPI from './schema-validation';
import { SchemaValidation } from './schema-validation';

export class Operations extends APIResource {
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  schemaValidation: SchemaValidationAPI.SchemaValidation = new SchemaValidationAPI.SchemaValidation(
    this._client,
  );
}

Operations.Labels = Labels;
Operations.SchemaValidation = SchemaValidation;

export declare namespace Operations {
  export { Labels as Labels };

  export { SchemaValidation as SchemaValidation };
}
