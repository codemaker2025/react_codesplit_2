import React from "react";
import { Form as Inform, Multistep } from "informed";
import NavigationButtons from "../components/Multiform/NavigationButtons"; // Assuming this is your custom component
import PersonalDetails from "../components/Multiform/PersonalDetails";
import AddressDetails from "../components/Multiform/AddressDetails";
import OtherDetails from "../components/Multiform/OtherDetails";
import { useMultistepApi } from "informed";

export default function Test() {
  return (
    <Inform focusOnInvalid>
      {() => (
        <Multistep initialStep="info">
          <div className="d-flex">
            <div
              className="bg-light p-3"
              style={{
                width: "250px",
                height: "100vh",
                position: "sticky",
                top: 0,
                overflowY: "auto",
              }}
            >
              <MultistepWrapper />
            </div>

            <div className="flex-grow-1 p-4" style={{ minHeight: "100vh" }}>
              <PersonalDetails />
              <AddressDetails />
              <OtherDetails />
            </div>
          </div>
        </Multistep>
      )}
    </Inform>
  );
}

function MultistepWrapper() {
  const { getCurrentStep, setCurrent } = useMultistepApi();

  return (
    <NavigationButtons currentStep={getCurrentStep()} setCurrent={setCurrent} />
  );
}
