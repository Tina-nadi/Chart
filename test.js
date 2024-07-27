
        // const bicycle={
        //     bell:function(){
        //         return "ring";
        //     }

        // }
        // function ringthebell(thing){
        //     console.log(thing.bell())
        // }
        // ringthebell(bicycle)

        // const purchese={
        //     shoes : 50,
        //     count : 2,
        //     total :function(){
        //         return this.shoes * this.count ;
        //     }
        // }

        // console.log(purchese.total())

        // const colors = ['red','orange','yellow']
        // for (var x of colors) {
        //     console.log(x);
        // }
        // var clothingItem = {
        //     price: 50,
        //     color: 'beige',
        //     material: 'cotton',
        //     season: 'autumn'
        // }
        
        // for( const key of Object.keys(clothingItem) ) {
        //     console.log(key, ":", clothingItem[key])
        // }

        function testBracketsDynamicAccess() {
            var dynamicKey;
            if(Math.random() > 0.5) {
              dynamicKey = "speed";
             }else{
               dynamicKey = "color";
             }
          
              var drone = {
                speed: 15,
                color: "orange"
              }
          
              console.log(drone[dynamicKey]);
          }
          testBracketsDynamicAccess();
        