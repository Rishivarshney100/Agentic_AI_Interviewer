import Agent from "@/components/Agent";

export default function Home() {
  return (
    <>
      <h3>AI Mock Interview</h3>

      <Agent
        userName="Guest User"
        userId="guest"
        profileImage="/user-avatar.png"
        type="generate"
      />
    </>
  );
}

