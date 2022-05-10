import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import AudioTabClick from "../audios/notification_sound.mp3";
import classNames from "classnames";
import "./layout-styles/layout.css";
import logo from "../10B-removebg-preview.png";

const Navigation = styled.nav`
  background: rgba(62, 135, 140, 0.5);
  backdrop-filter: blur(20px);
  position: fixed;
  width: auto;
  margin: 10px 20px;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.5s ease-in-out;
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 10px;
`;

const Listitem = styled.li`
  list-style: none;
  margin: 4px;
`;

const audio = () => {
  let Aud = new Audio(AudioTabClick);
  Aud.play();
  Aud.volume = 0.2;
};
const Nav = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <>
      <Navigation className={classNames({ sticked: isShrunk })}>
        <Link className="centered-logo" to="/" onClick={audio}>
          <img src={logo} alt="logo" width="auto" height="50px" />
        </Link>
        <UnorderedList>
          <Listitem>
            <NavLink
              exact={true}
              activeClassName="is-active"
              to="/"
              onClick={audio}
            >
              Home
            </NavLink>
          </Listitem>
          <Listitem>
            <NavLink activeClassName="is-active" to="/about" onClick={audio}>
              About
            </NavLink>
          </Listitem>
          <Listitem>
            <NavLink activeClassName="is-active" to="/story" onClick={audio}>
            Story
            </NavLink>
          </Listitem>
          <Listitem>
            <NavLink activeClassName="is-active" to="/contact" onClick={audio}>
              Contact
            </NavLink>
          </Listitem>
          <Listitem>
            <NavLink activeClassName="is-active" to="/404" onClick={audio}>
            404
            </NavLink>
          </Listitem>
        </UnorderedList>
      </Navigation>
    </>
  );
};

export default Nav;
