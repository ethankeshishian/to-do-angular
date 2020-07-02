// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: { //copied from online, this has some other extra fields and a different name.
    apiKey: "AIzaSyDUND5N7s0bpSP_R6SYrekgUqRjFcTuwJU",
    authDomain: "todo-deae7.firebaseapp.com",
    databaseURL: "https://todo-deae7.firebaseio.com",
    projectId: "todo-deae7",
    storageBucket: "todo-deae7.appspot.com",
    messagingSenderId: "313223235819",
    appId: "1:313223235819:web:af7278ab1c736ef64556ae",
    measurementId: "G-0BJYV9RRW3"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
