import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface InstagramAuthConfig {
    clientId: string;
    redirectUri: string;
}
export declare const InstagramAuthConfigService: InjectionToken<InstagramAuthConfig>;
export declare class InstagramAuthService {
    private config;
    private http;
    private endPoint;
    private static API;
    private headers;
    constructor(config: InstagramAuthConfig, http: HttpClient);
    getEndPoint(scope: string, debug?: boolean): string;
    getConfig(): InstagramAuthConfig;
}
