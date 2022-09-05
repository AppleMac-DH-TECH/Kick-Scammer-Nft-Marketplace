import Home from './containers/home';
import 'react-notifications/lib/notifications.css'
import {NotificationContainer} from 'react-notifications'
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="main">
      <NotificationContainer />
      <Home />
    </div>
  );
}

export default App;
