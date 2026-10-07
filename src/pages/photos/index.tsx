import React, { memo } from "react";
import LocalizedText from "@/components/LocalizedText";

const Photos = memo(() => {
  return (
    <div>
      <LocalizedText>{"历届活动照片"}</LocalizedText>
    </div>
  );
});

export default Photos;
