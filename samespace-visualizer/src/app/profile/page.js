import { useUser, withAuth } from '@clerk/nextjs';
import Link from 'next/link';

const ProfilePage = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Please sign in to view your profile</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.firstName}</h1>
      <p>Email: {user.emailAddress}</p>
      <Link href="/profile/edit">Edit Profile</Link>
    </div>
  );
};

export default withAuth(ProfilePage);