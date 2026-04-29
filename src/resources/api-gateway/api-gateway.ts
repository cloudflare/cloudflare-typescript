// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigurationsAPI from './configurations';
import { BaseConfigurations, Configurations } from './configurations';
import * as SchemasAPI from './schemas';
import { BaseSchemas, Schemas } from './schemas';
import * as DiscoveryAPI from './discovery/discovery';
import { BaseDiscovery, Discovery } from './discovery/discovery';
import * as ExpressionTemplateAPI from './expression-template/expression-template';
import { BaseExpressionTemplate, ExpressionTemplate } from './expression-template/expression-template';
import * as LabelsAPI from './labels/labels';
import { BaseLabels, Labels } from './labels/labels';
import * as OperationsAPI from './operations/operations';
import { BaseOperations, Operations } from './operations/operations';
import * as SettingsAPI from './settings/settings';
import { BaseSettings, Settings } from './settings/settings';
import * as UserSchemasAPI from './user-schemas/user-schemas';
import { BaseUserSchemas, UserSchemas } from './user-schemas/user-schemas';

export class BaseAPIGateway extends APIResource {
  static override readonly _key: readonly ['apiGateway'] = Object.freeze(['apiGateway'] as const);
}
export class APIGateway extends BaseAPIGateway {
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
APIGateway.BaseConfigurations = BaseConfigurations;
APIGateway.Discovery = Discovery;
APIGateway.BaseDiscovery = BaseDiscovery;
APIGateway.Labels = Labels;
APIGateway.BaseLabels = BaseLabels;
APIGateway.Operations = Operations;
APIGateway.BaseOperations = BaseOperations;
APIGateway.Schemas = Schemas;
APIGateway.BaseSchemas = BaseSchemas;
APIGateway.Settings = Settings;
APIGateway.BaseSettings = BaseSettings;
APIGateway.UserSchemas = UserSchemas;
APIGateway.BaseUserSchemas = BaseUserSchemas;
APIGateway.ExpressionTemplate = ExpressionTemplate;
APIGateway.BaseExpressionTemplate = BaseExpressionTemplate;

export declare namespace APIGateway {
  export { Configurations as Configurations, BaseConfigurations as BaseConfigurations };

  export { Discovery as Discovery, BaseDiscovery as BaseDiscovery };

  export { Labels as Labels, BaseLabels as BaseLabels };

  export { Operations as Operations, BaseOperations as BaseOperations };

  export { Schemas as Schemas, BaseSchemas as BaseSchemas };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { UserSchemas as UserSchemas, BaseUserSchemas as BaseUserSchemas };

  export { ExpressionTemplate as ExpressionTemplate, BaseExpressionTemplate as BaseExpressionTemplate };
}
