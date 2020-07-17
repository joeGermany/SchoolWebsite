// @ts-nocheck

// let browserHistory = ReactRouter.browserHistory;
// let Router = ReactRouter.Router;
// let Route = ReactRouter.Route;
// let IndexRoute = ReactRouter.IndexRoute;
// let Link = ReactRouter.Link;

// let Router = ReactRouter.BrowserRouter;
// let Switch = ReactRouter.Switch;
// let Route = ReactRouter.Route;
const
    Router = ReactRouterDOM.Router,
    Route = ReactRouterDOM.Route,
    Switch = ReactRouterDOM.Switch,
    Link = ReactRouterDOM.Link;
    

const App = (props) => {
    // let content;
    // switch (window.location.pathname) {
    //     case '/index.html':
    //         content = <Login />
    //         break;

    //     case '/adminDashboard.html':
    //         content = <AdminDashboard />
    //         break;
    // }

    return (
        // everything inside Router has the ability to use Router
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/adminDashboard" component={AdminDashboard}/>
                </Switch>
            </div>
        </Router>
        
        // <div>
        //     <Home />
        // </div>
    );
} 

// export default App;