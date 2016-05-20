(function(){

    var numComments = 3;
    var comments = document.querySelector(".comments");

    for(var i = 0; i < numComments; i++ ){

        var div = document.createElement("div");
        div.setAttribute("class", "comment" );
        var text = document.createTextNode("Comment" + i);
        div.appendChild(text);
        comments.appendChild(div);

    }

})()

function addReview(){
    var showAddReview = document.querySelector(".addReview");
    showAddReview.style.display = "block";
}
function saveData(){

    var existingData = JSON.parse(localStorage.getItem('dataModel'));



    //get values from elements
    //constract an object
    var review = {
        title: document.querySelector('#title').value,
        imgURL: document.querySelector('#imgURL').value,
        review: document.querySelector('#review').value
    }

    if(!existingData) {
        existingData = {
            locations:[{id:'abc',label:"london",reviews:[]}]
        };
    }

    existingData.locations[0].reviews.push(review);
    //turn object to str
    //save to localhost
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var imgURL = document.querySelector('#imgURL').value;
     if (!imgURL.match(regex) ){
          localStorage.setItem('dataModel', JSON.stringify(existingData));
     }


}
