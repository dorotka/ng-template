Template for angular using sass and bootstrap-sass

@author: Dorotka O.

========================================================================

To run it locally with node:
npm install http-server
http-server ./src/public

Or replace the npm server and script with the one from angular 2 template for running the template light

in case you want to fix the npm server 
https://gist.github.com/DanHerbert/9520689

=======================================================================

Basic structure:

-- public
    -- media
        -- images
    -- scripts
        -- app
            - app.js
            -- home
            -- test-feature
            -- partials
        -- vendor
    -- styles
        - app.css
        -- src
            - app.scss
            - _test.scss
        -- vendor
            - _boostrap.scss
            -- bootstrap
            -- fonts
    - index.html

========================================================================
Styles:

Partial sass files ( _bootstrap.scss and _test.scss) are included in app.scss that is being compiled into app.css

Index.html:

Index file includes basic html structure with binding to the myApp angular module. It includes js scripts and styles. 
Index file uses ng-view and $routeProvider for routing.
Index file contains basic bootstrap working nav.
Templates for views are in /scripts/partials/templates folder.
Index file includes twitter and facebook meta tags that need to be updated when used.

Scripts:

app.js contains the main app module with the basic routes defined using $routeProvider.
Modules that are being used for each view are in their own folder ( home folder and test-feature folder) and should contain all the components for the feature/module like controllers, directives, services in respective folders.
_module.js defines the feature module and needs to be injected in app.js


