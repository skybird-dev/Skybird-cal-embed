import "./calembed.css";
import Cal from "@calcom/embed-react";

export default function calembed() {
  return (
    <div className="calembed">
      <h2>Let's Meet</h2>
      <Cal calLink="skybird"></Cal>
    </div>
  );
}
