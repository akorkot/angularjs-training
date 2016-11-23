/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';


var navigationMenuApp = angular.module("navigationMenu", []);
var inlineEditorApp = angular.module("inlineEditor", []);
var orderApp = angular.module("order", []);
var instantSearchApp = angular.module("instantSearch", []);




var app = angular.module("mainApp", ["navigationMenu", "inlineEditor", "order", "instantSearch"]);