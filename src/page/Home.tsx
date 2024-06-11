import { Box, Container, Grid, styled } from "@mui/material";
import NavBar from "../components/NavBar";
import CardItems from "../components/CardItems";
import { ItemStructure } from "../Interfaces/ItemStructure";
import UseApi from "./hook/UseApi";



export default function Home() {
 
  const{ data,loading} = UseApi();

  styled("div")({
    alignItems: "center",
  });

  return (
    <>
      <div>
        <NavBar />
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              marginTop: 5,
              gap: 2,
            }}
          >
            {loading ? <p>Loading...</p> :
              <Grid container spacing={2}>
              {data.map((item:ItemStructure) => (
                <CardItems item={item} />
              ))}
            </Grid>}
          </Box>
        </Container>
      </div>
    </>
  );
}
