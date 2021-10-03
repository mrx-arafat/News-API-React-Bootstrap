import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-03&sortBy=publishedAt&apiKey=e976f01f0de042259db708a7e4b427f0"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <Row xs={1} md={2} className="g-4">
      {news.map()}
    </Row>
  );
}

export default App;
