/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

app
        .controller("todoListController", function($scope, elementProvider){
            $scope.elements = elementProvider.getElements();
            
            
            $scope.insertElement = function(){
                if(!$scope.newElement) {
                    $scope.errorText = "Vous ne pouvez pas ajouter un élément vide.";
                    return;
                }
                
                var searchElement = $scope.elements.indexOf($scope.newElement);
                
                if(searchElement == -1) {
                    $scope.elements = elementProvider.addElement($scope.newElement);
                    $scope.newElement = "";
                    $scope.errorText = "";
                    $scope.form.$setPristine();
                } else {
                    $scope.errorText = "Cet élément existe déjà sur la TODO list.";
                }
            }
            
            
            $scope.removeElement = function(index){
                $scope.elements = elementProvider.deleteElement(index);
                $scope.errorText = "";
            }
        });
        
        
