// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export const readEnv = (env: string): string | undefined => {
  if (typeof (globalThis as any).process !== 'undefined') {
    return (globalThis as any).process.env?.[env]?.trim() || undefined;
  } else if (typeof (globalThis as any).Deno !== 'undefined') {
    return (globalThis as any).Deno.env?.get?.(env)?.trim() || undefined;
  }
  return;
};

export const readEnvOrError = (env: string): string => {
  let envValue = readEnv(env);
  if (envValue === undefined) {
    throw new Error(`Environment variable ${env} is not set`);
  }
  return envValue;
};

export const requireValue = <T>(value: T | undefined, description: string): T => {
  if (value === undefined) {
    throw new Error(`Missing required value: ${description}`);
  }
  return value;
};
