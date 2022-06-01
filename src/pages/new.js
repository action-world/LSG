import React, { useEffect } from "react";
import "./new.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@metamask/legacy-web3";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  //Mainnet


  const [plaAmo, setplaAmo] = React.useState(1000);
  const [loadState, setLoading] = React.useState(false);
  const [loadStatewith, setLoadingwith] = React.useState(false);
  const [user, setUser] = React.useState([]);


  return (
 


        <div className="footer1">
          <div>

            <hr />
            <p>© 2022 Lunatic Support Group (LSG) All Rights Reserved. </p>
          </div>
        </div>

    
  );
}
export default Home;
