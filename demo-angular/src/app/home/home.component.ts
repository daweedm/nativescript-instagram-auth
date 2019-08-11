import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {LoginComponent} from "nativescript-instagram-auth/angular";
import {ModalDialogOptions, ModalDialogService} from "nativescript-angular";
import {InstagramLoginResponse} from "nativescript-instagram-auth/src/angular/components/login.component";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
    }

    private igLogin(): Promise<InstagramLoginResponse> {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: {},
            fullscreen: true
        };

        return this.modalService.showModal(LoginComponent, options);
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.igLogin().then(({error, token}) => {
            if (error) {
                // the user cancelled the login process or an error raised
            } else {
                console.log(`access token: ${token}`);
            }
        });
    }

    onAccessToken(token: string) {
        console.log(token);
    }
}
