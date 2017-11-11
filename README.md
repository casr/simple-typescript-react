Simple TypeScript React
=======================

A simple strict checked React + Typescript project.


Getting started
---------------

    npm install
    npm run -s watch
    npx http-server public -c-1 -p 3000


Notes
-----

When in watch mode, if an error occurs in TypeScript then the bundle
step will still proceed and an error will be logged on the console.
If you would like a more prominent error you can use:

    npm run -s watch:strict

instead and the error will be displayed directly on the webpage.


Licence
-------

Public domain
