import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourites } from "../redux/actions";

const Favourites = () => {
  const fav = useSelector((state) => state.fav.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="flex-column">
        {fav.map((job, index) => {
          return (
            <Col
              key={index}
              md={8}
              className="d-flex justify-content-between border border-dark p-3 my-2 align-items-center"
            >
              <div>
                <Link to={`/${job.company_name}`}>{job.company_name}</Link>
              </div>
              <div className="text-start w-75">
                <a href={job.url} target="_blank" rel="noreferrer">
                  {job.title}
                </a>
              </div>
              <div>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFromFavourites(index));
                  }}
                >
                  <i className="bi bi-x-square fs-5"></i>
                </Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favourites;
