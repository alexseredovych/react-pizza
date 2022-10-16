import React from "react";

import styles from "./NotFoundBlock.module.scss"

function NotFoundBlock () {
  return (
    <div className={styles.root}>
      <h1>Not Found</h1>
      <p className={styles.description}>Unfortunately this page isn't available</p>
    </div>
      
  )
}

export default NotFoundBlock
