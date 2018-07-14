import React from 'react';
import { connect } from 'react-redux';
import LocationRow from './LocationRow';
import { onChange, onSubmit } from '../actions/locationActions';

class Locations extends React.Component {
    
    render(){
        let { locations, form } = this.props;
        if(locations.length <= 0) return null;

        return(
            <div className="col-12 col-md-6">
                <h4 className="text-center my-4">Select Locations</h4>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Info</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                locations.map((item)=>{
                                    return <LocationRow key={item.id} data={item} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <hr/>
                <h5>Add New</h5>
                <form method="post" onSubmit={this.props.onSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                            ID:
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" name="id" value={form.id} onChange={this.props.onChange} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                            Name:
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" name="name" value={form.name} onChange={this.props.onChange} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                            Location Incharge:
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" name="locationIncharge" value={form.locationIncharge} onChange={this.props.onChange} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                            Phone:
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control" name="phone" value={form.phone} onChange={this.props.onChange} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                            Address:
                        </label>
                        <div className="col-sm-9">
                            <textarea className="form-control" name="address" onChange={this.props.onChange} value={form.address} required></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-sm btn-success">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    locations: state.locations.items,
    form: state.locations.form
});

export default connect(mapStateToProps, { onChange, onSubmit })(Locations);