import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e976f01f0de042259db708a7e4b427f0"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <Row xs={1} md={2} className="g-4">
      {news.map((nw) => (
        <News news={nw}></News>
      ))}
    </Row>
  );
}

export default App;
