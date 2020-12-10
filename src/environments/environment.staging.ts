import { constants } from '../constants/constants';

const env = 'staging';

export const environment = {
    production: false,
    environment: env,
    ...constants,
};
