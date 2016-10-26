import main from './main';
import services from './services';

export default app => {
    INCLUDE_ALL_MODULES([main, services], app);
};
