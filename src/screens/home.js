// import { Link } from "react-router-dom";
import Header from "../component/Header";

// function Home() {
//   return (
//     <div className="home">
//       <Header/>
//       <div className="hero">
//         <h1>Detect Leaf Diseases with LifoCatch</h1>
//         <p>Protect your crops with accurate AI-powered detection.</p>
//         <Link to="/predict" className="get-started-btn">Get Started</Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import { Leaf, Microscope, Shield, Upload } from 'lucide-react';
import HeroImg from "../assets/hero.jpeg"
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate()

  return (
    <CssVarsProvider>
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.body',
        }}
      >
        <Header />
        {/* Hero Section */}
        <Sheet
          sx={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${HeroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            px: 4,
          }}
        >
          <Typography level="h1" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Citrus Disease Detection
          </Typography>
          <Typography level="h3" sx={{ mb: 4, maxWidth: '800px' }}>
            Advanced AI-powered analysis for early detection and treatment of citrus leaf diseases
          </Typography>
          <Button
            size="lg"
            variant="solid"
            color="success"
            startDecorator={<Upload />}
            sx={{ mt: 2 }}
            onClick={() => navigate("/predict")}
          >
            Analyze Your Leaves Now
          </Button>
        </Sheet>

        {/* Features Section */}
        <Box sx={{ py: 8, px: 4 }}>
          <Typography level="h2" sx={{ textAlign: 'center', mb: 6 }}>
            Why Choose Our Solution?
          </Typography>
          <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
            <Grid xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Microscope size={40} />
                </Box>
                <Typography level="h4" sx={{ mb: 2, textAlign: 'center' }}>
                  Accurate Detection
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  Our AI model provides 99% accurate disease detection for various citrus diseases
                </Typography>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Leaf size={40} />
                </Box>
                <Typography level="h4" sx={{ mb: 2, textAlign: 'center' }}>
                  Instant Analysis
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  Get results within seconds of uploading your citrus leaf images
                </Typography>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Shield size={40} />
                </Box>
                <Typography level="h4" sx={{ mb: 2, textAlign: 'center' }}>
                  Treatment Guidance
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  Receive detailed treatment recommendations and preventive measures
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* How It Works Section */}
        <Box sx={{ bgcolor: 'background.level1', py: 8, px: 4 }}>
          <Typography level="h2" sx={{ textAlign: 'center', mb: 6 }}>
            How It Works
          </Typography>
          <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
            {[
              {
                title: 'Upload Image',
                image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
                description: 'Take a clear photo of the affected citrus leaf and upload it to our platform'
              },
              {
                title: 'AI Analysis',
                image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
                description: 'Our advanced AI model analyzes the leaf image for disease patterns'
              },
              {
                title: 'Get Results',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
                description: 'Receive detailed analysis and treatment recommendations within seconds'
              }
            ].map((step, index) => (
              <Grid key={index} xs={12} md={4}>
                <Card variant="outlined">
                  <AspectRatio ratio="16/9">
                    <img
                      src={step.image}
                      alt={step.title}
                      style={{ objectFit: 'cover' }}
                    />
                  </AspectRatio>
                  <Typography level="h4" sx={{ mt: 2, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography>
                    {step.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            bgcolor: 'background.level2',
            py: 8,
            px: 4,
            textAlign: 'center',
          }}
        >
          <Typography level="h2" sx={{ mb: 2 }}>
            Ready to Protect Your Citrus Trees?
          </Typography>
          <Typography sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Start using our advanced disease detection system today and ensure the health of your citrus crops
          </Typography>
          <Button
            size="lg"
            variant="solid"
            color="success"
            sx={{ mt: 2 }}
            onClick={() => navigate("/predict")}
          >
            Get Started Now
          </Button>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

export default Home;