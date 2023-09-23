import React, { useState, useEffect } from 'react';
import { getProfessionalSkills, getHobbies, getSubjects } from './api';
import { useNavigate } from 'react-router-dom';

function MyBioScreen() {
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from APIs
    async function fetchData() {
      try {
        const professionalSkillsData = await getProfessionalSkills();
        setSkills(professionalSkillsData.skills);

        const hobbiesData = await getHobbies();
        setHobbies(hobbiesData.hobbies);

        const subjectsData = await getSubjects();
        setSubjects(subjectsData.subjects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const [isEditingHobbies, setIsEditingHobbies] = useState(false);
  const [editedHobbies, setEditedHobbies] = useState([...hobbies]);

  const handleEditHobbies = () => {
    setIsEditingHobbies(true);
  };

  const handleAddHobby = (newHobby) => {
    setEditedHobbies([...editedHobbies, newHobby]);
  };

  const handleDeleteHobby = (hobbyToDelete) => {
    const updatedHobbies = editedHobbies.filter((hobby) => hobby !== hobbyToDelete);
    setEditedHobbies(updatedHobbies);
  };

  const handleSaveHobbies = () => {
    // Implement logic to save editedHobbies
    setIsEditingHobbies(false);
    setHobbies(editedHobbies); // Update the state with the edited hobbies
  };

  const handleCancelEditHobbies = () => {
    setIsEditingHobbies(false);
    setEditedHobbies([...hobbies]); // Reset to original hobbies
  };

  const [isEditingSubjects, setIsEditingSubjects] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);

  const handleEditSubjects = () => {
    setIsEditingSubjects(true);
  };

  const handleSubjectSelect = (selectedSubject) => {
    setSelectedSubjects([...selectedSubjects, selectedSubject]);
  };

  const handleDeselectSubject = (subjectToDeselect) => {
    const updatedSelectedSubjects = selectedSubjects.filter(
      (subject) => subject !== subjectToDeselect
    );
    setSelectedSubjects(updatedSelectedSubjects);
  };

  const handleSaveSubjects = () => {
    // Implement logic to save selectedSubjects
    setIsEditingSubjects(false);
    // Update the state with the selected subjects
    setSubjects(selectedSubjects);
  };

  const handleCancelEditSubjects = () => {
    setIsEditingSubjects(false);
    // Reset selectedSubjects to the original subjects
    setSelectedSubjects(subjects);
  };

  return (
    <div className="rectangular-view">
      <h1>My Bio Screen</h1>

      <section>
        <h2>Professional Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill._id}>{skill.value}</li>
          ))}
        </ul>
        <button onClick={() => navigate('/skills-edit')}>Edit Skills</button>
      </section>

      <section>
        <h2>Hobbies</h2>
        {isEditingHobbies ? (
          <div>
            <ul>
              {editedHobbies.map((hobby) => (
                <li key={hobby}>
                  {hobby}{' '}
                  <button onClick={() => handleDeleteHobby(hobby)}>Delete</button>
                </li>
              ))}
            </ul>
            <button onClick={handleAddHobby}>Add Hobby</button>
            <button onClick={handleSaveHobbies}>Save</button>
            <button onClick={handleCancelEditHobbies}>Cancel</button>
          </div>
        ) : (
          <div>
            <ul>
              {hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
            <button onClick={handleEditHobbies}>Edit Hobbies</button>
          </div>
        )}
      </section>

      <section>
        <h2>Subjects</h2>
        {isEditingSubjects ? (
          <div>
            <ul>
              {selectedSubjects.map((subject) => (
                <li key={subject}>
                  {subject}{' '}
                  <button onClick={() => handleDeselectSubject(subject)}>
                    Deselect
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={handleSaveSubjects}>Save</button>
            <button onClick={handleCancelEditSubjects}>Cancel</button>
          </div>
        ) : (
          <div>
            <ul>
              {subjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
            <button onClick={handleEditSubjects}>Edit Subjects</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default MyBioScreen;
