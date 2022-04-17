import EducationalExperience from "./components/EducationlExperience";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto text-center">
        <GeneralInfo />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    </div>
  );
}

export default App;
