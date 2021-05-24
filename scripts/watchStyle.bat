@echo off

cd %~dp0/../style
sass --watch sass/style.scss css/easy-components.min.css --style compressed