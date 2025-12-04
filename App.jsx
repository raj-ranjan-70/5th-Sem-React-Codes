import React from 'react';
import './App.css';
// import Home from './component/Home.jsx';
// import Contact from './component/Contact.jsx';
// import About from './component/About.jsx';
// import Home from './practice1/Home.jsx';
// import Counter from './component/Counter.jsx'
// import Stateless from './practice1/stateless';
// import Counterwithhooks from './component/counterwithhooks';
// import Toggle from './practice1/toggle';
// import Stopwatch from './component/Stopwatch.jsx';
// import Counter from './practice1/Counter.jsx';
// import ButtonOnOff from './practice1/Buttononoff.jsx';
// import UserInfo from './practice1/UserInfo.jsx';
// import Increment from './practice1/Combination.jsx';
// import Carinfo from './practice1/Carinfo.jsx';
// import Soncomponent from './practice1/Soncomponent.jsx';
// import Daughtercomponent from './practice1/Daughtercomponent.jsx';
// import Inlinecss from './practice1/Inlinecss.jsx';
// import ButtonClick from './practice1/ButtonClick.jsx';
// import RefCount from './component/RefCount.jsx';
// import StopWatch from './practice1/StopWatch.jsx';
// import { ThemeContext } from './component/ThemeContext.jsx';
// import { AuthContext } from './component/AuthContext.jsx';
// import { ClockProvider } from './ClockContext.jsx';
// import Event from './mypractice/Event';
// import { Theme } from './mypractice/Theme';

// import TodoList from './CA1/todoList';
// import Parent from './practice1/Parent.jsx';
// import Memo from './component/memo';
// import CounterUseReducer from './component/CounterUseReducer';
// import Calculator from './practice1/Calculator.jsx';
// import CounterCustomHook from './component/CounterCustomHook.jsx';
import ToggleCustomHook from './component/ToggleCustomHook';


function App() {
  // const info = {
  //   name : "Raj",
  //   age : 22,
  //   skills : ["HTML", "CSS", "JS"],
  //   add : "LPU"
  // };

  // const salary = 25;
  // const edu = {
  //   class : "B.TECH",
  //   sem : 6,
  //   cgpa : 8
  // };

  // const info = {
  //   name: "Raj Ranjan",
  //   skills: ["React", "Nodejs", "Expressjs"], 
  //   degree: "B.Tech",
  //   about: "Computer Science Student"
  // };

  // const userinfo = {
  //   name: "Raj Ranjan",
  //   age: 22,
  //   course: "B.TECH"
  // };


  // let [count, setCount] = useState(0);

  // function increse() {
  //   setCount(count += 1);
  // };

  // function decrese() {
  //   setCount(count -= 1);
  // }

  // let info = {
  //   name: "BMW",
  //   model: "M5 CS Competetion",
  // }

  // let years = [2023, 2024, 2025];

  // let soninfo = {
  //   soninfo: "This was written in the parent component, but displayed as a part of the son component"
  // }
  // let daughterinfo = {
  //   daughterinfo: "This was written by the parent component, but diaplayed as a part of the daughter component"
  // }

  // const [theme, setTheme] = useState('light');
  // const info = "This is some information about the theme context";
  // const [login, setLogin] = useState{null};
  // const [logout, setLogout] = useState{null};

  // function showMsg() {
  //   alert("Hello from child");
  // }
  // const name = "Raj Ranjan";
  // const age = 23;
  return (
    <>
        {/* <Home information={info}></Home>
        <Contact information = {info}></Contact>
        <About abc={info} salary={salary} edu={edu}></About> */}
        {/* <Home information={info}></Home> */}
        {/* <Counter></Counter> */}
        {/* <Stateless></Stateless> */}
        {/* <Counterwithhooks></Counterwithhooks> */}
        {/* <Toggle></Toggle> */}
        {/* <Stopwatch></Stopwatch> */}
        {/* <Counter></Counter> */}
        {/* <ButtonOnOff></ButtonOnOff> */}
        {/* <UserInfo information = {userinfo}></UserInfo> */}
        {/* <Increment count = {count} increse = {increse} decrese={decrese}  ></Increment> */}
        {/* <Carinfo information = {info} year = {years}></Carinfo> */}
        {/* <Soncomponent son={soninfo}></Soncomponent> */}
        {/* <Daughtercomponent daughter={daughterinfo}></Daughtercomponent> */}
        {/* <Inlinecss></Inlinecss> */}
        {/* <ButtonClick></ButtonClick> */}
        {/* <RefCount></RefCount> */}
        {/* <StopWatch></StopWatch> */}
        {/* <ThemeContext.Provider value={{theme, setTheme, info}}>
          <Home></Home>
        </ThemeContext.Provider>
        <AuthContext.Provider value= */}
        {/* <ClockProvider></ClockProvider> */}
        {/* <Theme.Provider value = {{name, age}}>
          <Event></Event>
        </Theme.Provider> */}

        {/* <TodoList></TodoList> */}
        {/* <Parent></Parent> */}
        {/* <Memo></Memo> */}
        {/* <CounterUseReducer></CounterUseReducer> */}
        {/* <Calculator></Calculator> */}
        {/* <CounterCustomHook></CounterCustomHook> */}
        <ToggleCustomHook></ToggleCustomHook>
    </>
  );
}

export default App
