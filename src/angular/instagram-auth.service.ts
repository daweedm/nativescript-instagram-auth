import {Injectable} from '@angular/core';
import {InjectionToken, Inject} from '@angular/core';

export interface InstagramAuthConfig {
    clientId: string;
    redirectUri: string;
}

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionToken used to import the config object, provided from the outside
 */
export const InstagramAuthConfigService = new InjectionToken<InstagramAuthConfig>('InstagramAuthConfig');

@Injectable()
export class InstagramAuthService {
    private static API: string = 'https://api.instagram.com/oauth/authorize';

    constructor(@Inject(InstagramAuthConfigService) private config: InstagramAuthConfig) {
    }

    public getEndPoint(scope: string, debug: boolean = false): string {
        return `${InstagramAuthService.API}/?client_id=${this.config.clientId}&redirect_uri=${this.config.redirectUri}&response_type=token&scope=${scope}&DEBUG=${debug.toString()}`;
    }

    public getConfig(): InstagramAuthConfig {
        return this.config;
    }
}
