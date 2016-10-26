ServiceLeaderboard.$inject = ['$http'];

export default function ServiceLeaderboard($http) {
  return $http.get('https://apis.trainheroic.com/public/leaderboard/468425');
};
