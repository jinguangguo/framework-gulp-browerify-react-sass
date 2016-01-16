/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

import {Toast} from '../component/Toast/Toast';
import {Text} from '../widget/Test/Test.jsx';
import {Photo} from '../widget/Photo/Photo.jsx';

var Router = ReactRouter.Router,
    Route = ReactRouter.Router,
    Link = ReactRouter.Link;

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
});

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
});

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
});

//ReactDOM.render((
//    <Router>
//        <Route path="/" component={App}>
//            <Route path="about" component={About} />
//            <Route path="inbox" component={Inbox}>
//                <Route path="messages/:id" component={Message} />
//            </Route>
//        </Route>
//    </Router>
//), document.body);

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: 'about',
            component: About
        },
        {
            path: 'inbox',
            component: Inbox,
            childRoutes: [
                {
                    path: 'messages/:id',
                    component: Message
                }
            ]
        }
    ]
};

ReactDOM.render(<Router routes={routes} />, document.body);