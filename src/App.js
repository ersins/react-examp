import {BrowserRouter as Router, Route} from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostAdd from "./components/PostAdd";
import PostEdit from "./components/PostEdit";

function App() {
    return (
        <Router>
            <div className="main_wrapper">
                <header></header>
                <div className="ui raised very padded text container segment">
                    <Route path="/" exact component={PostList}/>
                    <Route path="/post/:id" exact component={PostDetail}/>
                    <Route path="/postadd" component={PostAdd}/>
                    <Route path="/post/:id/edit" component={PostEdit}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
