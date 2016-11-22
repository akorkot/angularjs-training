/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var elements = [
    "Apprendre Angular JS",
    "Apprendre Symfony 2"
];

app
        .service("elementProvider", function(){
            this.getElements = function(){
                return elements;
            };
            this.addElement = function(element){
                elements.push(element);
                return elements;
            };
            this.deleteElement = function(index){
                
                elements.splice(index, 1);
                console.log(index);
                return elements;
            };
        });

