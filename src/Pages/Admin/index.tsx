import { Box, Text } from '@mantine/core';
// import SimpleMap from '../../components/GoogleMap/GoogleMap';
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const Admin = () => {
  return (
    <Box>
      <Text color="teal" align="center">
        Welcome to Admin side
      </Text>
      {/* <SimpleMap location={location} zoomLevel={17} /> */}
    </Box>
  );
};

export default Admin;
