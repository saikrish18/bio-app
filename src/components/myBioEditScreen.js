import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyBioEditScreen() {
  const [aboutMe, setAboutMe] = useState("");
  const [resume, setResume] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("");
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [aboutMeError, setAboutMeError] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [bloodGroupError, setBloodGroupError] = useState("");
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

  const navigate = useNavigate();

  const [data, setData] = useState({
    aboutMe: "",
    resume: null,
    bloodGroup: "",
  });

  const handleAboutMeChange = (event) => {
    const newText = event.target.value;
    setAboutMe(newText);

    // Validate About Me input
    if (newText.length < 3 || newText.length > 500) {
      setAboutMeError("About Me should be between 3 and 500 characters.");
    } else {
      setAboutMeError("");
    }
    checkFormValidity();
  };

  const handleResumeChange = (event) => {
    const newFile = event.target.files[0];
    setResume(newFile);

    // Validate Resume input
    if (newFile && (newFile.type !== "application/pdf" || newFile.size > 5000000)) {
      setResumeError("Resume should be a PDF file up to 5 MB.");
    } else {
      setResumeError("");
    }
    checkFormValidity();
  };

  const handleBloodGroupChange = (event) => {
    const newBloodGroup = event.target.value;
    setBloodGroup(newBloodGroup);

    // Validate Blood Group input
    if (newBloodGroup === "") {
      setBloodGroupError("Please select a blood group.");
    } else {
      setBloodGroupError("");
    }
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (
      aboutMe.length >= 3 && aboutMe.length <= 500 &&
      (!resume || (resume.type === "application/pdf" && resume.size <= 5000000)) &&
      bloodGroup !== ""
    ) {
      setIsSaveEnabled(true);
    } else {
      setIsSaveEnabled(false);
    }
  };

  const handleSave = () => {
    const newData = {
      aboutMe,
      resume,
      bloodGroup,
    };
    setData(newData);

    // Navigate back to MyBioScreen
    navigate('/');
  };

  const showDeleteConfirmation = () => {
    setIsDeleteConfirmationVisible(true);
  };

  const hideDeleteConfirmation = () => {
    setIsDeleteConfirmationVisible(false);
  };

  const confirmDeleteResume = () => {
    setResume(null); // Remove the resume
    hideDeleteConfirmation(); // Close the delete confirmation pop-up
  };

  return (
    <div>
      <h2>Edit My Bio</h2>
      <div>
        <label>About Me:</label>
        <textarea
          value={aboutMe}
          onChange={handleAboutMeChange}
        />
        {aboutMeError && <p className="error">{aboutMeError}</p>}
      </div>
      <div>
        <label>Upload Resume (PDF up to 5 MB):</label>
        <input type="file" accept=".pdf" onChange={handleResumeChange} />
        {resumeError && <p className="error">{resumeError}</p>}
      </div>
      <div>
        <label>Blood Group:</label>
        <select value={bloodGroup} onChange={handleBloodGroupChange}>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          {/* Add more blood group options */}
        </select>
        {bloodGroupError && <p className="error">{bloodGroupError}</p>}
      </div>
      <button onClick={showDeleteConfirmation}>Delete Resume</button>

      {/* Delete Confirmation Pop-up */}
      {isDeleteConfirmationVisible && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete your resume?</p>
          <button onClick={confirmDeleteResume}>Delete</button>
          <button onClick={hideDeleteConfirmation}>Cancel</button>
        </div>
      )}

      <button onClick={handleSave} disabled={!isSaveEnabled}>Save</button>
      <div>
        <h2>Saved Data</h2>
        <p>About Me: {data.aboutMe}</p>
        <p>Blood Group: {data.bloodGroup}</p>
        {data.resume && <p>Resume: {data.resume.name}</p>}
      </div>
    </div>
  );
}

export default MyBioEditScreen;
