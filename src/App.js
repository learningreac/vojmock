import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <div id='header' className='w-100'>
        <Header />
      </div>
      <div id='content'>
        <Carousel />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-8 bg-primary'> content 1</div>
            <div className='col-md-4'> content 2</div>
          </div>
        </div>
      </div>

      <div id='footer'>
        <div className='container bg-secondary-subtle'>
          footer
        </div>
      </div>
    </div>
  );
}

export default App;
