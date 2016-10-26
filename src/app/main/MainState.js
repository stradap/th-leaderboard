MainStates.$inject = ['$stateProvider'];

export default function MainStates($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      controller: 'MainCtrl as mainCtrl',
      template: require('./main-page.html')
    });
};
