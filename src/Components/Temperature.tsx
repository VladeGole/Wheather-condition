import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface TemperatureInterface {
    city: string;
    country: string;
    temperature: string;
}

function Temperature() {

    let [city, setCity] = useState<string>("");
    let [country, setCountry] = useState<string>("");
    let [temperature, setTemperature] = useState<string>("");
    let [temperaturObj, setTemperaturObj] = useState<TemperatureInterface[]>([]);

    function addTemperature() {
        if (!city || !country || !temperature) return;

        setTemperaturObj([
            ...temperaturObj,
            {
            city: city,
            country: country,
            temperature: temperature
            }])
        setCity("");
        setTemperature("");
        setCountry("");

    }

    function deleteItem(indexToDelete: number) {
        setTemperaturObj(temperaturObj.filter((_, index) => indexToDelete !== index));
    }

    return (

            <div className="container-fluid bg-primary-subtle text-white wholePage d-flex flex-column align-items-center">
                <div className="d-flex flex-column text-center pt-3">
                    <h2>Vremenski dnevnik</h2>
                    <p>Unesi grad, drzavu i izmerenu temperaturu da bi ih dodao u listu ispod</p>
                </div>
              <div className="bg-white mainCard">
                <div className="d-flex justify-content-around pt-2">
                    <label>Grad</label>
                    <label>Drzava</label>
                </div>
                    <div className="d-flex justify-content-around">
                        <input value={city} placeholder="Novi Sad" onInput={(e) => setCity(e.currentTarget.value)}/>
                        <input value={country} placeholder="Srbija" onInput={(e) => setCountry(e.currentTarget.value)}/>
                    </div>
                <div className="container-fluid mt-5">
                    <label>Temperature (C)</label>
                    <input value={temperature} placeholder="npr.24" style={{width:'100%'}} onInput={(e) => setTemperature(e.currentTarget.value)}/>
                </div>
                  <button
                      className="btn btn-dark text-white"
                      style={{ position: 'absolute', bottom: '10px', right: '10px' }}
                      onClick={addTemperature}
                  >
                      Dodaj unos
                  </button>
              </div>
                {temperaturObj.length > 0  ?
                    temperaturObj.map((tem, index) => (

                        <div className="field" key={index}>
                            <div className="d-flex align-items-center">
                                <div className="temperature">{tem.temperature}°</div>
                                <div className="countryAndCity">
                                    <h4>{tem.city}</h4>
                                    <p>{tem.country}</p>
                                </div>
                            </div>
                            <button className="btn btn-close-white" onClick={() => deleteItem(index)}>Obrisi</button>
                        </div>

                    ))
                    :
                    <div className="withoutEnter">
                        <p>Jos uvek nemate svoj unos. Dodaj prvi grad iznad</p>
                    </div>
                }
            </div>

    )
}

export default Temperature;