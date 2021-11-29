//https://codeengineered.com/blog/09/12/preloading-images-jquery-and-javascript/



(function($)
{
    var photos = [];

    $.preLoadImages = function() {
        var args_len = arguments.length;
        for (var i = args_len; i--;) 
        {
            var cacheImage = document.createElement('img');
            cacheImage.src = arguments[i];
            cacheImage.push(cacheImage);
        }
    }
})(jQuery)

jQuery.preLoadImages("sunset.jpg", "images/sunset.jpg");