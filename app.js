(function () {

    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;

        store.products = [];

        $http.get('http://localhost:11395/AngularJS-Flatlanders-Gem-Store/products.json').success(function (data) {
            store.products = data;
        });
    }]);

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Some gems have hidden qualities beyond their luster and shine.',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                },
                {
                    full: 'dodecahedron-02-full.jpg',
                    thumb: 'dodecahedron-02-thumb.jpg'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'This is the best gem for your buck!',
                    author: 'shawn.mann@gmail.com'
                }
            ]
        },
        {
            name: 'Prismatic',
            price: 6,
            description: 'So pretty!',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'prismatic-01-full.jpg',
                    thumb: 'prismatic-01-thumb.jpg'
                },
                {
                    full: 'prismatic-02-full.jpg',
                    thumb: 'prismatic-02-thumb.jpg'
                }
            ]
        },
    ];

})();