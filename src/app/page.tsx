'use client'

import styled from 'styled-components';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

import {useState} from 'react'
import {
  IconButton,
  Button as MuiButton,
  Container as MuiContainer,
} from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = styled.footer`
  background-color: #16a34a;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
`;

const Container = styled(MuiContainer)`
  background-color: #f0fdf4;
  color: #1f2937;
  padding: 0;
`;

const SlideOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const BookButton = styled(MuiButton)`
  background-color: #16a34a !important;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  &:hover {
    background-color: #15803d !important;
  }
`;

const pages = [
  {name:'About', link: '#about'},
  {name:'Services', link: '#services'},
  {name:'FAQ', link: '#'}
];


export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);


   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <Container maxWidth={false} disableGutters>

      <AppBar position="static" sx={{ backgroundColor: '#16a34a' }}>
        <Toolbar disableGutters>
     <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MakfaVentures
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} >
                  <Button href={page.link}>
    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </Button>
              
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MakfaVentures
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                href={page.link}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          </Toolbar>
      </AppBar>
      <Slider {...sliderSettings}>
        <Box sx={{ position: 'relative', height: 400 }}>
          <Image src="/images/cleaning1.jpg" alt="Clean Home" layout="fill" objectFit="cover" />
          <SlideOverlay>
            <Typography variant="h4" fontWeight="bold">Your Home, Our Priority</Typography>
          </SlideOverlay>
        </Box>
        <Box sx={{ position: 'relative', height: 400 }}>
          <Image src="/images/cleaning2.jpg" alt="Professional Team" layout="fill" objectFit="cover" />
          <SlideOverlay>
            <Typography variant="h4" fontWeight="bold">Trained & Trusted Professionals</Typography>
          </SlideOverlay>
        </Box>
        <Box sx={{ position: 'relative', height: 400 }}>
          <Image src="/images/cleaning3.jpg" alt="Easy Booking" layout="fill" objectFit="cover" />
          <SlideOverlay>
            <Typography variant="h4" fontWeight="bold">Book in Seconds, Relax for Hours</Typography>
          </SlideOverlay>
        </Box>
      </Slider>
      <Main>
        <Section style={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Reliable Cleaning & Service Solutions
          </Typography>
          <Typography variant="h6" paragraph>
            Professional, trustworthy, and always on time. Let Makfa take care of it.
          </Typography>
          <BookButton
            variant="contained"
            href="https://forms.gle/YDM9Po3zmvCCzPC7A"
            rel="noopener noreferrer"
          >
            Book Now
          </BookButton>
        </Section>
        <Section id="services">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>
          <Box display="grid" gap={3} gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }}>
            <Box bgcolor="white" p={3} borderRadius={2} boxShadow={1}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Home Cleaning</Typography>
              <Typography>One-time, weekly, or monthly professional home cleaning.</Typography>
            </Box>
            <Box bgcolor="white" p={3} borderRadius={2} boxShadow={1}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Office Cleaning</Typography>
              <Typography>Maintain a clean and productive workspace with our team.</Typography>
            </Box>
            <Box bgcolor="white" p={3} borderRadius={2} boxShadow={1}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Custom Services</Typography>
              <Typography>Need something unique? Contact us for custom solutions.</Typography>
            </Box>
          </Box>
        </Section>
        <Section id="about">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            About Makfa
          </Typography>
          <Typography>Makfa is a full-service company offering high-quality cleaning and support services. Our team is trained, trustworthy, and committed to customer satisfaction.</Typography>
        </Section>
      </Main>
      <Footer>
        <Typography><a href="mailto:admin@makfaservices.com" style={{ color: 'white', textDecoration: 'underline' }}>admin@makfaservices.com</a></Typography>
        <Typography><a href="tel:+231 77 036 8302" style={{ color: 'white', textDecoration: 'underline' }}>+231 77 036 8302</a></Typography>
        <Box mt={2}>
          <IconButton
            href="https://www.facebook.com/share/19RiGyPgEP/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
            </IconButton>
        </Box>
        <Box mt={2}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Makfa Services. All rights reserved.</Typography>
        </Box>
      </Footer>
    </Container>
  );
}
