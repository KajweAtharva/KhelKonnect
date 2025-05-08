import React from "react";
import GetStarted from "../assets/images/GetStarted.png";
import Location from "../assets/images/Location.png";
import Badminton from "../assets/images/Badminton.png";
import Cricket from "../assets/images/Cricket.png";
import Football from "../assets/images/Football.png";
import Chess from "../assets/images/Chess.png";
import logo from "../assets/images/logo.jpg"
import { useState, useEffect } from "react";



const places = [
  {
    name: "T10 Sports Arena | Swami Samarth School (Andheri)",
    price: "₹1000 onwards",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Turf House | Mira Road",
    price: "₹888 onwards",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Global Badminton Academy | Virar West",
    price: "₹500 onwards",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
];

const sports = [
  {
    name: "Chess",
    img: Chess
  },
  {
    name: "Cricket",
    img: Cricket
  },
  {
    name: "Football",
    img: Football,
  },
  {
    name: "Badminton",
    img: Badminton ,
  },
];



export default function LandingPage() {
  // Responsive helper
  //const isMobile = window.innerWidth <= 600;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 420);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



  return (
    <div
      style={{
        minHeight: "100%",
        width: "100%",
        fontFamily: "Inter, sans-serif",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          width: isMobile? "100%": "100%",
          height:"100%",
          boxSizing: "border-box",
          display: "flex",
          padding: isMobile ? "5px 8px" : "25px 10px",
          background: "#fff",
          borderBottom: "1px solid #e0e0e0",
          fontWeight: 'bold'
        }}
      >
        <img src= {logo} style={{ alignItems: "center", width:isMobile? "55px" : "160px", height: isMobile? "20px":"", paddingTop:isMobile? "18px":""}}></img>
        <div  style={{
            alignItems: isMobile ? "center" : "start",
            padding: isMobile ? "8px" : "8px 80px",
            marginTop: isMobile? "5px" : "0px",
            textAlign: isMobile ? "center" : "left",
          }}>
        <nav>
          <a href="#" style={{ margin: isMobile? "10px 12px" :"0px 12px", textDecoration: "none", color: "#222", fontSize: isMobile?"0.45rem": "1.2rem" }}>Play</a>
          <a href="#" style={{ margin: isMobile? "10px 12px" :"0px 12px", textDecoration: "none", color: "#222", fontSize: isMobile?"0.45rem": "1.2rem" }}>Book</a>
          <a href="#" style={{ margin: isMobile? "10px 12px" :"0px 12px", textDecoration: "none", color: "#222", fontSize: isMobile?"0.45rem": "1.2rem" }}>About Us</a>
          <a href="#" style={{ margin: isMobile? "10px 12px" :"0px 12px", textDecoration: "none", color: "#222", fontSize: isMobile?"0.45rem": "1.2rem" }}>Contact Us</a>
        </nav>
        </div>
        <div style={{ flex: 1,
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
            padding: isMobile? "18px" :"8px",
            marginTop: isMobile? "5px":"0px"}}>
          <a href="#" style={{ textDecoration: "none", color: "#222", fontSize: isMobile?"0.4rem": "1.2rem"}}>👤Login/Sign Up</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "start",
          textAlign: isMobile ? "center" : "left",
          marginBottom: 14,
          width: isMobile ? "100%" : "100vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? 24 : 0,
            backgroundImage: isMobile? `url(${GetStarted})` : 'none',
            backgroundSize: isMobile? "cover":"",
            backgroundPosition:isMobile?"center":"",
            backgroundRepeat:isMobile? "no-repeat":"",
            overflow:"hidden",
            height: isMobile? "500px" : "",
            width:isMobile?"370px":""
          }}
        >
          <div style={{ flex: 0 ,
            padding: isMobile? "0px" :"25px",
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: isMobile? 9:14 , justifyContent:isMobile? "center":"left", marginTop:isMobile? "150px" : "0px" }}>
              <span style={{ marginTop: 7, marginRight: 0 }}>
                <img src={ Location } alt="Location" 
                  style={{
                    maxWidth: isMobile? "25px" : "35px"
                  }}
                />
              </span>
              <input
                type="text"
                value="Mumbai"
                readOnly
                style={{
                  color: "black",
                  border: "1px solid #ccc",
                  borderRadius: 15,
                  padding: "5px 14px",
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  fontSize: isMobile? "0.9rem" : "1.5rem",
                  height: isMobile?"100%" : "50px",
                  fontWeight: 'bold',
                  boxShadow: '1px 1px 4px rgba(82, 82, 82, 0.3)'
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" ,alignItems: isMobile? "center": "start", marginBottom: 14, width: "100vh", }}>
                <div style={{ width: "fit-content", height: "fit-content", borderRadius: 32, backgroundColor:isMobile? 'rgba(255, 255, 255, 0.7)' : ''}}>
                        <h1
                          style={{
                            color: isMobile? "Black" : "#00BE67",
                            fontSize: isMobile ? "1.7rem" : "3.5rem",
                            marginTop: isMobile? 25: 50,
                            marginBottom: 8 ,
                            fontWeight: 'bold',
                            padding: isMobile? '0.5rem 1rem': '',
                          }}
                        >
                          GEAR UP A BIG GAME
                        </h1>
                        <p style={{ color: "black", fontWeight: 500, marginBottom: 18, 
                            marginTop: 4,
                            fontSize: isMobile? "1rem" : "2rem", 
                            fontWeight: 'bold' }}>Have Fun with Friends!</p>
                        <a>
                        <button
                          style={{
                            alignContent: "flex-start",
                            backgroundColor: "#00BE67",
                            color: isMobile? "#000": "#fff",
                            border: "none",
                            borderRadius: 15,
                            padding: isMobile ? "12px 50px" : "15px 150px",
                            fontSize: isMobile? "1.2rem" : "1.5rem",
                            cursor: "pointer",
                            fontWeight: 'bold',
                            marginBottom: isMobile? 25 : 0,
                          }}
                        >
                          Get Started
                        </button>
                        </a>
                </div>
              </div>
          </div>
          <div style={{ flex: 1, display:isMobile? "none" : "flex", justifyContent: "center", padding:"0px",width:isMobile? "0" : "100%", height: isMobile? "0" : "100%" }}>
            <img
              src={GetStarted}
              alt="Get Started"
              style={{
                marginTop: isMobile ? 0 : 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* BOOK PLACES */}
      <section
        style={{
          width:isMobile? "100%" : "90%",
          boxSizing: "border-box",
          background: "#fff",
          margin: isMobile ? "16px 0" : "10px 5% 0px 5%",
          padding: isMobile ? "18px 18px" : "24px 20px",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 18,
          }}
        >
          <h2 style={{ color: "black", margin: 0, fontWeight: "bold" }}>Book Places</h2>
          <a href="#" style={{ color: "#00BE76", fontWeight: 500, textDecoration: "underline" }}>
            See More &gt;
          </a>
        </div>



        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            width: "90%",
            justifyContent: isMobile ? "end" : "flex-start",
          }}
          className="overflow-x-auto whitespace-nowrap"
        >
          {places.map((place, idx) => (
            <div
              key={idx}
              style={{
                background: "#f8f8f8",
                borderRadius: 10,
                overflow: "hidden",
                width: "100%",
                boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
                marginBottom: isMobile ? 12 : 0,
                flex: isMobile ? "1 1 100%" : "1 1 260px",
              }}
              className="inline-block w-52 h-24 bg-red-300 mr-2"
            >
              <img
                src={place.img}
                alt={place.name}
                style={{
                  width: "100%",
                  height: isMobile? 310: 210,
                  objectFit: "fill",
                }}
              />
              <div style={{ padding: 10 }}>
                <div style={{textAlign: 'left', color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: 4 }}>{place.name}</div>
                <div style={{ textAlign: 'left', color: "black", fontWeight: "bold" }}>{place.price}</div>
              </div>
            </div>
          ))}
        </div>


      {/* POPULAR SPORTS */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 18,
            marginTop: 80
          }}
        >
          <h2 style={{ color: "black" , margin: 0, fontWeight: "bold" }}>Popular Sports</h2>
          <a href="#" style={{ color: "#1cc58e", fontWeight: 500, textDecoration: "underline" }}>
            See More &gt;
          </a>
        </div>


        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            width: "100%",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          {sports.map((sport, idx) => (
            <div
              key={idx}
              style={{
                background: "#f8f8f8",
                borderRadius: 10,
                overflow: "hidden",
                maxWidth: isMobile? "100%" : "23%",
                boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
                marginBottom: isMobile ? 12 : 0,
                flex: isMobile ? "1 1 100%" : "1 1 260px",
              }}
            >
              <img
                src={sport.img}
                alt={sport.name}
                style={{
                  
                  width: "100%",
                  height: 310,
                  objectFit:"cover",
                }}
              />
              <div style={{ padding: 8, textAlign: "center", color: "black",fontWeight: "bold", }}>{sport.name}</div>
            </div>
          ))}
        </div>


      </section>


      {/* FOOTER */}
      <footer
        style={{
          width: "100%",
          background: "#e9f8f3",
          padding: isMobile ? 8 : 40,
          marginTop: isMobile ? 16 : 32,
          borderRadius: 12,
          boxSizing: "border-box",
        }}
      >
        <div>
        <div style={{ color: "black",fontWeight: 500, minWidth: 120, marginBottom: 18 }}>
          Get the experience of booking place on your phone by the Khelkonnect app
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: isMobile ? "flex-start" : "space-between",
            gap: isMobile ? 16 : 0,
            fontSize: isMobile?"0.6rem":""
          }}
        >
            <div style={{ marginTop: isMobile? "12px":""  , justifyContent:"center" }}>
              <img src= {logo} style={{height: isMobile? "100%" : "120px", width: isMobile? "100%" : "350px"}} />
            </div>
          
          <div  style={{ color: "black",fontWeight: 500, minWidth: 100 }}>
            <div style={{ fontWeight: "bold" }}>Company</div>
            <div>ABOUT US</div>
            <div>LEARN</div>
            <div>CONTACT</div>
            <div>CAREERS</div>
            <div>PARTNER WITH US</div>
          </div>
          <div style={{ color: "black",fontWeight: 500, minWidth: 100 }}>
            <div style={{ fontWeight: "bold" }}>Social</div>
            <div>INSTAGRAM</div>
            <div>FACEBOOK</div>
            <div>LINKEDIN</div>
            <div>TWITTER</div>
          </div>
          <div style={{ color: "black",fontWeight: 500, minWidth: 100 }}>
            <div style={{ fontWeight: "bold" }}>Privacy & Terms</div>
            <div>PRIVACY POLICY</div>
            <div>TERMS OF SERVICE</div>
            <div>CANCELLATION POLICY</div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}
