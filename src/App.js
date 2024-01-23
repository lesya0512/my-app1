import{ useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Title from './components/title/title';
import Input from './components/input/input';

function App() {
  let image = "https://rg.ru/uploads/images/2023/08/14/w1500_51755104_e81.jpg"
  let links = ['О мультике', 'Персонажи', 'Новости', 'Сезоны', 'Серии'];

  return (
    <div className="App">
      <Header img = {image}
      name = "леди баг и супер кот" />
      <Nav links = {links}/>
      <Title text="hello" size="34px"/>
      <Input type="text" placeholder="enter your text"/>
      <Footer text = " @copyright все права защищены  " date={(new Date()).getFullYear()}/>
    </div> 
  );
}

export default App;
