// import { useState } from "react";
// import FileInput from "../component/FileInput";
// import Header from "../component/Header";
// import Background from "../component/Background";

// function Prediction() {
//   const [image, setImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [isResultVisible, setIsResultVisible] = useState(false);

//   const reset = () => {
//     setImage(null);
//     setResult(null);
//     setIsResultVisible(false);
//   };

//   return (
//     <Background>
//       <Header reset={reset} />
//       <FileInput
//         image={image}
//         setImage={setImage}
//         isLoading={isLoading}
//         setIsLoading={setIsLoading}
//         result={result}
//         setResult={setResult}
//         isResultVisible={isResultVisible}
//         setIsResultVisible={setIsResultVisible}
//       />
//     </Background>
//   );
// }

// export default Prediction;


import { useState } from "react";
import { Box, Sheet } from "@mui/joy";
import FileInput from "../component/FileInput";
import Header from "../component/Header";
import Background from "../component/Background";


function Prediction() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isResultVisible, setIsResultVisible] = useState(false);

  const reset = () => {
    setImage(null);
    setResult(null);
    setIsResultVisible(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.body' }}>
      <Header reset={reset} />
      <Box
        sx={{
          maxWidth: '800px',
          mx: 'auto',
          p: { xs: 2, md: 4 },
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: 'lg',
            p: { xs: 2, md: 4 },
            boxShadow: 'sm',
          }}
        >
          <FileInput
            image={image}
            setImage={setImage}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            result={result}
            setResult={setResult}
            isResultVisible={isResultVisible}
            setIsResultVisible={setIsResultVisible}
          />
        </Sheet>
      </Box>
    </Box>
  );
}

export default Prediction;