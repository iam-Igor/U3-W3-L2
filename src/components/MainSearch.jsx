import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchJobs } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.jobs.data);

  const Favlength = useSelector((state) => state.fav.content.length);
  const location = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex alig-items-center justify-content-between"
        >
          <div>
            <h1 className="display-1">Remote Jobs Search</h1>
          </div>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-warning position-relative"
              onClick={() => {
                location("/Favourites");
              }}
            >
              Favourites
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {Favlength}
                <span className="visually-hidden">Favourites list</span>
              </span>
            </button>
          </div>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              searchJobs(query);
            }}
          >
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
