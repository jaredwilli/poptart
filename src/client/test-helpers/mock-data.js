/* jshint -W079 */
var mockData = (function() {
    return {
        getMockPeople: getMockPeople,
        getMockStates: getMockStates
    };

    function getMockStates() {
        return [{
            state: 'dashboard',
            config: {
                url: '/',
                templateUrl: 'app/dashboard/dashboard.html',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }];
    }

    function getMockPeople() {
        return {
            total: 8,
            results: [{
                id: 1,
                firstName: 'Jared',
                lastName: 'Williams`',
                age: 33,
                location: 'Massachusetts'
            }, {
                id: 2,
                firstName: 'Ward',
                lastName: 'Bell',
                age: 31,
                location: 'California'
            }, {
                id: 3,
                firstName: 'Colleen',
                lastName: 'Jones',
                age: 21,
                location: 'New York'
            }, {
                id: 4,
                firstName: 'Madelyn',
                lastName: 'Green',
                age: 18,
                location: 'North Dakota'
            }, {
                id: 5,
                firstName: 'Ella',
                lastName: 'Jobs',
                age: 18,
                location: 'South Dakota'
            }, {
                id: 6,
                firstName: 'Landon',
                lastName: 'Gates',
                age: 11,
                location: 'South Carolina'
            }, {
                id: 7,
                firstName: 'Haley',
                lastName: 'Guthrie',
                age: 35,
                location: 'Wyoming'
            }, {
                id: 8,
                firstName: 'Aaron',
                lastName: 'Jinglehiemer',
                age: 22,
                location: 'Utah'
            }]
        };
    }
})();
