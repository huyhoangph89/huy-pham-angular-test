import { constants } from '../constants/constants';

const env = 'local';

export const environment = {
    production: false,
    environment: env,
    ...constants,
};
