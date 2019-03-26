import React from "react";
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import queryString from 'query-string';
import Pagination from 'pagination-component';
import { css } from 'glamor';
import AgentsRow from "./AgentRows.jsx";

class AgentList extends React.Component {
  constructor(props){
    super(props);
    this.changePage = this.changePage.bind(this);
  }
  /**
   * Change the user lists current page
   * @param {*} page 
   */
  changePage(page){
    this.props.dispatch(push('/?page=' + page));
  }

  

  /**
   * returns jsx
   */
  render() {
    const { agents } = this.props.allAgents;
    // Pagination varaibles:
    const per_page = 10;
    const pages = Math.ceil(agents.length / per_page);
    const current_page = 1;
    const start_offset = (current_page - 1) * per_page;
    let start_count = 0;
    const pageLink = css({
      margin: '2px',
      display: 'inline-block',
      padding: '2px',
      WebkitBorderRadius: '20px',
      MozBorderRadius: '20px',
      borderRadius: '20px'
    })
    const currentLink = css({
      backgroundColor: '#0074c2',
      display: 'inline-block',
      color: '#FFFFFF',
      'a:link': { color: '#FFFFFF' },
      'a:visited': { color: '#FFFFFF' },
      'a:active': { color: '#FFFFFF' }
    })
    return (
      <div class="col-md-9" id="transaction">
        <div class="panel panel-default">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Agents</h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Deactivate</th>
                    <th scope="col">Joined</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agents, index) => {
                      if (index >= start_offset && start_count < per_page){
                       start_count++;
                       return (
                        <AgentsRow key={agents.id} agents={agents} />
                       )
                      }
                  })}
                  {/* {
                    agents.map(agents => {
                      return (
                        <AgentsRow key={agents._id} agents={agents} />
                      )
                    })
                  } */}
                </tbody>
              </table>
              {/* <Pagination currentPage={0}
                 pageCount={10}
                 pageLinkClassName={pageLink}
                 currentLinkClassName={currentLink}
                 onPageClick={i => {
                  console.log(`Link to page ${i} was clicked.`);
                 }} /> */}
              <Pagination className="agents-pagination pull-right" bsSize="medium" maxButtons={10} first last next prev boundaryLinks items={pages} activePage={current_page} onSelect={this.changePage}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   console.log('===>: ', ownProps.location)
//   const queryParams = queryString.parse(ownProps.location.search)
//   return ({
//     page: Number(queryParams.get('page_no')) || 1,
//   })
// }

export default AgentList;
//connect(mapStateToProps, null)(AgentList);
