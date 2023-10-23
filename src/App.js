import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Desc from './Desc';
import Img from './Img';
import Name from './Name';
import Price from './Price';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const firstName = "taha"; 
const img= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD39/ft7e34+PhoaGhQUFDDw8PQ0NDc3Nyrq6uTk5Ovr6+7u7vKysrn5+ebm5tXV1csLCzW1tZtbW0zMzOBgYEiIiJCQkJdXV20tLRycnIQEBDx8fGZmZk8PDx8fHxJSUkXFxeKioqioqIUFBQ1NTWfOkAUAAAD9UlEQVR4nO3aa3vxShSAYSMIIaSlVdUWld3//xN3HBIJOc6sId7rub9bM4tZc9TpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE/N6T66Bw30ND7jbKV7Yc3Um2p86lvNxHtiwywcrHTyixLsS/dFXtd9V2qr90t0l2ok3B1p82CnlAp1CjDSW6oX2f7Icib9KDv14WpHiL4drbF9F+776yE91Z/rx1gp9SrXI0mjYKBO9o5BmKh8lSfWKTHO5+Kcnfr1NMvvxDvEaNlq35vu3+L0TMrvaHgIspbpmIxROFAXfdNJ3jmGac08Ew3Nr1R6ZuV3choMAn0zFw3NZTo7tZSYHdbHUFuBSIYus6ZU+Z14qg2DNDVrJhYye6zROdwjZ9L0rJkYm5ffye8p3k4oXGO3Q/NYfhOxBuKxMRaL2MD1rBnbCZaMHwcVKekmerlD82AtecRxkrD3PftmF/Rs+X2LtrRLAouGLeX4+UNTuPxOgkto4cgFoqH5WpSdUi/iK9YsFVw6do5R+FKcXbTlsHDDsLmEt31D8+2vy7JT6sfGeuylGlhYiJ+Yjz/K03v9tNLud7oNa7/hbLIqz85G+Z31060MbLTQc7fLorQSmjeDNQyzDYnHn//sKrOzVH5nVxsK0dizST8/oaw3O+V3NrlqzeCaLqsb3/xVWQ2lmsx33Z7MznseVMyaCXvldxZct2h+WVpzaB6F1k+jvdtGjQ4X0dAs3Gve2PhSaZS4+QlNfsT5T92heWC7/M7ymg51AjkNhubB+51OaV5u6013vj33vXpBT/vSfRdrrmA6b3L2PD3lNXGX8jsbFvThq+YQajJrxlZiC24dxf2r/pprL+gZ+/teknTLvurSrjSbNWO/WnOYiesNW1bRUXvkNR+aB5u73+J1OoXXXGdvwTw75znToPKQV8D4XUxH2SC9fPPrsee7rh+O1x//aWYn8i6mw6/umQiRdzEt27vkt3tA+cU0JvvGhN7F9OQcK6TtZS/mmxpV99DI48ov5lrNb/DA8ouVr/dmHlp+idBafsLvYtosZSj+LqbPSoaD1vzdqFN0vjci+ixtTnzT1pbyS8iuh5bexYzUOlrUZO1dzEzBfzyas34xr2svk1/QtvK7mAuk99fC8ksxPj4N7nMxr89wRWxt+aWY5Be07P/u+bQX/b87Xsyb0bv5bH35pf02z8/Gn7Iscqozyljaf5aW5tR/lI6O7s80PBO90v8JpgzavbiXqXNhs/Mecy8vpFe+Q/1a+E9XfDe63l9Bev3wuabOErPJInuc2vR/3CfYlzU0G079z0/fHY7aeyQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAv+Z/HBwq9QVvQoQAAAAASUVORK5CYII="

function App() {
  return (
    <div className='QAW'>
      <Card style={{ width: '18rem' }}>
      <Img />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Desc/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
    <div className='greeting'>
        {firstName && img ? `Hello, ${firstName}!` : 'Hello, there!'}
      </div>
      
      
      
      
      
    </div>
  );
}

export default App;
