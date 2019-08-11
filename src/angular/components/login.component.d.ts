import { LoadEventData } from "tns-core-modules/ui/web-view";
export declare class LoginComponent {
    protected webViewSrc: string;
    em(): void;
    constructor();
    onLoadStarted(args: LoadEventData): void;
    onLoadFinished(args: LoadEventData): void;
}
