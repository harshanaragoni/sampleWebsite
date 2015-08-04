'use strict';

angular.module('vkApp')

    .factory('AddParts', function ($resource, GE, Validate) {
        //var serviceUrl = 'stub/repair/form.json';
        var serviceUrl = GE.serviceUrl + 'repairParts/addParts';
        return $resource(serviceUrl, [], {
            'create': {
                method: 'POST',
                data: '@partsformdata'
            },
            'update': {
                method: 'PUT',
                data: '@task'
            }
        });
    })
    .factory('InternalParts', function ($resource, GE, Validate) {
        var serviceUrl = GE.serviceUrl + 'part/getInternalPart';
        return $resource(serviceUrl, [], {
            'read': {
                method: 'GET',
                isArray:true,
                transformResponse: Validate.service    
            }
        });
    })
   