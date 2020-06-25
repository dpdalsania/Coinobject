const coin = {
    state: 0,
    flip: function() {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        this.state = Math.floor(Math.random() * 2);
    },
    toString: function() {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
       if(this.state == 0){
                return "Heads"
            }else{
                return "Tails"
            }
      },
    toHTML: function() {
        const image = document.createElement('img');
        image.style.width= '80px';
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if(this.state == 0){
            image.src = "image/headimage.jpg"
        }else{
            image.src = "image/tailimage.jpg"
        }
        return image;
    }
};

function display20Flips() {
    const results = [];
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
    for(let display20Flips = 0; display20Flips < 20; display20Flips++){
        coin.flip()
        //console.log(coin.toString())
        results.push(coin.toString())    
    }
    let newElement = document.createElement("div");
    newElement.textContent = results.toString();
    document.body.appendChild(newElement);
    return results;
 // Report the results
}
let displayCoin = display20Flips()

function display20Images() {
    const results = [];
    let imageDiv = document.getElementById('coinImage');
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
    for(let display20Flips = 0; display20Flips < 20; display20Flips++){
        coin.flip()
        console.log(coin.toString())
        console.log(coin.toHTML())
        document.body.appendChild(coin.toHTML())
        results.push(coin.toString())
   }
        return results;
  
 // Report the results
}
let displayImage = display20Images()