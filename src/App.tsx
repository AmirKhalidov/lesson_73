// import './App.css';
// import './App1.css';
// // import styles from './App.module.css';

// function App() {
//     return (
//         <>
//             <div className="select-wrapper">
//                 <select name="category" className="custom-select">
//                     <option value="" disabled selected>
//                         Select a category
//                     </option>
//                     <option value="tech">Technology</option>
//                     <option value="health">Health</option>
//                     <option value="finance">Finance</option>
//                 </select>
//                 <div className="arrow-box">
//                     <img
//                         src="src\assets\Vector.svg"
//                         alt="dropdown arrow"
//                         className="arrow-icon"
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default App;

// import React, { useState } from 'react';
// import CustomSelectComponent from './CustomSelectComponent';

// const App = () => {
//     const [selectedValue, setSelectedValue] = useState('');

//     const options = [
//         { value: 'tech', label: 'Technology' },
//         { value: 'health', label: 'Health' },
//         { value: 'finance', label: 'Finance' },
//     ];

//     const handleChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     return (
//         <div style={{ padding: '20px', maxWidth: '300px' }}>
//             <CustomSelectComponent
//                 value={selectedValue}
//                 onChange={handleChange}
//                 options={options}
//                 placeholder="Select a category"
//                 name="category"
//             />
//         </div>
//     );
// };

// export default App;

import { useState } from 'react';
import CustomColorInput from './CustomColorInput';

const App = () => {
    const [colorValue, setColorValue] = useState('#F3F2F7');

    const handleChange = (event) => {
        setColorValue(event.target.value);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px' }}>
            <CustomColorInput
                value={colorValue}
                onChange={handleChange}
                placeholder="Enter color value or use picker"
                name="colorInput"
            />
        </div>
    );
};

export default App;
