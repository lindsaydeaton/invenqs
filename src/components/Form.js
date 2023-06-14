import React, { useState } from "react";
import '../App.css';


export function Form() {
    const [knownHospital, setKnownHospital] = useState(false);
    const [count, setCount] = useState(1)

    const onClickAdd = (e) => {
        setKnownHospital(true);
        setCount(count + 1)
    }
    return (
        <div className="fullForm">
            <label>Room Count: <input disabled className="inputSpace" type="text" value={count}></input></label>

            <label>Unit Name: <input className="inputSpace" type="text"></input></label>
            <label>Room Number: <input className="inputSpace" type="text"></input></label>
            <label>Bed Manufacturer:
                <select className="inputSpace" id="beds">
                    <option>Select One</option>
                    <option>VersaCare</option>
                    <option>Centrella</option>
                    <option>Adventa 2</option>
                    <option>Progressa</option>
                    <option>Compella</option>
                    <option>Stryker</option>
                    <option>No Bed</option>
                </select>
            </label>
            <label>Bed Year:
                <select className="inputSpace" id="bedYear">
                    <option>Select One</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>No Date</option>
                </select>
            </label>
            <label>Bed Condition:
                <select className="inputSpace" id="surfaceCondition">
                    <option>Select One</option>
                    <option>E - Excellent</option>
                    <option>G - Good</option>
                    <option>F - Fair</option>
                    <option>C- Critical</option>
                </select>
            </label>
            <label>Bed Rust:
                <input className="inputSpace" type="radio" id="rustYes" name="rustYes" value="Yes" />
                <label className="ynLabel" for="rustYes">Yes</label>
                <input type="radio" id="rustNo" name="rustNo" value="No" />
                <label className="ynLabel" for="rustNo">No</label></label>
            <label>Bed Dented:
                <input className="inputSpace" type="radio" id="dentYes" name="dentYes" value="Yes" />
                <label className="ynLabel" for="dentYes">Yes</label>
                <input type="radio" id="dentNo" name="dentNo" value="No" />
                <label className="ynLabel" for="dentNo">No</label></label>
            <label>Bed Broken Parts:
                <input className="inputSpace" type="radio" id="brokenYes" name="brokenYes" value="Yes" />
                <label className="ynLabel" for="brokenYes">Yes</label>
                <input type="radio" id="brokenNo" name="brokenNo" value="No" />
                <label className="ynLabel" for="brokenNo">No</label></label>
            <label>Surface Type:
                <select className="inputSpace" id="surfaceCondition">
                    <option>Select One</option>
                    <option>Air</option>
                    <option>Foam</option>
                    <option>Envision</option>
                    <option>Unknown</option>
                    <option>None</option>
                </select>
            </label>
            <label>Surface Condition:
                <select className="inputSpace" id="surfaceCondition">
                    <option>Select One</option>
                    <option>E - Excellent</option>
                    <option>G - Good</option>
                    <option>F - Fair</option>
                    <option>C- Critical</option>
                </select>
            </label>
            <p><label>Comments:</label></p><textarea rows="3" cols="70"></textarea>
            <div className="buttonsDiv">
                <button className="goButtons" type="submit">Submit</button>
                <button className="moreButtons" onClick={onClickAdd}>Add Another Room</button>
            </div>

            {knownHospital &&
                <div className="fullForm">
                    <label>Room Count: <input disabled className="inputSpace" type="text" value={count}></input></label>

                    <label>Unit Name: <input className="inputSpace" type="text"></input></label>
                    <label>Room Number: <input className="inputSpace" type="text"></input></label>
                    <label>Bed Manufacturer:
                        <select className="inputSpace" id="beds">
                            <option>Select One</option>
                            <option>VersaCare</option>
                            <option>Centrella</option>
                            <option>Adventa 2</option>
                            <option>Progressa</option>
                            <option>Compella</option>
                            <option>Stryker</option>
                            <option>No Bed</option>
                        </select>
                    </label>
                    <label>Bed Year:
                        <select className="inputSpace" id="bedYear">
                            <option>Select One</option>
                            <option>1997</option>
                            <option>1998</option>
                            <option>1999</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>No Date</option>
                        </select>
                    </label>
                    <label>Bed Condition:
                        <select className="inputSpace" id="surfaceCondition">
                            <option>Select One</option>
                            <option>E - Excellent</option>
                            <option>G - Good</option>
                            <option>F - Fair</option>
                            <option>C- Critical</option>
                        </select>
                    </label>
                    <label>Bed Rust:
                        <input className="inputSpace" type="radio" id="rustYes" name="rustYes" value="Yes" />
                        <label className="ynLabel" for="rustYes">Yes</label>
                        <input type="radio" id="rustNo" name="rustNo" value="No" />
                        <label className="ynLabel" for="rustNo">No</label></label>
                    <label>Bed Dented:
                        <input className="inputSpace" type="radio" id="dentYes" name="dentYes" value="Yes" />
                        <label className="ynLabel" for="dentYes">Yes</label>
                        <input type="radio" id="dentNo" name="dentNo" value="No" />
                        <label className="ynLabel" for="dentNo">No</label></label>
                    <label>Bed Broken Parts:
                        <input className="inputSpace" type="radio" id="brokenYes" name="brokenYes" value="Yes" />
                        <label className="ynLabel" for="brokenYes">Yes</label>
                        <input type="radio" id="brokenNo" name="brokenNo" value="No" />
                        <label className="ynLabel" for="brokenNo">No</label></label>
                    <label>Surface Type:
                        <select className="inputSpace" id="surfaceCondition">
                            <option>Select One</option>
                            <option>Air</option>
                            <option>Foam</option>
                            <option>Envision</option>
                            <option>Unknown</option>
                            <option>None</option>
                        </select>
                    </label>
                    <label>Surface Condition:
                        <select className="inputSpace" id="surfaceCondition">
                            <option>Select One</option>
                            <option>E - Excellent</option>
                            <option>G - Good</option>
                            <option>F - Fair</option>
                            <option>C- Critical</option>
                        </select>
                    </label>
                    <p><label>Comments:</label></p><textarea rows="3" cols="70"></textarea>
                    <div className="buttonsDiv">
                        <button className="goButtons" type="submit">Submit</button>
                        <button className="moreButtons" onClick={onClickAdd}>Add Another Room</button>
                    </div>
                </div>
            }
        </div>


    )
}
