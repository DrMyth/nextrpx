import React from "react";

const BasePageBoss = () => {
  return (
    <div>
      <b>
        BasePageBoss = {process.env.HELLO} || {process.env.NEXT_PUBLIC_API_KEY}
      </b>
    </div>
  );
};

export default BasePageBoss;
