import React, { useRef, forwardRef } from "react";
import './contacts.css';
import { FaRegTimesCircle } from "react-icons/fa";

const Contacts = forwardRef((props, ref) => {
    
    const buttonRef = useRef(null);
    const modalRef = useRef(null);
    const formEmailCloser = useRef(null);
    const submitEmail = useRef(null);

    const handleClick = () => {
        if (modalRef.current) {
            modalRef.current.style.display = 'inline-block';
        }
    };

    const handleModalClick = (e) => {
        if (e.target.id === 'modal' && modalRef.current) {
            modalRef.current.style.display = 'none';
        }
    };

    const handleFormClick = () => {
        if (modalRef.current) {
            modalRef.current.style.display = 'none';
        }
    };

    const handleFormSubmit = (e) => {
        alert('Извините, данная форма является образцом и на данный момент её функионал ограничен\nЕсли Вы хотите отправить мне письмо, пожалуйста напишите на мою почту xatta62007@mail.ru');
    };

    return (
        <div className="headContacts" ref={ref} >
            <h2>Контакты</h2>
            <div className="mainContacts">
                <div>
                    <a href="https://www.linkedin.com/in/aliaksei-hlushkou-403b22209/" target="blank" className="urlContact">LinkedIn</a>
                    <a href="https://github.com/xatta66/" target="blank" className="urlContact">Github</a>
                </div>
                <div className="email">
                    <button className="buttonEmail" ref={buttonRef} onClick={handleClick}>Написать мне письмо</button>
                    <div className="modal" ref={modalRef} onClick={handleModalClick}>
                        <div className="formEmail">
                            <form>
                                Ваш email: <input className="userEmail" />
                                Ваше сообщение: <input className="textEmail" />
                                <input type="submit" className="submitEmail" ref={submitEmail} onClick={handleFormSubmit} />
                                <FaRegTimesCircle className="formEmailCloser" ref={formEmailCloser} onClick={handleFormClick} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">© copyright by Aliaksei Hlushkou</div>
        </div>
    );
});

export default Contacts;
