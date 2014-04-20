#!/bin/bash

lessc less/bootstrap-rtl.less dist/css/bootstrap-rtl.css

lessc less/bootstrap-rtl.less dist/css/bootstrap-rtl.min.css -x
