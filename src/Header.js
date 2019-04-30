// component name shold be start with capital
// components are nothing but snippets or code which can be reused again and again 
// since jsx uses both component and the html so jsx uses a mechanism to distinguish between the predefined component and custom component
import React ,{Component} from 'react';
import NewComp from './NewComp.js'
import './Header.css';
// functional component
const Header = function (props){
  //  const headerStyle = {textAlign:'center', padding:20 , background:'#000' , textTransform:'uppercase' , color:'white'}
    return(
        // we used double culry braces because the text align is the expression and the react component uses it as expression 
        // this is the inline 
    //   <div style={{textAlign:'center', padding:20 , background:'#000' , textTransform:'uppercase' , color:'white'}}>  
    //     Phone Directory
    // </div>
    //      <div style={headerStyle}>  
    //     Phone Directory
    // </div>
    // )   <NewComp test={props.test2}/>
        // ****** using external css

    <div className="header">  
         {props.test1}
      
         
     </div>
     )
}
// class component
// class Header extends Componet{
//     render(){
//         return(
//             <div className="header">
//                Phone Directory
//            </div>
//            )
//         }
// }
export default Header;