const BASE_URL = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles';

// Function to fetch professional skills
export async function getProfessionalSkills() {
  const response = await fetch(`${BASE_URL}/GetProfessionalSkillsResponse.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch professional skills');
  }
  return response.json();
}

// Function to fetch hobbies
export async function getHobbies() {
  const response = await fetch(`${BASE_URL}/GetHobbiesResponse.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch hobbies');
  }
  return response.json();
}

// Function to fetch subjects
export async function getSubjects() {
  const response = await fetch(`${BASE_URL}/GetSubjectsResponse.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch subjects');
  }
  return response.json();
}
