import * as React from "react";
import { render } from "react-dom";
import AnnounceKit from "announcekit-react";

import "./styles.css";

function App() {
  return (
    <div className="col-md-10">
      <div className="form-group">
        <h2>Widget on Menu</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <AnnounceKit widget="https://announcekit.app/widgets/v2/34MmKA">
              <span>What's new</span>
            </AnnounceKit>
          </li>
        </ul>
      </div>

      <div className="form-group">
        <h2>Line widget</h2>It inherits parent style
        <br />
        <AnnounceKit widget="https://announcekit.app/widgets/v2/35ULgQ" />
      </div>

      <div className="form-group" style={{ width: "500px", height: "900px" }}>
        <h2>Embed Widget</h2>
        <AnnounceKit
          embedWidget={true}
          widget="https://announcekit.app/widgets/v2/33DYek"
        />
      </div>
      <AnnounceKit
        floatWidget={true}
        widgetStyle={{ bottom: "100px" }}
        widget="https://announcekit.app/widgets/v2/q9imc"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
