# Bootstrap 3 RTL Theme &nbsp;&nbsp;![Build Status](https://travis-ci.org/ratnic/bootstrap-rtl.png)

> Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development.

Bootstrap RTL provides simple yet robust right-to-left capability for Bootstrap 3, by employing new theming feature of it. Simply put its CSS after bootstrap's original CSS, to the pages designed by Bootstrap 3. It works just like an extension on top of the original Bootstrap:

```html
<!-- Original Bootstrap 3.x -->
<link rel="stylesheet" href="bootstrap.css">

<!-- Bootstrap RTL Theme -->
<link rel="stylesheet" href="bootstrap-rtl.css">
```

## Quick start

To get started, **[download latest version](https://github.com/morteza/bootstrap-rtl/releases/latest)**. Check `examples/` directory for more. It's just like Bootstrap 3, nothing special. You can also install it via bower:

* Run `bower install bootstrap-rtl` and latest version will be installed under *bower_components/bootstrap-rtl/* directory.

In addition to bootstrap distribution, LESS codes for RTL theme and compiled CSS (`bootstrap-rtl.css`) are provided, as well as minified CSS (`bootstrap-rtl.min.css`). Check `dist/` directory for all the codes you need.

Check `examples/starter-template/index.html` for a minimal template to start with.

#### Fonts
*Glyphicons* and ~~Iranian Sans~~ are included for icons and farsi scripts, respectively.

## Building CSS and JavaScript

Bootstrap RTL uses [Grunt](http://gruntjs.com/) for working with the framework. Follow these simple steps to prepare and compile:

1. Run `npm install` to download and prepare dependencies.
2. Run `grunt`, and check `dist/` directory for outputs.

## Development

Contributors to Bootstrap RTL must agree the license by signing on the bottom of the `CONTRIBUTORS.md` file. To contribute:

- [fork the bootstrap-rtl repository](https://github.com/morteza/bootstrap-rtl/fork).
- make your changes
- *first time contributors*: Sign `CONTRIBUTORS.md` by adding your github username, full name, email address, and first contribution date. As follows:
    `YYYY/MM/DD, Github Username, Full Name, Email Address`
- commit your changes.
- send a pull request.


***Important Notice:* Before submitting any pull request, please ensure that your changes merge cleanly with the main repository at morteza/bootstrap-rtl.**


### Feature requests, and bug fixes

If you want a feature or a bug fixed, [report it via project's issues tracker](https://github.com/morteza/bootstrap-rtl/issues). However, if it's something you can fix yourself, *fork* the project, *do* whatever it takes to resolve it, and finally submit a *pull* request. I will personally thank you, and add your name to the list of contributors.

## Author

**Morteza Ansarinia**

+ [http://github.com/morteza](http://github.com/morteza)


## Copyright and license


#### Bootstrap RTL
See the file [LICENSE](LICENSE) for the full license governing this project.

#### Bootstrap
&copy; 2013 Twitter, Inc. Under [the Apache 2.0 license](LICENSE.bootstrap).

