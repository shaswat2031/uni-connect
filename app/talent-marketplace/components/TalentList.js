import React from "react";
import TalentCard from "./TalentCard";

export default function TalentList({ talents }) {
  return (
    <>
      {talents.map((talent) => (
        <TalentCard key={talent.id} talent={talent} />
      ))}
    </>
  );
}
