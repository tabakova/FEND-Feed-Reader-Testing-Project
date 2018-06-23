/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {
 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
           it('have a URL defined and a URL is not empty', function () {

            for (i = 0; i < allFeeds.length; i++) {
                const feed = allFeeds[i];

                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
          it('have a name defined and a name is not empty', function () {

            for (i = 0; i < allFeeds.length; i++) {
                const feed = allFeeds[i];

                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        });
    });


    /* A new test suite named "The menu" */

        /* A test that ensures the menu element is
         * hidden by default.
         */
    describe('The menu', function () {

        it('is hidden by default', function () {

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('changes visibility when menu icon is clicked', function () {
            const menuIcon = $('.menu-icon-link');

            // first click
            menuIcon.trigger('click')
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // second click
            menuIcon.trigger('click')
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        const feedContainer = $('.feed');

        beforeEach(function (done) {
            feedContainer.empty();
            loadFeed(0, done);
        });

        it('are filled into the container on load', function (done) {

            expect(feedContainer.find('.entry').length).not.toBe(0);
            done();
        });
    });
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        const feedContainer = $('.feed');
        let firstFeed;

        beforeEach(function (done) {
            feedContainer.empty();
            loadFeed(0, function () {
                // stores initial feed content
                firstFeed = $('.feed').html();
                // changes content
                loadFeed(1, done);
            });
        });

        
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('updates content when a new feed is loaded', function (done) {

            expect($('.feed').html()).not.toBe(firstFeed);
            done();
        });

        it('throws an error when feed id is out of bounds', function (done) {
            expect(function () {
                loadFeed(allFeeds.length + 1);
            }).toThrowError(TypeError);
            done();
        });
    });
}());
