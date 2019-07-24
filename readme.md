# React gifpicker component

Easy to implement gifpicker field using the Tenor api.

## Install

    npm i gifpicker

or

    yarn add gifpicker

## Usage

import GifPicker from 'gifpicker';

    <GifPicker apikey="XXXXXXXXX" />

After searching for a certrain gif a hidden input-field with the name attribute 'tenorgif' is generated

    <input type="hidden" name="tenorgif" value="https://media.tenor.com/images/4f67b48f4938e094532292023a15c632/tenor.gif">
