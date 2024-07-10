import React from "react";
import './header.css';

function Header (props, ref) {  

        return(
            <div className="header">
                    <button className='headerButtons'  id='aboutId'/* onClick={handleClickButtonAbout} */> Обо мне </button>
                    <button className='headerButtons'  id='projectsId'/* onClick={handleClickButtonProjects} */> Мои работы </button>
                    <button className='headerButtons'  id='contactsId'/* onClick={handleClickButtonContacts} */> Контакты </button>
            </div>
        )
            
};
   

export default Header

