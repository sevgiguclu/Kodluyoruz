
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import InfoFooter from './Components/InfoFooter';
import { useState,useEffect } from 'react';

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
  const [ForFilterList,setForFilterList] = useState(list);
  const [count,setCount] = useState(0);
  
  useEffect(() => {
    const doneFalseList = list.filter(item => !item.done);
    setCount(doneFalseList.length);
  },[list]);
  

  // console.log("app list : \n",{list});
  return (
    <>
      <section className="todoapp">
        <Header addNewItem={setList} listArray={list} forFilterList={setForFilterList}></Header>
        <Section view={ForFilterList} changeList={setForFilterList} changeListArray={setList}></Section>
        <Footer todo={list} changeToDo={setList} forFilterArray={ForFilterList} changeForFilterArray={setForFilterList} count={count}></Footer>
      </section>
      <InfoFooter></InfoFooter>
    </>

  );
}

export default App;
