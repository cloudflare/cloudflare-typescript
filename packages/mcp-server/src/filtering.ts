// @ts-nocheck
import initJq from 'jq-web';

export async function maybeFilter(args: Record<string, unknown> | undefined, response: any): Promise<any> {
  const jqFilter = args?.['jq_filter'];
  if (jqFilter && typeof jqFilter === 'string') {
    return await jq(response, jqFilter);
  } else {
    return response;
  }
}

async function jq(json: any, jqFilter: string) {
  return (await initJq).json(json, jqFilter);
}
