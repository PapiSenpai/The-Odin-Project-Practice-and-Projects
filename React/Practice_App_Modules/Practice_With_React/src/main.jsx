import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Profile from './profile.jsx'


// Making an example element
const test_elem = (
  <table>
    <tr>
      <th>
        Name
      </th>
    </tr>
    <tr>
      <td>Joe</td>
    </tr>
  </table>
)

// Making an example Class
class Person{
  constructor(name) {
    this.brand = name;
  }

  // Ex Class Method 
  present(){
    return 'My name is ' + this.brand;
  }
}

// Class inheritance
class Model extends Person {  // extends keyword creates class inheritance 
  constructor(name, mod){
    super(name);  // super() method in this constructor calls the parent's 
                  // constructor method and get access to the parents properties and methods
    this.model = mod;
  }
  show(){
    return this.present() + ', it is a ' + this.model
  }
} 



// Creating new object
const new_per = new Person("John");
console.log(new_per.present());

/*
 * This is the main root file where React is rendered to the DOM 
 * 
 */ 
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
   {/* <> */}
    <App>
      {/* <Main_Layout /> */}
    </App>
    {/* This is how to display comments and elements */}
    {test_elem}
  {/* </>, */}
  </StrictMode>,
)
