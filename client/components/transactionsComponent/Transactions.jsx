import React from "react";
import TransactionSideMenu from "./TransactionSideMenu.jsx";

class Transactions extends React.Component {
  render() {
    const transaction = (
      <div>
        <header id="header">
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <h1>
                  <span class="glyphicon glyphicon-cog" aria-hidden="true" />{" "}
                  <small>Transactions</small>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <a href="index.html">Dashboard</a>
              </li>
              <li class="active">Transactions</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <TransactionSideMenu />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{transaction}</div>;
  }
}

export default Transactions;
