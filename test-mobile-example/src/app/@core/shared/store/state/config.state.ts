export interface IConfig {
  adminName: string;
  permissions?: string[];
}

export interface IConfigState {
  config: IConfig;
}

export  const initilaConfigState: IConfigState = {
  config: null
};
