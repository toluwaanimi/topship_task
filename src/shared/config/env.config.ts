import { config } from 'dotenv';
import * as env from 'env-var';

config();

export const PORT = env.get('PORT').asString();
