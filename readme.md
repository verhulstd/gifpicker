# React gifpicker component

[![npm](https://img.shields.io/static/v1?label=npm&message=v1.1.2&color=informational)](https://www.npmjs.com/package/gifpicker)
[![npm](https://img.shields.io/static/v1?label=minified%20size&message=80,08%20kB&color=success)](https://www.npmjs.com/package/gifpicker)
[![codecov](https://codecov.io/gh/verhulstd/gifpicker/branch/master/graph/badge.svg)](https://codecov.io/gh/verhulstd/gifpicker)

Easy to implement React gifpicker field with searchsuggestions using the Tenor api.

![alt text](https://raw.githubusercontent.com/verhulstd/gifpicker/npm-library/shot.png "Component screenshot")

## Demo

https://gif-picker.surge.sh

## Prerequisite

Request a free api key @ https://tenor.com/gifapi/documentation

## Install

    npm i gifpicker

or

    yarn add gifpicker

## Import

    import GifPicker from 'gifpicker';
    import 'gifpicker/dist/style.css';

## Usage

1.  add prop apikey
2.  add prop function onSelect to capture the chosen gifUrl

    <GifPicker apikey="XXXXXXXXX" onSelect={gifUrl => console.log(gifUrl)} />
