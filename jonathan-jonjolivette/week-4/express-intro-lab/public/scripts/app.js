$( document ).ready( function() {
   // console.log( 'Jquery is working!' )
   const handleSuccess = ( res ) => {
      $(".msg").text("ajax content successful");
   };
   const handleError = ( xhr, status, errorThrown ) => console.log( status );
   let test =
     $.ajax( {
        method: 'GET',
        url: 'http://localhost:3000/api/albums',
        success: handleSuccess,
        error: handleError
     } );

// Dynamically creating dom elements to inject page with the ajax content


}); //document.ready concludes here
// console.log( "Sanity Check: JS in app.js is working!" );



// $(document).ajaxSuccess(function() {
//   $( ".log" ).text( "Triggered ajaxSuccess handler." );
// });
