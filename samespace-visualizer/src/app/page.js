import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <div className="text-center">
          <h1>Welcome to the App!</h1>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}