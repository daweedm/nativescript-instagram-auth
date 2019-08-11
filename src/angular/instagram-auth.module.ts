import {NgModule, ModuleWithProviders} from '@angular/core';
import {InstagramAuthConfig, InstagramAuthConfigService, InstagramAuthService} from './instagram-auth.service';
import {LoginComponent} from "./components/login.component";
import {NativeScriptCommonModule} from "nativescript-angular/common";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    entryComponents: [LoginComponent]
})
export class InstagramAuthModule {
    static forRoot(config: InstagramAuthConfig): ModuleWithProviders {
        return {
            ngModule: InstagramAuthModule,
            providers: [
                InstagramAuthService,
                {
                    provide: InstagramAuthConfigService,
                    useValue: config
                }
            ]
        };
    }
}
