var page = require('webpage').create();
console.log('Here we go');​
page.open('https://id.getharvest.com/sessions/new', function() {
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
		page.evaluate(function() {
			$('#email').val('stephan@matise.nl');
			$('#password').val('password');
			$('#log-in').click();
		});
		setTimeout(function() {
			var eval = page.evaluate(function() {
				return $('#forecast-accounts a').first().attr('href');
			});
			page.open('https://id.getharvest.com' + eval, function() {
				page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
					var localStorageObj = page.evaluate(function() {
						return localStorage.getItem('account_id');
					});
					console.log(localStorageObj);
					setTimeout(function() {
						var localStorageObj2 = page.evaluate(function() {
							return localStorage.getItem('access_token');
						});
						console.log(localStorageObj2);​
						page.render("page.png");
						phantom.exit();​
					}, 1000);
				});
			});
		}, 5000);​
	});
});
