import React from "react";
import styles from "./index.module.css";
import LocalizedText from "@/components/LocalizedText";

export default function ExecutivePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <LocalizedText>{"执行委员会"}</LocalizedText>
      </h1>
    </div>
  );
}
