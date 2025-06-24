import React from "react";
import "./Party.css";
import newyear from "../../Assets/PartyImages/newyear.jpg";
import birthda_image from "../../Assets/PartyImages/birthadayimage.jpg";
import proposal from "../../Assets/PartyImages/proposal.jpg";
import team_building from "../../Assets/PartyImages/TeamBuilding.jpeg";
import party from "../../Assets/PartyImages/Party.jpg";
import water_sports from "../../Assets/PartyImages/watersports.webp";
import bespoke from "../../Assets/PartyImages/BESPOKE SUPERYACHT CHARTERS.jpg";
import fishing from "../../Assets/PartyImages/fishing.jpg";
import MapPages from "./MapPages";

const PartyPages = () => {
  return (
    <>
    <div className="container mt-3 mb-3">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={newyear}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">New Year Party</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white">New Year Party</h5>
              <p className="text-white party_font">
                On New Year's Eve, rent a luxury yacht in Dubai and watch the
                fireworks explode high above the city. Celebrate with us when
                you join us for our yacht New Year's Eve party. We will make you
                feel at home with our attentive service and hospitality. For as
                long as you sail, our crew will be at your service. We have the
                best DJ arrangements to get you into the swing of things. Our
                boat is spacious and you will love the atmosphere.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={birthda_image}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">Birthday Party</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white">Birthday Party</h5>
              <p className="text-white party_font">
                If you are planning to celebrate your or your loved one's
                birthday in Dubai in an elegant way and you are running out of
                birthday party ideas in Dubai, then think about a yacht birthday
                party in Dubai.Enjoy the golden hues in the sky as the sun
                prepares to set on the horizon during a yacht birthday party in
                Dubai.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={proposal}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">Annivarsary | Proposal</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white"> Annivarsary | Proposal</h5>
              <p className="text-white party_font">
                Anniversaries are moments to be celebrated and cherished, no
                matter how many years you've lived together. Sky Walker Yachts
                gives couples the opportunity to celebrate their special day in
                grand style with a wonderful yacht trip. We invite couples
                looking for a romantic yacht cruising experience in Dubai Marina
                to enjoy our exclusive charter services.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={team_building}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">Team Activites</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white"> Team Building Activites</h5>
              <p className="text-white party_font">
                Corporate team building activities on a yacht will really test
                the survival skills of the participants. It will also make them
                more aware of their strengths and weaknesses. Make a lasting
                impression at your next corporate event. Impress clients and
                reward staff with a team building cruise, client outing or to
                celebrate a successful milestone.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={party}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">Yacht Party</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white"> Yacht Party</h5>
              <p className="text-white party_font">
                Dubai Yacht Party is the most perfect and fun party in Dubai.
                Celebrate a successful promotion or get together with friends at
                a yacht party, your friends may never have experienced such a
                wonderful event and will be amazed. It will be an unforgettable
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={water_sports}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">Water Sports</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white"> Water Sports</h5>
              <p className="text-white party_font">
                Dubai is one of the most popular destinations for adventure
                lovers. As well as adventure sports such as jet skiing, wake
                boarding and surf boarding, beach activities in Dubai are
                becoming increasingly popular, the fun never ends. Book a luxury
                yacht in Dubai today and immerse yourself in a sea of
                excitement.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={bespoke}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">Bespoke Superyacht</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white"> Bespoke Superyacht Charters</h5>
              <p className="text-white party_font">
                Our collection of amazing yachts will provide you with all the
                fun, enjoyment and happiness that you have been waiting for.
                With our Bespoke Superyacht Charters, whether it is a party, a
                romantic date or just a relaxing holiday, your needs will be
                met. We customise the interiors as per your requirements, making
                you feel special and you are!
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-0 position-relative hover-container">
            <img
              src={fishing}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <div className="celebration_title">Fishing Trips Dubai</div>
            <div className="hover-text-overlay" style={{ height: "400px" }}>
              <h5 className="text-white"> Fishing Trips Dubai</h5>
              <p className="text-white party_font">
                Fishing in Dubai is one of the most popular activities,
                especially for those who enjoy being on the water. The warm
                Arabian waters are full of all types of fish. Fishing in Dubai
                is a favourite pastime for locals and tourists alike, and when
                you book a fishing trip in Dubai with us, you will have an
                experienced captain leading your trip on a motor yacht
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MapPages/>
    </>
  );
};

export default PartyPages;
