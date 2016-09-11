window.onload = function() {

    var mapLayer = MQ.mapLayer(), map;
    map = L.map('map', {
        layers: mapLayer,
        center: [ 33.6761901, -117.8696646 ],
        zoom:15
    });

    var product = {
      name: '',
      image: '',
      description: '',
      price: ''
    };

    var productNames = [
      'advil',
      'wine',
      'blanket',
      'pillow',
      'tea',
      'coffee',
      'newspaper',
      'book',
      'sandwich',
      'salad'
    ];

    var prices = [5, 10, 30, 25, 5, 5, 3, 10, 9, 8];

    var descriptions = [
      'Ibuprofen works by reducing hormones that cause inflammation and pain in the body. Advil is used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.',
      'A rich dry wine. Well-balanced, strong and full-bodied with a deep ruby red color. This wine has rich flavors of cedar and blackcurrant. It has the deep flavor of intense fruit and mellow tannins with just a hint of vanilla from the oak.',
      'A large piece of woven material used as a covering for warmth, especially on a bed.',
      'A cloth case stuffed with something soft, such as down, feathers, or foam rubber, used to cushion the head, especially during sleep.',
      'A hot drink made by infusing the dried, crushed leaves of the tea plant in boiling water.',
      'A drink made from the roasted and ground beanlike seeds of a tropical shrub, served hot or iced.',
      'A printed publication (usually issued daily or weekly) consisting of folded unstapled sheets and containing news, feature articles, advertisements, and correspondence.',
      'A written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
      'An item of food consisting of two pieces of bread with meat, cheese, or other filling between them, eaten as a light meal.',
      'A cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients.'
    ];

    var images = [
      '.jpg',
      '.jpg',
      '.jpg',
      '.jpg',
      '.jpg',
      '.jpeg',
      '.jpg',
      '.jpg',
      '.png',
      '.png'
    ];

    InFlight.initService('passenger_data/v1', function(PassengerData){
      PassengerData.getPassengerDataInfo(function(error, person) {
        if(error) {
          alert(`Error! ${error}`)
         } else {
            $('.person-found').append(
              `<strong>Success!</strong>
              ${person.pii.first_name}
              ${person.pii.last_name}
              on flight ${person.travel_info.current_flight.flight_number}
              from ${person.travel_info.current_flight.origin}
              to ${person.travel_info.current_flight.destination}
              is found!`)
        }
      });
  });


    function listProducts() {
    	for (var i = 0; i < productNames.length; i++) {
    		product.name = productNames[i][0].toUpperCase() + productNames[i].substr(1);
    		product.image = `../assets/${productNames[i]}${images[i]}`;
    		product.description = descriptions[i];
    		product.price = prices[i];
    		$('.product-list').append(`
    			<div id="item${i+1}" class="item col-sm-8">
    				<h1>${product.name}</h1>
    				<h2 class="item-price">$${product.price}.00</h2>
    				<hr>
    				<img src = ${product.image}>
    				<p class="item-description">${product.description}</p>
    				<button class="btn btn-primary">Add to cart</button>
    			</div>`)
    	}
    }

    listProducts();

    $('button').click(function(){
	    var name = $(this.parentElement).children("h1").text();
	    var price = $(this.parentElement).children("h2").text();
	    $('tbody').append('<tr><td>' + name + '</td><th>&nbsp;</th><th>&nbsp;</th><td>' + price + '</td></tr>')
    })

  $(window).scroll(function(e){
	  var $el = $('.fixedElement');
	  var isPositionFixed = ($el.css('position') == 'fixed');
	  if ($(this).scrollTop() > 200 && !isPositionFixed){
	    $('.fixedElement').css({'position': 'fixed', 'top': '0px'});
	  }
	  if ($(this).scrollTop() < 200 && isPositionFixed)
	  {
	    $('.fixedElement').css({'position': 'static', 'top': '0px'});
	  }
	});
}