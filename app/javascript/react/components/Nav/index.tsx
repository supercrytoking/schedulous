import React from "react";
import ChartIcon from "~/icons/Chart";
import PeopleIcon from "~/icons/People";
import CalendarIcon from "~/icons/Calendar";
import TasksIcon from "~/icons/Tasks";
import MessageIcon from "~/icons/Message";
import DashboardIcon from "~/icons/Home";
import PowerUpIcon from "~/icons/PowerUp";
import Avatar from "~/components/Avatar";
import Font from "~/components/Font";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { paths } from "~/paths";
import Logo from "images/brand/logo-mark.svg";
import { logout } from "~/api/authentication";
import styles from "./styles.module.scss";
import classNames from "classnames";
import useUser from "~/hooks/useUser";

const LINKS = [
  { title: "Dashboard", url: paths.dashboard(), icon: DashboardIcon },
  { title: "People", url: paths.people.index(), icon: PeopleIcon },
  { title: "Inbox", url: paths.inbox.index(), icon: MessageIcon },
  { title: "Calendar", url: paths.calendar.index(), icon: CalendarIcon },
  { title: "Tasks", url: paths.tasks.index(), icon: TasksIcon },
  { title: "Reports", url: paths.reports.index(), icon: ChartIcon },
];

const SETTINGS_LINK = [
  { title: "Power Ups", url: paths.powerUps.index(), icon: PowerUpIcon },
  {
    title: "User",
    url: "javascript:;",
    icon: <AccountMenu />,
    rendered: true,
  },
];

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <img src={Logo} width="39" />
        </div>
        <div className={styles.nav}>
          <div>
            {LINKS.map((link, i) => (
              <NavLink
                key={i}
                title={link.title}
                icon={link.icon}
                url={link.url}
                rendered={link.rendered}
              />
            ))}
          </div>
          <hr />
          <div>
            {SETTINGS_LINK.map((link, i) => (
              <NavLink
                key={i}
                title={link.title}
                icon={link.icon}
                url={link.url}
                rendered={link.rendered}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ title, url, icon, rendered }) {
  const Icon = icon;
  const location = useLocation();

  const match = location.pathname.includes(url);

  const classes = classNames(styles.link, {
    [styles.linkSelected]: match,
  });

  return rendered ? (
    icon
  ) : (
    <Popup
      key={title}
      on={["hover"]}
      position="right center"
      trigger={
        <Link to={url} className={classes} title={title}>
          <Icon color={match ? "#194bfb" : "#1a202c"} />
        </Link>
      }
    >
      <Font size="medium" weight="xBold">
        {title}
      </Font>
    </Popup>
  );
}

function AccountMenu() {
  const user = useUser();

  const handleLogout = () => {
    logout().then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <Popup
      key="Account Menu"
      on={["hover"]}
      position="right bottom"
      className={styles.popup}
      trigger={
        <div className={styles.link}>
          <Avatar person={{ name: "Test Name" }} />
        </div>
      }
    >
      <div className={styles.accountMenu}>
        <Link to={paths.settings.index()} className={styles.accountMenuLink}>
          <Font size="small" weight="bold">
            Settings
          </Font>
        </Link>
        <Link
          to={paths.settings.account.index()}
          className={styles.accountMenuLink}
        >
          <Font size="small" weight="bold">
            Account
          </Font>
        </Link>
        <hr />
        <div className={styles.accountMenuLink} onClick={handleLogout}>
          <Font size="small" weight="bold">
            Logout
          </Font>
        </div>
      </div>
    </Popup>
  );
}
