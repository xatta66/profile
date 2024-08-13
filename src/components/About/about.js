import React from "react";
import './about.css';
import avatar from "../../assets/img/Avatar.png";
import { BiLogoCss3, BiLogoFigma, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoJquery, BiLogoNodejs, BiLogoReact } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import certificateItlogia from "../../assets/img/Certificate.png";


const About = React.forwardRef((props, ref) => (
    <div className="About" ref={ref} >    
        <div >
            <img className="Avatar" src={avatar} alt="Avatar" />
            <h1>Немного обо мне</h1>
            <div className="textAboutMe">
                <p>Всем привет! Меня зовут Алексей, я Frontend-разработчик и Вы находитесь на моей страничке-портфолио, 
                   где можете ознакомиться с моими предыдущими работами.
                   Так же здесь находится краткая информация обо мне, моих навыках и опыте.</p>
                <p>Я пришел в IT в осознанном возрасте, выбрав специализацию, которая мне действительно нравится.<br />Я не питаю иллюзий, что выбрал легкую сферу
                     и не боюсь трудностей и вызовов.<br />Благодаря профессиональному бэкграунду в виде работы в логистической сфере обладаю стрессоустойчивостью, 
                     клиентоориентированностью и навыком коммуникации в различных ситуациях. На данный момент развиваю свои навыки на фриланс-площадках и 
                     продолжаю осваивать frontend-разработку.</p>
                <p>Моя цель - помочь Вам развивать свои проекты, отточить имеющиеся собственные навыки, овладеть новыми технологиями и знаниями</p>
                <p>С огромным удовольствием поработаю с Вами и Вашими проектами!</p>
            </div>
        </div>
        <div className="Skills">    
            <h1>Мои навыки</h1>
            <div className="SkillsLogo">
                <BiLogoHtml5 className="SkillsLogoImg" />
                <BiLogoCss3 className="SkillsLogoImg" />
                <BiLogoJavascript className="SkillsLogoImg" />
                <BiLogoReact className="SkillsLogoImg" />
                <BiLogoNodejs className="SkillsLogoImg" />
                <BiLogoJquery className="SkillsLogoImg" />
                <BiLogoGit className="SkillsLogoImg" />
                <BiLogoGithub className="SkillsLogoImg" />
                <BiLogoFigma className="SkillsLogoImg" />
                <TbApi className="SkillsLogoImg" />
            </div>
            <div>
                <h1>Учёба и курсы</h1>
                <div className="Studies">       
                    <div className="Courses">
                        <ul className="CoursesList">
                            <li><h2>Основы современной верстки в школе программирования <a href="https://ru.hexlet.io" target="blank">Хекслет</a></h2></li>
                            <li><h2>Основы JavaScript в школе программирования <a href="https://ru.hexlet.io" target="blank">Хекслет</a></h2></li>
                            <li><h2>Frontend разработчик от онлайн-школы <a href="https://itproger.com" target="blank">ITproger</a></h2></li>
                            <li><h2>Интенсив Frontend Start от онлайн-школы <a href="https://itlogia.ru" target="blank">ITlogia</a></h2></li>
                        </ul>
                    </div>
                    <img alt="Сертификат ITlogia" src={certificateItlogia} className="CertificateItlogia"/>
                </div> 
            </div>
        </div>
    </div>
    )
);

export default About

