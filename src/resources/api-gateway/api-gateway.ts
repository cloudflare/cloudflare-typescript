// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigurationsAPI from './configurations';
import { Configurations } from './configurations';
import * as SchemasAPI from './schemas';
import { Schemas } from './schemas';
import * as DiscoveryAPI from './discovery/discovery';
import { Discovery } from './discovery/discovery';
import * as ExpressionTemplateAPI from './expression-template/expression-template';
import { ExpressionTemplate } from './expression-template/expression-template';
import * as LabelsAPI from './labels/labels';
import { Labels } from './labels/labels';
import * as OperationsAPI from './operations/operations';
import { Operations } from './operations/operations';
import * as SettingsAPI from './settings/settings';
import { Settings } from './settings/settings';
import * as UserSchemasAPI from './user-schemas/user-schemas';
import { UserSchemas } from './user-schemas/user-schemas';

export class APIGateway extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  discovery: DiscoveryAPI.Discovery = new DiscoveryAPI.Discovery(this._client);
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  userSchemas: UserSchemasAPI.UserSchemas = new UserSchemasAPI.UserSchemas(this._client);
  expressionTemplate: ExpressionTemplateAPI.ExpressionTemplate = new ExpressionTemplateAPI.ExpressionTemplate(
    this._client,
  );
}

APIGateway.Configurations = Configurations;
APIGateway.Discovery = Discovery;
APIGateway.Labels = Labels;
APIGateway.Operations = Operations;
APIGateway.Schemas = Schemas;
APIGateway.Settings = Settings;
APIGateway.UserSchemas = UserSchemas;
APIGateway.ExpressionTemplate = ExpressionTemplate;

export declare namespace APIGateway {
  export { Configurations as Configurations };

  export { Discovery as Discovery };

  export { Labels as Labels };

  export { Operations as Operations };

  export { Schemas as Schemas };

  export { Settings as Settings };

  export { UserSchemas as UserSchemas };

  export { ExpressionTemplate as ExpressionTemplate };
}
