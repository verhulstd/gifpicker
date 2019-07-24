# React gifpicker component

Easy to implement gifpicker field using the Tenor api.

![alt text](https://raw.githubusercontent.com/verhulstd/gifpicker/npm-library/shot.png "Component screenshot")

## Install

    npm i gifpicker

or

    yarn add gifpicker

## Import

    import GifPicker from 'gifpicker';
    import "gifpicker/dist/style.css";

## Usage

    <GifPicker apikey="XXXXXXXXX" />

After searching for a certrain gif a hidden input-field with the name attribute 'tenorgif' is generated

    <input type="hidden" name="tenorgif" value="https://media.tenor.com/images/4f67b48f4938e094532292023a15c632/tenor.gif">
