# nativescript-instagram-auth

Easily integrate Instagram login for your NativeScript app (ready only for apps made with angular at the moment)

## Installation

```bash
tns plugin add nativescript-instagram-auth
```

## Configuration
#### Register the module and configure it with your credentials

Note: the redirect uri need to be the same you set on the instagram developers website > manage clients > security

	```javascript
	import {InstagramAuthModule} from "nativescript-instagram-auth/angular";
	// ...
	// Register this module to your angular app
	InstagramAuthModule.forRoot({
	    clientId: 'YOUR_CLIENT_ID',
	    redirectUri: 'A_VALID_REDIRECT_URL'
    })
	
	```

#### Launch the login screen (as a modal only)
	
	```javascript
	
	private igLogin(): Promise<InstagramLoginResponse> {
	    const options: ModalDialogOptions = {
	        viewContainerRef: this.vcRef,
	        context: {},
	        fullscreen: true
        };
        return this.modalService.showModal(LoginComponent, options);
    }
    
    ngOnInit(): void {
        this.igLogin().then(({error, token}) => {
            if (error) {
                // the user cancelled the login process or an error raised
            } else {
                console.log(`access token: ${token}`);
            }
        });
    }
    ```
## Example
Full example available in `demo-angular` folder

## License

Apache License Version 2.0, January 2004
