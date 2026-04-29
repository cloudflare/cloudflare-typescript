// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LabelsAPI from './labels';
import { BaseLabels, Labels } from './labels';
import * as SchemaValidationAPI from './schema-validation';
import { BaseSchemaValidation, SchemaValidation } from './schema-validation';

export class BaseOperations extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'operations'] = Object.freeze([
    'apiGateway',
    'operations',
  ] as const);
}
export class Operations extends BaseOperations {
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  schemaValidation: SchemaValidationAPI.SchemaValidation = new SchemaValidationAPI.SchemaValidation(
    this._client,
  );
}

Operations.Labels = Labels;
Operations.BaseLabels = BaseLabels;
Operations.SchemaValidation = SchemaValidation;
Operations.BaseSchemaValidation = BaseSchemaValidation;

export declare namespace Operations {
  export { Labels as Labels, BaseLabels as BaseLabels };

  export { SchemaValidation as SchemaValidation, BaseSchemaValidation as BaseSchemaValidation };
}
