/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Create the instant search filter

instantSearchApp.filter('searchFor', function(){
    
    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    
    return function(arr, searchString){
        console.log(arr);
        console.log(searchString);
        
        if(!searchString){
            return arr;
        }
        
        var result = [];
        
        searchString = searchString.toLowerCase();
        
        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){
            
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
            
        });
        
        return result;
    };
    
});
