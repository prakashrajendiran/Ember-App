import Route from '@ember/routing/route';

export default class ListRoute extends Route {
    model() {
        return {
            'a': 1,
            'b' : 2
        };
    }
}
