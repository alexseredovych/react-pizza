import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#dad7d7"
    foregroundColor="#fafafa"
    {...props}
  >
    <circle cx="135" cy="134" r="130" /> 
    <rect x="5" y="286" rx="10" ry="10" width="280" height="32" /> 
    <rect x="6" y="331" rx="10" ry="10" width="280" height="59" /> 
    <rect x="7" y="402" rx="10" ry="10" width="120" height="53" /> 
    <rect x="141" y="403" rx="10" ry="10" width="140" height="52" />
  </ContentLoader>
)

export default Skeleton