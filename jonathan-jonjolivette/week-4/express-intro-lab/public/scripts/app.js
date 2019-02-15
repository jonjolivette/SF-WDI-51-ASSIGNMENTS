$( document ).ready( function() {
   const handleSuccess = json => {
      json.map( (item) => {
         $(".msg").append(`<div>${item.title}</div>`)
      })
   };
   // const success = json =>  $(".msg").append(handleSuccess);
   const handleError = (xhr, status, errorThrown) => console.log('uh oh');


     $.ajax( {
        method: 'GET',
        url: 'http://localhost:3000/api/albums',
        success: handleSuccess,
        error: handleError
     });

   //   In your app.js file, write a jQuery AJAX request to get the taqueria data. 
   //   When the response comes back, display all the taqueria names above the albums on your site's root page (localhost:3000/).

     $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/taquerias',
        success: handleSuccess,
        error: handleError
     });

console.log( "Sanity Check: JS in app.js is working!" );

}); //document.ready concludes here