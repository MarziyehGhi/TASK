
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Header from './layout/header';
import SideBar from './layout/sideBar';
import StudentsList from './pages/studentsList';
import { Col, Row } from 'react-bootstrap';
import Cartable from 'pages/cartable';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { layoutContext } from 'contexts';

function App() {
  const { loading, setLoading } = useContext(layoutContext)


  return (
    <div>
      {/* {loading && <h1>loading...</h1>} */}
      <Header />
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10}>
          <Routes>
            <Route path="/" element={<h1>Wellcome Page</h1>} />
            <Route path="/students" element={<StudentsList />} />
            <Route path="/cartable" element={<Cartable />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
