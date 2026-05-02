import RouterShell from "./core/RouterShell.jsx";
import CookieConsent from "react-cookie-consent";

const App = () => {
  return (
    <>
      <RouterShell />

      <CookieConsent
        location="bottom"
        buttonText="Прийняти всі"
        declineButtonText="Відхилити"
        enableDeclineButton
        cookieName="SimonSays_GDPR_Consent"
        style={{ background: "#2B373B", color: "#fff", textAlign: "left" }}
        buttonStyle={{ background: "#4e944f", color: "#fff", fontSize: "14px", borderRadius: "4px" }}
        declineButtonStyle={{ background: "#e11d48", color: "#fff", fontSize: "14px", borderRadius: "4px" }}
        expires={150}
      >
        Цей сайт використовує файли cookie для покращення роботи. Згідно з GDPR, ви можете вибрати, чи дозволяти їх. 
        Докладніше у <a href="/PRIVACY_POLICY.md" style={{ color: "#ffd700" }}>Privacy Policy</a>.
      </CookieConsent>
    </>
  );
};

export default App;