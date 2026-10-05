import React from "react";
import people from "../assets/people.png";
import photo from "../assets/photo.jpg";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function Redstudies() {
  return (
    <div>
      <div
        className="ota"
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: "#252734",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <h1
          style={{
            maxWidth: "560px",
            margin: "0 auto 16px",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          A UX Case Study on Creating a Studious Environment for Students
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            margin: "0 0 30px",
          }}
        >
          Andrew Jonson Posted on 27th January 2021
        </p>

        <div>
          <img
            src={people}
            alt="people-img"
            style={{
              display: "block",
              width: "100%",
              height: "300px",
              objectFit: "cover",
              margin: "0 auto 60px",
            }}
          />

          <h3
            style={{
              maxWidth: "540px",
              margin: "40px auto 20px",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.35,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p
            style={{
              maxWidth: "540px",
              margin: "0 auto 20px",
              fontSize: "11px",
              lineHeight: 1.8,
              color: "#3a3b48",
            }}
          >
            {text}{" "}
            <span style={{ color: "#4a3aff" }}>Excepteur sint occaecat</span>{" "}
            cupidatat non proident.
          </p>

          <h3
            style={{
              maxWidth: "540px",
              margin: "40px auto 20px",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.35,
            }}
          >
            Ut enim ad minim veniam, quis nostrud.
          </h3>
          <p
            style={{
              maxWidth: "540px",
              margin: "0 auto 20px",
              fontSize: "11px",
              lineHeight: 1.8,
              color: "#3a3b48",
            }}
          >
            {text}
          </p>


          <ol
            style={{
              maxWidth: "540px",
              margin: "0 auto 20px",
              paddingLeft: "20px",
              listStyleType: "disc",
            }}
          >
            <li
              style={{
                fontSize: "11px",
                lineHeight: 1.8,
                marginBottom: "8px",
                color: "#3a3b48",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li
              style={{
                fontSize: "11px",
                lineHeight: 1.8,
                marginBottom: "8px",
                color: "#3a3b48",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
            <li
              style={{
                fontSize: "11px",
                lineHeight: 1.8,
                marginBottom: "8px",
                color: "#3a3b48",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </li>
          </ol>

          <p
            style={{
              maxWidth: "540px",
              margin: "0 auto 20px",
              fontSize: "11px",
              lineHeight: 1.8,
              color: "#3a3b48",
            }}
          >
            {text}
          </p>

          <img
            src={photo}
            alt="photo-img"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "540px",
              height: "150px",
              objectFit: "cover",
              margin: "30px auto 40px",
            }}
          />

          <h3
            style={{
              maxWidth: "540px",
              margin: "40px auto 20px",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.35,
            }}
          >
            Ut enim ad minim veniam, quis nostrud.
          </h3>
          <p
            style={{
              maxWidth: "540px",
              margin: "0 auto 20px",
              fontSize: "11px",
              lineHeight: 1.8,
              color: "#3a3b48",
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Redstudies;
