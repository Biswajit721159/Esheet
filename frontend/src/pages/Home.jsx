import React from "react";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-2xl rounded-2xl !bg-white">
        <CardContent className="p-8">
          <Typography
            variant="h4"
            className="font-extrabold text-center text-gray-800 mb-4"
          >
            Organization Management Dashboard
          </Typography>
          <Typography
            variant="body1"
            className="text-center text-gray-600 mb-8"
          >
            Welcome! Use this dashboard to create organizations, manage data,
            and view analytics.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card className="hover:shadow-xl transition-shadow rounded-xl">
                <CardContent className="text-center">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-700 mb-2"
                  >
                    Create Organization
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-500 mb-4"
                  >
                    Add a new organization with details like name, role, and
                    more.
                  </Typography>
                  <Button
                    component={Link}
                    to="/CreateOrganization"
                    variant="contained"
                    className="!bg-blue-600 hover:!bg-blue-700 !rounded-xl"
                  >
                    Create
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className="hover:shadow-xl transition-shadow rounded-xl">
                <CardContent className="text-center">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-700 mb-2"
                  >
                    View Data
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-500 mb-4"
                  >
                    View and manage all the existing organization data.
                  </Typography>
                  <Button
                    component={Link}
                    to="/data"
                    variant="contained"
                    className="!bg-green-600 hover:!bg-green-700 !rounded-xl"
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className="hover:shadow-xl transition-shadow rounded-xl">
                <CardContent className="text-center">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-700 mb-2"
                  >
                    Analytics
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-500 mb-4"
                  >
                    Track key metrics and insights about your organizations.
                  </Typography>
                  <Button
                    variant="contained"
                    className="!bg-purple-600 hover:!bg-purple-700 !rounded-xl"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
