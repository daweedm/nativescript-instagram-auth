import {Component} from "@angular/core";
import {LoadEventData, WebView} from "tns-core-modules/ui/web-view";
import {InstagramAuthService} from "../instagram-auth.service";
import {ModalDialogParams} from "nativescript-angular";

export interface InstagramLoginResponse {
    error?: Error;
    token?: string;
}

@Component({
    selector: 'instagram-auth',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    moduleId: module.id,
})
export class LoginComponent {
    protected webViewSrc: string;

    constructor(private params: ModalDialogParams, private instagramAuth: InstagramAuthService) {
        this.webViewSrc = this.instagramAuth.getEndPoint('basic', true);
    }

    protected cancel() {
        this.params.closeCallback(new Error('User canceled the login process'));
    }

    public onLoadStarted(args: LoadEventData) {
        const {error, url} = args;
        try {
            if (error) {
                throw new Error(error);
            } else if (url.startsWith(this.instagramAuth.getConfig().redirectUri)) { // Intercept the redirect made by Instagram
                // Retrieve the token from the callback URL
                const parsedUrl = url.match(/access_token=([^&]*)/);
                if (!parsedUrl) {
                    throw new Error('User canceled the login process');
                }
                const accessToken: string = parsedUrl[1];
                this.params.closeCallback({
                    token: accessToken
                } as InstagramLoginResponse);

                (<WebView>args.object).stopLoading();
            }
        } catch (e) {
            this.params.closeCallback({
                error: e
            } as InstagramLoginResponse);
        }
    }
}
