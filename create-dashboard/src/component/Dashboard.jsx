import { useAuth } from '../auth/Authcontext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <p>Credits: {user?.credits}</p>
      {/* TODO: Add Saved Feeds, Activity, etc. */}
    </div>
  );
}
