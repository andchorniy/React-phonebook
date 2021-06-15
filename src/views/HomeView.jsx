import  homePageImg from '../phonebook.webp'
import style from './HomeView.module.css'
const HomeView = () => (
    <div className={style.wrapper}>
        <h1 className={style.title}>Welcome </h1>
        <img  className={style.img}src={homePageImg} alt="" />
    </div>
);

export default HomeView;
