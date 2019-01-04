import { AccountsService } from './accounts.service';
import { AssetsService } from './assets.service';

export const services: any[] = [AssetsService, AccountsService];

export * from './accounts.service';
export * from './assets.service';
