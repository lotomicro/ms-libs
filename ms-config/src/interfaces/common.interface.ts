export interface MicroServiceConfigOptions {
  host: string;
  port: number;
}

export interface GlobalConfigSchema {
  env: string;
  logLevel: string;

  userCenter?: MicroServiceConfigOptions;
}
