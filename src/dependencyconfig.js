var require = 
    {
        paths:
        {
            "angular": "dependencies/angular/angular.min",
            "ui-router": "dependencies/ui-router/release/angular-ui-router.min",
            "app": "app",
            "ui-bootstrap": "dependencies/angular-bootstrap/ui-bootstrap-tpls.min",
            "jquery": "dependencies/jquery/dist/jquery.min",
            "angular-formly": "dependencies/angular-formly/dist/formly.min",
            "formly-template-bootstrap": "dependencies/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min",
            "api-check": "dependencies/api-check/dist/api-check.min"
        },
        shim:
        {
            "app":
            {
                deps: ["ui-router", "ui-bootstrap", "angular-formly", "formly-template-bootstrap"]
            },
            "ui-router":
            {
                deps: ["angular"]
            },
            "angular": 
            {
                exports: "angular",
                deps: ["jquery"]
            },
            "ui-bootstrap":
            {
                deps: ["angular"]
            },
            "angular-formly":
            {
                deps: ["angular", "api-check"]
            },
            "formly-template-bootstrap":
            {
                deps: ["angular"]
            }
        },
        deps:
        [
        ]
    };