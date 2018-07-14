import React from 'react';
import { connect } from 'react-redux';
import JobLocationRow from './JobLocationRow';
import { onChange } from '../actions/jobActions';
import { loadLocations } from '../actions/locationActions';
import Locations from './Locations';

class Job extends React.Component{
    state={
        showLocationList: false
    };

    toggleLocationList = () =>{
        this.setState({
            showLocationList: !this.state.showLocationList
        })
    }

    componentWillMount(){
        this.props.loadLocations();
    }

    priceInput = (event) => {
        let key = event.keyCode || event.which;
        if (event.shiftKey) event.preventDefault();
        else if(key!==8 && key!==190 && (key<48 || key>57)) event.preventDefault();
    }

    numberInput = (event) => {
        let key = event.keyCode || event.which;
        if (event.shiftKey) event.preventDefault();
        else if(key!==8 && (key<48 || key>57)) event.preventDefault();
    }
    
    render(){
        let { job } = this.props;
        let jobClass = (this.state.showLocationList)?'col-12 col-md-6':'col-12';
        return(
            <div className="container">
                <div className="row">
                    <div className={jobClass}>
                        <h3 className="text-center my-4">Create Job</h3>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Job Name:
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control" name="name" value={job.name} onChange={this.props.onChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Pickup Date:
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control" name="pickupDate" value={job.pickupDate} onChange={this.props.onChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Expected Price:
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control" onKeyDown={this.priceInput} name="expectedPrice" value={job.expectedPrice} onChange={this.props.onChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Expected Delivery Days:
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control" onKeyDown={this.numberInput} name="expectedDelivery" value={job.expectedDelivery} onChange={this.props.onChange}/>
                                </div>
                            </div>
                        </form>
                        <h5>Job Locations:</h5>
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <tbody>
                                    <tr>
                                        <td colSpan="4">Pickups</td>
                                    </tr>
                                    {
                                        job.pickups.map((item, index)=>{
                                            return(<JobLocationRow key={index} index={index} id={item} type="pickup"/>);
                                        })
                                    }
                                    <tr>
                                        <td colSpan="4">Dropoffs</td>
                                    </tr>
                                    {
                                        job.drops.map((item, index)=>{
                                            return(<JobLocationRow key={index} index={index} id={item} type="dropoff"/>);
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                        <button onClick={this.toggleLocationList} className="btn btn-sm btn-primary" type="button">Add Pickups/ Dropoffs</button>
                        <div className="mt-5">
                            <code>
                            {JSON.stringify(job)}
                            </code>
                        </div>
                    </div>
                    {(this.state.showLocationList)? (<Locations />): null}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    job: state.job
});

export default connect(mapStateToProps, {onChange, loadLocations})(Job);