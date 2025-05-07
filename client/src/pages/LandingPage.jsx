import React from "react";
import GetStarted from "../assets/images/GetStarted.png";
import Location from "../assets/images/Location.png";
import Badminton from "../assets/images/Badminton.png";
import Cricket from "../assets/images/Cricket.png";
import Football from "../assets/images/Football.png";
import Chess from "../assets/images/Chess.png";
import logo from "../assets/images/logo.jpg"



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
  const isMobile = window.innerWidth <= 600;

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
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          padding: isMobile ? "12px 8px" : "35px 40px",
          background: "#fff",
          borderBottom: "1px solid #e0e0e0",
          fontWeight: 'bold'
        }}
      >
        <img src= {logo} style={{ alignItems: "center", width:"160px"}}></img>
        <div  style={{ alignItems: "start", padding: "8px 80px"}}>
        <nav>
          <a href="#" style={{ margin: "0 12px", textDecoration: "none", color: "#222", fontSize: "1.2rem" }}>Play</a>
          <a href="#" style={{ margin: "0 12px", textDecoration: "none", color: "#222", fontSize: "1.2rem" }}>Book</a>
          <a href="#" style={{ margin: "0 12px", textDecoration: "none", color: "#222", fontSize: "1.2rem" }}>About Us</a>
          <a href="#" style={{ margin: "0 12px", textDecoration: "none", color: "#222", fontSize: "1.2rem" }}>Contact Us</a>
        </nav>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", padding: "8px"}}>
          <a href="#" style={{ textDecoration: "none", color: "#222", fontSize: "1.2rem"}}>👤Login/Sign Up</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "#fff",
          padding: isMobile ? "5px 8px 18px 8px" : "5px 40px 24px 40px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? 24 : 0,
          }}
        >
          <div style={{ flex: 0 ,
            padding: isMobile? "0px" :"25px"
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 14 ,
              
             }}>
              <span style={{ marginTop: 7, marginRight: 0 }}>
                <img src={ Location } alt="Location" 
                  style={{
                    maxWidth: "32px"
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
                  fontSize: "1.5rem",
                  background: "#fff",
                  width: 200,
                  height: 50,
                  fontWeight: 'bold',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" ,alignItems: "start", marginBottom: 14, width: "100vh"}}>
                <h1
                  style={{
                    color: "#00BE76",
                    fontSize: isMobile ? "1.4rem" : "3.5rem",
                    marginTop: 50,
                    marginBottom: 8 ,
                    fontWeight: 'bold'
                  }}
                >
                  GEAR UP A BIG GAME
                </h1>
                <p style={{ color: "black", fontWeight: 500, marginBottom: 18, 
                    marginTop: 4,
                    fontSize: "2rem", 
                    fontWeight: 'bold' }}>Have Fun with Friends!</p>
                <a>
                <button
                  style={{
                    alignContent: "flex-start",
                    background: "#00BE76",
                    color: "#fff",
                    border: "none",
                    borderRadius: 15,
                    padding: "15px 150px",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    fontWeight: 'bold'
                  }}
                >
                  Get Started
                </button>
                </a>
              </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center", padding:"0px" }}>
            <img
              src={GetStarted}
              alt="Get Started"
              style={{
                maxWidth: "100%",
                marginTop: isMobile ? 24 : 0,
                marginRight: "80px",
              }}
            />
          </div>
        </div>
      </section>

      {/* BOOK PLACES */}
      <section
        style={{
          width: "90%",
          boxSizing: "border-box",
          background: "#fff",
          margin: isMobile ? "16px 0" : "100px 5% 0px 5%",
          padding: isMobile ? "18px 8px" : "24px 40px",
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
            width: "100%",
            justifyContent: isMobile ? "center" : "flex-start",
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
                  height: 210,
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: 10 }}>
                <div style={{textAlign: 'left', color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: 4 }}>{place.name}</div>
                <div style={{ textAlign: 'left', color: "black", fontWeight: "bold" }}>{place.price}</div>
              </div>
            </div>
          ))}
        </div>

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
                maxWidth: "100%",
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
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: 8, textAlign: "center", color: "black",fontWeight: "bold", }}>{sport.name}</div>
            </div>
          ))}
        </div>


      </section>

      {/* POPULAR SPORTS */}

      {/* FOOTER */}
      <footer
        style={{
          width: "100%",
          background: "#e9f8f3",
          padding: isMobile ? 16 : 40,
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
            justifyContent: isMobile ? "flex-start" : "space-between",
            gap: isMobile ? 16 : 0,
          }}
        >
          <div>
            <div style={{ color: "#00BE67", fontWeight: "bold", fontSize: "1.2rem", marginBottom: 8 }}>
              KhelKonnect
            </div>
          </div>
          
          <div  style={{ color: "black",fontWeight: 500, minWidth: 120  }}>
            <div style={{ fontWeight: "bold" }}>Company</div>
            <div>ABOUT US</div>
            <div>LEARN</div>
            <div>CONTACT</div>
            <div>CAREERS</div>
            <div>PARTNER WITH US</div>
          </div>
          <div style={{ color: "black",fontWeight: 500, minWidth: 120 }}>
            <div style={{ fontWeight: "bold" }}>Social</div>
            <div>INSTAGRAM</div>
            <div>FACEBOOK</div>
            <div>LINKEDIN</div>
            <div>TWITTER</div>
          </div>
          <div style={{ color: "black",fontWeight: 500, minWidth: 120 }}>
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
