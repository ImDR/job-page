import React from 'react';
import { connect } from 'react-redux';
import { addToDrop, addToPickup } from '../actions/locationActions';

const LocationRow = (props) => {
    return ( 
        <tr>
            <td> {props.data.id} </td>
            <td> {props.data.name} </td>
            <td>
                <b>Incharge:</b> {props.data.locationIncharge}
                <br />
                <b>Phone:</b> {props.data.phone}
                <br />
                <b>Address:</b> {props.data.address}
            </td>
            <td>
                <button onClick={()=>{props.addToPickup(props.data.id)}} type="button" className="btn btn-success btn-sm mb-2">Add to pickup</button>
                <button onClick={()=>{props.addToDrop(props.data.id)}} type="button" className="btn btn-info btn-sm mb-2">Add to dropoff</button>
                <button type="button" className="btn btn-danger btn-sm">Remove</button>
            </td>
        </tr>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addToDrop, addToPickup })(LocationRow);