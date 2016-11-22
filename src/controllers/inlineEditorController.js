/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

inlineEditorApp
        .controller("inlineEditorController", function($scope) {
           
            $scope.value = "Edit me...";    
            $scope.showtooltip = false;

            $scope.hideTooltip = function(){
                $scope.showtooltip = false;
            };
            
            $scope.toggleTooltip = function(e){
                e.stopPropagation();
                $scope.showtooltip = !$scope.showtooltip;
            }
        });