import { useState } from "react";
import { motion } from "framer-motion";
import NumberCircles from "./NumberCircles";
import GradientButton from "./GradientButtonOnClick";
import RadioButtonGroup from "./RadioButtonGroup";
import { useLocation, useNavigate } from "react-router-dom";
import GradientText from "./GradientText";

function FormPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const endpoint = "https://bfd7-192-245-87-13.ngrok-free.app/";
  const image = location.state; // This should be the image file

  // State for each question
  const [isOily, setIsOily] = useState("not at all");
  const [isDry, setIsDry] = useState("not at all");
  const [isIntensive, setIsIntensive] = useState("not at all");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", "Jason");
    data.append("skin_type", isOily);
    data.append("age", "25");
    data.append("gender", "male");

    if (image) {
      data.append("image", image); // Ensure image is appended
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data, // Send the FormData object
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      navigate("/report", { state: { responseData } }); // Navigate after successful submission
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen w-screen items-center space-y-10 p-6 bg-gray-200 gap-4 font-menlo">
      <div>
        <header className="text-center mb-8">
          <div className="text-2xl">
            <GradientText text="Answer a Few Questions to Refine Your Analysis" />
          </div>
          <p className="text-gray-600">
            Share details about your skin to help us create a personalized
            skincare routine.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <p className="text-lg text-gray-500 font-semibold mb-6 mt-6">
            Do you consider your skin to be oily?
          </p>
          <RadioButtonGroup
            selectedOption={isOily}
            onChange={(e) => setIsOily(e.target.value)}
            questionId="skinOily" // Unique name for this group
          />

          <p className="text-lg text-gray-500 font-semibold mb-6 mt-16">
            Do you consider your skin to be dry?
          </p>
          <RadioButtonGroup
            selectedOption={isDry}
            onChange={(e) => setIsDry(e.target.value)}
            questionId="skinDry" // Unique name for this group
          />

          <p className="text-lg text-gray-500 font-semibold mb-6 mt-16">
            Would you describe the intensity of your skincare as intensive?
          </p>
          <RadioButtonGroup
            selectedOption={isIntensive}
            onChange={(e) => setIsIntensive(e.target.value)}
            questionId="skinIntensive" // Unique name for this group
          />

          <GradientButton
            buttonName="Submit"
            type="submit" // Change to type="submit" to trigger form submission
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
}

export default FormPage;
