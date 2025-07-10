export async function maybeFilter(args: Record<string, unknown> | undefined, response: any): Promise<any> {
  const jqFilter = args?.['jq_filter'];
  if (jqFilter && typeof jqFilter === 'string') {
    return await jq(response, jqFilter);
  } else {
    return response;
  }
}

var jqWeb = require('jq-web');
async function jq(json: any, jqFilter: string) {
  return (await jqWeb).json(json, jqFilter);
}
