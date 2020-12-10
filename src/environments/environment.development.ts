import { constants } from '../constants/constants';

const env = 'development';

export const environment = {
    production: false,
    environment: env,
    ...constants
};
