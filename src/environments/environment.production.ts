import { constants } from '../constants/constants';

const env = 'production';

export const environment = {
    production: true,
    environment: env,
    ...constants
};
