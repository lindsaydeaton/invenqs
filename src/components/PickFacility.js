import React, { useState } from "react";
import { Form } from "./Form.js"
import '../App.css';


export function PickFacility() {

    return (
        <div className="page">
            <div className="fullForm">
                    <label>Facility Type:
                        <select className="inputSpace" id="facility">
                            <option>Select One</option>
                            <option>Hospital</option>
                            <option>Medical Office</option>
                            <option>Rehab Facility</option>
                            <option>Retirement Home</option>
                        </select>
                    </label>
                    <Form />
            </div>
        </div>
    )

}
