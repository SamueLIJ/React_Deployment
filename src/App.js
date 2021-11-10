import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AboutAuthor from './components/AboutAuthor';
import AboutApp from './components/AboutApp';

import {Route, Routes, useLocation } from 'react-router-dom';
import Notfound from './components/Notfound';
import Navbar2 from './components/Navbar2';


function App() {
  let path = useLocation();
  // buat lesson #2
  // const data = [ 

  //   {
  
  //     id: 1,
  
  //     title: 'Membuat Komponen',
  
  //     completed: true,
  
  //   },
  
  //   {
  
  //     id: 2,
  
  //     title: 'Unit Testing',
  
  //     completed: false,
  
  //   },
  
  //   {
  
  //     id: 3,
  
  //     title: 'Setup Development Environment',
  
  //     completed: true,
  
  //   },
  
  //   {
  
  //     id: 4,
  
  //     title: 'Deploy ke server',
  
  //     completed: false,
  
  //   },
  
  // ]
   
  
  
  return (
    // lesson #1
    // <div className="test">
    //   <div className="object">
    //     <div className="row1">
    //     <div style={{backgroundColor:"blue", color: "white",width:"100px",padding:"22px"}}>satu</div>
    //     <div style={{backgroundColor:"green",color: "white",width:"100px",padding:"22px"}}>dua</div>
    //     </div>
    //     <div className="row2" style={{backgroundColor:"purple",color: "white",width:"300px",marginTop:"12px"}}>gue yang hijau</div>
    //   </div>
    // </div>

    
    // lesson 2
    // <div>
    //  <h3>TODO APP</h3>
    //  <hr/>
    //   {data.map((data1) => (
    //     <div key={data.id} style={{borderRadius:'40px',backgroundColor:'yellowgreen',width:'250px',height:'50px',padding:'5px',textAlign:'center',marginBottom:'20px',marginTop:'10px',marginLeft:'10px'}}>
    //       <p style={data1.completed ? {textDecoration: 'line-through 3px solid red'} : {textDecoration:'none'}} >{data1.title}</p>
    //     </div>
    //   ))}
    // </div>

    // lesson 3
    
    // <Router>
    //   <div className="all">
    //   {/* {path.pathname=='/login'?null:<Navbar/>} */}
    //     <Navbar/>
    //     <div className="content">
    //      <Switch>
    //       <Route exact path="/">
    //           <div className="todo-app">
    //             <TodoList/>
    //           </div>
    //         </Route>
    //         <Route path="/about">
    //           <About/>
    //         </Route>
    //         <Route path="/contact">
    //           <Contact/>
    //         </Route>
    //      </Switch>
    //     </div>
    //   </div>
    // </Router>
    
   <div className="all"> 
        {path.pathname=='/' ? <Navbar/> : null}
        {path.pathname=='aboutapp' && path.pathname=='aboutauthor'? <Navbar2/> : null}
          <Routes>
            <Route path="/" element={<div className="todo-app"><TodoList/></div>}/>
            <Route path="/aboutauthor" element={<AboutAuthor/>}/>
            <Route path="/aboutapp" element={<AboutApp/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>  
   </div>

  );
}

export default App;
