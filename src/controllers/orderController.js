/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

orderApp
        .controller("orderController", function($scope, orderProvider) {
            // Define the model properties. The view will loop
            // through the services array and genreate a li
            // element for every one of its items.

            $scope.services = orderProvider.getAmounts();
            $scope.toggleActive = function(s){
                    s.active = !s.active;
            };

            // Helper method for calculating the total price

            $scope.total = function(){

                    var total = 0;

                    // Use the angular forEach helper method to
                    // loop through the services array:

                    angular.forEach($scope.services, function(s){
                            if (s.active){
                                    total+= s.price;
                            }
                    });

                    return total;
            };
        });
        
        