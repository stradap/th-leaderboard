export default class MainCtrl {
  constructor (ServiceLeaderboard, $scope) {
    this.serviceLeaderboard = ServiceLeaderboard;
    this.scope = $scope;
    this.trophy = require('../assets/trophy-variant.svg');
    this.athletes = [];
    this.showAthletes = [];
    this.interval = null;

    this.getAthletes();
  }

  getAthletes() {
    this.serviceLeaderboard
      .success((result) => {
        this.athletes = result.results.slice(0);
        if (this.interval) {
          clearInterval(this.interval);
        }
        this.setTransition();
        this.getNextGroup();
      })
      .error((error) => {
        console.log('error: ', error);
      });
  }

  setTransition() {
    this.interval = setInterval(
      () => {
        const length = this.showAthletes.length;

        if(length != this.athletes.length) {
          this.getNextGroup();
          this.scope.$apply();
        } else {
          this.getAthletes();
        }
      },
      5000
    );
  }

  getNextGroup() {
    this.showAthletes = this.athletes.length > 5 ? this.athletes.splice(0, 5) : this.athletes;
  }
};

MainCtrl.$inject = ['ServiceLeaderboard', '$scope'];
