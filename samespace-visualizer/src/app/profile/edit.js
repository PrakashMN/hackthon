import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

const EditProfilePage = () => {
  const { user, isLoaded, isSignedIn, updateUser } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await updateUser({
        firstName,
        lastName
      });
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile');
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Please sign in to edit your profile</div>;
  }

  return (
    <div>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
 );
};

export default EditProfilePage;