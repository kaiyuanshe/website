import React from "react";
import styles from "./index.module.css";
import LocalizedText from "@/components/LocalizedText";

export default function LegalPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <LocalizedText>{"法律咨询委员会"}</LocalizedText>
      </h1>
    </div>
  );
}
