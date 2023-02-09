import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { Form, Modal,Input } from 'antd';
import { Select } from 'antd';
import users from './constants/users';
import CTX from './store';
import './index.css';
import KanbanModal from './commons/Modal';



function Index(){

    const [state,setState] = useState({
      planned:[],
      started:[],
      done:[],
      showModal:false
    })

    const ALL_USERS =  users.map(el => {

      return {
          value:el,
          label:el
      }
  
  })

  return (
  <CTX.Provider value={{state,setState}}>
      <App />
      <KanbanModal />
  </CTX.Provider>

  )

}

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Index />);

