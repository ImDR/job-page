import React from 'react';
import { connect } from 'react-redux';
import { removeDropoff, removePickup } from '../actions/jobActions';
import { addToDrop, addToPickup } from '../actions/locationActions';

class JobLocationRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moveBtn: (props.type==="pickup")?"Move to dropoff": "Move to pickup",
            location: this.getLocation()
        }
    }

    onMoveCkick = () =>{
        if(this.props.type === "pickup"){
            this.props.removePickup(this.props.id);
            this.props.addToDrop(this.props.id);
        }else{
            this.props.removeDropoff(this.props.id);
            this.props.addToPickup(this.props.id);
        }
    }

    onRemoveClick = () =>{
        if(this.props.type === "pickup"){
            this.props.removePickup(this.props.id);
        }else{
            this.props.removeDropoff(this.props.id);
        }
    }

    getLocation = () => {
        return this.props.locations.find((item)=>{
            return item.id === this.props.id
        })
    }

    render(){
        let { id, index } = this.props;
        let { location } = this.state;
        return ( 
            <tr>
                <th scope = "row" > {index + 1} </th> 
                <td>
                    <b>ID:</b> {id} <br/>
                    <b>Name:</b> { location.name }
                </td>
                <td>
                    <button type="button" className="btn btn-info btn-sm mb-2" onClick={this.onMoveCkick}>{this.state.moveBtn}</button>
                    <br/>
                    <button type="button" className="btn btn-danger btn-sm mb-2" onClick={this.onRemoveClick}>Remove</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => ({
    job: state.job,
    locations: state.locations.items
});

export default connect(mapStateToProps, { removePickup, removeDropoff, addToDrop, addToPickup })(JobLocationRow);