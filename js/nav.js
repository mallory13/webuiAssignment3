/* DOM ready*/
            $(function(){
                
                // var navTop = $('header').offset().top;
                // console.log(navTop);
                
                // //capture window scroll event
                // $(window).scroll(function(){
                   
                //     if($(window).scrollTop() > navTop){
                //         /* sticky footer button appear */
                //         $('footer a.topbutton').fadeIn(200);
                    
                // }
                // else{
                //     /* sticky footer button dissappear */
                //     $('footer a.topbutton').fadeOut(200);
                // }
                // });
				// /*  click handler to animate scroll to top */
                // $('footer a.topbutton').click(function(event){
                //     /* stop default anchor behavior */
                //     event.preventDefault();
                //     $('body').animate({scrollTop: 0}, 300);

                // });
				// Pullquotes
                $('span.pullquote').each(function(){
                   var parentElem = $(this).parent('p');
                   
                   //clone the span element inside it, add a special class, insert a new paragraph before the parent P.
                   $(this).clone().addClass('pullquote2').prependTo(parentElem); 
                });
			});
			// end DOM ready