import React from 'react';
import { MDBDataTable } from 'mdbreact';
import datetime from 'node-datetime';

class VehicleTripsList extends React.Component {
    render(){
        const data = {
            columns: [
                {
                    label: 'Vehicle Number',
                    field: 'vehicleNumber',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Tipper Price',
                    field: 'tipperPrice',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'VRT ID',
                    field: 'vrtID',
                    sort: 'asc',
                    width: 150
                },
                {
                  label: 'Date',
                  field: 'date',
                  sort: 'asc',
                  width: 150
              },
            ],
            rows: this.props.vehicleTrips.map(trips => {
              return {
                vehicleNumber: trips.vehicleNumber,
                tipperPrice: trips.tipperPrice,
                vrtID: trips.vrtID,
                date: datetime.create(trips.date).format('m/d/y')
              }
            })
        };
        return (
            <div class="col-md-9">
              <div class="panel panel-default my-auto" id="transaction">
                <div class="panel-heading main-color-bg">
                  <h3 class="panel-title">All Transactions</h3>
                </div>
                <div className="panel-body">
            <MDBDataTable
              striped
              bordered
              small
              data={data}
              /> 
                </div>
              </div>
            </div>
          );
    }
}

export default VehicleTripsList;
