import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {InstagramAuthModule} from "nativescript-instagram-auth/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        InstagramAuthModule.forRoot({
            clientId: 'YOUR_CLIENT_ID',
            redirectUri: 'A_VALID_REDIRECT_URL' // need to be the same you set on the instagram developers website > manage clients > security
        })
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
