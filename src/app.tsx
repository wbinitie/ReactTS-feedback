import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // NavLink,
  // useParams,
  // Navigate,
  // useNavigate,
} from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
// import Card from "./components/Card";

const App: React.FC = () => {
  // const status = 200 | 404;
  // if (status === 404) {
  //   <Navigate to="/notFound" />;
  // }
  // const params = useParams();
  // const navigate = useNavigate();

  // const onclick = () => {
  //   console.log("Hello");
  //   navigate("/about");
  // };
  // console.log(params.id);
  // const [feedback, setFeedback] = useState<Item[]>(FeedbackData);
  // const handleDelete = (id: number | string) => {
  //   if (window.confirm("Are you sure you want to delete this")) {
  //     setFeedback(feedback.filter((item: any) => item.id !== id));
  //   }
  // };
  // const addFeedback = (newFeedback: Item) => {
  //   // setFeedback([newFeedback, ...feedback]); will work also
  //   setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
  // };
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList
                  // feedback={feedback}
                  // handleDelete={handleDelete}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          {/* <Card>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </Card> */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
