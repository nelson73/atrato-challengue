import './App.css';
import "antd/dist/antd.css";
import "antd/lib/style/themes/default.less"
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { routes } from 'utils/routes';
import { UsersPage } from 'pages/UsersPage';
import { MainRoute } from 'components/organims/Layout/MainRoute';
import { UserEditPage } from 'pages/UserEditPage';

const { home, users, userEdit } = routes

const Home = <MainRoute page={<UsersPage />} />
const UserEdit = <MainRoute page={<UserEditPage />} />

const Routes = () => {
  let routes = useRoutes([
    { path: home, element: Home },
    { path: users, element: Home },
    { path: userEdit(":user_id"), element: UserEdit },
  ]);
  return routes;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
