(function($) { $( document ).ready(function() {
 
    var Input = $('input[name=search_block_form]');
    var default_value = Input.val();

    Input.focus(function() {
        if(Input.val() == default_value) Input.val("");
    }).blur(function(){
        if(Input.val().length == 0) Input.val(default_value);
    });
    
});})(jQuery);