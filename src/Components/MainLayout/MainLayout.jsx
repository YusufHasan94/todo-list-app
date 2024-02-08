import UpNext from "../UpNext/UpNext";
import InProgress from "../InProgress/InProgress";
import Complete from "../Complete/Complete";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="mainLayoutContainer">
      <div className="allTaskContainer">
        <UpNext />
        <InProgress />
        <Complete />
      </div>
    </div>
  );
};

export default MainLayout;
