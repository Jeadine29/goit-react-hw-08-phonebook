import css from './footer.module.css';
import { GoMarkGithub } from 'react-icons/go';


const Footer = () => {
  return (
    <div className={css.footer}>
      <a
        className={css.link}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Jeadine29"
      >
        <span>
          <GoMarkGithub /> <span className={css.text}> Developed by </span>
          Jeadine29
        </span>
      </a>
    </div>
  );
};

export default Footer;