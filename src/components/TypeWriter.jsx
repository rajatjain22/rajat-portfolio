import React, { useState, useEffect } from "react";

const TypeWriter = ({
  text,
  delay = 100,
  deleteDelay = 50,
  pauseDelay = 1000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && currentText === text) {
      // Pause before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && currentText === "") {
      // Reset to start typing again
      setIsDeleting(false);
    } else {
      // Handle typing or deleting
      timeout = setTimeout(
        () => {
          setCurrentText((prev) => {
            if (isDeleting) {
              return prev.slice(0, -1);
            }
            return text.slice(0, prev.length + 1);
          });
        },
        isDeleting ? deleteDelay : delay
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, text, delay, deleteDelay, pauseDelay]);

  return (
    <span className="relative">
      {currentText}
      <span
        className="absolute bottom-0 left-0 h-[2px] bg-[#149ddd] transition-all duration-200"
        style={{
          width: `${(currentText.length / text.length) * 100}%`,
          opacity: currentText.length > 0 ? 1 : 0,
        }}
      ></span>
    </span>
  );
};

export default TypeWriter;
