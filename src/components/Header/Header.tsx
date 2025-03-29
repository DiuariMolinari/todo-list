import style from './Header.module.css';
import logoImg from '../../assets/Logo.svg';

export function Header() {
  return (
    <header className={style.header}>
      <img src={logoImg} alt="" width={126} height={48} />
    </header>
  )
}