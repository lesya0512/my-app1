import{ useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';

function App() {
  let links = ['О мультике', 'Персонажи', 'Новости', 'Сезоны', 'Серии'];

  return (
    <div className="App">
      <Header img = "https://rg.ru/uploads/images/2023/08/14/w1500_51755104_e81.jpg"
      name = "леди баг и супер кот" />
      <Nav links = {links}/>
      <Footer text = " @copyright все права защищены  " date={(new Date()).getFullYear()}/>
    </div> 
  );
}

export default App;
