import React,{useState,useEffect} from 'react';
import '../index.css'; // Import CSS for styling

const StaticDisplay = ({ technology, percentage }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true); // Trigger animation on component mount
    }, []);
    const widthPercentage = `${percentage}%`;
        return (
    <div className="static-display">
      <div className="skill">
        <div className="skill-name p kanit-semibold">{technology}</div>
        <div className={`skill-level ${animate ? 'animate' : ''}`}  style={{ width: `${percentage}%` }}>
          {percentage}%
          </div>
      </div>
    </div>
  
  );
};

export default StaticDisplay;