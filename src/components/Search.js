import React, { useEffect, useState } from "react";

function Search() {
  const [term, setTerm] = useState("");
  useEffect(() => {
    
  }, [term]);

  return (
    <div>
      <div className="ui form 3">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
