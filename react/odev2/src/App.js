
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import InfoFooter from './Components/InfoFooter';
import { useState } from 'react';

function App() {
  const [list,setList] = useState([
    {
      "done": true,
      "text": "Taste JavaScript"
    },
    {
      "text": "Code furiously",
      "done": true
    },
    {
      "text": "Promote Mavo",
      "done": false
    },
    {
      "text": "Give talks",
      "done": false
    },
    {
      "text": "Write tutorials",
      "done": true
    },
    {
      "text": "Have a life!",
      "done": false
    }
  ]);
  // console.log("app list : \n",{list});
  return (
    <>
      <section className="todoapp">
        <Header addNewItem={setList} listArray={list}></Header>
        <Section todo={list} changeList={setList}></Section>
        <Footer></Footer>
      </section>
      <InfoFooter></InfoFooter>
    </>

  );
}

export default App;
