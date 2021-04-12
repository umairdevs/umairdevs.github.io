hyddApp.controller('hyddController', function($scope) {

	$scope.pageData = {};
	$scope.pageData.showPaymentForm = false;

	/*
	___________                     __   .__                
	\__    ___/___________    ____ |  | _|__| ____    ____  
	  |    |  \_  __ \__  \ _/ ___\|  |/ /  |/    \  / ___\ 
	  |    |   |  | \// __ \\  \___|    <|  |   |  \/ /_/  >
	  |____|   |__|  (____  /\___  >__|_ \__|___|  /\___  / 
	                      \/     \/     \/       \//_____/  Tracking*/


	$scope.toggleChat = function(isModal) {

		$('.chat-box')[0].scrollTop = $('.chat-box')[0].scrollHeight;
		$('.chat-form .form-control').focus();

		if (isModal) {

			$('.chat-wrapper').addClass('active');
			$('#modal-chat').modal('hide');
		} else {

			$('.chat-wrapper').toggleClass('active');
		}
	}

	$('.toggle-chat').on('click', function(){

	    $(this).toggleClass('active');
	    $scope.toggleChat(false);
	});


	$scope.pageData.rated = false;
	$('.rating-input a').on('mouseover', function() {
	    $(this).addClass('selected');
	    $(this).prevAll('a').addClass('selected');
	})

	$('.rating-input a').on('mouseleave', function() {

		if (!$(this).hasClass('rated')) {

			$(this).removeClass('selected');
		}
	    
	    if ($scope.pageData.rated) {

	        $(this).prevUntil('a.rated').removeClass('selected');
	        // rated = false;
	    } else {

	        $(this).prevAll('a').removeClass('selected');
	    }
	})

	$('.rating-input a').on('click', function(){
	    $(this).addClass('selected rated');
	    $(this).prevAll('a').addClass('selected rated');
	    $(this).nextAll('a').removeClass('selected rated');
	    $scope.pageData.rated = true;
	    $scope.$apply();
	    return false;
	})

})