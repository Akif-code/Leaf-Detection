// import Header from "../component/Header";

// function AboutUs() {
//     return (
//       <div className="about-us">
//         <Header/>
//         <h1>About LifoCatch</h1>
//         <p>LifoCatch is an AI-powered tool to detect citrus leaf diseases.</p>
//       </div>
//     );
//   }
  
//   export default AboutUs;
  
import { Box, Card, Grid, Sheet, Typography, Avatar, Divider } from "@mui/joy";
import Header from "../component/Header";
import { Leaf, Code, Database, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: "Akifuddin",
    role: "Technology Lead",
    description: "Passionate about leveraging technology for sustainable agriculture.",
    icon: <Code size={24} />,
  },
  {
    name: "Nikhil",
    role: "Solution Architect",
    description: "Dedicated to building innovative solutions for farmers.",
    icon: <Lightbulb size={24} />,
  },
  {
    name: "Nupur",
    role: "Data Scientist",
    description: "Focused on data-driven insights to enhance crop yield.",
    icon: <Database size={24} />,
  },
  {
    name: "Khushi",
    role: "Agricultural Expert",
    description: "Committed to making farming smarter and more efficient.",
    icon: <Leaf size={24} />,
  },
];

function About() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.body' }}>
      <Header reset={() => {}} />
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          p: { xs: 2, md: 4 },
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: 'lg',
            p: { xs: 3, md: 5 },
            boxShadow: 'sm',
          }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              textAlign: 'center',
              mb: 6,
            }}
          >
            <Typography
              level="h1"
              sx={{
                background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                backgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              About Us
            </Typography>
            <Typography
              level="body-lg"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                color: 'text.secondary',
              }}
            >
              Welcome to our Citrus Leaf Disease Analysis System! Our team is dedicated to revolutionizing agriculture through advanced AI technology, helping farmers identify and treat plant diseases efficiently.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Mission Section */}
          <Card
            variant="soft"
            color="success"
            sx={{
              mb: 6,
              p: 4,
              textAlign: 'center',
            }}
          >
            <Typography level="h2" sx={{ mb: 2 }}>Our Mission</Typography>
            <Typography level="body-lg">
              To empower farmers with cutting-edge technology that makes crop disease detection accessible, accurate, and immediate, leading to better crop yields and sustainable farming practices.
            </Typography>
          </Card>

          {/* Team Section */}
          <Typography
            level="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
            }}
          >
            Meet Our Team
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{
              flexGrow: 1,
            }}
          >
            {teamMembers.map((member) => (
              <Grid xs={12} sm={6} key={member.name}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 'md',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      color="success"
                      variant="soft"
                      sx={{
                        '--Avatar-size': '48px',
                      }}
                    >
                      {member.icon}
                    </Avatar>
                    <Box>
                      <Typography level="title-lg">{member.name}</Typography>
                      <Typography level="body-sm" color="success">
                        {member.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    level="body-md"
                    sx={{
                      mt: 2,
                      color: 'text.secondary',
                    }}
                  >
                    {member.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Contact Section */}
          <Card
            variant="soft"
            sx={{
              mt: 6,
              p: 4,
              textAlign: 'center',
              bgcolor: 'background.level1',
            }}
          >
            <Typography level="h3" sx={{ mb: 2 }}>Get in Touch</Typography>
            <Typography level="body-md">
              Have questions about our leaf disease analysis system? We'd love to hear from you!
            </Typography>
            <Typography
              level="body-md"
              sx={{
                mt: 1,
                color: 'success.600',
                fontWeight: 'md',
              }}
            >
              Email: contact@leafanalyzer.com
            </Typography>
          </Card>
        </Sheet>
      </Box>
    </Box>
  );
}

export default About;