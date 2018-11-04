How to run:

-   install dependencies ("yarn" / "npm i")
-   run the "start" script ("yarn start" / "npm run start"), it will start the app locally on port 3000
-   tests can be run by "test" script ("yarn test" / "npm run test"), in VS Code test file can be run by hitting F5 key

Implemented features:

-   Adding new boards
-   Routing (each board has its own route)
-   List creation
-   Cards creation - each card has Title and Description
-   Card's Title cannot be empty and it also cannot exceed 30 characters
-   Card's Title and Description are inline-edited
-   Cards can be drag & dropped in the list

Not implemented features:

-   Persistence
-   Drag and drop for a list

Some tech details:

-   Tech stack: React for view, Redux for state, yarn for package management
-   Tests are written written in Jest & Enzyme, currently there are only tests for "boards" reducer and "editable-text-field" component
-   Code is formatted by "Prettier"
-   I run this app only on Windows, it should work the same way on Mac/Linux but you never know...
