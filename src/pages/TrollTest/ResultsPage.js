import React, { useEffect, useState } from 'react';

function ResultsPage({ results }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [responseText, setResponseText] = useState(null);
  const [trollName, setTrollName] = useState("Mr Troll"); // Add new state for name
  const [trollSlogan, setTrollSlogan] = useState("All for the trolls!"); // Add new state for slogan
  const [environmentText, setEnvironmentText] = useState("");
  const [insuranceText, setInsuranceText] = useState("");
  const [cryptoText, setCryptoText] = useState("");
  const [pharmaText, setPharmaText] = useState("");
  const [dislikeText, setDislikeText] = useState(""); // Add new state for dislike text

  // Build filename from the survey results
  const toload = results.Crypto ? 
    results.Crypto.toString() +
    results.Pharma.toString() +
    results.Insurance.toString() +
    results.FossilFuel.toString() +
    ".json"
    : results + ".json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/results/${toload}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImageSrc(data.image_filename);
        setResponseText(data.response);
        // Set name and slogan from JSON data
        if (data.name) setTrollName(data.name);
        if (data.slogan) setTrollSlogan(data.slogan);
        // Add these new setters
        setEnvironmentText(data.enironment || "");
        setInsuranceText(data.insurance || "");
        setCryptoText(data.crypto || "");
        setPharmaText(data.pharma || "");
        // Add the disliked person's text
        if (results.Dislike && data[results.Dislike]) {
          setDislikeText(data[results.Dislike]);
        }
      } catch (error) {
        console.error("Error loading JSON:", error);
      }
    };
    fetchData();
  }, [toload, results.Dislike]);

  const handleRetakeTest = () => {
    window.location.href = '/';
  };

  return (
    // 1) Add position: 'relative' here to anchor absolutely-positioned elements
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        width: "100%",
        fontFamily: "serif",
        backgroundColor: "rgba(34, 34, 34, 1)",
      }}
    >
      {/* 2) Place icon container absolutely in top-right corner */}
      <div style={{ position: "absolute", top: "0.8rem", right: "1rem", textAlign: "right" }}>
        <span style={{ color: "white", marginRight: "10px" }}>Share the troll:</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com%2Fresults%2F12345" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons8-facebook.svg"
            alt="Facebook"
            style={{ width: "30px", marginRight: "10px", cursor: "pointer" }}
          />
        </a>
        <a href="https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20website:%20https://example.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons8-whatsapp.svg"
            alt="WhatsApp"
            style={{ width: "30px", cursor: "pointer" }}
          />
        </a>
      </div>

      {/* Title at the top */}
      <h1
        style={{
          color: "rgba(0, 128, 0, 1)",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: "2.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          textAlign: "center",
          letterSpacing: "1px",
          borderBottom: "2px solid rgba(0, 128, 0, 0.5)",
          paddingBottom: "0.5rem"
        }}
      >
        Meet your anti-Troll - He loves what you hate!
      </h1>

      {/* Main content (no top picture) */}
      <div style={{ flex: "1" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2rem"
          }}
        >
          {/* Profile card */}
          <div
            style={{
              width: "40%",
              padding: "2rem",
              background: "#2E2E2E",
              color: "#ffffff",
              marginRight: "1rem",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Bigger name in a LinkedIn-like font */}
            <h1
              style={{
                marginTop: 0,
                fontSize: "2.5rem",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                color: "rgba(0, 128, 0, 1)"
              }}
            >
              {trollName}
            </h1>
            {/* Slogan */}
            <h3
              style={{
                fontSize: "1.2rem",
                fontFamily: "Arial, sans-serif",
                color: "#dcdcdc",
                marginBottom: "1rem"
              }}
            >
              {trollSlogan}
            </h3>
            <hr style={{ borderColor: "#fff", margin: "1rem 0" }} />
            {responseText && (
              <p
                style={{
                  color: "#dcdcdc",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  whiteSpace: "pre-wrap"
                }}
              >
                {responseText}
              </p>
            )}

            {/* Portrait section with an old-school frame */}
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt="Survey Result"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    marginTop: "1rem",
                    border: "8px groove #3E2723"
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: 'rgba(0, 128, 0, 1)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '2rem',
            fontFamily: "'Helvetica Neue', Arial, sans-serif"
          }}
          onClick={handleRetakeTest}
        >
          Do test again!
        </button>
      </div>

      {/* Stocks section at the bottom */}
      <div
        style={{
          width: "100%",
          background: "#2E2E2E",
          color: "#ffffff",
          boxShadow: "0 -8px 20px rgba(0, 0, 0, 0.3)",
          padding: "2rem",
          margin: 0
        }}
      >
        <h4
          style={{
            fontSize: "1.4rem",
            fontFamily: "Arial, sans-serif",
            color: "rgb(255, 255, 255)",
            marginBottom: "1rem"
          }}
        >
        Investing in this troll would have been ideal. He loves what you hate! Unfortunately, he is not a public company. Here are some alternatives, sorted by themese and based on your answers:
        </h4>
        <div style={{ color: "#dcdcdc", fontSize: "1rem", lineHeight: "1.6" }}>
          {dislikeText && (
            <p>
              <strong>{results.Dislike}:</strong>{' '}
              <span dangerouslySetInnerHTML={{ __html: dislikeText }} />
            </p>
          )}
          <p>
            <strong>Insurance:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: insuranceText }} />
          </p>
          <p>
            <strong>Environment:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: environmentText }} />
          </p>
          <p>
            <strong>Crypto:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: cryptoText }} />
          </p>
          <p>
            <strong>Pharma:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: pharmaText }} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;