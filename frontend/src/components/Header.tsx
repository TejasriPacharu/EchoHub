import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks.ts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EuiHeader, EuiText, EuiTextColor } from "@elastic/eui";
function Header() {
  const navigate = useHistory();
  const location = useLocation();
  const username = useAppSelector((echohub) => echohub.auth.userInfo?.name);
  const [breadCrumbs, setBreadCrumbs] = useState([{ text: "Dashboard" }]);
  const [isResponsive, setIsResponsive] = useState(false);
  const dispatch = useDispatch();
  const section = [
    {
      items: [
        <Link to="/">
          <EuiText>
            <h2 style={{ padding: "0 1vw" }}>
              <EuiTextColor color="#0b5cff">ECHOHUB</EuiTextColor>
            </h2>
          </EuiText>
        </Link>,
      ],
    },

    {
      items: [
        <>
          {username ? (
            <EuiText>
              <h3>
                {" "}
                <EuiTextColor color="white">Hello, </EuiTextColor>
                <EuiTextColor color="#0b5cff">{username}</EuiTextColor>
              </h3>
            </EuiText>
          ) : null}
        </>,
      ],
    },
  ];
  const responsiveSection = [
    {
      items: [
        <Link to="/">
          <EuiText>
            <h2 style={{ padding: "0 1vw" }}>
              <EuiTextColor color="#0b5cff">ECHOHUB</EuiTextColor>
            </h2>
          </EuiText>
        </Link>,
      ],
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 480) setIsResponsive(true);
  }, []);

  return (
    <>
      <EuiHeader
        style={{ minHeight: "10vh" }}
        theme="dark"
        sections={isResponsive ? responsiveSection : section}
      ></EuiHeader>
      <EuiHeader
        style={{ minHeight: "10vh" }}
        theme="dark"
        sections={[
          {
            breadcrumbs: breadCrumbs,
          },
        ]}
      ></EuiHeader>
    </>
  );
}

export default Header;
