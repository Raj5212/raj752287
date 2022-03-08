import React from 'react';

const Close = () => {

    // creates entity
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "fairestdb.p.rapidapi.com",
            "x-rapidapi-key": "API_KEY",
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify()
    }).then((resp) => {
        // console.warn("resp", resp);;
        resp.json().then((result) => {
            // console.warn("result", result)
        })
    })

                    return <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h1 className="display-4 text-center">Make An API Call in React</h1>
                                <form className="d-flex flex-column">
                                    <legend className="text-center">Add-Update-Delete Friend</legend>
                                    <label htmlFor="name">
                                        Friend Name:
                                        <input
                                            name="name"
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => this.handleChange({ name: e.target.value })}
                                            required
                                        />
                                    </label>
                                    <label htmlFor="notes">
                                        Friend notes:
                                        <input
                                            name="notes"
                                            id="notes"
                                            type="test"
                                            className="form-control"
                                            onChange={(e) => this.handleChange({ notes: e.target.value })}
                                            required
                                        />
                                    </label>
                                    <label htmlFor="id">
                                        Friend ID:
                                        <input
                                            name="id"
                                            id="id"
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => this.handleChange({ id: e.target.value })}
                                        />
                                    </label>
                                    <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                                        Add
                                    </button>
                                    <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                                        Update
                                    </button>
                                    <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                };

                export default Close;
