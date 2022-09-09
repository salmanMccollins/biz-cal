import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import ScratchCard from "react-scratchcard";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [activity, setActivity] = useState("");
  const [shareHolders, setShareHolders] = useState(5);
  const [visa, setVisa] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step1, setstep1] = useState(true);
  const [step2, setstep2] = useState(false);
  const [step3, setstep3] = useState(false);
  const [val, setVal] = useState("");
  const [redNote, setRedNote] = useState("");
  const [step, setStep] = useState(1);

  function incrementCount(e) {
    e.preventDefault();
    let count = visa + 1;
    setVisa(count);
  }
  function decrementCount(e) {
    e.preventDefault();
    if (visa != 0) {
      let count = visa - 1;
      setVisa(count);
    }
  }

  const processNumber = (isValid, phone, country) => {
    return `+${country.dialCode} ${phone}`;
  };

  var result = [];

  useEffect(() => {}, [isSwitchOn]);

  useEffect(() => {
    console.log(val);
  }, [val]);

  const settings = {
    width: 200,
    height: 100,
    image: "assets/scrachBg.jpeg",
    finishPercent: 50,
    onComplete: () => console.log("The card is now clear!"),
  };

  const StandardFee = [
    {
      visa: 0,
      sh: 5,
      spc: 6500,
      shams: 8050,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 7,
      spc: 8050,
      shams: 8050,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 10,
      // spc: null,
      shams: 8050,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 50,
      // spc: null,
      shams: 8050,
      meydan: 13250,
    },
    {
      visa: 1,
      sh: 5,
      spc: 15450,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 7,
      // spc: 19168,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 10,
      // spc: null,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 50,
      // spc: null,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: "1+",
      sh: 5,
      spc: 14448,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 7,
      spc: 14448,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 10,
      // spc: null,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 50,
      // spc: null,
      shams: 14723,
      meydan: 15150,
    },
  ];

  const MediaFee = [
    {
      visa: 0,
      sh: 5,
      // spc: 5750,
      shams: 5750,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 7,
      // spc: 5750,
      shams: 5750,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 10,
      // spc: null,
      shams: 5750,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 50,
      // spc: null,
      shams: 5750,
      meydan: 13250,
    },
    {
      visa: 1,
      sh: 5,
      spc: 15450,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 7,
      // spc: 16675,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 10,
      // spc: null,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 50,
      // spc: null,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: "1+",
      sh: 5,
      // spc: 11475,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 7,
      // spc: 11475,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 10,
      // spc: null,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 50,
      // spc: null,
      shams: 14723,
      meydan: 15150,
    },
  ];

  const GeneralFee = [
    {
      visa: 0,
      sh: 5,
      spc: 6500,
      shams: 6500,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 7,
      spc: 8050,
      shams: 6500,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 10,
      spc: null,
      shams: 6500,
      meydan: 13250,
    },
    {
      visa: 0,
      sh: 50,
      spc: null,
      shams: 6500,
      meydan: 13250,
    },
    {
      visa: 1,
      sh: 5,
      spc: 15450,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 7,
      spc: 19168,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 10,
      spc: null,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: 1,
      sh: 50,
      spc: null,
      shams: 15550,
      meydan: 21000,
    },
    {
      visa: "1+",
      sh: 5,
      spc: 14448,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 7,
      spc: 14448,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 10,
      spc: null,
      shams: 14723,
      meydan: 15150,
    },
    {
      visa: "1+",
      sh: 50,
      spc: null,
      shams: 14723,
      meydan: 15150,
    },
  ];

  const MainlandStandard = [
    {
      visa: 0,
      DED: 19925,
    },
    {
      visa: 1,
      DED: 22425,
    },
    {
      visa: "1+",
      DED: 19925,
    },
  ];

  const MainlandTrading = [
    {
      visa: 0,
      DED: 20425,
    },
    {
      visa: 1,
      DED: 22925,
    },
    {
      visa: "1+",
      DED: 20425,
    },
  ];

  const next1 = (e) => {
    e.preventDefault();

    if (activity == "") {
      setRedNote("Please fill all Fiels");
    }

    if (shareHolders == "") {
      setRedNote("Please fill Shareholder Field");
    }

    // if (visa == "") {
    //   setRedNote("Please fill Visa Field");
    // }

    if (activity != "" && shareHolders != "") {
      setstep1(false);
      setstep2(true);
      setRedNote("");
      setStep(2);
    }
  };

  const next2 = (e) => {
    e.preventDefault();

    if (name == "") {
      setRedNote("Please fill Name Field");
    }

    if (email == "") {
      setRedNote("Please fill Email Field");
    }

    if (phone == "") {
      setRedNote("Please fill Phone Field");
    }

    if (name != "" && email != "" && phone != "") {
      setstep2(false);
      setstep3(true);
      setStep(3);
    }
  };

  const back1 = () => {
    setstep1(true);
    setstep2(false);
    setStep(1);
  };

  const back2 = () => {
    setstep2(true);
    setstep3(false);
    setStep(2);
  };

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  function selectHandler(item) {
    if (!isSwitchOn) {
      standardActivity.find((element) => {
        if (element === item) {
          setActivity("Standard Activity");
        }
      });
      mediaActivity.find((element) => {
        if (element === item) {
          setActivity("Media Activity");
        }
      });
      generalActivity.find((element) => {
        if (element === item) {
          setActivity("General Activity");
        }
      });
    }
    if (isSwitchOn) {
      mainland1.find((element) => {
        if (element === item) {
          setActivity("Mainland Standard Activity");
        }
      });
      mainland2.find((element) => {
        if (element === item) {
          setActivity("Mainland Trading Activity");
        }
      });
    }
  }

  const formhandler = (e) => {
    e.preventDefault();
    var visaTemp;
    if (visa > 1) {
      visaTemp = "1+";
    } else {
      visaTemp = visa;
    }
    if (activity == "Standard Activity") {
      result = StandardFee.find((element) => {
        return element.visa == visaTemp && element.sh >= shareHolders;
      });

      if (visa > 1) {
        if (result.spc) {
          result.spc = result.spc + (visa - 1) * 1120;
        }
        result.shams = result.shams + (visa - 1) * 1120;
        result.meydan = result.meydan + (visa - 1) * 1850;
      }
    }

    if (activity == "Media Activity") {
      result = MediaFee.find((element) => {
        return element.visa == visaTemp && element.sh >= shareHolders;
      });

      if (visa > 1) {
        if (result.spc) {
          result.spc = result.spc + (visa - 1) * 1600;
        }
        result.shams = result.shams + (visa - 1) * 1120;
        result.meydan = result.meydan + (visa - 1) * 1850;
      }
    }

    if (activity == "General Activity") {
      result = GeneralFee.find((element) => {
        return element.visa == visaTemp && element.sh >= shareHolders;
      });

      if (visa > 1) {
        if (result.spc) {
          result.spc = result.spc + visa * 1120;
        }
        result.shams = result.shams + visa * 1120;
        result.meydan = result.meydan + visa * 1850;
      }
    }

    if (activity == "Mainland Standard Activity") {
      result = MainlandStandard.find((element) => {
        return element.visa == visaTemp;
      });

      result.DED = result.DED + shareHolders * 1575;
    }
    if (activity == "Mainland Trading Activity") {
      result = MainlandTrading.find((element) => {
        return element.visa == visaTemp;
      });

      result.DED = result.DED + shareHolders * 1575;
    }

    setTimeout(() => {
      console.log(result);
      // setVal({ meydan: result.meydan });
    }, 2000);

    if (!isSwitchOn) {
      setVal({ meydan: result.meydan, shams: result.shams, spc: result.spc });
    }
    if (isSwitchOn) {
      setVal({ DED: result.DED });
    }
  };

  var arr = [
    "You have won 15 min free tax consultation",
    "You have won 10% discount on bank account opening",
  ];

  function randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  const standardActivity = [
    "Accounting & Auditing",
    "Atuomobile trading",
    "Aviation consultancy",
    "Business Consultancy",
    "Creative Arts & Entertainment activities",
    "Educational support activities",
    "Engineering consultancy",
    "Event management",
    "Food trading ",
    "Holding company",
    "Hospitality management",
    "HR Consultancy",
    "Interior deisgn consultancy",
    "Investment consultancy",
    "IT consultancy",
    "IT trading",
    "Jewelery trading",
    "Legal consultancy",
    "Logistics consultancy",
    "Maintenance",
    "Management consultancy",
    "Perfumes and cosmetics trading",
    "PR",
    "Project Management",
    "Raw materials trading",
    "Real estate",
    "Software publishing",
    "Sports management",
    "Technical consultancy ",
    "Textile trading ",
    "Tourism & Recreation",
    "Architecture ",
    "Design Services",
    "Event management ",
    "Fashion design consultancy ",
    "Interior deisgn ",
    "Lifestyle consultancy ",
    "Online education",
    "Project management consultancy",
    "Recruitment consultancy",
    "Software development management",
    "Tax consultancy",
    "Training services",
    "Wholesale of household goods",
  ];

  const mediaActivity = [
    "Digital Marketing",
    "E-commerce",
    "Media",
    "Photography",
    "Videography",
    "Advertising",
    "Marketing services",
    "Media services",
    "Production",
    "Publishing",
  ];

  const generalActivity = ["General Trading"];

  const mainland1 = [
    "Accounting & Auditing",
    "Aviation consultancy",
    "Business Consultancy ",
    "Cleaning Services ",
    "Creative Arts & Entertainment activities",
    "Delivery services ",
    "Digital Marketing ",
    "E-commerce ",
    "Educational support activities",
    "Engineering consultancy ",
    "Event management",
    "Hospitality management ",
    "HR Consultancy",
    "Interior deisgn consultancy",
    "Investment consultancy ",
    "IT consultancy ",
    "Legal consultancy ",
    "Logistics consultancy ",
    "Maintenance ",
    "Management consultancy ",
    "Media ",
    "PR",
    "Photography",
    "Project Management ",
    "Real estate ",
    "Restaurant, café, cloud kitchen",
    "Retail outlet/ shop",
    "Salon",
    "Software publishing ",
    "Sports management",
    "Tourism & Recreation",
    "Videography",
    "Advertising ",
    "Architecture ",
    "Design Services",
    "Event management ",
    "Fashion design consultancy ",
    "Interior deisgn ",
    "Lifestyle consultancy ",
    "Marketing services ",
    "Media services",
    "Online education",
    "Production",
    "Project management consultancy",
    "Publishing ",
    "Recruitment consultancy",
    "Software development management",
    "Tax consultancy",
    "Training services",
  ];

  const mainland2 = [
    "Atuomobile trading ",
    "Food trading ",
    "General trading ",
    "Holding company",
    "IT trading ",
    "Jewelery trading ",
    "Perfumes and cosmetics trading ",
    "Raw materials trading ",
    "Technical services",
    "Textile trading ",
    "Wholesale of household goods",
  ];

  return (
    <div className="App">
      <section style={{ minHeight: "100vh" }}>
        <div className="row" style={{ minHeight: "100vh" }}>
          <div
            className="offset-md-1 col-md-6  col-sm-12"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              placeContent: "end",
            }}
          >
            <h2
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              Calculate <br />
              Your Business <br /> Setup Fees
            </h2>
            <div className="step-div">
              <div className="circle-line"></div>
              <div className="row pl-div">
                <div className="progress-line"></div>
              </div>
              <div className="row prt-all-circle">
                <div className="col-sm-4 all-circle">
                  <div className="circle-div">
                    <div
                      className={`small-circle ${step === 1 ? "active" : null}`}
                      id="sc-1"
                    ></div>
                  </div>
                  <p>Step 1</p>
                </div>
                <div className="col-sm-4 all-circle">
                  <div className="circle-div">
                    <div
                      className={`small-circle ${step === 2 ? "active" : null}`}
                      id="sc-2"
                    ></div>
                  </div>
                  <p>Step 2</p>
                </div>
                <div className="col-sm-4 all-circle">
                  <div className="circle-div">
                    <div
                      className={`small-circle ${step === 3 ? "active" : null}`}
                      id="sc-3"
                    ></div>
                  </div>
                  <p>Step 3</p>
                </div>
              </div>
            </div>
            <form>
              <div
                className="step-1 form-box py-5"
                style={{ display: step1 ? "block" : "none" }}
              >
                <Form.Check
                  reverse
                  type="switch"
                  className="switch-001"
                  id="custom-switch"
                  label="Do you require phyiscal office space?"
                  onChange={onSwitchAction}
                  checked={isSwitchOn}
                />
                <Form.Group className="my-3" controlId="formBasicActivities">
                  <Form.Label>Activities</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      selectHandler(e.target.value);
                    }}
                  >
                    <option>Open this select menu</option>
                    {!isSwitchOn &&
                      standardActivity.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    {!isSwitchOn &&
                      mediaActivity.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    {!isSwitchOn &&
                      generalActivity.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    {isSwitchOn &&
                      mainland1.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    {isSwitchOn &&
                      mainland2.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>
                <div className="mt-3 nbr-div-1">
                  <label>No of ShareHolders</label>
                  {/* <input
                type="number"
                min={1}
                max={50}
                onChange={(e) => {
                  setShareHolders(e.target.value);
                }}
              /> */}
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setShareHolders(e.target.value);
                    }}
                    style={{ width: "40%" }}
                  >
                    <option value={5}>Upto 5</option>
                    <option value={7}>Upto 7</option>
                    <option value={10}>Upto 10</option>
                    <option value={50}>Upto 50</option>
                  </Form.Select>
                </div>
                <div className="mt-3 nbr-div-1">
                  <label>No of Visa</label>
                  {/* <input
                    type="number"
                    className="cst-input"
                    min={0}
                    max={50}
                    onChange={(e) => {
                      setVisa(e.target.value);
                    }}
                    style={{ width: "40%" }}
                  /> */}

                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <button
                      style={{ border: "none", borderRadius: "15px" }}
                      onClick={(e) => {
                        decrementCount(e);
                      }}
                    >
                      -
                    </button>
                    <input
                      className="visa-input"
                      value={visa}
                      style={{ width: "30%", margin: "0 10px" }}
                    />

                    <button
                      style={{ border: "none", borderRadius: "15px" }}
                      onClick={(e) => {
                        incrementCount(e);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p style={{ color: "red" }}>{redNote}</p>
                <div className="btn-div-01 mt-3">
                  <button
                    className="btn-cst-01"
                    onClick={(e) => {
                      next1(e);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div
                className="step-2 form-box pb-5"
                style={{ display: step2 ? "block" : "none" }}
              >
                <div
                  className="back-div"
                  onClick={() => {
                    back1();
                  }}
                >
                  <img src="assets/back.png" width={"15px"} />
                </div>
                <h2>
                  One more
                  <br />
                  step to go!
                </h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    className="cst-input2"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    className="cst-input2"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control
                className="cst-input2"
                type="number"
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group> */}
                <IntlTelInput
                  containerClassName="intl-tel-input"
                  inputClassName="form-control"
                  placeholder="Enter Phone Number"
                  onPhoneNumberChange={(isValid, phone, country) => {
                    setPhone(processNumber(isValid, phone, country));
                  }}
                />

                <p style={{ color: "red" }}>{redNote}</p>
                <div className="btn-div-01 mt-3">
                  <button
                    className="btn-cst-01"
                    onClick={(e) => {
                      next2(e);
                      formhandler(e);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div
                className="step-3 form-box pb-5"
                style={{ display: step3 ? "block" : "none" }}
              >
                <div
                  className="back-div"
                  onClick={() => {
                    back2();
                  }}
                >
                  <img src="assets/back.png" width={"15px"} />
                </div>
                <h4>{name}</h4>
                <h3 style={{ fontSize: "18px" }}>{email}</h3>
                <h3 style={{ fontSize: "18px" }}>{phone}</h3>
                <div className="d-flex result-row">
                  <div>Number of ShareHolders :</div>
                  <div>{shareHolders}</div>
                </div>
                <div className="d-flex result-row">
                  <div>Number of Visa</div>
                  <div>{visa}</div>
                </div>

                <div
                  className=" result-row"
                  style={{ display: isSwitchOn ? "none" : "flex" }}
                >
                  <div>Pirce for Meydan</div>
                  <div>{val.meydan}</div>
                </div>
                {val.spc ? (
                  <div
                    className="result-row"
                    style={{ display: isSwitchOn ? "none" : "flex" }}
                  >
                    <div>Pirce for SPC</div>
                    <div>{val.spc}</div>
                  </div>
                ) : (
                  <div
                    className=" result-row"
                    style={{ display: isSwitchOn ? "none" : "flex" }}
                  >
                    <div>Pirce for Shams</div>
                    <div>{val.shams}</div>
                  </div>
                )}

                <div
                  className=" result-row"
                  style={{ display: isSwitchOn ? "flex" : "none" }}
                >
                  <div>Pirce for DED</div>
                  <div>{val.DED}</div>
                </div>

                <div className="scrach-card">
                  <ScratchCard {...settings}>{randomize(arr)}</ScratchCard>
                </div>

                <textarea
                  className="cal-testarea"
                  placeholder="Tell us more about your intended"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
