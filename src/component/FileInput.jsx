import { Box, Button, Typography, styled, CircularProgress, Card } from "@mui/joy";
import React, { useEffect } from "react";
import { Upload, Microscope, AlertCircle } from 'lucide-react';

const origin = window.location.origin
  .split(":")
  .filter((_, index) => index < 2)
  .join(":");

const ANALYSIS_URL = `${origin}:5000/analyse`;

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;


const FileInput= ({
  image,
  setImage,
  isLoading,
  setIsLoading,
  result,
  setResult,
  isResultVisible,
  setIsResultVisible,
}) => {
  useEffect(() => {
    setIsResultVisible(false);
  }, [image, setIsResultVisible]);

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const analyseImage = async () => {
    setIsLoading(true);
    const formData = new FormData();
    if (image) {
      formData.append("file", image);
    }

    try {
      const response = await fetch(ANALYSIS_URL, {
        method: "POST",
        body: formData,
      });

      const parsedRes = await response.json();

      setTimeout(() => {
        setIsLoading(false);
        setResult(parsedRes);
        setIsResultVisible(true);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      console.error('Analysis failed:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Typography
        level="h2"
        sx={{
          background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
          backgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center',
          mb: 2,
        }}
      >
        Leaf Disease Analysis
      </Typography>

      <Card
        variant="outlined"
        sx={{
          width: '100%',
          maxWidth: '400px',
          // height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Selected leaf"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              color: 'text.secondary',
            }}
          >
            <Upload size={48} />
            <Typography level="body-sm">
              Upload a leaf image for analysis
            </Typography>
          </Box>
        )}
      </Card>

      {image && (
        <Typography level="body-sm" color="neutral">
          Selected: {image.name}
        </Typography>
      )}

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button
          component="label"
          variant="outlined"
          color={image ? "success" : "neutral"}
          startDecorator={<Upload size={18} />}
          disabled={isLoading}
          sx={{
            minWidth: '140px',
          }}
        >
          Upload Image
          <VisuallyHiddenInput
            type="file"
            onChange={handleFileUpload}
            accept="image/*"
          />
        </Button>

        {image && (
          <Button
            variant="solid"
            color="success"
            startDecorator={isLoading ? <CircularProgress size="sm" variant="solid" /> : <Microscope size={18} />}
            disabled={isLoading}
            onClick={analyseImage}
            sx={{
              minWidth: '140px',
            }}
          >
            {isLoading ? 'Analyzing...' : 'Analyze Leaf'}
          </Button>
        )}
      </Box>

      {result && isResultVisible && (
        <Card
          variant="soft"
          color="success"
          sx={{
            width: '100%',
            maxWidth: '400px',
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 1,
            }}
          >
            <AlertCircle size={20} />
            <Typography level="title-lg">Analysis Result</Typography>
          </Box>
          <Typography level="body-md">
            {result.prediction}
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default FileInput;