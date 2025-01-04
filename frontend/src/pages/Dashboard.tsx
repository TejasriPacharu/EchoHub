import React from "react";
import useAuth from "../hooks/useAuth.tsx";
import { useHistory } from "react-router-dom";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage } from "@elastic/eui";
import dashboard1 from "../assets/dashboard1.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
import Header from "../components/Header.tsx";

const Dashboard = () => {
  useAuth();
  const navigate = useHistory();
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Header />
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          style={{ margin: "5vh 10vh" }}
        >
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="5rem" alt="icon" src={dashboard1} />}
              title="Create Meeting"
              description="Create a new meeting and invite people."
              onClick={() => navigate.push("/create")}
              paddingSize="xl"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="5rem" alt="icon" src={dashboard2} />}
              title="My Meeting"
              description="View your created meetings."
              onClick={() => navigate.push("/mymeetings")}
              paddingSize="xl"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="5rem" alt="icon" src={dashboard3} />}
              title="Meetings"
              description="View the meetings you are invited to."
              onClick={() => navigate.push("/create")}
              paddingSize="xl"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default Dashboard;
