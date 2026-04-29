// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get',
    endpoint: '/zones/{zone_id}/cache/cache_reserve',
    httpMethod: 'get',
    summary: 'Get Cache Reserve setting',
    description:
      "Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.",
    stainlessPath: '(resource) cache.cache_reserve > (method) get',
    qualified: 'client.cache.cacheReserve.get',
    params: ['zone_id: string;'],
    response: "{ id: 'cache_reserve'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## get\n\n`client.cache.cacheReserve.get(zone_id: string): { id: cache_reserve; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/cache_reserve`\n\nIncrease cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'cache_reserve'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'cache_reserve'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst cacheReserve = await client.cache.cacheReserve.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(cacheReserve);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.CacheReserve.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tcacheReserve, err := client.Cache.CacheReserve.Get(context.TODO(), cache.CacheReserveGetParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", cacheReserve.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/cache_reserve \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().cacheReserve().get',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveGetParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveGetResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        CacheReserveGetParams params = CacheReserveGetParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        CacheReserveGetResponse cacheReserve = client.cache().cacheReserve().get(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.cacheReserve.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst cacheReserve = await client.cache.cacheReserve.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(cacheReserve.id);",
      },
      python: {
        method: 'cache.cache_reserve.get',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\ncache_reserve = client.cache.cache_reserve.get(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(cache_reserve.id)',
      },
      ruby: {
        method: 'cache.cache_reserve.get',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\ncache_reserve = cloudflare.cache.cache_reserve.get(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(cache_reserve)',
      },
      typescript: {
        method: 'client.cache.cacheReserve.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst cacheReserve = await client.cache.cacheReserve.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(cacheReserve.id);",
      },
    },
  },
  {
    name: 'edit',
    endpoint: '/zones/{zone_id}/cache/cache_reserve',
    httpMethod: 'patch',
    summary: 'Change Cache Reserve setting',
    description:
      "Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.",
    stainlessPath: '(resource) cache.cache_reserve > (method) edit',
    qualified: 'client.cache.cacheReserve.edit',
    params: ['zone_id: string;', "value: 'on' | 'off';"],
    response: "{ id: 'cache_reserve'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## edit\n\n`client.cache.cacheReserve.edit(zone_id: string, value: 'on' | 'off'): { id: cache_reserve; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**patch** `/zones/{zone_id}/cache/cache_reserve`\n\nIncrease cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `value: 'on' | 'off'`\n  Value of the Cache Reserve zone setting.\n\n### Returns\n\n- `{ id: 'cache_reserve'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'cache_reserve'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.cacheReserve.edit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', value: 'on' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.CacheReserve.Edit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.CacheReserve.Edit(context.TODO(), cache.CacheReserveEditParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tValue:  cloudflare.F(cache.CacheReserveEditParamsValueOn),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/cache_reserve \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "value": "on"\n        }\'',
      },
      java: {
        method: 'cache().cacheReserve().edit',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveEditParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        CacheReserveEditParams params = CacheReserveEditParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .value(CacheReserveEditParams.Value_.ON)\n            .build();\n        CacheReserveEditResponse response = client.cache().cacheReserve().edit(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.cacheReserve.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.cache_reserve.edit',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.cache_reserve.edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    value="on",\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.cache_reserve.edit',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.cache_reserve.edit(zone_id: "023e105f4ecef8ad9ca31a8372d0c353", value: :on)\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.cacheReserve.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'status',
    endpoint: '/zones/{zone_id}/cache/cache_reserve_clear',
    httpMethod: 'get',
    summary: 'Get Cache Reserve Clear',
    description:
      'You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.',
    stainlessPath: '(resource) cache.cache_reserve > (method) status',
    qualified: 'client.cache.cacheReserve.status',
    params: ['zone_id: string;'],
    response:
      "{ id: 'cache_reserve_clear'; start_ts: string; state: 'In-progress' | 'Completed'; end_ts?: string; modified_on?: string; }",
    markdown:
      "## status\n\n`client.cache.cacheReserve.status(zone_id: string): { id: cache_reserve_clear; start_ts: string; state: 'In-progress' | 'Completed'; end_ts?: string; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/cache_reserve_clear`\n\nYou can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'cache_reserve_clear'; start_ts: string; state: 'In-progress' | 'Completed'; end_ts?: string; modified_on?: string; }`\n  You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.\n\n  - `id: 'cache_reserve_clear'`\n  - `start_ts: string`\n  - `state: 'In-progress' | 'Completed'`\n  - `end_ts?: string`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.cacheReserve.status({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.CacheReserve.Status',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.CacheReserve.Status(context.TODO(), cache.CacheReserveStatusParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/cache_reserve_clear \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().cacheReserve().status',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveStatusParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveStatusResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        CacheReserveStatusParams params = CacheReserveStatusParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        CacheReserveStatusResponse response = client.cache().cacheReserve().status(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.cacheReserve.status',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.status({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.cache_reserve.status',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.cache_reserve.status(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.cache_reserve.status',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.cache_reserve.status(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.cacheReserve.status',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.status({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'clear',
    endpoint: '/zones/{zone_id}/cache/cache_reserve_clear',
    httpMethod: 'post',
    summary: 'Start Cache Reserve Clear',
    description:
      'You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.',
    stainlessPath: '(resource) cache.cache_reserve > (method) clear',
    qualified: 'client.cache.cacheReserve.clear',
    params: ['zone_id: string;', 'body: object;'],
    response:
      "{ id: 'cache_reserve_clear'; start_ts: string; state: 'In-progress' | 'Completed'; end_ts?: string; modified_on?: string; }",
    markdown:
      "## clear\n\n`client.cache.cacheReserve.clear(zone_id: string, body: object): { id: cache_reserve_clear; start_ts: string; state: 'In-progress' | 'Completed'; end_ts?: string; modified_on?: string; }`\n\n**post** `/zones/{zone_id}/cache/cache_reserve_clear`\n\nYou can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `body: object`\n\n### Returns\n\n- `{ id: 'cache_reserve_clear'; start_ts: string; state: 'In-progress' | 'Completed'; end_ts?: string; modified_on?: string; }`\n  You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.\n\n  - `id: 'cache_reserve_clear'`\n  - `start_ts: string`\n  - `state: 'In-progress' | 'Completed'`\n  - `end_ts?: string`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.CacheReserve.Clear',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.CacheReserve.Clear(context.TODO(), cache.CacheReserveClearParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tBody:   map[string]interface{}{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          "curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/cache_reserve_clear \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $CLOUDFLARE_API_TOKEN\" \\\n    -d '{}'",
      },
      java: {
        method: 'cache().cacheReserve().clear',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\nimport java.util.Map;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        CacheReserveClearParams params = CacheReserveClearParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .body(JsonValue.from(<String, Object>Map.of()))\n            .build();\n        CacheReserveClearResponse response = client.cache().cacheReserve().clear(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.cacheReserve.clear',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.cache_reserve.clear',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.cache_reserve.clear(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    body={},\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.cache_reserve.clear',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.cache_reserve.clear(zone_id: "023e105f4ecef8ad9ca31a8372d0c353", body: {})\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.cacheReserve.clear',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/zones/{zone_id}/cache/tiered_cache_smart_topology_enable',
    httpMethod: 'get',
    summary: 'Get Smart Tiered Cache setting',
    description:
      'Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.',
    stainlessPath: '(resource) cache.smart_tiered_cache > (method) get',
    qualified: 'client.cache.smartTieredCache.get',
    params: ['zone_id: string;'],
    response:
      "{ id: 'tiered_cache_smart_topology_enable'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## get\n\n`client.cache.smartTieredCache.get(zone_id: string): { id: 'tiered_cache_smart_topology_enable'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/tiered_cache_smart_topology_enable`\n\nSmart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'tiered_cache_smart_topology_enable'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'tiered_cache_smart_topology_enable'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst smartTieredCache = await client.cache.smartTieredCache.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(smartTieredCache);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.SmartTieredCache.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tsmartTieredCache, err := client.Cache.SmartTieredCache.Get(context.TODO(), cache.SmartTieredCacheGetParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", smartTieredCache.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/tiered_cache_smart_topology_enable \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().smartTieredCache().get',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.smarttieredcache.SmartTieredCacheGetParams;\nimport com.cloudflare.models.cache.smarttieredcache.SmartTieredCacheGetResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        SmartTieredCacheGetParams params = SmartTieredCacheGetParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        SmartTieredCacheGetResponse smartTieredCache = client.cache().smartTieredCache().get(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.smartTieredCache.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst smartTieredCache = await client.cache.smartTieredCache.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(smartTieredCache.id);",
      },
      python: {
        method: 'cache.smart_tiered_cache.get',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nsmart_tiered_cache = client.cache.smart_tiered_cache.get(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(smart_tiered_cache.id)',
      },
      ruby: {
        method: 'cache.smart_tiered_cache.get',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nsmart_tiered_cache = cloudflare.cache.smart_tiered_cache.get(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(smart_tiered_cache)',
      },
      typescript: {
        method: 'client.cache.smartTieredCache.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst smartTieredCache = await client.cache.smartTieredCache.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(smartTieredCache.id);",
      },
    },
  },
  {
    name: 'edit',
    endpoint: '/zones/{zone_id}/cache/tiered_cache_smart_topology_enable',
    httpMethod: 'patch',
    summary: 'Patch Smart Tiered Cache setting',
    description:
      'Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.',
    stainlessPath: '(resource) cache.smart_tiered_cache > (method) edit',
    qualified: 'client.cache.smartTieredCache.edit',
    params: ['zone_id: string;', "value: 'on' | 'off';"],
    response:
      "{ id: 'tiered_cache_smart_topology_enable'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## edit\n\n`client.cache.smartTieredCache.edit(zone_id: string, value: 'on' | 'off'): { id: 'tiered_cache_smart_topology_enable'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**patch** `/zones/{zone_id}/cache/tiered_cache_smart_topology_enable`\n\nSmart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `value: 'on' | 'off'`\n  Enable or disable the Smart Tiered Cache.\n\n### Returns\n\n- `{ id: 'tiered_cache_smart_topology_enable'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'tiered_cache_smart_topology_enable'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.smartTieredCache.edit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', value: 'on' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.SmartTieredCache.Edit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.SmartTieredCache.Edit(context.TODO(), cache.SmartTieredCacheEditParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tValue:  cloudflare.F(cache.SmartTieredCacheEditParamsValueOn),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/tiered_cache_smart_topology_enable \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "value": "on"\n        }\'',
      },
      java: {
        method: 'cache().smartTieredCache().edit',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.smarttieredcache.SmartTieredCacheEditParams;\nimport com.cloudflare.models.cache.smarttieredcache.SmartTieredCacheEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        SmartTieredCacheEditParams params = SmartTieredCacheEditParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .value(SmartTieredCacheEditParams.Value_.ON)\n            .build();\n        SmartTieredCacheEditResponse response = client.cache().smartTieredCache().edit(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.smartTieredCache.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.smartTieredCache.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.smart_tiered_cache.edit',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.smart_tiered_cache.edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    value="on",\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.smart_tiered_cache.edit',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.smart_tiered_cache.edit(zone_id: "023e105f4ecef8ad9ca31a8372d0c353", value: :on)\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.smartTieredCache.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.smartTieredCache.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/zones/{zone_id}/cache/tiered_cache_smart_topology_enable',
    httpMethod: 'delete',
    summary: 'Delete Smart Tiered Cache setting',
    description:
      'Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.',
    stainlessPath: '(resource) cache.smart_tiered_cache > (method) delete',
    qualified: 'client.cache.smartTieredCache.delete',
    params: ['zone_id: string;'],
    response: "{ id: 'tiered_cache_smart_topology_enable'; editable: boolean; modified_on?: string; }",
    markdown:
      "## delete\n\n`client.cache.smartTieredCache.delete(zone_id: string): { id: 'tiered_cache_smart_topology_enable'; editable: boolean; modified_on?: string; }`\n\n**delete** `/zones/{zone_id}/cache/tiered_cache_smart_topology_enable`\n\nSmart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'tiered_cache_smart_topology_enable'; editable: boolean; modified_on?: string; }`\n\n  - `id: 'tiered_cache_smart_topology_enable'`\n  - `editable: boolean`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst smartTieredCache = await client.cache.smartTieredCache.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(smartTieredCache);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.SmartTieredCache.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tsmartTieredCache, err := client.Cache.SmartTieredCache.Delete(context.TODO(), cache.SmartTieredCacheDeleteParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", smartTieredCache.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/tiered_cache_smart_topology_enable \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().smartTieredCache().delete',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.smarttieredcache.SmartTieredCacheDeleteParams;\nimport com.cloudflare.models.cache.smarttieredcache.SmartTieredCacheDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        SmartTieredCacheDeleteParams params = SmartTieredCacheDeleteParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        SmartTieredCacheDeleteResponse smartTieredCache = client.cache().smartTieredCache().delete(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.smartTieredCache.delete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst smartTieredCache = await client.cache.smartTieredCache.delete({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(smartTieredCache.id);",
      },
      python: {
        method: 'cache.smart_tiered_cache.delete',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nsmart_tiered_cache = client.cache.smart_tiered_cache.delete(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(smart_tiered_cache.id)',
      },
      ruby: {
        method: 'cache.smart_tiered_cache.delete',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nsmart_tiered_cache = cloudflare.cache.smart_tiered_cache.delete(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(smart_tiered_cache)',
      },
      typescript: {
        method: 'client.cache.smartTieredCache.delete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst smartTieredCache = await client.cache.smartTieredCache.delete({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(smartTieredCache.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/zones/{zone_id}/cache/variants',
    httpMethod: 'get',
    summary: 'Get variants setting',
    description:
      "Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.",
    stainlessPath: '(resource) cache.variants > (method) get',
    qualified: 'client.cache.variants.get',
    params: ['zone_id: string;'],
    response:
      "{ id: 'variants'; editable: boolean; value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }; modified_on?: string; }",
    markdown:
      "## get\n\n`client.cache.variants.get(zone_id: string): { id: 'variants'; editable: boolean; value: object; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/variants`\n\nVariant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'variants'; editable: boolean; value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }; modified_on?: string; }`\n\n  - `id: 'variants'`\n  - `editable: boolean`\n  - `value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst variant = await client.cache.variants.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(variant);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.Variants.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tvariant, err := client.Cache.Variants.Get(context.TODO(), cache.VariantGetParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", variant.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/variants \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().variants().get',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.variants.VariantGetParams;\nimport com.cloudflare.models.cache.variants.VariantGetResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        VariantGetParams params = VariantGetParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        VariantGetResponse variant = client.cache().variants().get(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.variants.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst variant = await client.cache.variants.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(variant.id);",
      },
      python: {
        method: 'cache.variants.get',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nvariant = client.cache.variants.get(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(variant.id)',
      },
      ruby: {
        method: 'cache.variants.get',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nvariant = cloudflare.cache.variants.get(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(variant)',
      },
      typescript: {
        method: 'client.cache.variants.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst variant = await client.cache.variants.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(variant.id);",
      },
    },
  },
  {
    name: 'edit',
    endpoint: '/zones/{zone_id}/cache/variants',
    httpMethod: 'patch',
    summary: 'Change variants setting',
    description:
      "Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.",
    stainlessPath: '(resource) cache.variants > (method) edit',
    qualified: 'client.cache.variants.edit',
    params: [
      'zone_id: string;',
      'value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; };',
    ],
    response:
      "{ id: 'variants'; editable: boolean; value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }; modified_on?: string; }",
    markdown:
      "## edit\n\n`client.cache.variants.edit(zone_id: string, value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }): { id: 'variants'; editable: boolean; value: object; modified_on?: string; }`\n\n**patch** `/zones/{zone_id}/cache/variants`\n\nVariant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }`\n  Value of the zone setting.\n  - `avif?: string[]`\n    List of strings with the MIME types of all the variants that should be served for avif.\n  - `bmp?: string[]`\n    List of strings with the MIME types of all the variants that should be served for bmp.\n  - `gif?: string[]`\n    List of strings with the MIME types of all the variants that should be served for gif.\n  - `jp2?: string[]`\n    List of strings with the MIME types of all the variants that should be served for jp2.\n  - `jpeg?: string[]`\n    List of strings with the MIME types of all the variants that should be served for jpeg.\n  - `jpg?: string[]`\n    List of strings with the MIME types of all the variants that should be served for jpg.\n  - `jpg2?: string[]`\n    List of strings with the MIME types of all the variants that should be served for jpg2.\n  - `png?: string[]`\n    List of strings with the MIME types of all the variants that should be served for png.\n  - `tif?: string[]`\n    List of strings with the MIME types of all the variants that should be served for tif.\n  - `tiff?: string[]`\n    List of strings with the MIME types of all the variants that should be served for tiff.\n  - `webp?: string[]`\n    List of strings with the MIME types of all the variants that should be served for webp.\n\n### Returns\n\n- `{ id: 'variants'; editable: boolean; value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }; modified_on?: string; }`\n\n  - `id: 'variants'`\n  - `editable: boolean`\n  - `value: { avif?: string[]; bmp?: string[]; gif?: string[]; jp2?: string[]; jpeg?: string[]; jpg?: string[]; jpg2?: string[]; png?: string[]; tif?: string[]; tiff?: string[]; webp?: string[]; }`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.variants.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: {},\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.Variants.Edit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.Variants.Edit(context.TODO(), cache.VariantEditParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tValue:  cloudflare.F(cache.VariantEditParamsValue{}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/variants \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "value": {}\n        }\'',
      },
      java: {
        method: 'cache().variants().edit',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.variants.VariantEditParams;\nimport com.cloudflare.models.cache.variants.VariantEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        VariantEditParams params = VariantEditParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .value(VariantEditParams.Value.builder().build())\n            .build();\n        VariantEditResponse response = client.cache().variants().edit(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.variants.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.variants.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: {},\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.variants.edit',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.variants.edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    value={},\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.variants.edit',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.variants.edit(zone_id: "023e105f4ecef8ad9ca31a8372d0c353", value: {})\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.variants.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.variants.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: {},\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/zones/{zone_id}/cache/variants',
    httpMethod: 'delete',
    summary: 'Delete variants setting',
    description:
      "Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.",
    stainlessPath: '(resource) cache.variants > (method) delete',
    qualified: 'client.cache.variants.delete',
    params: ['zone_id: string;'],
    response: "{ id: 'variants'; editable: boolean; modified_on?: string; }",
    markdown:
      "## delete\n\n`client.cache.variants.delete(zone_id: string): { id: 'variants'; editable: boolean; modified_on?: string; }`\n\n**delete** `/zones/{zone_id}/cache/variants`\n\nVariant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'variants'; editable: boolean; modified_on?: string; }`\n\n  - `id: 'variants'`\n  - `editable: boolean`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst variant = await client.cache.variants.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(variant);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.Variants.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tvariant, err := client.Cache.Variants.Delete(context.TODO(), cache.VariantDeleteParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", variant.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/variants \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().variants().delete',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.variants.VariantDeleteParams;\nimport com.cloudflare.models.cache.variants.VariantDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        VariantDeleteParams params = VariantDeleteParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        VariantDeleteResponse variant = client.cache().variants().delete(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.variants.delete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst variant = await client.cache.variants.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(variant.id);",
      },
      python: {
        method: 'cache.variants.delete',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nvariant = client.cache.variants.delete(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(variant.id)',
      },
      ruby: {
        method: 'cache.variants.delete',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nvariant = cloudflare.cache.variants.delete(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(variant)',
      },
      typescript: {
        method: 'client.cache.variants.delete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst variant = await client.cache.variants.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(variant.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/zones/{zone_id}/cache/regional_tiered_cache',
    httpMethod: 'get',
    summary: 'Get Regional Tiered Cache setting',
    description:
      'Instructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.',
    stainlessPath: '(resource) cache.regional_tiered_cache > (method) get',
    qualified: 'client.cache.regionalTieredCache.get',
    params: ['zone_id: string;'],
    response: "{ id: 'tc_regional'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## get\n\n`client.cache.regionalTieredCache.get(zone_id: string): { id: regional_tiered_cache; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/regional_tiered_cache`\n\nInstructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'tc_regional'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'tc_regional'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst regionalTieredCache = await client.cache.regionalTieredCache.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(regionalTieredCache);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.RegionalTieredCache.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tregionalTieredCache, err := client.Cache.RegionalTieredCache.Get(context.TODO(), cache.RegionalTieredCacheGetParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", regionalTieredCache.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/regional_tiered_cache \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().regionalTieredCache().get',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.regionaltieredcache.RegionalTieredCacheGetParams;\nimport com.cloudflare.models.cache.regionaltieredcache.RegionalTieredCacheGetResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        RegionalTieredCacheGetParams params = RegionalTieredCacheGetParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        RegionalTieredCacheGetResponse regionalTieredCache = client.cache().regionalTieredCache().get(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.regionalTieredCache.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst regionalTieredCache = await client.cache.regionalTieredCache.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(regionalTieredCache.id);",
      },
      python: {
        method: 'cache.regional_tiered_cache.get',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nregional_tiered_cache = client.cache.regional_tiered_cache.get(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(regional_tiered_cache.id)',
      },
      ruby: {
        method: 'cache.regional_tiered_cache.get',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nregional_tiered_cache = cloudflare.cache.regional_tiered_cache.get(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(regional_tiered_cache)',
      },
      typescript: {
        method: 'client.cache.regionalTieredCache.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst regionalTieredCache = await client.cache.regionalTieredCache.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(regionalTieredCache.id);",
      },
    },
  },
  {
    name: 'edit',
    endpoint: '/zones/{zone_id}/cache/regional_tiered_cache',
    httpMethod: 'patch',
    summary: 'Change Regional Tiered Cache setting',
    description:
      'Instructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.',
    stainlessPath: '(resource) cache.regional_tiered_cache > (method) edit',
    qualified: 'client.cache.regionalTieredCache.edit',
    params: ['zone_id: string;', "value: 'on' | 'off';"],
    response: "{ id: 'tc_regional'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## edit\n\n`client.cache.regionalTieredCache.edit(zone_id: string, value: 'on' | 'off'): { id: regional_tiered_cache; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**patch** `/zones/{zone_id}/cache/regional_tiered_cache`\n\nInstructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `value: 'on' | 'off'`\n  Value of the Regional Tiered Cache zone setting.\n\n### Returns\n\n- `{ id: 'tc_regional'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'tc_regional'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.regionalTieredCache.edit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', value: 'on' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.RegionalTieredCache.Edit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.RegionalTieredCache.Edit(context.TODO(), cache.RegionalTieredCacheEditParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tValue:  cloudflare.F(cache.RegionalTieredCacheEditParamsValueOn),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/regional_tiered_cache \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "value": "on"\n        }\'',
      },
      java: {
        method: 'cache().regionalTieredCache().edit',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.regionaltieredcache.RegionalTieredCacheEditParams;\nimport com.cloudflare.models.cache.regionaltieredcache.RegionalTieredCacheEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        RegionalTieredCacheEditParams params = RegionalTieredCacheEditParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .value(RegionalTieredCacheEditParams.Value_.ON)\n            .build();\n        RegionalTieredCacheEditResponse response = client.cache().regionalTieredCache().edit(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.regionalTieredCache.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.regionalTieredCache.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.regional_tiered_cache.edit',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.regional_tiered_cache.edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    value="on",\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.regional_tiered_cache.edit',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.regional_tiered_cache.edit(zone_id: "023e105f4ecef8ad9ca31a8372d0c353", value: :on)\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.regionalTieredCache.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.regionalTieredCache.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions',
    httpMethod: 'get',
    summary: 'List origin cloud region mappings',
    description:
      'Returns all IP-to-cloud-region mappings configured for the zone. Each mapping tells Cloudflare which cloud vendor and region hosts the origin at that IP, enabling the edge to route via the nearest Tiered Cache upper-tier co-located with that cloud provider. Returns an empty array when no mappings exist.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) list',
    qualified: 'client.cache.originCloudRegions.list',
    params: ['zone_id: string;'],
    response:
      "{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }[]; modified_on?: string; }",
    markdown:
      "## list\n\n`client.cache.originCloudRegions.list(zone_id: string): { id: 'origin_public_cloud_region'; editable: boolean; value: object[]; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/origin_cloud_regions`\n\nReturns all IP-to-cloud-region mappings configured for the zone. Each mapping tells Cloudflare which cloud vendor and region hosts the origin at that IP, enabling the edge to route via the nearest Tiered Cache upper-tier co-located with that cloud provider. Returns an empty array when no mappings exist.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }[]; modified_on?: string; }`\n  Response result for a list of origin cloud region mappings.\n\n  - `id: 'origin_public_cloud_region'`\n  - `editable: boolean`\n  - `value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }[]`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst originCloudRegions = await client.cache.originCloudRegions.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(originCloudRegions);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\toriginCloudRegions, err := client.Cache.OriginCloudRegions.List(context.TODO(), cache.OriginCloudRegionListParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", originCloudRegions.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().originCloudRegions().list',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionListParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionListParams params = OriginCloudRegionListParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        OriginCloudRegionListResponse originCloudRegions = client.cache().originCloudRegions().list(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.list',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegions = await client.cache.originCloudRegions.list({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originCloudRegions.id);",
      },
      python: {
        method: 'cache.origin_cloud_regions.list',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\norigin_cloud_regions = client.cache.origin_cloud_regions.list(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(origin_cloud_regions.id)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.list',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\norigin_cloud_regions = cloudflare.cache.origin_cloud_regions.list(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(origin_cloud_regions)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.list',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegions = await client.cache.originCloudRegions.list({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originCloudRegions.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions',
    httpMethod: 'post',
    summary: 'Create an origin cloud region mapping',
    description:
      'Adds a single IP-to-cloud-region mapping for the zone. The IP must be a valid IPv4 or IPv6 address and is normalized to canonical form before storage (RFC 5952 for IPv6). Returns 400 (code 1145) if a mapping for that IP already exists — use PATCH to update an existing entry. The vendor and region are validated against the list from `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions`.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) create',
    qualified: 'client.cache.originCloudRegions.create',
    params: [
      'zone_id: string;',
      'ip: string;',
      'region: string;',
      "vendor: 'aws' | 'azure' | 'gcp' | 'oci';",
    ],
    response:
      "{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }; modified_on?: string; }",
    markdown:
      "## create\n\n`client.cache.originCloudRegions.create(zone_id: string, ip: string, region: string, vendor: 'aws' | 'azure' | 'gcp' | 'oci'): { id: 'origin_public_cloud_region'; editable: boolean; value: object; modified_on?: string; }`\n\n**post** `/zones/{zone_id}/cache/origin_cloud_regions`\n\nAdds a single IP-to-cloud-region mapping for the zone. The IP must be a valid IPv4 or IPv6 address and is normalized to canonical form before storage (RFC 5952 for IPv6). Returns 400 (code 1145) if a mapping for that IP already exists — use PATCH to update an existing entry. The vendor and region are validated against the list from `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions`.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `ip: string`\n  Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).\n\n- `region: string`\n  Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.\n\n- `vendor: 'aws' | 'azure' | 'gcp' | 'oci'`\n  Cloud vendor hosting the origin. Must be one of the supported vendors.\n\n### Returns\n\n- `{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }; modified_on?: string; }`\n  Response result for a single origin cloud region mapping.\n\n  - `id: 'origin_public_cloud_region'`\n  - `editable: boolean`\n  - `value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst originCloudRegion = await client.cache.originCloudRegions.create({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  ip: '192.0.2.1',\n  region: 'us-east-1',\n  vendor: 'aws',\n});\n\nconsole.log(originCloudRegion);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\toriginCloudRegion, err := client.Cache.OriginCloudRegions.New(context.TODO(), cache.OriginCloudRegionNewParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tIP:     cloudflare.F("192.0.2.1"),\n\t\tRegion: cloudflare.F("us-east-1"),\n\t\tVendor: cloudflare.F(cache.OriginCloudRegionNewParamsVendorAws),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", originCloudRegion.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "ip": "192.0.2.1",\n          "region": "us-east-1",\n          "vendor": "aws"\n        }\'',
      },
      java: {
        method: 'cache().originCloudRegions().create',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionCreateParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionCreateParams params = OriginCloudRegionCreateParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .ip("192.0.2.1")\n            .region("us-east-1")\n            .vendor(OriginCloudRegionCreateParams.Vendor.AWS)\n            .build();\n        OriginCloudRegionCreateResponse originCloudRegion = client.cache().originCloudRegions().create(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.create',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegion = await client.cache.originCloudRegions.create({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  ip: '192.0.2.1',\n  region: 'us-east-1',\n  vendor: 'aws',\n});\n\nconsole.log(originCloudRegion.id);",
      },
      python: {
        method: 'cache.origin_cloud_regions.create',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\norigin_cloud_region = client.cache.origin_cloud_regions.create(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    ip="192.0.2.1",\n    region="us-east-1",\n    vendor="aws",\n)\nprint(origin_cloud_region.id)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.create',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\norigin_cloud_region = cloudflare.cache.origin_cloud_regions.create(\n  zone_id: "023e105f4ecef8ad9ca31a8372d0c353",\n  ip: "192.0.2.1",\n  region: "us-east-1",\n  vendor: :aws\n)\n\nputs(origin_cloud_region)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.create',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegion = await client.cache.originCloudRegions.create({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  ip: '192.0.2.1',\n  region: 'us-east-1',\n  vendor: 'aws',\n});\n\nconsole.log(originCloudRegion.id);",
      },
    },
  },
  {
    name: 'edit',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions',
    httpMethod: 'patch',
    summary: 'Create or update an origin cloud region mapping',
    description:
      'Adds or updates a single IP-to-cloud-region mapping for the zone. Unlike POST, this operation is idempotent — if a mapping for the IP already exists it is overwritten. Returns the complete updated list of all mappings for the zone. Returns 403 (code 1164) when the zone has reached the limit of 3,500 IP mappings.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) edit',
    qualified: 'client.cache.originCloudRegions.edit',
    params: [
      'zone_id: string;',
      'ip: string;',
      'region: string;',
      "vendor: 'aws' | 'azure' | 'gcp' | 'oci';",
    ],
    response:
      "{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }[]; modified_on?: string; }",
    markdown:
      "## edit\n\n`client.cache.originCloudRegions.edit(zone_id: string, ip: string, region: string, vendor: 'aws' | 'azure' | 'gcp' | 'oci'): { id: 'origin_public_cloud_region'; editable: boolean; value: object[]; modified_on?: string; }`\n\n**patch** `/zones/{zone_id}/cache/origin_cloud_regions`\n\nAdds or updates a single IP-to-cloud-region mapping for the zone. Unlike POST, this operation is idempotent — if a mapping for the IP already exists it is overwritten. Returns the complete updated list of all mappings for the zone. Returns 403 (code 1164) when the zone has reached the limit of 3,500 IP mappings.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `ip: string`\n  Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).\n\n- `region: string`\n  Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.\n\n- `vendor: 'aws' | 'azure' | 'gcp' | 'oci'`\n  Cloud vendor hosting the origin. Must be one of the supported vendors.\n\n### Returns\n\n- `{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }[]; modified_on?: string; }`\n  Response result for a list of origin cloud region mappings.\n\n  - `id: 'origin_public_cloud_region'`\n  - `editable: boolean`\n  - `value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }[]`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.originCloudRegions.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  ip: '2001:db8::1',\n  region: 'us-central1',\n  vendor: 'gcp',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.Edit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.OriginCloudRegions.Edit(context.TODO(), cache.OriginCloudRegionEditParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tIP:     cloudflare.F("2001:db8::1"),\n\t\tRegion: cloudflare.F("us-central1"),\n\t\tVendor: cloudflare.F(cache.OriginCloudRegionEditParamsVendorGcp),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "ip": "2001:db8::1",\n          "region": "us-central1",\n          "vendor": "gcp"\n        }\'',
      },
      java: {
        method: 'cache().originCloudRegions().edit',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionEditParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionEditParams params = OriginCloudRegionEditParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .ip("2001:db8::1")\n            .region("us-central1")\n            .vendor(OriginCloudRegionEditParams.Vendor.GCP)\n            .build();\n        OriginCloudRegionEditResponse response = client.cache().originCloudRegions().edit(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  ip: '2001:db8::1',\n  region: 'us-central1',\n  vendor: 'gcp',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.origin_cloud_regions.edit',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.origin_cloud_regions.edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    ip="2001:db8::1",\n    region="us-central1",\n    vendor="gcp",\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.edit',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.origin_cloud_regions.edit(\n  zone_id: "023e105f4ecef8ad9ca31a8372d0c353",\n  ip: "2001:db8::1",\n  region: "us-central1",\n  vendor: :gcp\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  ip: '2001:db8::1',\n  region: 'us-central1',\n  vendor: 'gcp',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}',
    httpMethod: 'get',
    summary: 'Get an origin cloud region mapping',
    description:
      'Returns the cloud region mapping for a single origin IP address. The IP path parameter is normalized before lookup (RFC 5952 for IPv6). Returns 404 (code 1142) if the zone has no mappings or if the specified IP has no mapping.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) get',
    qualified: 'client.cache.originCloudRegions.get',
    params: ['zone_id: string;', 'origin_ip: string;'],
    response:
      "{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }; modified_on?: string; }",
    markdown:
      "## get\n\n`client.cache.originCloudRegions.get(zone_id: string, origin_ip: string): { id: 'origin_public_cloud_region'; editable: boolean; value: object; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}`\n\nReturns the cloud region mapping for a single origin IP address. The IP path parameter is normalized before lookup (RFC 5952 for IPv6). Returns 404 (code 1142) if the zone has no mappings or if the specified IP has no mapping.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `origin_ip: string`\n\n### Returns\n\n- `{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }; modified_on?: string; }`\n  Response result for a single origin cloud region mapping.\n\n  - `id: 'origin_public_cloud_region'`\n  - `editable: boolean`\n  - `value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst originCloudRegion = await client.cache.originCloudRegions.get('192.0.2.1', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(originCloudRegion);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\toriginCloudRegion, err := client.Cache.OriginCloudRegions.Get(\n\t\tcontext.TODO(),\n\t\t"192.0.2.1",\n\t\tcache.OriginCloudRegionGetParams{\n\t\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", originCloudRegion.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions/$ORIGIN_IP \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().originCloudRegions().get',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionGetParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionGetResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionGetParams params = OriginCloudRegionGetParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .originIp("192.0.2.1")\n            .build();\n        OriginCloudRegionGetResponse originCloudRegion = client.cache().originCloudRegions().get(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegion = await client.cache.originCloudRegions.get('192.0.2.1', {\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originCloudRegion.id);",
      },
      python: {
        method: 'cache.origin_cloud_regions.get',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\norigin_cloud_region = client.cache.origin_cloud_regions.get(\n    origin_ip="192.0.2.1",\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(origin_cloud_region.id)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.get',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\norigin_cloud_region = cloudflare.cache.origin_cloud_regions.get("192.0.2.1", zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(origin_cloud_region)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegion = await client.cache.originCloudRegions.get('192.0.2.1', {\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originCloudRegion.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}',
    httpMethod: 'delete',
    summary: 'Delete an origin cloud region mapping',
    description:
      'Removes the cloud region mapping for a single origin IP address. The IP path parameter is normalized before lookup. Returns the deleted entry on success. Returns 404 (code 1163) if no mapping exists for the specified IP. When the last mapping for the zone is removed the underlying rule record is also deleted.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) delete',
    qualified: 'client.cache.originCloudRegions.delete',
    params: ['zone_id: string;', 'origin_ip: string;'],
    response:
      "{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }; modified_on?: string; }",
    markdown:
      "## delete\n\n`client.cache.originCloudRegions.delete(zone_id: string, origin_ip: string): { id: 'origin_public_cloud_region'; editable: boolean; value: object; modified_on?: string; }`\n\n**delete** `/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}`\n\nRemoves the cloud region mapping for a single origin IP address. The IP path parameter is normalized before lookup. Returns the deleted entry on success. Returns 404 (code 1163) if no mapping exists for the specified IP. When the last mapping for the zone is removed the underlying rule record is also deleted.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `origin_ip: string`\n\n### Returns\n\n- `{ id: 'origin_public_cloud_region'; editable: boolean; value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }; modified_on?: string; }`\n  Response result for a single origin cloud region mapping.\n\n  - `id: 'origin_public_cloud_region'`\n  - `editable: boolean`\n  - `value: { origin-ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; modified_on?: string; }`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst originCloudRegion = await client.cache.originCloudRegions.delete('192.0.2.1', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(originCloudRegion);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\toriginCloudRegion, err := client.Cache.OriginCloudRegions.Delete(\n\t\tcontext.TODO(),\n\t\t"192.0.2.1",\n\t\tcache.OriginCloudRegionDeleteParams{\n\t\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", originCloudRegion.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions/$ORIGIN_IP \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().originCloudRegions().delete',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionDeleteParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionDeleteParams params = OriginCloudRegionDeleteParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .originIp("192.0.2.1")\n            .build();\n        OriginCloudRegionDeleteResponse originCloudRegion = client.cache().originCloudRegions().delete(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.delete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegion = await client.cache.originCloudRegions.delete('192.0.2.1', {\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originCloudRegion.id);",
      },
      python: {
        method: 'cache.origin_cloud_regions.delete',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\norigin_cloud_region = client.cache.origin_cloud_regions.delete(\n    origin_ip="192.0.2.1",\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(origin_cloud_region.id)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.delete',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\norigin_cloud_region = cloudflare.cache.origin_cloud_regions.delete("192.0.2.1", zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(origin_cloud_region)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.delete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originCloudRegion = await client.cache.originCloudRegions.delete('192.0.2.1', {\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originCloudRegion.id);",
      },
    },
  },
  {
    name: 'bulk_edit',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions/batch',
    httpMethod: 'patch',
    summary: 'Batch create or update origin cloud region mappings',
    description:
      'Adds or updates up to 100 IP-to-cloud-region mappings in a single request. Each item is validated independently — valid items are applied and invalid items are returned in the `failed` array. The vendor and region for every item are validated against the list from `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions`.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) bulk_edit',
    qualified: 'client.cache.originCloudRegions.bulkEdit',
    params: [
      'zone_id: string;',
      "body: { ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; }[];",
    ],
    response:
      "{ id: 'origin_public_cloud_region'; editable: boolean; value: { failed: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; succeeded: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; }; modified_on?: string; }",
    markdown:
      "## bulk_edit\n\n`client.cache.originCloudRegions.bulkEdit(zone_id: string, body: { ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; }[]): { id: 'origin_public_cloud_region'; editable: boolean; value: object; modified_on?: string; }`\n\n**patch** `/zones/{zone_id}/cache/origin_cloud_regions/batch`\n\nAdds or updates up to 100 IP-to-cloud-region mappings in a single request. Each item is validated independently — valid items are applied and invalid items are returned in the `failed` array. The vendor and region for every item are validated against the list from `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions`.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `body: { ip: string; region: string; vendor: 'aws' | 'azure' | 'gcp' | 'oci'; }[]`\n\n### Returns\n\n- `{ id: 'origin_public_cloud_region'; editable: boolean; value: { failed: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; succeeded: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; }; modified_on?: string; }`\n  Response result for a batch origin cloud region operation.\n\n  - `id: 'origin_public_cloud_region'`\n  - `editable: boolean`\n  - `value: { failed: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; succeeded: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; }`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.originCloudRegions.bulkEdit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', body: [{\n  ip: '192.0.2.1',\n  region: 'us-east-1',\n  vendor: 'aws',\n}, {\n  ip: '2001:db8::1',\n  region: 'us-central1',\n  vendor: 'gcp',\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.BulkEdit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.OriginCloudRegions.BulkEdit(context.TODO(), cache.OriginCloudRegionBulkEditParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tBody: []cache.OriginCloudRegionBulkEditParamsBody{{\n\t\t\tIP:     cloudflare.F("192.0.2.1"),\n\t\t\tRegion: cloudflare.F("us-east-1"),\n\t\t\tVendor: cloudflare.F(cache.OriginCloudRegionBulkEditParamsBodyVendorAws),\n\t\t}, {\n\t\t\tIP:     cloudflare.F("2001:db8::1"),\n\t\t\tRegion: cloudflare.F("us-central1"),\n\t\t\tVendor: cloudflare.F(cache.OriginCloudRegionBulkEditParamsBodyVendorGcp),\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions/batch \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'[\n          {\n            "ip": "192.0.2.1",\n            "region": "us-east-1",\n            "vendor": "aws"\n          },\n          {\n            "ip": "2001:db8::1",\n            "region": "us-central1",\n            "vendor": "gcp"\n          }\n        ]\'',
      },
      java: {
        method: 'cache().originCloudRegions().bulkEdit',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionBulkEditParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionBulkEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionBulkEditParams params = OriginCloudRegionBulkEditParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .addBody(OriginCloudRegionBulkEditParams.Body.builder()\n                .ip("192.0.2.1")\n                .region("us-east-1")\n                .vendor(OriginCloudRegionBulkEditParams.Body.Vendor.AWS)\n                .build())\n            .addBody(OriginCloudRegionBulkEditParams.Body.builder()\n                .ip("2001:db8::1")\n                .region("us-central1")\n                .vendor(OriginCloudRegionBulkEditParams.Body.Vendor.GCP)\n                .build())\n            .build();\n        OriginCloudRegionBulkEditResponse response = client.cache().originCloudRegions().bulkEdit(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.bulkEdit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.bulkEdit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: [\n    {\n      ip: '192.0.2.1',\n      region: 'us-east-1',\n      vendor: 'aws',\n    },\n    {\n      ip: '2001:db8::1',\n      region: 'us-central1',\n      vendor: 'gcp',\n    },\n  ],\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.origin_cloud_regions.bulk_edit',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.origin_cloud_regions.bulk_edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    body=[{\n        "ip": "192.0.2.1",\n        "region": "us-east-1",\n        "vendor": "aws",\n    }, {\n        "ip": "2001:db8::1",\n        "region": "us-central1",\n        "vendor": "gcp",\n    }],\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.bulk_edit',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.origin_cloud_regions.bulk_edit(\n  zone_id: "023e105f4ecef8ad9ca31a8372d0c353",\n  body: [\n    {ip: "192.0.2.1", region: "us-east-1", vendor: :aws},\n    {ip: "2001:db8::1", region: "us-central1", vendor: :gcp}\n  ]\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.bulkEdit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.bulkEdit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: [\n    {\n      ip: '192.0.2.1',\n      region: 'us-east-1',\n      vendor: 'aws',\n    },\n    {\n      ip: '2001:db8::1',\n      region: 'us-central1',\n      vendor: 'gcp',\n    },\n  ],\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'bulk_delete',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions/batch',
    httpMethod: 'delete',
    summary: 'Batch delete origin cloud region mappings',
    description:
      'Removes up to 100 IP-to-cloud-region mappings in a single request. Each IP is validated independently — successfully deleted items are returned in the `succeeded` array and IPs that could not be found or are invalid are returned in the `failed` array.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) bulk_delete',
    qualified: 'client.cache.originCloudRegions.bulkDelete',
    params: ['zone_id: string;'],
    response:
      "{ id: 'origin_public_cloud_region'; editable: boolean; value: { failed: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; succeeded: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; }; modified_on?: string; }",
    markdown:
      "## bulk_delete\n\n`client.cache.originCloudRegions.bulkDelete(zone_id: string): { id: 'origin_public_cloud_region'; editable: boolean; value: object; modified_on?: string; }`\n\n**delete** `/zones/{zone_id}/cache/origin_cloud_regions/batch`\n\nRemoves up to 100 IP-to-cloud-region mappings in a single request. Each IP is validated independently — successfully deleted items are returned in the `succeeded` array and IPs that could not be found or are invalid are returned in the `failed` array.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'origin_public_cloud_region'; editable: boolean; value: { failed: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; succeeded: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; }; modified_on?: string; }`\n  Response result for a batch origin cloud region operation.\n\n  - `id: 'origin_public_cloud_region'`\n  - `editable: boolean`\n  - `value: { failed: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; succeeded: { origin-ip: string; error?: string; region?: string; vendor?: string; }[]; }`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.originCloudRegions.bulkDelete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.BulkDelete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.OriginCloudRegions.BulkDelete(context.TODO(), cache.OriginCloudRegionBulkDeleteParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions/batch \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().originCloudRegions().bulkDelete',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionBulkDeleteParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionBulkDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionBulkDeleteParams params = OriginCloudRegionBulkDeleteParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        OriginCloudRegionBulkDeleteResponse response = client.cache().originCloudRegions().bulkDelete(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.bulkDelete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.bulkDelete({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'cache.origin_cloud_regions.bulk_delete',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.origin_cloud_regions.bulk_delete(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(response.id)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.bulk_delete',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.origin_cloud_regions.bulk_delete(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.bulkDelete',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.bulkDelete({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'supported_regions',
    endpoint: '/zones/{zone_id}/cache/origin_cloud_regions/supported_regions',
    httpMethod: 'get',
    summary: 'List supported cloud vendors and regions',
    description:
      'Returns the cloud vendors and regions that are valid values for origin cloud region mappings. Each region includes the Tiered Cache upper-tier colocation codes that will be used for cache routing when a mapping targeting that region is active. Requires the zone to have Tiered Cache enabled.',
    stainlessPath: '(resource) cache.origin_cloud_regions > (method) supported_regions',
    qualified: 'client.cache.originCloudRegions.supportedRegions',
    params: ['zone_id: string;'],
    response: '{ obtained_codes: boolean; vendors: object; }',
    markdown:
      "## supported_regions\n\n`client.cache.originCloudRegions.supportedRegions(zone_id: string): { obtained_codes: boolean; vendors: object; }`\n\n**get** `/zones/{zone_id}/cache/origin_cloud_regions/supported_regions`\n\nReturns the cloud vendors and regions that are valid values for origin cloud region mappings. Each region includes the Tiered Cache upper-tier colocation codes that will be used for cache routing when a mapping targeting that region is active. Requires the zone to have Tiered Cache enabled.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ obtained_codes: boolean; vendors: object; }`\n  Cloud vendors and their supported regions for origin cloud region mappings.\n\n  - `obtained_codes: boolean`\n  - `vendors: object`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.cache.originCloudRegions.supportedRegions({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Cache.OriginCloudRegions.SupportedRegions',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Cache.OriginCloudRegions.SupportedRegions(context.TODO(), cache.OriginCloudRegionSupportedRegionsParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ObtainedCodes)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_cloud_regions/supported_regions \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'cache().originCloudRegions().supportedRegions',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionSupportedRegionsParams;\nimport com.cloudflare.models.cache.origincloudregions.OriginCloudRegionSupportedRegionsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginCloudRegionSupportedRegionsParams params = OriginCloudRegionSupportedRegionsParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        OriginCloudRegionSupportedRegionsResponse response = client.cache().originCloudRegions().supportedRegions(params);\n    }\n}',
      },
      node: {
        method: 'client.cache.originCloudRegions.supportedRegions',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.supportedRegions({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(response.obtained_codes);",
      },
      python: {
        method: 'cache.origin_cloud_regions.supported_regions',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.cache.origin_cloud_regions.supported_regions(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(response.obtained_codes)',
      },
      ruby: {
        method: 'cache.origin_cloud_regions.supported_regions',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.cache.origin_cloud_regions.supported_regions(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(response)',
      },
      typescript: {
        method: 'client.cache.originCloudRegions.supportedRegions',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.originCloudRegions.supportedRegions({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(response.obtained_codes);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/zones/{zone_id}/argo/tiered_caching',
    httpMethod: 'get',
    summary: 'Get Tiered Caching setting',
    description:
      "Tiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.",
    stainlessPath: '(resource) argo.tiered_caching > (method) get',
    qualified: 'client.argo.tieredCaching.get',
    params: ['zone_id: string;'],
    response: "{ id: 'tiered_caching'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## get\n\n`client.argo.tieredCaching.get(zone_id: string): { id: 'tiered_caching'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/argo/tiered_caching`\n\nTiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'tiered_caching'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'tiered_caching'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst tieredCaching = await client.argo.tieredCaching.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(tieredCaching);\n```",
    perLanguage: {
      go: {
        method: 'client.Argo.TieredCaching.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/argo"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\ttieredCaching, err := client.Argo.TieredCaching.Get(context.TODO(), argo.TieredCachingGetParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tieredCaching.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/argo/tiered_caching \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'argo().tieredCaching().get',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.argo.tieredcaching.TieredCachingGetParams;\nimport com.cloudflare.models.argo.tieredcaching.TieredCachingGetResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        TieredCachingGetParams params = TieredCachingGetParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        TieredCachingGetResponse tieredCaching = client.argo().tieredCaching().get(params);\n    }\n}',
      },
      node: {
        method: 'client.argo.tieredCaching.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst tieredCaching = await client.argo.tieredCaching.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(tieredCaching.id);",
      },
      python: {
        method: 'argo.tiered_caching.get',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\ntiered_caching = client.argo.tiered_caching.get(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(tiered_caching.id)',
      },
      ruby: {
        method: 'argo.tiered_caching.get',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\ntiered_caching = cloudflare.argo.tiered_caching.get(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(tiered_caching)',
      },
      typescript: {
        method: 'client.argo.tieredCaching.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst tieredCaching = await client.argo.tieredCaching.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(tieredCaching.id);",
      },
    },
  },
  {
    name: 'edit',
    endpoint: '/zones/{zone_id}/argo/tiered_caching',
    httpMethod: 'patch',
    summary: 'Patch Tiered Caching setting',
    description:
      "Tiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.",
    stainlessPath: '(resource) argo.tiered_caching > (method) edit',
    qualified: 'client.argo.tieredCaching.edit',
    params: ['zone_id: string;', "value: 'on' | 'off';"],
    response: "{ id: 'tiered_caching'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }",
    markdown:
      "## edit\n\n`client.argo.tieredCaching.edit(zone_id: string, value: 'on' | 'off'): { id: 'tiered_caching'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n**patch** `/zones/{zone_id}/argo/tiered_caching`\n\nTiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `value: 'on' | 'off'`\n  Enables Tiered Caching.\n\n### Returns\n\n- `{ id: 'tiered_caching'; editable: boolean; value: 'on' | 'off'; modified_on?: string; }`\n\n  - `id: 'tiered_caching'`\n  - `editable: boolean`\n  - `value: 'on' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst response = await client.argo.tieredCaching.edit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', value: 'on' });\n\nconsole.log(response);\n```",
    perLanguage: {
      go: {
        method: 'client.Argo.TieredCaching.Edit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/argo"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\tresponse, err := client.Argo.TieredCaching.Edit(context.TODO(), argo.TieredCachingEditParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tValue:  cloudflare.F(argo.TieredCachingEditParamsValueOn),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/argo/tiered_caching \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "value": "on"\n        }\'',
      },
      java: {
        method: 'argo().tieredCaching().edit',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.argo.tieredcaching.TieredCachingEditParams;\nimport com.cloudflare.models.argo.tieredcaching.TieredCachingEditResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        TieredCachingEditParams params = TieredCachingEditParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .value(TieredCachingEditParams.Value_.ON)\n            .build();\n        TieredCachingEditResponse response = client.argo().tieredCaching().edit(params);\n    }\n}',
      },
      node: {
        method: 'client.argo.tieredCaching.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.argo.tieredCaching.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'argo.tiered_caching.edit',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\nresponse = client.argo.tiered_caching.edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    value="on",\n)\nprint(response.id)',
      },
      ruby: {
        method: 'argo.tiered_caching.edit',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\nresponse = cloudflare.argo.tiered_caching.edit(zone_id: "023e105f4ecef8ad9ca31a8372d0c353", value: :on)\n\nputs(response)',
      },
      typescript: {
        method: 'client.argo.tieredCaching.edit',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.argo.tieredCaching.edit({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'on',\n});\n\nconsole.log(response.id);",
      },
    },
  },
  {
    name: 'get',
    endpoint: '/zones/{zone_id}/cache/origin_post_quantum_encryption',
    httpMethod: 'get',
    summary: 'Get Origin Post-Quantum Encryption setting',
    description:
      'Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised.',
    stainlessPath: '(resource) origin_post_quantum_encryption > (method) get',
    qualified: 'client.originPostQuantumEncryption.get',
    params: ['zone_id: string;'],
    response:
      "{ id: 'origin_pqe'; editable: boolean; value: 'preferred' | 'supported' | 'off'; modified_on?: string; }",
    markdown:
      "## get\n\n`client.originPostQuantumEncryption.get(zone_id: string): { id: 'origin_pqe'; editable: boolean; value: 'preferred' | 'supported' | 'off'; modified_on?: string; }`\n\n**get** `/zones/{zone_id}/cache/origin_post_quantum_encryption`\n\nInstructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n### Returns\n\n- `{ id: 'origin_pqe'; editable: boolean; value: 'preferred' | 'supported' | 'off'; modified_on?: string; }`\n\n  - `id: 'origin_pqe'`\n  - `editable: boolean`\n  - `value: 'preferred' | 'supported' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst originPostQuantumEncryption = await client.originPostQuantumEncryption.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n\nconsole.log(originPostQuantumEncryption);\n```",
    perLanguage: {
      go: {
        method: 'client.OriginPostQuantumEncryption.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/option"\n\t"github.com/cloudflare/cloudflare-go/origin_post_quantum_encryption"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\toriginPostQuantumEncryption, err := client.OriginPostQuantumEncryption.Get(context.TODO(), origin_post_quantum_encryption.OriginPostQuantumEncryptionGetParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", originPostQuantumEncryption.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_post_quantum_encryption \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"',
      },
      java: {
        method: 'originPostQuantumEncryption().get',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.originpostquantumencryption.OriginPostQuantumEncryptionGetParams;\nimport com.cloudflare.models.originpostquantumencryption.OriginPostQuantumEncryptionGetResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginPostQuantumEncryptionGetParams params = OriginPostQuantumEncryptionGetParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .build();\n        OriginPostQuantumEncryptionGetResponse originPostQuantumEncryption = client.originPostQuantumEncryption().get(params);\n    }\n}',
      },
      node: {
        method: 'client.originPostQuantumEncryption.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originPostQuantumEncryption = await client.originPostQuantumEncryption.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originPostQuantumEncryption.id);",
      },
      python: {
        method: 'origin_post_quantum_encryption.get',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\norigin_post_quantum_encryption = client.origin_post_quantum_encryption.get(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n)\nprint(origin_post_quantum_encryption.id)',
      },
      ruby: {
        method: 'origin_post_quantum_encryption.get',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\norigin_post_quantum_encryption = cloudflare.origin_post_quantum_encryption.get(zone_id: "023e105f4ecef8ad9ca31a8372d0c353")\n\nputs(origin_post_quantum_encryption)',
      },
      typescript: {
        method: 'client.originPostQuantumEncryption.get',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originPostQuantumEncryption = await client.originPostQuantumEncryption.get({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n});\n\nconsole.log(originPostQuantumEncryption.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/zones/{zone_id}/cache/origin_post_quantum_encryption',
    httpMethod: 'put',
    summary: 'Change Origin Post-Quantum Encryption setting',
    description:
      'Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised.',
    stainlessPath: '(resource) origin_post_quantum_encryption > (method) update',
    qualified: 'client.originPostQuantumEncryption.update',
    params: ['zone_id: string;', "value: 'preferred' | 'supported' | 'off';"],
    response:
      "{ id: 'origin_pqe'; editable: boolean; value: 'preferred' | 'supported' | 'off'; modified_on?: string; }",
    markdown:
      "## update\n\n`client.originPostQuantumEncryption.update(zone_id: string, value: 'preferred' | 'supported' | 'off'): { id: 'origin_pqe'; editable: boolean; value: 'preferred' | 'supported' | 'off'; modified_on?: string; }`\n\n**put** `/zones/{zone_id}/cache/origin_post_quantum_encryption`\n\nInstructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised.\n\n### Parameters\n\n- `zone_id: string`\n  Identifier.\n\n- `value: 'preferred' | 'supported' | 'off'`\n  Value of the Origin Post Quantum Encryption Setting.\n\n### Returns\n\n- `{ id: 'origin_pqe'; editable: boolean; value: 'preferred' | 'supported' | 'off'; modified_on?: string; }`\n\n  - `id: 'origin_pqe'`\n  - `editable: boolean`\n  - `value: 'preferred' | 'supported' | 'off'`\n  - `modified_on?: string`\n\n### Example\n\n```typescript\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare();\n\nconst originPostQuantumEncryption = await client.originPostQuantumEncryption.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', value: 'preferred' });\n\nconsole.log(originPostQuantumEncryption);\n```",
    perLanguage: {
      go: {
        method: 'client.OriginPostQuantumEncryption.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/option"\n\t"github.com/cloudflare/cloudflare-go/origin_post_quantum_encryption"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"),\n\t)\n\toriginPostQuantumEncryption, err := client.OriginPostQuantumEncryption.Update(context.TODO(), origin_post_quantum_encryption.OriginPostQuantumEncryptionUpdateParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tValue:  cloudflare.F(origin_post_quantum_encryption.OriginPostQuantumEncryptionUpdateParamsValuePreferred),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", originPostQuantumEncryption.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/cache/origin_post_quantum_encryption \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \\\n    -d \'{\n          "value": "preferred"\n        }\'',
      },
      java: {
        method: 'originPostQuantumEncryption().update',
        example:
          'package com.cloudflare.example;\n\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.models.originpostquantumencryption.OriginPostQuantumEncryptionUpdateParams;\nimport com.cloudflare.models.originpostquantumencryption.OriginPostQuantumEncryptionUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        CloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\n        OriginPostQuantumEncryptionUpdateParams params = OriginPostQuantumEncryptionUpdateParams.builder()\n            .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n            .value(OriginPostQuantumEncryptionUpdateParams.Value_.PREFERRED)\n            .build();\n        OriginPostQuantumEncryptionUpdateResponse originPostQuantumEncryption = client.originPostQuantumEncryption().update(params);\n    }\n}',
      },
      node: {
        method: 'client.originPostQuantumEncryption.update',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originPostQuantumEncryption = await client.originPostQuantumEncryption.update({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'preferred',\n});\n\nconsole.log(originPostQuantumEncryption.id);",
      },
      python: {
        method: 'origin_post_quantum_encryption.update',
        example:
          'import os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\norigin_post_quantum_encryption = client.origin_post_quantum_encryption.update(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    value="preferred",\n)\nprint(origin_post_quantum_encryption.id)',
      },
      ruby: {
        method: 'origin_post_quantum_encryption.update',
        example:
          'require "cloudflare"\n\ncloudflare = Cloudflare::Client.new(api_token: "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n\norigin_post_quantum_encryption = cloudflare.origin_post_quantum_encryption.update(\n  zone_id: "023e105f4ecef8ad9ca31a8372d0c353",\n  value: :preferred\n)\n\nputs(origin_post_quantum_encryption)',
      },
      typescript: {
        method: 'client.originPostQuantumEncryption.update',
        example:
          "import Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst originPostQuantumEncryption = await client.originPostQuantumEncryption.update({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  value: 'preferred',\n});\n\nconsole.log(originPostQuantumEncryption.id);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'node',
    content:
      "# Cloudflare Node API Library\n\n[![NPM version](https://img.shields.io/npm/v/cloudflare.svg)](https://npmjs.org/package/cloudflare) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/cloudflare)\n\nThis library provides convenient access to the Cloudflare REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [developers.cloudflare.com](https://developers.cloudflare.com/api). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cloudflare MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cloudflare-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNsb3VkZmxhcmUtbWNwIl0sImVudiI6eyJDTE9VREZMQVJFX0FQSV9UT0tFTiI6IlNuM2xaSlRCWDZra2c3T2RjQlVBeE9POTYzR0VJeUdRcW5GVE9GWVkiLCJDTE9VREZMQVJFX0FQSV9LRVkiOiIxNDRjOWRlZmFjMDQ5NjljN2JmYWQ4ZWZhYThlYTE5NCIsIkNMT1VERkxBUkVfRU1BSUwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiQ0xPVURGTEFSRV9BUElfVVNFUl9TRVJWSUNFX0tFWSI6InYxLjAtMTQ0YzlkZWZhYzA0OTY5YzdiZmFkOGVmLTYzMWE0MWQwMDNhMzJkMjVmZTg3ODA4MWVmMzY1YzQ5NTAzZjdmYWRhNjAwZGE5MzVlMjg1MWExYzczMjYwODRiODVjYmY2NDI5YzRiODU5ZGU4NDc1NzMxZGM5MmE5YzMyOTYzMWU2ZDU5ZTZjNzNkYTdiMTk4NDk3MTcyYjRjZWZlMDcxZDkwZDBmNWQyNzE5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cloudflare-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22cloudflare-mcp%22%5D%2C%22env%22%3A%7B%22CLOUDFLARE_API_TOKEN%22%3A%22Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY%22%2C%22CLOUDFLARE_API_KEY%22%3A%22144c9defac04969c7bfad8efaa8ea194%22%2C%22CLOUDFLARE_EMAIL%22%3A%22user%40example.com%22%2C%22CLOUDFLARE_API_USER_SERVICE_KEY%22%3A%22v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install cloudflare\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n});\n\nconsole.log(response.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst params: Cloudflare.Cache.CacheReserveClearParams = {\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n};\nconst response: Cloudflare.Cache.CacheReserveClearResponse = await client.cache.cacheReserve.clear(\n  params,\n);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.cache.cacheReserve\n  .clear({\n    zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n    body: {},\n  })\n  .catch(async (err) => {\n    if (err instanceof Cloudflare.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Cloudflare({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Cloudflare({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Cloudflare();\n\nconst response = await client.cache.cacheReserve\n  .clear({\n    zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n    body: {},\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.cache.cacheReserve\n  .clear({\n    zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n    body: {},\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.id);\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.foo.create({\n  foo: 'my_param',\n  bar: 12,\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library uses `node-fetch` in Node, and expects a global `fetch` function in other environments.\n\nIf you would prefer to use a global, web-standards-compliant `fetch` function even in a Node environment,\n(for example, if you are running Node with `--experimental-fetch` or using NextJS which polyfills with `undici`),\nadd the following import before your first import `from \"Cloudflare\"`:\n\n```ts\n// Tell TypeScript and the package to use the global web fetch instead of node-fetch.\n// Note, despite the name, this does not add any polyfills, but expects them to be provided if needed.\nimport 'cloudflare/shims/web';\nimport Cloudflare from 'cloudflare';\n```\n\nTo do the inverse, add `import \"cloudflare/shims/node\"` (which does import polyfills).\nThis can also be useful if you are getting the wrong TypeScript types for `Response` ([more details](https://github.com/cloudflare/cloudflare-typescript/tree/main/src/_shims#readme)).\n\n### Logging and middleware\n\nYou may also provide a custom `fetch` function when instantiating the client,\nwhich can be used to inspect or alter the `Request` or `Response` before/after each request:\n\n```ts\nimport { fetch } from 'undici'; // as one example\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  fetch: async (url: RequestInfo, init?: RequestInit): Promise<Response> => {\n    console.log('About to make a request', url, init);\n    const response = await fetch(url, init);\n    console.log('Got response', response);\n    return response;\n  },\n});\n```\n\nNote that if given a `DEBUG=true` environment variable, this library will log all requests and responses automatically.\nThis is intended for debugging purposes only and may change in the future without notice.\n\n### Configuring an HTTP(S) Agent (e.g., for proxies)\n\nBy default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.\n\nIf you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:\n\n<!-- prettier-ignore -->\n```ts\nimport http from 'http';\nimport { HttpsProxyAgent } from 'https-proxy-agent';\n\n// Configure the default for all requests:\nconst client = new Cloudflare({\n  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),\n});\n\n// Override per-request:\nawait client.cache.cacheReserve.clear(\n  {\n    zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n    body: {},\n  },\n  {\n    httpAgent: new http.Agent({ keepAlive: false }),\n  },\n);\n```\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cloudflare/cloudflare-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.5 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 18 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'python',
    content:
      '# Cloudflare Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/cloudflare.svg?label=pypi%20(stable))](https://pypi.org/project/cloudflare/)\n\nThe Cloudflare Python library provides convenient access to the Cloudflare REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cloudflare MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cloudflare-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNsb3VkZmxhcmUtbWNwIl0sImVudiI6eyJDTE9VREZMQVJFX0FQSV9UT0tFTiI6IlNuM2xaSlRCWDZra2c3T2RjQlVBeE9POTYzR0VJeUdRcW5GVE9GWVkiLCJDTE9VREZMQVJFX0FQSV9LRVkiOiIxNDRjOWRlZmFjMDQ5NjljN2JmYWQ4ZWZhYThlYTE5NCIsIkNMT1VERkxBUkVfRU1BSUwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiQ0xPVURGTEFSRV9BUElfVVNFUl9TRVJWSUNFX0tFWSI6InYxLjAtMTQ0YzlkZWZhYzA0OTY5YzdiZmFkOGVmLTYzMWE0MWQwMDNhMzJkMjVmZTg3ODA4MWVmMzY1YzQ5NTAzZjdmYWRhNjAwZGE5MzVlMjg1MWExYzczMjYwODRiODVjYmY2NDI5YzRiODU5ZGU4NDc1NzMxZGM5MmE5YzMyOTYzMWU2ZDU5ZTZjNzNkYTdiMTk4NDk3MTcyYjRjZWZlMDcxZDkwZDBmNWQyNzE5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cloudflare-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22cloudflare-mcp%22%5D%2C%22env%22%3A%7B%22CLOUDFLARE_API_TOKEN%22%3A%22Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY%22%2C%22CLOUDFLARE_API_KEY%22%3A%22144c9defac04969c7bfad8efaa8ea194%22%2C%22CLOUDFLARE_EMAIL%22%3A%22user%40example.com%22%2C%22CLOUDFLARE_API_USER_SERVICE_KEY%22%3A%22v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [developers.cloudflare.com](https://developers.cloudflare.com/api). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install cloudflare\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\n\nresponse = client.cache.cache_reserve.clear(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    body={},\n)\nprint(response.id)\n```\n\nWhile you can provide a `api_token` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `CLOUDFLARE_API_TOKEN="Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"` to your `.env` file\nso that your API Token is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncCloudflare` instead of `Cloudflare` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom cloudflare import AsyncCloudflare\n\nclient = AsyncCloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  response = await client.cache.cache_reserve.clear(\n      zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n      body={},\n  )\n  print(response.id)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install cloudflare[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom cloudflare import DefaultAioHttpClient\nfrom cloudflare import AsyncCloudflare\n\nasync def main() -> None:\n  async with AsyncCloudflare(\n    api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.cache.cache_reserve.clear(\n        zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n        body={},\n    )\n    print(response.id)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare()\n\nresponse = client.cache.variants.edit(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    value={},\n)\nprint(response.value)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `cloudflare.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `cloudflare.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `cloudflare.APIError`.\n\n```python\nimport cloudflare\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare()\n\ntry:\n    client.cache.cache_reserve.clear(\n        zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n        body={},\n    )\nexcept cloudflare.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept cloudflare.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept cloudflare.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom cloudflare import Cloudflare\n\n# Configure the default for all requests:\nclient = Cloudflare(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).cache.cache_reserve.clear(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    body={},\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom cloudflare import Cloudflare\n\n# Configure the default for all requests:\nclient = Cloudflare(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Cloudflare(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).cache.cache_reserve.clear(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    body={},\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `CLOUDFLARE_LOG` to `info`.\n\n```shell\n$ export CLOUDFLARE_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom cloudflare import Cloudflare\n\nclient = Cloudflare()\nresponse = client.cache.cache_reserve.with_raw_response.clear(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    body={},\n)\nprint(response.headers.get(\'X-My-Header\'))\n\ncache_reserve = response.parse()  # get the object that `cache.cache_reserve.clear()` would have returned\nprint(cache_reserve.id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/cloudflare/cloudflare-python/tree/main/src/cloudflare/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/cloudflare/cloudflare-python/tree/main/src/cloudflare/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.cache.cache_reserve.with_streaming_response.clear(\n    zone_id="023e105f4ecef8ad9ca31a8372d0c353",\n    body={},\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom cloudflare import Cloudflare, DefaultHttpxClient\n\nclient = Cloudflare(\n    # Or use the `CLOUDFLARE_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom cloudflare import Cloudflare\n\nwith Cloudflare() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cloudflare/cloudflare-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport cloudflare\nprint(cloudflare.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Cloudflare Go API Library\n\n<a href="https://pkg.go.dev/github.com/cloudflare/cloudflare-go"><img src="https://pkg.go.dev/badge/github.com/cloudflare/cloudflare-go.svg" alt="Go Reference"></a>\n\nThe Cloudflare Go library provides convenient access to the [Cloudflare REST API](https://developers.cloudflare.com/api)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cloudflare MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cloudflare-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNsb3VkZmxhcmUtbWNwIl0sImVudiI6eyJDTE9VREZMQVJFX0FQSV9UT0tFTiI6IlNuM2xaSlRCWDZra2c3T2RjQlVBeE9POTYzR0VJeUdRcW5GVE9GWVkiLCJDTE9VREZMQVJFX0FQSV9LRVkiOiIxNDRjOWRlZmFjMDQ5NjljN2JmYWQ4ZWZhYThlYTE5NCIsIkNMT1VERkxBUkVfRU1BSUwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiQ0xPVURGTEFSRV9BUElfVVNFUl9TRVJWSUNFX0tFWSI6InYxLjAtMTQ0YzlkZWZhYzA0OTY5YzdiZmFkOGVmLTYzMWE0MWQwMDNhMzJkMjVmZTg3ODA4MWVmMzY1YzQ5NTAzZjdmYWRhNjAwZGE5MzVlMjg1MWExYzczMjYwODRiODVjYmY2NDI5YzRiODU5ZGU4NDc1NzMxZGM5MmE5YzMyOTYzMWU2ZDU5ZTZjNzNkYTdiMTk4NDk3MTcyYjRjZWZlMDcxZDkwZDBmNWQyNzE5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cloudflare-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22cloudflare-mcp%22%5D%2C%22env%22%3A%7B%22CLOUDFLARE_API_TOKEN%22%3A%22Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY%22%2C%22CLOUDFLARE_API_KEY%22%3A%22144c9defac04969c7bfad8efaa8ea194%22%2C%22CLOUDFLARE_EMAIL%22%3A%22user%40example.com%22%2C%22CLOUDFLARE_API_USER_SERVICE_KEY%22%3A%22v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/cloudflare/cloudflare-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/cloudflare/cloudflare-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cloudflare/cloudflare-go"\n\t"github.com/cloudflare/cloudflare-go/cache"\n\t"github.com/cloudflare/cloudflare-go/option"\n)\n\nfunc main() {\n\tclient := cloudflare.NewClient(\n\t\toption.WithAPIToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"), // defaults to os.LookupEnv("CLOUDFLARE_API_TOKEN")\n\t)\n\tresponse, err := client.Cache.CacheReserve.Clear(context.TODO(), cache.CacheReserveClearParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tBody:   map[string]interface{}{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Cache.CacheReserve.Clear(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/cloudflare/cloudflare-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Cache.CacheReserve.Clear(context.TODO(), cache.CacheReserveClearParams{\n\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\tBody:   map[string]interface{}{},\n})\nif err != nil {\n\tvar apierr *cloudflare.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/zones/{zone_id}/cache/cache_reserve_clear": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Cache.CacheReserve.Clear(\n\tctx,\n\tcache.CacheReserveClearParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tBody:   map[string]interface{}{},\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := cloudflare.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Cache.CacheReserve.Clear(\n\tcontext.TODO(),\n\tcache.CacheReserveClearParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tBody:   map[string]interface{}{},\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nresponse, err := client.Cache.CacheReserve.Clear(\n\tcontext.TODO(),\n\tcache.CacheReserveClearParams{\n\t\tZoneID: cloudflare.F("023e105f4ecef8ad9ca31a8372d0c353"),\n\t\tBody:   map[string]interface{}{},\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", response)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cloudflare/cloudflare-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'terraform',
    content:
      '# Cloudflare Terraform Provider\n\nThe [Cloudflare Terraform provider](https://registry.terraform.io/providers/cloudflare/cloudflare/latest/docs) provides convenient access to\nthe [Cloudflare REST API](https://developers.cloudflare.com/api) from Terraform.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## Requirements\n\nThis provider requires Terraform CLI 1.0 or later. You can [install it for your system](https://developer.hashicorp.com/terraform/install)\non Hashicorp\'s website.\n\n## Usage\n\nAdd the following to your `main.tf` file:\n\n<!-- x-release-please-start-version -->\n\n```hcl\n# Declare the provider and version\nterraform {\n  required_providers {\n    SDK_ProviderTypeName = {\n      source  = "cloudflare/cloudflare"\n      version = "~> 0.0.1"\n    }\n  }\n}\n\n# Initialize the provider\nprovider "cloudflare" {\n  # The preferred authorization scheme for interacting with the Cloudflare API. [Create a token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).\n  api_token = "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY" # or set CLOUDFLARE_API_TOKEN env variable\n  # The previous authorization scheme for interacting with the Cloudflare API. When possible, use API tokens instead of Global API keys.\n  api_key = "144c9defac04969c7bfad8efaa8ea194" # or set CLOUDFLARE_API_KEY env variable\n  # The previous authorization scheme for interacting with the Cloudflare API, used in conjunction with a Global API key.\n  api_email = "user@example.com" # or set CLOUDFLARE_EMAIL env variable\n  # Used when interacting with the Origin CA certificates API. [View/change your key](https://developers.cloudflare.com/fundamentals/api/get-started/ca-keys/#viewchange-your-origin-ca-keys).\n  user_service_key = "v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719" # or set CLOUDFLARE_API_USER_SERVICE_KEY env variable\n}\n\n# Configure a resource\nresource "cloudflare_zone_cache_reserve" "example_zone_cache_reserve" {\n  zone_id = "023e105f4ecef8ad9ca31a8372d0c353"\n}\n```\n\n<!-- x-release-please-end -->\n\nInitialize your project by running `terraform init` in the directory.\n\nAdditional examples can be found in the [./examples](./examples) folder within this repository, and you can\nrefer to the full documentation on [the Terraform Registry](https://registry.terraform.io/providers/cloudflare/cloudflare/latest/docs).\n\n### Provider Options\nWhen you initialize the provider, the following options are supported. It is recommended to use environment variables for sensitive values like access tokens.\nIf an environment variable is provided, then the option does not need to be set in the terraform source.\n\n| Property         | Environment variable              | Required | Default value |\n| ---------------- | --------------------------------- | -------- | ------------- |\n| user_service_key | `CLOUDFLARE_API_USER_SERVICE_KEY` | false    | —             |\n| api_token        | `CLOUDFLARE_API_TOKEN`            | false    | —             |\n| api_key          | `CLOUDFLARE_API_KEY`              | false    | —             |\n| api_email        | `CLOUDFLARE_EMAIL`                | false    | —             |\n\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cloudflare/terraform-provider-cloudflare/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Cloudflare TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/cloudflare.svg?label=npm%20(stable))](https://npmjs.org/package/cloudflare) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/cloudflare)\n\nThis library provides convenient access to the Cloudflare REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [developers.cloudflare.com](https://developers.cloudflare.com/api). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cloudflare MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cloudflare-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNsb3VkZmxhcmUtbWNwIl0sImVudiI6eyJDTE9VREZMQVJFX0FQSV9UT0tFTiI6IlNuM2xaSlRCWDZra2c3T2RjQlVBeE9POTYzR0VJeUdRcW5GVE9GWVkiLCJDTE9VREZMQVJFX0FQSV9LRVkiOiIxNDRjOWRlZmFjMDQ5NjljN2JmYWQ4ZWZhYThlYTE5NCIsIkNMT1VERkxBUkVfRU1BSUwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiQ0xPVURGTEFSRV9BUElfVVNFUl9TRVJWSUNFX0tFWSI6InYxLjAtMTQ0YzlkZWZhYzA0OTY5YzdiZmFkOGVmLTYzMWE0MWQwMDNhMzJkMjVmZTg3ODA4MWVmMzY1YzQ5NTAzZjdmYWRhNjAwZGE5MzVlMjg1MWExYzczMjYwODRiODVjYmY2NDI5YzRiODU5ZGU4NDc1NzMxZGM5MmE5YzMyOTYzMWU2ZDU5ZTZjNzNkYTdiMTk4NDk3MTcyYjRjZWZlMDcxZDkwZDBmNWQyNzE5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cloudflare-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22cloudflare-mcp%22%5D%2C%22env%22%3A%7B%22CLOUDFLARE_API_TOKEN%22%3A%22Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY%22%2C%22CLOUDFLARE_API_KEY%22%3A%22144c9defac04969c7bfad8efaa8ea194%22%2C%22CLOUDFLARE_EMAIL%22%3A%22user%40example.com%22%2C%22CLOUDFLARE_API_USER_SERVICE_KEY%22%3A%22v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:stainless-sdks/cloudflare-typescript.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install cloudflare`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n});\n\nconsole.log(response.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  apiToken: process.env['CLOUDFLARE_API_TOKEN'], // This is the default and can be omitted\n});\n\nconst params: Cloudflare.Cache.CacheReserveClearParams = {\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n};\nconst response: Cloudflare.Cache.CacheReserveClearResponse = await client.cache.cacheReserve.clear(\n  params,\n);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.cache.cacheReserve\n  .clear({\n    zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n    body: {},\n  })\n  .catch(async (err) => {\n    if (err instanceof Cloudflare.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Cloudflare({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Cloudflare({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.cache.cacheReserve.clear({\n  zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n  body: {},\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Tree shaking\n\nThis library supports tree shaking to reduce bundle size. Instead of importing the full client, you can create a client only including the API resources you need:\n\n~~~ts\nimport { createClient } from 'cloudflare/tree-shakable';\nimport { CacheReserveResource } from 'cloudflare/resources/cache/cache-reserve';\nimport { BaseOriginPostQuantumEncryption } from 'cloudflare/resources/origin-post-quantum-encryption/origin-post-quantum-encryption';\n\nconst client = createClient({\n  // Specify the resources you'd like to use ...\n  resources: [CacheReserveResource, BaseOriginPostQuantumEncryption],\n});\n\n// ... then make API calls as usual.\nconst cacheReserve = await client.cache.cacheReserve.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\nconst originPostQuantumEncryption = await client.originPostQuantumEncryption.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n~~~\n\nEach API resource has two versions, the full resource (e.g., `CacheReserveResource`) which includes all subresources, and the base resource (e.g., `BaseCacheReserveResource`) which does not.\n\nThe tree-shaken client is fully typed, so TypeScript will provide accurate autocomplete and prevent access to resources not included in your configuration.\nThe `createClient` function automatically infers the correct type, but you can also use the `PartialCloudflare` type explicitly:\n\n~~~ts\nimport Cloudflare from 'cloudflare';\nimport { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';\nimport { BaseCacheReserveResource } from 'cloudflare/resources/cache/cache-reserve';\n\n// Explicit variable type\nconst client: PartialCloudflare<{ cache: { cacheReserve: BaseCacheReserveResource } }> = createClient({\n  resources: [BaseCacheReserveResource],\n  /* ... */\n});\n\n// Function parameter type\nasync function main(client: PartialCloudflare<{ cache: { cacheReserve: BaseCacheReserveResource } }>) {\n  const cacheReserve = await client.cache.cacheReserve.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });\n}\n\n// Works with any client that has the cacheReserve resource\nconst treeShakableClient = createClient({\n  resources: [BaseCacheReserveResource],\n  /* ... */\n});\nconst fullClient = new Cloudflare(/* ... */);\n\nmain(treeShakableClient); // Works\nmain(fullClient); // Also works\n~~~\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Cloudflare();\n\nconst response = await client.cache.cacheReserve\n  .clear({\n    zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n    body: {},\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.cache.cacheReserve\n  .clear({\n    zone_id: '023e105f4ecef8ad9ca31a8372d0c353',\n    body: {},\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `CLOUDFLARE_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Cloudflare from 'cloudflare';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Cloudflare({\n  logger: logger.child({ name: 'Cloudflare' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.cache.cacheReserve.clear({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Cloudflare from 'cloudflare';\nimport fetch from 'my-fetch';\n\nconst client = new Cloudflare({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Cloudflare from 'cloudflare';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Cloudflare({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Cloudflare from 'cloudflare';\n\nconst client = new Cloudflare({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Cloudflare from 'npm:cloudflare';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Cloudflare({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/cloudflare-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'ruby',
    content:
      '# Cloudflare Ruby API library\n\nThe Cloudflare Ruby library provides convenient access to the Cloudflare REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/cloudflare/cloudflare-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cloudflare MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cloudflare-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNsb3VkZmxhcmUtbWNwIl0sImVudiI6eyJDTE9VREZMQVJFX0FQSV9UT0tFTiI6IlNuM2xaSlRCWDZra2c3T2RjQlVBeE9POTYzR0VJeUdRcW5GVE9GWVkiLCJDTE9VREZMQVJFX0FQSV9LRVkiOiIxNDRjOWRlZmFjMDQ5NjljN2JmYWQ4ZWZhYThlYTE5NCIsIkNMT1VERkxBUkVfRU1BSUwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiQ0xPVURGTEFSRV9BUElfVVNFUl9TRVJWSUNFX0tFWSI6InYxLjAtMTQ0YzlkZWZhYzA0OTY5YzdiZmFkOGVmLTYzMWE0MWQwMDNhMzJkMjVmZTg3ODA4MWVmMzY1YzQ5NTAzZjdmYWRhNjAwZGE5MzVlMjg1MWExYzczMjYwODRiODVjYmY2NDI5YzRiODU5ZGU4NDc1NzMxZGM5MmE5YzMyOTYzMWU2ZDU5ZTZjNzNkYTdiMTk4NDk3MTcyYjRjZWZlMDcxZDkwZDBmNWQyNzE5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cloudflare-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22cloudflare-mcp%22%5D%2C%22env%22%3A%7B%22CLOUDFLARE_API_TOKEN%22%3A%22Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY%22%2C%22CLOUDFLARE_API_KEY%22%3A%22144c9defac04969c7bfad8efaa8ea194%22%2C%22CLOUDFLARE_EMAIL%22%3A%22user%40example.com%22%2C%22CLOUDFLARE_API_USER_SERVICE_KEY%22%3A%22v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/cloudflare).\n\nThe REST API documentation can be found on [developers.cloudflare.com](https://developers.cloudflare.com/api).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "cloudflare", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "cloudflare"\n\ncloudflare = Cloudflare::Client.new(\n  api_token: ENV["CLOUDFLARE_API_TOKEN"] # This is the default and can be omitted\n)\n\nresponse = cloudflare.cache.cache_reserve.clear\n\nputs(response.id)\n```\n\n\n\n\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `Cloudflare::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  cache_reserve = cloudflare.cache.cache_reserve.clear\nrescue Cloudflare::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue Cloudflare::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue Cloudflare::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\ncloudflare = Cloudflare::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\ncloudflare.cache.cache_reserve.clear(request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\ncloudflare = Cloudflare::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\ncloudflare.cache.cache_reserve.clear(request_options: {timeout: 5})\n```\n\nOn timeout, `Cloudflare::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `Cloudflare::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\nresponse =\n  cloudflare.cache.cache_reserve.clear(\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(response[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `Cloudflare::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `Cloudflare::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\ncloudflare.cache.cache_reserve.clear \n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\ncloudflare.cache.cache_reserve.clear\n\n# You can also splat a full Params class:\nparams = Cloudflare::Cache::CacheReserveClearParams.new\ncloudflare.cache.cache_reserve.clear(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :on\nputs(Cloudflare::Cache::CacheReserveEditParams::Value::ON)\n\n# Revealed type: `T.all(Cloudflare::Cache::CacheReserveEditParams::Value, Symbol)`\nT.reveal_type(Cloudflare::Cache::CacheReserveEditParams::Value::ON)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\ncloudflare.cache.cache_reserve.edit(\n  value: Cloudflare::Cache::CacheReserveEditParams::Value::ON,\n  # …\n)\n\n# Literal values are also permissible:\ncloudflare.cache.cache_reserve.edit(\n  value: :on,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/cloudflare/cloudflare-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Cloudflare Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.cloudflare/cloudflare-java)](https://central.sonatype.com/artifact/com.cloudflare/cloudflare-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.cloudflare/cloudflare-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.cloudflare/cloudflare-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Cloudflare Java SDK provides convenient access to the [Cloudflare REST API](https://developers.cloudflare.com/api)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Cloudflare MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=cloudflare-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNsb3VkZmxhcmUtbWNwIl0sImVudiI6eyJDTE9VREZMQVJFX0FQSV9UT0tFTiI6IlNuM2xaSlRCWDZra2c3T2RjQlVBeE9POTYzR0VJeUdRcW5GVE9GWVkiLCJDTE9VREZMQVJFX0FQSV9LRVkiOiIxNDRjOWRlZmFjMDQ5NjljN2JmYWQ4ZWZhYThlYTE5NCIsIkNMT1VERkxBUkVfRU1BSUwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiQ0xPVURGTEFSRV9BUElfVVNFUl9TRVJWSUNFX0tFWSI6InYxLjAtMTQ0YzlkZWZhYzA0OTY5YzdiZmFkOGVmLTYzMWE0MWQwMDNhMzJkMjVmZTg3ODA4MWVmMzY1YzQ5NTAzZjdmYWRhNjAwZGE5MzVlMjg1MWExYzczMjYwODRiODVjYmY2NDI5YzRiODU5ZGU4NDc1NzMxZGM5MmE5YzMyOTYzMWU2ZDU5ZTZjNzNkYTdiMTk4NDk3MTcyYjRjZWZlMDcxZDkwZDBmNWQyNzE5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22cloudflare-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22cloudflare-mcp%22%5D%2C%22env%22%3A%7B%22CLOUDFLARE_API_TOKEN%22%3A%22Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY%22%2C%22CLOUDFLARE_API_KEY%22%3A%22144c9defac04969c7bfad8efaa8ea194%22%2C%22CLOUDFLARE_EMAIL%22%3A%22user%40example.com%22%2C%22CLOUDFLARE_API_USER_SERVICE_KEY%22%3A%22v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [developers.cloudflare.com](https://developers.cloudflare.com/api). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.cloudflare/cloudflare-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.cloudflare:cloudflare-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.cloudflare</groupId>\n  <artifactId>cloudflare-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\nimport java.util.Map;\n\n// Configures using the `cloudflare.apiToken`, `cloudflare.apiKey`, `cloudflare.email`, `cloudflare.apiUserServiceKey` and `cloudflare.baseUrl` system properties\n// Or configures using the `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_API_KEY`, `CLOUDFLARE_EMAIL`, `CLOUDFLARE_API_USER_SERVICE_KEY` and `CLOUDFLARE_BASE_URL` environment variables\nCloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\nCacheReserveClearParams params = CacheReserveClearParams.builder()\n    .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n    .body(JsonValue.from(<String, Object>Map.of()))\n    .build();\nCacheReserveClearResponse response = client.cache().cacheReserve().clear(params);\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\n\n// Configures using the `cloudflare.apiToken`, `cloudflare.apiKey`, `cloudflare.email`, `cloudflare.apiUserServiceKey` and `cloudflare.baseUrl` system properties\n// Or configures using the `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_API_KEY`, `CLOUDFLARE_EMAIL`, `CLOUDFLARE_API_USER_SERVICE_KEY` and `CLOUDFLARE_BASE_URL` environment variables\nCloudflareClient client = CloudflareOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    .apiToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    // Configures using the `cloudflare.apiToken`, `cloudflare.apiKey`, `cloudflare.email`, `cloudflare.apiUserServiceKey` and `cloudflare.baseUrl` system properties\n    // Or configures using the `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_API_KEY`, `CLOUDFLARE_EMAIL`, `CLOUDFLARE_API_USER_SERVICE_KEY` and `CLOUDFLARE_BASE_URL` environment variables\n    .fromEnv()\n    .apiToken("Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter           | System property                | Environment variable              | Required | Default value                            |\n| ---------------- | ------------------------------ | --------------------------------- | -------- | ---------------------------------------- |\n| `apiToken`       | `cloudflare.apiToken`          | `CLOUDFLARE_API_TOKEN`            | false    | -                                        |\n| `apiKey`         | `cloudflare.apiKey`            | `CLOUDFLARE_API_KEY`              | false    | -                                        |\n| `apiEmail`       | `cloudflare.email`             | `CLOUDFLARE_EMAIL`                | false    | -                                        |\n| `userServiceKey` | `cloudflare.apiUserServiceKey` | `CLOUDFLARE_API_USER_SERVICE_KEY` | false    | -                                        |\n| `baseUrl`        | `cloudflare.baseUrl`           | `CLOUDFLARE_BASE_URL`             | true     | `"https://api.cloudflare.com/client/v4"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\n\nCloudflareClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Cloudflare API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.cache().cacheReserve().clear(...)` should be called with an instance of `CacheReserveClearParams`, and it     will return an instance of `CacheReserveClearResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\nimport java.util.Map;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `cloudflare.apiToken`, `cloudflare.apiKey`, `cloudflare.email`, `cloudflare.apiUserServiceKey` and `cloudflare.baseUrl` system properties\n// Or configures using the `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_API_KEY`, `CLOUDFLARE_EMAIL`, `CLOUDFLARE_API_USER_SERVICE_KEY` and `CLOUDFLARE_BASE_URL` environment variables\nCloudflareClient client = CloudflareOkHttpClient.fromEnv();\n\nCacheReserveClearParams params = CacheReserveClearParams.builder()\n    .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n    .body(JsonValue.from(<String, Object>Map.of()))\n    .build();\nCompletableFuture<CacheReserveClearResponse> response = client.async().cache().cacheReserve().clear(params);\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.cloudflare.client.CloudflareClientAsync;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClientAsync;\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\nimport java.util.Map;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `cloudflare.apiToken`, `cloudflare.apiKey`, `cloudflare.email`, `cloudflare.apiUserServiceKey` and `cloudflare.baseUrl` system properties\n// Or configures using the `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_API_KEY`, `CLOUDFLARE_EMAIL`, `CLOUDFLARE_API_USER_SERVICE_KEY` and `CLOUDFLARE_BASE_URL` environment variables\nCloudflareClientAsync client = CloudflareOkHttpClientAsync.fromEnv();\n\nCacheReserveClearParams params = CacheReserveClearParams.builder()\n    .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n    .body(JsonValue.from(<String, Object>Map.of()))\n    .build();\nCompletableFuture<CacheReserveClearResponse> response = client.cache().cacheReserve().clear(params);\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.core.http.Headers;\nimport com.cloudflare.core.http.HttpResponseFor;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\nimport java.util.Map;\n\nCacheReserveClearParams params = CacheReserveClearParams.builder()\n    .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n    .body(JsonValue.from(<String, Object>Map.of()))\n    .build();\nHttpResponseFor<CacheReserveClearResponse> response = client.cache().cacheReserve().withRawResponse().clear(params);\n\nint statusCode = response.statusCode();\nHeaders headers = response.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\n\nCacheReserveClearResponse parsedResponse = response.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`CloudflareServiceException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/CloudflareServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/UnexpectedStatusCodeException.kt) |\n\n- [`CloudflareIoException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/CloudflareIoException.kt): I/O networking errors.\n\n- [`CloudflareRetryableException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/CloudflareRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`CloudflareInvalidDataException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/CloudflareInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`CloudflareException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/CloudflareException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `CLOUDFLARE_LOG` environment variable to   `info`:\n\n```sh\nexport CLOUDFLARE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport CLOUDFLARE_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `cloudflare-java-core` is published with a     [configuration file](cloudflare-java-core/src/main/resources/META-INF/proguard/cloudflare-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`CloudflareOkHttpClient`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClient.kt) or     [`CloudflareOkHttpClientAsync`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\n\nCacheReserveClearResponse response = client.cache().cacheReserve().clear(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport java.time.Duration;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\nimport java.time.Duration;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `cloudflare-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`CloudflareClient`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClient.kt), [`CloudflareClientAsync`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientAsync.kt),             [`CloudflareClientImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientImpl.kt), and [`CloudflareClientAsyncImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `cloudflare-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`CloudflareOkHttpClient`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClient.kt) and [`CloudflareOkHttpClientAsync`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClientAsync.kt), which             provide a way to construct [`CloudflareClientImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientImpl.kt) and             [`CloudflareClientAsyncImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientAsyncImpl.kt), respectively, using OkHttp\n- `cloudflare-java`\n  - Depends on and exposes the APIs of both `cloudflare-java-core` and `cloudflare-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`cloudflare-java` dependency](#installation) with `cloudflare-java-core`\n2. Copy `cloudflare-java-client-okhttp`\'s [`OkHttpClient`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`CloudflareClientImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientImpl.kt) or [`CloudflareClientAsyncImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientAsyncImpl.kt), similarly to        [`CloudflareOkHttpClient`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClient.kt) or [`CloudflareOkHttpClientAsync`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`cloudflare-java` dependency](#installation) with `cloudflare-java-core`\n2. Write a class that implements the [`HttpClient`](cloudflare-java-core/src/main/kotlin/com/cloudflare/core/http/HttpClient.kt) interface\n3. Construct [`CloudflareClientImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientImpl.kt) or [`CloudflareClientAsyncImpl`](cloudflare-java-core/src/main/kotlin/com/cloudflare/client/CloudflareClientAsyncImpl.kt), similarly to        [`CloudflareOkHttpClient`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClient.kt) or [`CloudflareOkHttpClientAsync`](cloudflare-java-client-okhttp/src/main/kotlin/com/cloudflare/client/okhttp/CloudflareOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\n\nCacheReserveClearParams params = CacheReserveClearParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.variants.VariantEditParams;\n\nVariantEditParams params = VariantEditParams.builder()\n    .value(VariantEditParams.Value.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](cloudflare-java-core/src/main/kotlin/com/cloudflare/core/Values.kt) object to its setter:\n\n```java\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\nimport java.util.Map;\n\nCacheReserveClearParams params = CacheReserveClearParams.builder()\n    .zoneId("023e105f4ecef8ad9ca31a8372d0c353")\n    .body(JsonValue.from(<String, Object>Map.of()))\n    .build();\n```\n\nThe most straightforward way to create a [`JsonValue`](cloudflare-java-core/src/main/kotlin/com/cloudflare/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.cloudflare.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](cloudflare-java-core/src/main/kotlin/com/cloudflare/core/Values.kt):\n\n```java\nimport com.cloudflare.core.JsonMissing;\nimport com.cloudflare.core.JsonValue;\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearParams;\nimport java.util.Map;\n\nCacheReserveClearParams params = CacheReserveClearParams.builder()\n    .body(JsonValue.from(<String, Object>Map.of()))\n    .zoneId(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.cloudflare.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.cache().cacheReserve().clear(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.cloudflare.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.cache().cacheReserve().clear(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`CloudflareInvalidDataException`](cloudflare-java-core/src/main/kotlin/com/cloudflare/errors/CloudflareInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\n\nCacheReserveClearResponse response = client.cache().cacheReserve().clear(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.cloudflare.models.cache.cachereserve.CacheReserveClearResponse;\n\nCacheReserveClearResponse response = client.cache().cacheReserve().clear(\n  params, RequestOptions.builder().responseValidation(true).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.cloudflare.client.CloudflareClient;\nimport com.cloudflare.client.okhttp.CloudflareOkHttpClient;\n\nCloudflareClient client = CloudflareOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cloudflare/cloudflare-java/issues) with questions, bugs, or suggestions.\n',
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
