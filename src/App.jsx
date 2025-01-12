import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ConactHeader from "./components/ContactHeader/ConactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <ConactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
