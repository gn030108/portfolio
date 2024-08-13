import html from "../image/svg/icon_html.svg";
import css from "../image/svg/icon_css.svg";
import js from "../image/svg/icon_javascript.svg";
import react from "../image/svg/icon_react.svg";
import bootstrap from "../image/svg/icon_bootstrap.svg";
import redux from "../image/svg/icon_redux.svg";
import jquery from "../image/svg/icon_jquery.svg";

import git from "../image/svg/icon_github.svg";
import discord from "../image/svg/icon_discord.svg";
import notion from "../image/svg/icon_notion.svg";
import styles from "../styles/Skill.module.scss";

const Skill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Skills</div>
      <div className={styles.main}>
        <div className={styles.box}>
          <label>Frontend</label>
          <div className={styles.frontend_skill}>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={react} alt="react" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={redux} alt="redux" />
            <img src={jquery} alt="jquery" />
          </div>
        </div>
        <div className={styles.box}>
          <label>Cooperation</label>
          <div className={styles.frontend_skill}>
            <img src={git} alt="git" />
            <img src={discord} alt="discord" />
            <img src={notion} alt="notion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
