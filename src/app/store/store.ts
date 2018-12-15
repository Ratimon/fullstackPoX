export class Store {
    private subsribers: Function[];
    private reducers: {[key: string]: Function };
    private state: {[key: string]: any};

    constructor(reducers = {}, initialState = {}) {
      this.reducers = reducers;  
      this.state = initialState;
    }

    get value() {
        return this.state;
    }

    // dispatch(action) {
    //     this.state = this.reduce()
    // }

    private reduce(state, action) { 
        const newState = {}
    }
}