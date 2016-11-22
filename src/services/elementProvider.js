/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var elements = [
    "Apprendre Angular JS",
    "Apprendre Symfony 2",
    "Apprendre Zend Framework"
];

app
        .service("elementProvider", function(){
            this.getElements = function(){
                return elements;
            };
    
        });

