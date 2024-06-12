import './App.css';
import mystyle from '../src/myStyle.module.css'
import Random from './Random';
import Example from './Example';
import Newcomp from './Newcomp';
import User from './User';
import Register from './Register';

function App() {
  // js code
  const h1style ={color:'green',fontSize:'70px',textAlign:'center'}
  const subject ='REACT'
  const uname = 'Maxwell'

  return (
    // html code 
    <>
      <div style={{backgroundColor:'yellow'}}>
        <h1 style={h1style}>My First React Application</h1>
        <h2>"Hello World"</h2>
        <h3 style={{textAlign:'center'}}>Demo</h3>
      </div>
      <h1>My Subject is : {subject}</h1>
      <div className={mystyle.bgstyle1}>
        <h1 className={[mystyle.headstyle,mystyle.headstyle2].join(' ')}>Components</h1>
        <p className={mystyle.pstyle}>it is the basic unit of the UI. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea non suscipit fugiat cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia illum rerum, ullam, nemo nihil dolorem porro laboriosam nobis quas aut repellat reprehenderit? Amet placeat qui tempore eos aliquid consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo deleniti voluptatum laborum ipsa totam perspiciatis molestias accusantium ex eius, tempora iste voluptate saepe beatae nostrum, ducimus expedita odio itaque reiciendis.</p>
      </div>
      <h1>My Username is :{uname}</h1>
      <ul>
        <li><Random user={uname} /></li>
        <li><Example sub={subject} age={27} /></li>
        <li className='mt-4'><Newcomp /></li>
        <li className='mt-4'><User/></li>
      </ul>

      <div className='my-5 row'>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Register/>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default App;
