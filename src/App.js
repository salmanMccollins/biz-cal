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
  const [shareHolders, setShareHolders] = useState(1);
  const [visa, setVisa] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextArea] = useState("");
  const [step1, setstep1] = useState(true);
  const [step2, setstep2] = useState(false);
  const [step3, setstep3] = useState(false);
  const [val, setVal] = useState("");
  const [redNote, setRedNote] = useState("");
  const [step, setStep] = useState(1);
  const [scrachText, setScrachText] = useState(true);

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

  function incrementCountS(e) {
    e.preventDefault();
    let count = shareHolders + 1;
    setShareHolders(count);
  }
  function decrementCountS(e) {
    e.preventDefault();
    if (shareHolders != 1) {
      let count = shareHolders - 1;
      setShareHolders(count);
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
    width: 300,
    height: 50,
    image: "assets/scrachBg.png",
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

    const sel2 = document.getElementById("select2");

    if (!isSwitchOn) {
      standardActivity.find((element) => {
        if (element === sel2.value) {
          setActivity("Standard Activity");
        }
      });
      mediaActivity.find((element) => {
        if (element === sel2.value) {
          setActivity("Media Activity");
        }
      });
      generalActivity.find((element) => {
        if (element === sel2.value) {
          setActivity("General Activity");
        }
      });
    }
    if (isSwitchOn) {
      mainland1.find((element) => {
        if (element === sel2.value) {
          setActivity("Mainland Standard Activity");
        }
      });
      mainland2.find((element) => {
        if (element === sel2.value) {
          setActivity("Mainland Trading Activity");
        }
      });
    }

    if (sel2.value == "Choose your business activity") {
      setRedNote("Please fill all Fiels");
      return;
    }

    if (shareHolders == "") {
      setRedNote("Please fill Shareholder Field");
    }

    // if (visa == "") {
    //   setRedNote("Please fill Visa Field");
    // }

    if (shareHolders != "") {
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

  function senddata(e) {
    e.preventDefault();
    // let formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("phone", phone);
    // formData.append("physical space", isSwitchOn);
    // formData.append("activity", activity);
    // formData.append("shareholder", shareHolders);
    // formData.append("visa", visa);
    // formData.append("textarea", textarea);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        physical: isSwitchOn,
        activity: activity,
        shareholder: shareHolders,
        visa: visa,
        textarea: textarea,
      }),
    };
    fetch("/api/form-submit", requestOptions).then((response) =>
      response.json()
    );
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

  function select2() {}

  return (
    <div className="App">
      <section className="new-sec">
        <img src="/assets/bg1.jpg" width={"100%"} className="bg-img" />
        <div className="main">
          <div className="row main-row">
            <div className="col-lg-7">
              <div className="content-box">
                <div>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    praesent?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent a dolor a orci varius maximus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cal-div">
                <h2 className="cal-heading">
                  Calculate Your
                  <br /> Business Setup Fees
                </h2>
                <div className="step-circle">
                  <div
                    style={{ background: step1 ? "#97C6CA" : "#97c6ca7e" }}
                  ></div>
                  <div
                    style={{ background: step2 ? "#97C6CA" : "#97c6ca7e" }}
                  ></div>
                  <div
                    style={{ background: step3 ? "#97C6CA" : "#97c6ca7e" }}
                  ></div>
                </div>
                <div className="cal-form-div">
                  <form>
                    <div
                      className="step-1 form-box"
                      style={{
                        display: step1 ? "block" : "none",
                        paddingTop: "30px",
                      }}
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

                      <select
                        className="js-example-basic-single form-select"
                        name="state"
                        id="select2"
                      >
                        <option>Choose your business activity</option>
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
                      </select>

                      {/* <div className="mt-3 ">
                  <Form.Label>No of Shareholder</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setShareHolders(e.target.value);
                    }}
                  >
                    <option value={5}>Upto 5</option>
                    <option value={7}>Upto 7</option>
                    <option value={10}>Upto 10</option>
                    <option value={50}>Upto 50</option>
                  </Form.Select>
                </div> */}
                      <div className="mt-4 ">
                        <Form.Label>Number of Shareholder</Form.Label>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <button
                            style={{
                              border: "none",
                              borderRadius: "15px",
                              background: "transparent",
                              border: "2px solid #fff",
                              color: "#fff",
                            }}
                            onClick={(e) => {
                              decrementCountS(e);
                            }}
                          >
                            -
                          </button>
                          <input
                            className="visa-input"
                            value={shareHolders}
                            style={{
                              width: "75%",
                              margin: "0 10px",
                              background: "transparent",
                              border: "2px solid #fff",
                              color: "#fff",
                            }}
                          />

                          <button
                            style={{
                              border: "none",
                              borderRadius: "15px",
                              background: "transparent",
                              border: "2px solid #fff",
                              color: "#fff",
                            }}
                            onClick={(e) => {
                              incrementCountS(e);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 ">
                        <Form.Label>Number of Visa</Form.Label>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <button
                            style={{
                              border: "none",
                              borderRadius: "15px",
                              background: "transparent",
                              border: "2px solid #fff",
                              color: "#fff",
                            }}
                            onClick={(e) => {
                              decrementCount(e);
                            }}
                          >
                            -
                          </button>
                          <input
                            className="visa-input"
                            value={visa}
                            style={{
                              width: "75%",
                              margin: "0 10px",
                              background: "transparent",
                              border: "2px solid #fff",
                              color: "#fff",
                            }}
                          />

                          <button
                            style={{
                              border: "none",
                              borderRadius: "15px",
                              background: "transparent",
                              border: "2px solid #fff",
                              color: "#fff",
                            }}
                            onClick={(e) => {
                              incrementCount(e);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p
                        style={{
                          color: "red",
                          marginBottom: 0,
                          marginTop: "5px",
                          position: "absolute",
                        }}
                      >
                        {redNote}
                      </p>
                      <div className="btn-div-01">
                        <button
                          className="btn-cst-01"
                          onClick={(e) => {
                            next1(e);
                            select2();
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
                      <h2 style={{ marginTop: "20px" }}>
                        One more
                        <br />
                        step to go!
                      </h2>
                      <Form.Group className="mb-4" controlId="formBasicName">
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
                      <Form.Group className="mb-4" controlId="formBasicEmail">
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

                      <p
                        style={{
                          color: "red",
                          marginBottom: 0,
                          marginTop: "5px",
                          position: "absolute",
                        }}
                      >
                        {redNote}
                      </p>
                      <div className="btn-div-01" style={{ marginTop: "44px" }}>
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
                      className="step-3 form-box pb-4"
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
                      <div className="result-info">
                        <h3 style={{ fontSize: "18px" }}>{name}</h3>
                        <h3 style={{ fontSize: "18px" }}>{email}</h3>
                        <h3 style={{ fontSize: "18px" }}>{phone}</h3>

                        <hr
                          style={{ marginBottom: "10px", marginTop: "10px" }}
                        />

                        <div className="d-flex result-row">
                          <div>No of ShareHolders :</div>
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
                          <div>AED {val.meydan}</div>
                        </div>
                        {val.spc ? (
                          <div
                            className="result-row"
                            style={{ display: isSwitchOn ? "none" : "flex" }}
                          >
                            <div>Pirce for SPC</div>
                            <div>AED {val.spc}</div>
                          </div>
                        ) : (
                          <div
                            className=" result-row"
                            style={{ display: isSwitchOn ? "none" : "flex" }}
                          >
                            <div>Pirce for Shams</div>
                            <div>AED {val.shams}</div>
                          </div>
                        )}

                        <div
                          className=" result-row"
                          style={{ display: isSwitchOn ? "flex" : "none" }}
                        >
                          <div>Pirce for DED</div>
                          <div>{val.DED}</div>
                        </div>
                      </div>

                      <div className="scrach-card">
                        <p
                          onMouseEnter={(e) => {
                            setScrachText(false);
                          }}
                          style={{ display: scrachText ? "block" : "none" }}
                        >
                          Scratch Here
                        </p>
                        <ScratchCard {...settings}>
                          {randomize(arr)}
                        </ScratchCard>
                      </div>

                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <textarea
                          className="cal-testarea"
                          placeholder="Leave your message here"
                          onChange={(e) => {
                            setTextArea(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <button
                          onClick={(e) => {
                            senddata(e);
                          }}
                          className="btn-cst-02"
                        >
                          GET A CALL
                        </button>
                        <a
                          style={{
                            textAlign: "center",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Send quotation by email
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
