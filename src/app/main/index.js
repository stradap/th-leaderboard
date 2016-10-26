import Controller from './MainCtrl';
import States from './MainState';

import './style.scss';

export default app =>  {
    app
        .controller('MainCtrl', Controller)
        .config(States);
};
