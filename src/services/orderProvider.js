/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var services = [
    {
        name: 'Web Development',
        price: 300,
        active:false
    },{
        name: 'Design',
        price: 400,
        active:false
    },{
        name: 'Integration',
        price: 250,
        active:false
    },{
        name: 'Training',
        price: 220,
        active:false
    }
];

orderApp
        .service("orderProvider", function(){
            this.getAmounts = function(){
                return services;
            };
        });

